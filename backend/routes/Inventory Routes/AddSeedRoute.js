import express from 'express';
import { AddSeedRecord } from "../../models/Inventory Models/AddSeedModel.js";
import mongoose from "mongoose";

const router = express.Router();

// Save a new seed record
router.post('/', async (request, response) => {
    try {
        const {
            add_seed,
            seedadd_no,
            seed_store,
            seed_stock,
            seed_expire
        } = request.body;

        // Check if all required fields are present
        if (!add_seed || !seedadd_no || !seed_store || !seed_stock || !seed_expire) {
            return response.status(400).send({
                message: 'All required data must be provided',
            });
        }

        // Create a new seed record
        const newSeedRecord = await AddSeedRecord.create({
            add_seed,
            seedadd_no,
            seed_store,
            seed_stock,
            seed_expire
        });

        return response.status(201).send(newSeedRecord);

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Get all seed records
router.get('/', async (request, response) => {
    try {
        const seedRecords = await AddSeedRecord.find({});
        return response.status(200).json({
            count: seedRecords.length,
            data: seedRecords
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

        const seedRecord = await AddSeedRecord.findById(id);
        if (!seedRecord) {
            return response.status(404).json({ message: 'Seed Record not found' });
        }
        return response.status(200).json(seedRecord);
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
            add_seed,
            seedadd_no,
            seed_store,
            seed_stock,
            seed_expire
        } = request.body;

        // Check if all required fields are present
        if (!add_seed || !seedadd_no || !seed_store || !seed_stock || !seed_expire) {
            return response.status(400).send({
                message: 'All required data must be provided',
            });
        }

        // Find and update the seed record
        const updatedRecord = await AddSeedRecord.findByIdAndUpdate(id, request.body, { new: true });

        if (!updatedRecord) {
            return response.status(404).json({ message: 'Seed record not found' });
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
        const result = await AddSeedRecord.findByIdAndDelete(id);
        if (!result) {
            return response.status(404).json({ message: 'Seed record not found' });
        }
        return response.status(200).send({ message: 'Seed record deleted successfully' });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

export default router;
