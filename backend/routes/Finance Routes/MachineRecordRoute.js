import {MachinesRecord} from "../../models/Finance Models/MachineRecordModel.js";
import express from "express";

const router = express.Router();

// create a new record
router.post('/', async (request, response) => {
    try {
        if (
            !request.body.task_id ||
            !request.body.record_date ||
            !request.body.record_reading ||
            !request.body.record_pay
        ) {
            return response.status(400).send({
                message: 'Send all required fields',
            });
        }

        const NewMachinesRecord = {
            task_id: request.body.task_id,
            record_date: request.body.record_date,
            record_reading: request.body.record_reading,
            record_pay: request.body.record_pay,
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
            !request.body.task_id ||
            !request.body.record_date ||
            !request.body.record_reading ||
            !request.body.record_pay
        ) {
            return response.status(400).send({
                message: 'Send all required fields',
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