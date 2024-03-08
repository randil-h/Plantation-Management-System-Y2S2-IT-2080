import express from 'express';
import { ChemicalFinancesRecord } from "../../models/Inventory Models/ChemicalFinancesModel.js";
import mongoose from "mongoose";

const router = express.Router();

// Save a new seed record
router.post('/', async (request, response) => {
    try {
        const {
            chem_n,
            chembill_no,
            chem_name,
            chem_purchase,
            chem_expire,
            chem_unit,
            chem_bulk,
            chem_tot
        } = request.body;

        // Check if all required fields are present
        if (!chem_n || !chembill_no || !chem_name || !chem_purchase || !chem_expire || !chem_unit || !chem_bulk || !chem_tot) {
            return response.status(400).send({
                message: 'All required data must be provided',
            });
        }

        // Create a new seed record
        const newChemicalFinancesRecord = await ChemicalFinancesRecord.create({
            chem_n,
            chembill_no,
            chem_name,
            chem_purchase,
            chem_expire,
            chem_unit,
            chem_bulk,
            chem_tot
        });

        return response.status(201).send(newChemicalFinancesRecord);

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Get all seed records
router.get('/', async (request, response) => {
    try {
        const chemicalFinancesRecords = await ChemicalFinancesRecord.find({});
        return response.status(200).json({
            count: chemicalFinancesRecords.length,
            data: chemicalFinancesRecords
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

        const chemicalFinancesRecord = await ChemicalFinancesRecord.findById(id);
        if (!chemicalFinancesRecord) {
            return response.status(404).json({ message: 'Chemical Record not found' });
        }
        return response.status(200).json(chemicalFinancesRecord);
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
            chem_n,
            chembill_no,
            chem_name,
            chem_purchase,
            chem_expire,
            chem_unit,
            chem_bulk,
            chem_tot
        } = request.body;

        // Check if all required fields are present
        if (!chem_n || !chembill_no || !chem_name || !chem_purchase || !chem_expire || !chem_unit || !chem_bulk || !chem_tot) {
            return response.status(400).send({
                message: 'All required data must be provided',
            });
        }

        // Find and update the seed record
        const updatedRecord = await ChemicalFinancesRecord.findByIdAndUpdate(id, request.body, { new: true });

        if (!updatedRecord) {
            return response.status(404).json({ message: 'Chemical record not found' });
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
        const result = await ChemicalFinancesRecord.findByIdAndDelete(id);
        if (!result) {
            return response.status(404).json({ message: 'Chemical record not found' });
        }
        return response.status(200).send({ message: 'Chemical record deleted successfully' });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

export default router;
