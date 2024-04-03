import {MachinesRecord} from "../../models/Finance Models/MachineModel.js";
import express from "express";

const router = express.Router();

// create a new record
router.post('/', async (request, response) => {
    try {
        if (
            !request.body.date ||
            !request.body.type ||
            !request.body.hours_nos ||
            !request.body.rate ||
            !request.body.description ||
            !request.body.payer_payee ||
            !request.body.paid
        ) {
            return response.status(400).send({
                message: 'Send all required fields: date, type, amount',
            });
        }

        const NewMachinesRecord = {
            date: request.body.date,
            type: request.body.type,
            hours_nos: request.body.hours_nos,
            rate: request.body.rate,
            description: request.body.description,
            payer_payee: request.body.payer_payee,
            paid: request.body.paid,
        };

        const MachineRecord = await MachinesRecord.create(NewMachinesRecord);
        return response.status(201).send(MachineRecord);

    }catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

// Route for Get All from database

router.get('/', async (request, response) => {
    try {
        const MachineRecord = await MachinesRecord.find({});

        return response.status(200).json({
            count: MachineRecord.length,
            data: MachineRecord,
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

        const MachineRecord = await MachinesRecord.findById(id);

        return response.status(200).json(MachineRecord);
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
            !request.body.hours_nos ||
            !request.body.rate ||
            !request.body.description ||
            !request.body.payer_payee ||
            !request.body.paid
        ) {
            return response.status(400).send({
                message: 'Send all required fields: title, author, publishYear',
            });
        }

        const { id } = request.params;

        const result = await MachinesRecord.findByIdAndUpdate(id, request.body);

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

        const result = await MachinesRecord.findByIdAndDelete(id);

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