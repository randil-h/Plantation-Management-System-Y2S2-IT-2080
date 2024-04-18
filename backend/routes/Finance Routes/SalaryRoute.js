import {SalaryRecord} from "../../models/Finance Models/SalaryModel.js";
import express from "express";

const router = express.Router();

// create a new record
router.post('/', async (request, response) => {
    try {
        if (
            !request.body.date ||
            !request.body.type ||
            !request.body.subtype ||
            !request.body.amount ||
            !request.body.description ||
            !request.body.payer_payee ||
            !request.body.method
        ) {
            return response.status(400).send({
                message: 'Send all required fields: date, type, amount',
            });
        }

        const NewTransactionsRecord = {
            date: request.body.date,
            type: request.body.type,
            subtype: request.body.subtype,
            amount: request.body.amount,
            description: request.body.description,
            payer_payee: request.body.payer_payee,
            method: request.body.method,
        };

        const TransactionRecord = await SalaryRecord.create(NewTransactionsRecord);
        return response.status(201).send(TransactionRecord);

    }catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

// Route for Get All from database

router.get('/', async (request, response) => {
    try {
        const TransactionRecord = await TransactionsRecord.find({});

        return response.status(200).json({
            count: TransactionRecord.length,
            data: TransactionRecord,
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

        const TransactionRecord = await TransactionsRecord.findById(id);

        return response.status(200).json(TransactionRecord);
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
            !request.body.amount ||
            !request.body.description ||
            !request.body.payer_payee ||
            !request.body.method
        ) {
            return response.status(400).send({
                message: 'Send all required fields: title, author, publishYear',
            });
        }

        const { id } = request.params;

        const result = await TransactionsRecord.findByIdAndUpdate(id, request.body);

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

        const result = await TransactionsRecord.findByIdAndDelete(id);

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