import express from 'express';
import { Planting } from '../models/PlantingModel.js';

const router = express.Router();

//Save new record
router.post('/', async(request, response) => {
    try {
        if (
            !request.body.date ||
            !request.body.fieldName||
            !request.body.cropType||
            !request.body.variety||
            !request.body.quantity||
            !request.body.unitCost||
            !request.body.remarks
        ) {
            return response.status(400).send ({
                message: 'Send all required fields',
            });
        }
        const newPlanting = {
            date: request.body.date,
            fieldName: request.body.fieldName,
            cropType: request.body.cropType,
            variety: request.body.variety,
            quantity: request.body.quantity,
            unitCost: request.body.unitCost,
            remarks: request.body.remarks
        };

        const planting = await Planting.create(newPlanting);

        return response.status(201).send(planting);
    } catch(error) {
        console.log(error.message);
        response.status(500).send({message:error.message});
    }
});

//Get all records
router.get('/', async(request, response) => {
    try {
        const result = await Planting.find({});

        return response.status(200).json({
            count: result.length,
            data:result
        })
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

//Get one record by id
router.get('/:id', async(request, response) => {
    try {
        const {id} = request.params;

        const result = await Planting.findById(id);

        return response.status(200).json(result);
    } catch(error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

//Update record
router.put('/:id', async(request, response) => {
    try {
        if (
            !request.body.date||
            !request.body.fieldName||
            !request.body.cropType||
            !request.body.variety||
            !request.body.quantity||
            !request.body.unitCost||
            !request.body.remarks
        ) {
            return response.status(400).send({
                mesage: 'Send all required fields'
            });
        }

        const {id} = request.params;

        const result = await Planting.findByIdAndUpdate(id, request.body);
        
        if (!result) {
            return response.status(404).json({message: 'Planting not found'});
        }

        return response.status(200).send({message: 'Planting updated successfully'});
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

//Route to delete a Record
router.delete('/:id', async(request, response) => {
    try {
        const {id} = request.params
        const result = await Planting.findByIdAndDelete(id);

        if (!result) {
            return response.status(404).json({ message: 'Planting not found'});
        }

        return response.status(200).send({message: 'Planting deleted successfully'});
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

export default router;