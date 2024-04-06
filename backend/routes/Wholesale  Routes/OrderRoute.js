import express, {request, response} from "express";
import {Orders} from '../../models/Wholesale Models/OrderModel.js'

const router = express.Router();

router.post('/', async(request, response) =>{
    try{
        if(
            !request.body.orderDate ||
            !request.body.orderQuantity ||
            !request.body.orderPrice
        ){
            return response.status(400).send ({
                message: 'Send all required fields',
        });
    }
        const newOrder = {
            orderDate: request.body.orderDate,
            orderQuantity: request.body.orderQuantity,
            orderPrice: request.body.orderPrice,
        };

        const order = await Orders.create(newOrder);

        return response.status(201).send(order);
    }catch (error){
        console.log(error.message);
        response.status(500).send({message:error.message});
    }
});

router.get('/', async (request,response) =>{
    try{
        const orderrecords = await Orders.find({});
        return response.status(200).json({
            count: orderrecords.length,
            data: orderrecords
        });
    }catch(error){
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

export default router;