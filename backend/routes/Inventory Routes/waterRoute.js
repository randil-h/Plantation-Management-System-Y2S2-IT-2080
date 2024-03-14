import express from 'express';
import { WaterRecord } from "../../models/Inventory Models/waterModel.js";
import mongoose from "mongoose";

const router = express.Router();

// Save a new seed record
router.post('/', async (request, response) => {
    try {
        const {
            water_level1,
            water_level2,
            water_date,
            water_des
        } = request.body;

        // Check if all required fields are present
        if (!water_level1 || !water_level2 || !water_date || !water_des) {
            return response.status(400).send({
                message: 'All required data must be provided',
            });
        }

        // Create a new seed record
        const newWaterRecord = await WaterRecord.create({
            water_level1,
            water_level2,
            water_date,
            water_des
        });

        return response.status(201).send(newWaterRecord);

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Get all seed records
router.get('/', async (request, response) => {
    try {
        const waterRecords = await WaterRecord.find({});
        return response.status(200).json({
            count: waterRecords.length,
            data: waterRecords
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Get seed record by ID
router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        // Ensure id is not undefined
        if (!id) {
            return response.status(400).json({ message: 'ID parameter is required' });
        }

        const waterRecord = await WaterRecord.findById(id);
        if (!waterRecord) {
            return response.status(404).json({ message: 'water Record not found' });
        }
        return response.status(200).json(waterRecord);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Update seed record
router.put('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const {
            water_level1,
            water_level2,
            water_date,
            water_des
        } = request.body;

        // Check if all required fields are present
        if (!water_level1 || !water_level2 || !water_date || !water_des) {
            return response.status(400).send({
                message: 'All required data must be provided',
            });
        }

        // Find and update the seed record
        const updatedRecord = await WaterRecord.findByIdAndUpdate(id, request.body, { new: true });

        if (!updatedRecord) {
            return response.status(404).json({ message: 'water record not found' });
        }

        return response.status(200).send(updatedRecord);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Delete seed record
router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        // Find and delete the seed record
        const result = await WaterRecord.findByIdAndDelete(id);
        if (!result) {
            return response.status(404).json({ message: 'Water record not found' });
        }
        return response.status(200).send({ message: 'Water record deleted successfully' });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

export default router;
