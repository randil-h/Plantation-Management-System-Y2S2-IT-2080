import express from 'express';
import { CropInputs } from '../../models/Crop Models/CropInputModel.js';

const router = express.Router();

router.post('/', async (request, response) => {
    try {
        const {
            date,
            type,
            field,
            cropType,
            variety,
            quantity,
            remarks,
            chemicalName,
            unitCost
        } = request.body;

        // Validate type
        if (!type || (type !== 'Agrochemical' && type !== 'Planting')) {
            return response.status(400).send({
                message: 'Invalid type provided',
            });
        }

        let requiredFields = ['date', 'type', 'field', 'quantity', 'remarks', 'unitCost']; // Add unitCost to requiredFields
        if (type === 'Planting') {
            requiredFields = [...requiredFields, 'cropType', 'variety'];
        } else if (type === 'Agrochemical') {
            requiredFields = [...requiredFields, 'chemicalName'];
        }
        const missingFields = requiredFields.filter(field => !(field in request.body));

        if (missingFields.length > 0) {
            return response.status(400).send({
                message: `Missing required fields: ${missingFields.join(', ')}`,
            });
        }
        const newCropInput = {
            date,
            type,
            field,
            quantity,
            remarks,
            unitCost
        };

        if (type === 'Planting') {
            newCropInput.cropType = cropType;
            newCropInput.variety = variety;
        } else if (type === 'Agrochemical') {
            newCropInput.chemicalName = chemicalName;
        }
        const cropInput = await CropInputs.create(newCropInput);

        return response.status(201).send(cropInput);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Get all records
router.get('/', async (request, response) => {
    try {
        const cropInputs = await CropInputs.find({});

        return response.status(200).json({
            count: cropInputs.length,
            data: cropInputs
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Get one record by id
router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const cropInput = await CropInputs.findById(id);

        return response.status(200).json(cropInput);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Update record
router.put('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        // Check if unitCost is present in the request body
        if (!request.body.date || !request.body.type || !request.body.field ||
            !request.body.quantity || !request.body.remarks || !request.body.unitCost) {
            return response.status(400).send({
                message: 'Send all required fields'
            });
        }

        const cropInput = await CropInputs.findByIdAndUpdate(id, request.body);

        if (!cropInput) {
            return response.status(404).json({ message: 'Crop Input not found' });
        }

        return response.status(200).send({ message: 'Crop Input updated successfully' });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route to delete a record
router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const cropInput = await CropInputs.findByIdAndDelete(id);

        if (!cropInput) {
            return response.status(404).json({ message: 'Crop Input not found' });
        }

        return response.status(200).send({ message: 'Crop Input deleted successfully' });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

export default router;
