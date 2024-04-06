import express, {request, response} from "express";
import {Orders} from '../../models/Wholesale Models/OrderModel.js'

const router = express.Router();

router.post('/', async(request, response) =>{
    try{
        if(
            !request.body.orderId ||
            !request.body.orderProductName ||
            !request.body.orderDate ||
            !request.body.orderQuantity ||
            !request.body.orderPrice
        ){
            return response.status(400).send ({
                message: 'Send all required fields',
        });
    }
        const newOrder = {
            orderId: request.body.orderId,
            orderProductName: request.body.orderProductName,
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

router.put('/:id', async (request, response) =>{
    try{
        if(
            !request.body.orderQuantity
        ){
            return response.status(400).send({
                message: 'Send all required fields'
            });
        }

        const {id} = request.params;

        const result = await Orders.findByIdAndUpdate(id, request.body);

        if(!result){
            return response.status(404).json({message: 'Order Records not Founded'});
        }

        return response.status(200).send({ message: 'Order record updated successfully' });
    }catch(error){
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

router.get('/:id', async (request, response) =>{
    try{
        const {id} =request.params;

        const orderRecords = await Orders.findById(id);

        return response.status(200).json(orderRecords);
    }catch(error){
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

router.delete('/:id', async(request, response) =>{
    try{
        const {id} = request.params;

        const result = await Orders.findByIdAndDelete(id);

        if(!result){
            return response.status(404).json({message: 'Order Record not found'});
        }

        return response.status(200).send({message: 'Order Record delete Successfully'});
    }catch(error){
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

export default router;