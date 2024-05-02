import {DiseasesRecord} from "../../models/Disease Tracking Models/DiseasesModel.js";
import express, {request, response} from "express";
import {InventoryRecord} from "../../models/Inventory Models/EqMaintainModel.js";
import {InventoryInput} from "../../models/Inventory Models/InventoryRecordModel.js";

const router = express.Router();

//create new disease record
router.post('/', async (request, response) => {
    try{
        console.log('Request Body:', request.body);
        if (
            !request.body.disease_name ||
            !request.body.plant_id||
            !request.body.crop ||
            !request.body.date ||
            !request.body.location ||
            !request.body.plant_count ||
            !request.body.treatment ||
            !request.body.severity ||
            !request.body.status
        ) {
            return response.status(400).send({
                message: 'Send all required fields',
            });
        }

        if(request.body.status === "Under Treatment") {
            const {treatment} = request.body;
            const {plant_count} = request.body;
            const amountUsedPerTree = 50;
            const totalAmountNeeded = amountUsedPerTree * plant_count;

            let foundSufficientInventory = false;
            let insufficientInventoryMessage = "Insufficient Quantity in the Inventory!!";
            let treatmentNotFoundMessage = "Treatment not Available in Inventory!!";

            // Find all records with the specified treatment name
            const inventoryRecords = await InventoryInput.find({ record_name: treatment });

            if (inventoryRecords.length === 0) {
                return response.status(400).json({ message: treatmentNotFoundMessage });
            }

            for (const inventoryRecord of inventoryRecords) {
                // Calculate the remaining amount after deducting the total amount needed
                const remainingAmount = inventoryRecord.quantity * inventoryRecord.size - totalAmountNeeded;
                // If remaining amount is sufficient or equal to zero, update the record and break the loop
                if (remainingAmount >= 0) {
                    inventoryRecord.quantity = remainingAmount / inventoryRecord.size;
                    await inventoryRecord.save();
                    foundSufficientInventory = true;
                    break;
                }
            }
            // If no record had sufficient quantity, return a message
            if (!foundSufficientInventory) {
                return response.status(400).json({ message: insufficientInventoryMessage });
            }
        }

        const newDiseaseRecord = {
            disease_name: request.body.disease_name,
            plant_id: request.body.plant_id,
            crop: request.body.crop,
            date: request.body.date,
            location: request.body.location,
            plant_count: request.body.plant_count,
            treatment: request.body.treatment,
            severity: request.body.severity,
            status: request.body.status,
        };

        const disease = await DiseasesRecord.create(newDiseaseRecord);

        return response.status(201).send(disease);
    }catch(error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
} );

//get disease records
router.get('/', async (request, response) => {
    try{
        const disease = await DiseasesRecord.find({});

        return response.status(200).json({
            count : disease.length,
            data : disease
        });
    }catch (error){
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

//get disease record by id
router.get('/:id', async (request, response) => {
    try{
        const {id} = request.params;

        const disease = await DiseasesRecord.findById(id);

        return response.status(200).json(disease);

    }catch (error){
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

//updating disease record
router.put('/:id', async (request, response) => {
    try{
        if (
            !request.body.disease_name ||
            !request.body.plant_id||
            !request.body.crop ||
            !request.body.date ||
            !request.body.location ||
            !request.body.plant_count ||
            !request.body.treatment ||
            !request.body.severity ||
            !request.body.status
        ) {
            return response.status(400).send({
                message : 'Send all required fields'
            });
        }

        const {id} = request.params;

        const result = await DiseasesRecord.findByIdAndUpdate(id, request.body);

        if(!result){
            return response.status(404).json({message : 'Disease record not found'});
        }

        return response.status(200).send({message : 'Disease record updated successfully'});
    }catch(error){
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

//delete disease record
router.delete('/:id', async (request, response) => {
    try{
        const {id} = request.params;

        const result = await DiseasesRecord.findByIdAndDelete(id);

        if(!result){
            return response.status(404).json({message: 'Disease record not found' });
        }

        return response.status(200).send({message : 'Disease record deleted successfully'});

    }catch(error){
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

export default router;
