import express from 'express';
import { EqFinancesRecord } from "../../models/Inventory Models/EqFinancesModel.js";
import mongoose from "mongoose";

const router = express.Router();

// Save a new seed record
router.post('/', async (request, response) => {
    try {
        const {
            eq_n,
            eqbill_no,
            eq_name,
            eq_purchase,
            eq_unit,
            eq_bulk,
            eq_tot
        } = request.body;

        // Check if all required fields are present
        if (!eq_n || !eqbill_no || !eq_name || !eq_purchase || !eq_unit || !eq_bulk || !eq_tot) {
            return response.status(400).send({
                message: 'All required data must be provided',
            });
        }

        // Create a new seed record
        const newEqFinancesRecord = await EqFinancesRecord.create({
            eq_n,
            eqbill_no,
            eq_name,
            eq_purchase,
            eq_unit,
            eq_bulk,
            eq_tot
        });

        return response.status(201).send(newEqFinancesRecord);

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Get all seed records
router.get('/', async (request, response) => {
    try {
        const eqFinancesRecords = await EqFinancesRecord.find({});
        return response.status(200).json({
            count: eqFinancesRecords.length,
            data: eqFinancesRecords
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

        const eqFinancesRecord = await EqFinancesRecord.findById(id);
        if (!eqFinancesRecord) {
            return response.status(404).json({ message: 'equipment Record not found' });
        }
        return response.status(200).json(eqFinancesRecord);
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
            eq_n,
            eqbill_no,
            eq_name,
            eq_purchase,
            eq_unit,
            eq_bulk,
            eq_tot
        } = request.body;

        // Check if all required fields are present
        if (!eq_n || !eqbill_no || !eq_name || !eq_purchase || !eq_unit || !eq_bulk || !eq_tot) {
            return response.status(400).send({
                message: 'All required data must be provided',
            });
        }

        // Find and update the seed record
        const updatedRecord = await EqFinancesRecord.findByIdAndUpdate(id, request.body, { new: true });

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
        const result = await EqFinancesRecord.findByIdAndDelete(id);
        if (!result) {
            return response.status(404).json({ message: 'Equipment record not found' });
        }
        return response.status(200).send({ message: 'Equipment record deleted successfully' });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

export default router;
