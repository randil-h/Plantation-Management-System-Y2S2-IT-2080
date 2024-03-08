import express from 'express';
import { InventoryRecord } from "../../models/Inventory Models/EqMaintainModel.js";
import mongoose from "mongoose";

const router = express.Router();

// Save a new inventory record
router.post('/', async (request, response) => {
    try {
        const {
            Eq_machine_main,
            Eq_id_main,
            date_referred,
            date_received,
            ref_loc,
            comment
        } = request.body;

        // Check if all required fields are present
        if (!Eq_machine_main || !Eq_id_main || !date_referred || !date_received || !ref_loc || !comment) {
            return response.status(400).send({
                message: 'All required data must be provided',
            });
        }

        // Create a new inventory record
        const newInventoryRecord = await InventoryRecord.create({
            Eq_machine_main,
            Eq_id_main,
            date_referred,
            date_received,
            ref_loc,
            comment
        });

        return response.status(201).send(newInventoryRecord);

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Get all inventory records
router.get('/', async (request, response) => {
    try {
        const inventoryrecords = await InventoryRecord.find({});
        return response.status(200).json({
            count: inventoryrecords.length,
            data: inventoryrecords
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Get inventory record by ID
router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        // Ensure id is not undefined
        if (!id) {
            return response.status(400).json({ message: 'ID parameter is required' });
        }

        const inventoryrecord = await InventoryRecord.findById(id);
        if (!inventoryrecord) {
            return response.status(404).json({ message: 'Inventory Record not found' });
        }
        return response.status(200).json(inventoryrecord);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Update inventory record
router.put('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const {
            Eq_machine_main,
            Eq_id_main,
            date_referred,
            date_received,
            ref_loc,
            comment
        } = request.body;

        // Check if all required fields are present
        if (!Eq_machine_main || !Eq_id_main || !date_referred || !date_received || !ref_loc || !comment) {
            return response.status(400).send({
                message: 'All required data must be provided',
            });
        }

        // Find and update the inventory record
        const updatedRecord = await InventoryRecord.findByIdAndUpdate(id, request.body, { new: true });

        if (!updatedRecord) {
            return response.status(404).json({ message: 'Inventory record not found' });
        }

        return response.status(200).send(updatedRecord);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Delete inventory record
router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        // Find and delete the inventory record
        const result = await InventoryRecord.findByIdAndDelete(id);
        if (!result) {
            return response.status(404).json({ message: 'Inventory record not found' });
        }
        return response.status(200).send({ message: 'Inventory record deleted successfully' });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

export default router;
