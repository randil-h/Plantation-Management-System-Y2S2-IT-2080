import express from 'express';
import { Rotation } from '../../models/Crop Models/RotationModel.js';

const router = express.Router();

//Save new record
router.post('/', async(request, response) => {
    try {
        if (
            !request.body.season||
            !request.body.fieldName||
            !request.body.cropType||
            !request.body.variety||
            !request.body.quantity||
            !request.body.yield||
            !request.body.remarks
        ) {
            return response.status(400).send ({
                message: 'Send all required fields',
            });
        }
        const newRecord = {
            season: request.body.season,
            fieldName: request.body.fieldName,
            cropType: request.body.cropType,
            variety: request.body.variety,
            quantity: request.body.quantity,
            yield: request.body.yield,
            remarks: request.body.remarks
        };

        const result = await Rotation.create(newRecord);

        return response.status(201).send(result);
    } catch(error) {
        console.log(error.message);
        response.status(500).send({message:error.message});
    }
});

//Get all records
router.get('/', async(request, response) => {
    try {
        const result = await Rotation.find({});

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

        const result = await Rotation.findById(id);

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
            !request.body.season||
            !request.body.fieldName||
            !request.body.cropType||
            !request.body.variety||
            !request.body.quantity||
            !request.body.yield||
            !request.body.remarks 
        ) {
            return response.status(400).send({
                mesage: 'Send all required fields'
            });
        }

        const {id} = request.params;

        const result = await Rotation.findByIdAndUpdate(id, request.body);
        
        if (!result) {
            return response.status(404).json({message: 'Record not found'});
        }

        return response.status(200).send({message: 'Record updated successfully'});
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

//Route to delete a Record
router.delete('/:id', async(request, response) => {
    try {
        const {id} = request.params
        const result = await Rotation.findByIdAndDelete(id);

        if (!result) {
            return response.status(404).json({ message: 'Record not found'});
        }

        return response.status(200).send({message: 'Record deleted successfully'});
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

export default router;