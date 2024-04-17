import express from "express";
import {MarketPriceRecord} from "../../models/FarmAnalysis Models/MarketPriceModel.js";

const router = express.Router();

router.post('/', async (request, response) => {
    try{
        console.log('Request Body:', request.body);

        const existingRecord = await MarketPriceRecord.findOne({date: request.body.date});
        if(existingRecord) {
            return response.status(400).send({
                message: 'A Record already exists for this Given Date!',
            });
        }
        if (
            !request.body.name ||
            !request.body.type ||
            !request.body.date ||
            !request.body.min_price||
            !request.body.max_price
        ) {
            return response.status(400).send({
                message: 'Send all required fields',
            });
        }
        /*if(request.body.min_price > request.body.max_price)
        {
            return response.status(400).send({
                message: 'Minimum Price cannot be greater than the Maximum Price'
            });
        }*/
        const newMarketPriceRecord = {
            name: request.body.name,
            type: request.body.type,
            date: request.body.date,
            min_price: request.body.min_price,
            max_price: request.body.max_price,

        };

        const marketPrice = await MarketPriceRecord.create(newMarketPriceRecord);

        return response.status(201).send(marketPrice);
    }catch(error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
} );

router.get('/', async (request, response) => {
    try{
        const marketPrice = await MarketPriceRecord.find({});

        return response.status(200).json({
            count : marketPrice.length,
            data : marketPrice
        });
    }catch (error){
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

router.put('/:id', async (request, response) => {
    try{
        if (
            !request.body.name ||
            !request.body.type ||
            !request.body.date ||
            !request.body.min_price||
            !request.body.max_price
        ) {
            return response.status(400).send({
                message : 'Send all required fields'
            });
        }

        const {id} = request.params;

        const result = await MarketPriceRecord.findByIdAndUpdate(id, request.body);

        if(!result){
            return response.status(404).json({message : 'Market Price record not found'});
        }

        return response.status(200).send({message : 'Market Price record updated successfully'});
    }catch(error){
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

router.delete('/:id', async (request, response) => {
    try{
        const {id} = request.params;

        const result = await MarketPriceRecord.findByIdAndDelete(id);

        if(!result){
            return response.status(404).json({message: 'Market Price record not found' });
        }

        return response.status(200).send({message : 'Market Price record deleted successfully'});

    }catch(error){
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

export default router;