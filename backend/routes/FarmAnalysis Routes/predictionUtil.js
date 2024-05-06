import * as tf from '@tensorflow/tfjs';

export async function predictFuturePricesTF1(dates, minPrices, maxPrices) {
    try {
        const normalizeData = (data) => {
            const min = tf.min(data);
            const max = tf.max(data);
            return {
                data: data.sub(min).div(max.sub(min)),
                min: min,
                max: max
            };
        };

        const normalizeDates = normalizeData(tf.tensor1d(dates.map(date => date.getTime())));
        const normalizeMinPrices = normalizeData(tf.tensor1d(minPrices));
        const normalizeMaxPrices = normalizeData(tf.tensor1d(maxPrices));

        const model = tf.sequential();
        model.add(tf.layers.dense({ units: 32, activation: 'relu', inputShape: [1] }));
        model.add(tf.layers.dense({ units: 32, activation: 'relu' }));
        model.add(tf.layers.dense({ units: 2 }));
        model.compile({ optimizer: 'adam', loss: 'meanSquaredError' });

        const xs = normalizeDates.data.reshape([-1, 1]);
        const ys = tf.concat([normalizeMinPrices.data.reshape([-1, 1]), normalizeMaxPrices.data.reshape([-1, 1])], 1);
        await model.fit(xs, ys, { epochs: 500 });

        const startDate = new Date(dates[dates.length - 1].getTime() + 24 * 60 * 60 * 1000);
        const numDays = 365;
        const futureDates = Array.from({ length: numDays }, (_, i) => new Date(startDate.getTime() + i * 24 * 60 * 60 * 1000));
        const normalizedFutureDates = normalizeData(tf.tensor1d(futureDates.map(date => date.getTime())));
        const futurePredictions = model.predict(normalizedFutureDates.data.reshape([-1, 1]));

        const minPricePredictions = futurePredictions.slice([0, 0], [numDays, 1]).mul(normalizeMinPrices.max.sub(normalizeMinPrices.min)).add(normalizeMinPrices.min).arraySync();
        const maxPricePredictions = futurePredictions.slice([0, 1], [numDays, 1]).mul(normalizeMaxPrices.max.sub(normalizeMaxPrices.min)).add(normalizeMaxPrices.min).arraySync();

        const futurePricePredictions = futureDates.map((date, i) => ({
            date: formatDate(date),
            minPrice: parseFloat(minPricePredictions[i][0].toFixed(4)),
            maxPrice: parseFloat(maxPricePredictions[i][0].toFixed(4))
        }));

        console.log('TensorFlow model predictions:', futurePricePredictions);

        return futurePricePredictions;
    } catch (error) {
        console.error('Error predicting future prices using TensorFlow:', error);
        return [];
    }
}

function formatDate(date) {
    return date.toISOString().split('T')[0];
}