import express, {request} from "express";
import {MarketPriceRecord} from "../../models/FarmAnalysis Models/MarketPriceModel.js";
import {linearRegression, linearRegressionLine, } from "simple-statistics";
import regression from "regression";
import * as tf from '@tensorflow/tfjs';

const router = express.Router();

router.get('/', async (req, res) => {
    try {

        const {name} = req.query;

        if(!name) {
            return res.status(400).json({ message : 'Fruit type is required'});
        }

        const historicalData = await MarketPriceRecord.find({name : name}).sort({date: 1});

        if (historicalData.length === 0) {
            return res.status(404).json({ message: 'No historical data found for the specified fruit' });
        }

        const dates = historicalData.map(record => new Date(record.date));
        const maxPrices = historicalData.map(record => record.max_price);
        const minPrices = historicalData.map(record => record.min_price);

        const futureMaxPrices = predictFuturePrices(dates, maxPrices);
        const futureMinPrices = predictFuturePrices(dates, minPrices);

        const futureTensorFlowModel = await predictFuturePricesTF(dates, minPrices, maxPrices);


       /* const degree = 2;
        const futureMaxPricesP = predictFuturePricesP(dates, maxPrices, degree);
        const futureMinPricesP = predictFuturePricesP(dates, minPrices, degree);

        console.log("Future Max Prices : ", futureMaxPricesP);
        console.log("Future Min Prices : ", futureMinPricesP);*/

        res.json({futureMaxPrices, futureMinPrices, futureTensorFlowModel});
    }catch(error) {
        console.error('Error generating future market prices : ', error);
        res.status(500).json({message: 'Error generating future market prices'});
    }
});

function formatDate(date) {
    return date.toISOString().split('T')[0];
}

//Linear Regression method
function predictFuturePrices(dates, prices) {
    try {

        const timestamps = dates.map(date => date.getTime());

        const {m, b} = linearRegression(timestamps.map((t, i) => [t, prices[i]]));

        const futurePrices = [];
        const lastDate = dates[dates.length - 1];

        for (let i = 1; i <= 365; i++) {
            const futureDate = new Date(lastDate);
            futureDate.setDate(futureDate.getDate() + i);

            const futureTimestamp = futureDate.getTime();
            const predictedPrice = m * futureTimestamp + b;
            const roundedPredictedPrice = parseFloat(predictedPrice.toFixed(4));
            futurePrices.push({date: formatDate(futureDate), price: roundedPredictedPrice});

            console.log(`Predicted price for ${formatDate(futureDate)} : ${roundedPredictedPrice}`);
        }
        return futurePrices;
    } catch (error) {
        console.error('Error calculating regression line : ', error);
        return [];
    }
}

//more dynamic method
async function predictFuturePricesTF(dates, minPrices, maxPrices) {
    try {
        const normalize = (data) => {
            const min = tf.min(data);
            const max = tf.max(data);
            return {
                data: data.sub(min).div(max.sub(min)),
                min: min,
                max: max
            };
        };

        const normalizeDates = normalize(tf.tensor1d(dates.map(date => date.getTime())));
        const normalizeMinPrices = normalize(tf.tensor1d(minPrices));
        const normalizeMaxPrices = normalize(tf.tensor1d(maxPrices));

        const model = tf.sequential();
        model.add(tf.layers.dense({ units: 32, activation: 'relu', inputShape: [1] }));
        model.add(tf.layers.dense({ units: 32, activation: 'relu' }));
        model.add(tf.layers.dense({ units: 2 }));
        model.compile({ optimizer: 'adam', loss: 'meanSquaredError' });

        const xs = normalizeDates.data.reshape([-1, 1]);
        const ys = tf.concat([normalizeMinPrices.data.reshape([-1, 1]), normalizeMaxPrices.data.reshape([-1, 1])], 1);
        await model.fit(xs, ys, { epochs: 100 });

        const startDate = new Date(dates[dates.length - 1].getTime() + 24 * 60 * 60 * 1000); // Start from the day after the last historical date
        const numDays = 365;
        const futureDates = Array.from({ length: numDays }, (_, i) => new Date(startDate.getTime() + i * 24 * 60 * 60 * 1000));
        const normalizedFutureDates = normalize(tf.tensor1d(futureDates.map(date => date.getTime())));
        const futurePredictions = model.predict(normalizedFutureDates.data.reshape([-1, 1]));

        const minPricePredictions = futurePredictions.slice([0, 0], [numDays, 1]).mul(normalizeMinPrices.max.sub(normalizeMinPrices.min)).add(normalizeMinPrices.min).arraySync();
        const maxPricePredictions = futurePredictions.slice([0, 1], [numDays, 1]).mul(normalizeMaxPrices.max.sub(normalizeMaxPrices.min)).add(normalizeMaxPrices.min).arraySync();

        const futurePricePredictions = futureDates.map((date, i) => ({
            date: formatDate(date),
            minPrice: parseFloat(minPricePredictions[i][0].toFixed(4)), // Limiting to 4 decimal points
            maxPrice: parseFloat(maxPricePredictions[i][0].toFixed(4))
        }));

        console.log('TensorFlow model predictions:', futurePricePredictions);

        return futurePricePredictions;
    } catch (error) {
        console.error('Error predicting future prices using TensorFlow:', error);
        return [];
    }
}

export default router;