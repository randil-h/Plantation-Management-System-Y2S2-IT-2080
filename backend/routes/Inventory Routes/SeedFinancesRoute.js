import express from 'express';
import { SeedFinancesRecord } from "../../models/Inventory Models/SeedFinancesModel.js";
import mongoose from "mongoose";

const router = express.Router();

// Save a new seed record
router.post('/', async (request, response) => {
    try {
        const {
            fin_seed,
            finbill_no,
            fin_name,
            fin_purchase,
            fin_expire,
            fin_unit,
            fin_bulk,
            fin_tot
        } = request.body;

        // Check if all required fields are present
        if (!fin_seed || !finbill_no || !fin_name || !fin_purchase || !fin_expire || !fin_unit || !fin_bulk || !fin_tot) {
            return response.status(400).send({
                message: 'All required data must be provided',
            });
        }

        // Create a new seed record
        const newSeedFinancesRecord = await SeedFinancesRecord.create({
            fin_seed,
            finbill_no,
            fin_name,
            fin_purchase,
            fin_expire,
            fin_unit,
            fin_bulk,
            fin_tot
        });

        return response.status(201).send(newSeedFinancesRecord);

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Get all seed records
router.get('/', async (request, response) => {
    try {
        const seedFinancesRecords = await SeedFinancesRecord.find({});
        return response.status(200).json({
            count: seedFinancesRecords.length,
            data: seedFinancesRecords
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

        const seedFinancesRecord = await SeedFinancesRecord.findById(id);
        if (!seedFinancesRecord) {
            return response.status(404).json({ message: 'Seed Record not found' });
        }
        return response.status(200).json(seedFinancesRecord);
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
            fin_seed,
            finbill_no,
            fin_name,
            fin_purchase,
            fin_expire,
            fin_unit,
            fin_bulk,
            fin_tot
        } = request.body;

        // Check if all required fields are present
        if (!fin_seed || !finbill_no || !fin_name || !fin_purchase || !fin_expire || !fin_unit || !fin_bulk || !fin_tot) {
            return response.status(400).send({
                message: 'All required data must be provided',
            });
        }

        // Find and update the seed record
        const updatedRecord = await SeedFinancesRecord.findByIdAndUpdate(id, request.body, { new: true });

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
        const result = await SeedFinancesRecord.findByIdAndDelete(id);
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
