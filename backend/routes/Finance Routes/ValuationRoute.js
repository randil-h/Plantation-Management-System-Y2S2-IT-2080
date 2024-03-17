import {ValuationsRecord} from "../../models/Finance Models/ValuationModel.js";
import express from "express";

const router = express.Router();

// create a new record
router.post('/', async (request, response) => {
    try {
        if (
            !request.body.date ||
            !request.body.type ||
            !request.body.subtype ||
            !request.body.quantity ||
            !request.body.price ||
            !request.body.description ||
            !request.body.payer_payee ||
            !request.body.appreciationOrDepreciation
        ) {
            return response.status(400).send({
                message: 'Send all required fields: date, type, amount',
            });
        }

        const NewValuationsRecord = {
            date: request.body.date,
            type: request.body.type,
            subtype: request.body.subtype,
            quantity: request.body.quantity,
            price: request.body.price,
            description: request.body.description,
            payer_payee: request.body.payer_payee,
            appreciationOrDepreciation: request.body.appreciationOrDepreciation,
        };

        const ValuationRecord = await ValuationsRecord.create(NewValuationsRecord);
        return response.status(201).send(ValuationRecord);

    }catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

// Route for Get All from database

router.get('/', async (request, response) => {
    try {
        const ValuationRecord = await ValuationsRecord.find({});

        return response.status(200).json({
            count: ValuationRecord.length,
            data: ValuationRecord,
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route for Get One transaction from database by id
router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const ValuationRecord = await ValuationsRecord.findById(id);

        return response.status(200).json(ValuationRecord);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route for Update a transaction
router.put('/:id', async (request, response) => {
    try {
        if (
            !request.body.date ||
            !request.body.type ||
            !request.body.subtype ||
            !request.body.quantity ||
            !request.body.price ||
            !request.body.description ||
            !request.body.payer_payee ||
            !request.body.appreciationOrDepreciation
        ) {
            return response.status(400).send({
                message: 'Send all required fields',
            });
        }

        const { id } = request.params;

        const result = await ValuationsRecord.findByIdAndUpdate(id, request.body);

        if (!result) {
            return response.status(404).json({ message: 'Transaction record not found' });
        }

        return response.status(200).send({ message: 'Transaction record updated successfully' });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route for Delete a book
router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const result = await ValuationsRecord.findByIdAndDelete(id);

        if (!result) {
            return response.status(404).json({ message: 'Transaction record not found' });
        }

        return response.status(200).send({ message: 'Transaction record deleted successfully' });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

export default router;