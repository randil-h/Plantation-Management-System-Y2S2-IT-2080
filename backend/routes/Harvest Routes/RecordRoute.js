import {HarvestingRecord} from "../../models/Harvest Models/RecordModels.js";
import express from "express";




const router = express.Router();


//Route to create new harvest record
router.post('/', async(request, response) =>
{
    try{
        if(
            !request.body.date ||
            !request.body.cropType ||
            !request.body.ageOfYield ||
            !request.body.wayPicked ||
            !request.body.treesPicked ||
            !request.body.quantity ||
            !request.body.remarks
            ){
            return response.status(400).send({
                message: 'Send all required fields',
            });
         }

        const NewHarvestRecord = {
            date: request.body.date,
            cropType: request.body.cropType,
            ageOfYield: request.body.ageOfYield,
            wayPicked: request.body.wayPicked,
            treesPicked: request.body.treesPicked,
            quantity: request.body.quantity,
            remarks: request.body.remarks,
        };

        const HarvestRecord = await HarvestingRecord.create(NewHarvestRecord);
        return response.status(201).send(NewHarvestRecord);

    }catch(error)
    {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

//Route to get harvest records
router.get('/', async (request, response) => {
    try {
        const Records = await HarvestingRecord.find({});
        return response.status(200).json({
            count: Records.length, // Corrected to use Records.length
            data: Records // Corrected to use Records
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).json({ message: error.message }); // Corrected to use response.json()
    }
});

//Route to get a harvest record by ID
router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const record = await HarvestingRecord.findById(id);

        if (!record) {
            return response.status(404).json({ message: 'Record not found' });
        }

        return response.status(200).json(record);
    } catch (error) {
        console.log(error.message);
        response.status(500).json({ message: error.message });
    }
});



//Route to update harvest record
router.put('/:id', async (request, response) => {
    try {
        if(
            !request.body.date ||
            !request.body.cropType ||
            !request.body.ageOfYield ||
            !request.body.wayPicked ||
            !request.body.treesPicked ||
            !request.body.quantity ||
            !request.body.remarks
        ){

            return response.status(400).send({
                message: 'Send all required fields: title, author, publishYear',
            });
        }

        const { id } = request.params;

        const result = await HarvestingRecord.findByIdAndUpdate(id, request.body);

        if (!result) {
            return response.status(404).json({ message: 'Harvest record not found' });
        }

        return response.status(200).send({ message: 'Harvest record updated successfully' });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route for Delete a harvest record
router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const result = await HarvestingRecord.findByIdAndDelete(id);

        if (!result) {
            return response.status(404).json({ message: 'Harvest record not found' });
        }

        return response.status(200).send({ message: 'Harvest record deleted successfully' });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});


export default router;