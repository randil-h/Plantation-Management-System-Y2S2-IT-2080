import express from 'express';
import { Chemicals } from '../models/ChemicalModel.js';

const router = express.Router();

//Save new record
router.post('/', async(request, response) => {
    try {
        if (
            !request.body.date ||
            !request.body.fieldName||
            !request.body.chemicalType||
            !request.body.quantity||
            !request.body.unitCost||
            !request.body.remarks
        ) {
            return response.status(400).send ({
                message: 'Send all required fields',
            });
        }
        const newChemical = {
            date: request.body.date,
            fieldName: request.body.fieldName,
            chemicalType: request.body.chemicalType,
            quantity: request.body.quantity,
            unitCost: request.body.unitCost,
            remarks: request.body.remarks
        };

        const chemical = await Chemicals.create(newChemical);

        return response.status(201).send(chemical);
    } catch(error) {
        console.log(error.message);
        response.status(500).send({message:error.message});
    }
});

//Get all records
router.get('/', async(request, response) => {
    try {
        const chemical = await Chemicals.find({});

        return response.status(200).json({
            count: chemical.length,
            data:chemical
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

        const chemical = await Chemicals.findById(id);

        return response.status(200).json(chemical);
    } catch(error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

//Update record
router.put('/:id', async(request, response) => {
    try {
        if (
            !request.body.date ||
            !request.body.fieldName||
            !request.body.chemicalType||
            !request.body.quantity||
            !request.body.unitCost||
            !request.body.remarks
        ) {
            return response.status(400).send({
                message: 'Send all required fields'
            });
        }

        const {id} = request.params;

        const chemical = await Chemicals.findByIdAndUpdate(id, request.body);
        
        if (!chemical) {
            return response.status(404).json({message: 'Chemical not found'});
        }

        return response.status(200).send({message: 'Chemicals updated successfully'});
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

//Route to delete a Record
router.delete('/:id', async(request, response) => {
    try {
        const {id} = request.params
        const chemical = await Chemicals.findByIdAndDelete(id);

        if (!chemical) {
            return response.status(404).json({ message: 'Chemical not found'});
        }

        return response.status(200).send({message: 'Chemical deleted successfully'});
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

export default router;