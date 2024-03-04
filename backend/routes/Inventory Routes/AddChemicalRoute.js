import express from 'express';
import { AddChemicalRecord } from "../../models/Inventory Models/AddChemicalModel.js";
import mongoose from "mongoose";

const router = express.Router();

// Save a new seed record
router.post('/', async (request, response) => {
    try {
        const {
            add_chemical,
            chemicaladd_no,
            chemical_store,
            chemical_stock,
            chemical_expire
        } = request.body;

        // Check if all required fields are present
        if (!add_chemical || !chemicaladd_no || !chemical_store || !chemical_stock || !chemical_expire) {
            return response.status(400).send({
                message: 'All required data must be provided',
            });
        }

        // Create a new seed record
        const newChemicalRecord = await AddChemicalRecord.create({
            add_chemical,
            chemicaladd_no,
            chemical_store,
            chemical_stock,
            chemical_expire
        });

        return response.status(201).send(newChemicalRecord);

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Get all seed records
router.get('/', async (request, response) => {
    try {
        const chemicalRecords = await AddChemicalRecord.find({});
        return response.status(200).json({
            count: chemicalRecords.length,
            data: chemicalRecords
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

        const chemicalRecord = await AddChemicalRecord.findById(id);
        if (!chemicalRecord) {
            return response.status(404).json({ message: 'Seed Record not found' });
        }
        return response.status(200).json(chemicalRecord);
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
            add_chemical,
            chemicaladd_no,
            chemical_store,
            chemical_stock,
            chemical_expire
        } = request.body;

        // Check if all required fields are present
        if (!add_chemical || !chemicaladd_no || !chemical_store || !chemical_stock || !chemical_expire) {
            return response.status(400).send({
                message: 'All required data must be provided',
            });
        }

        // Find and update the seed record
        const updatedRecord = await AddChemicalRecord.findByIdAndUpdate(id, request.body, { new: true });

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
        const result = await AddChemicalRecord.findByIdAndDelete(id);
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
