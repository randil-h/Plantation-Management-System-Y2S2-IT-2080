import {DiseasesRecord} from "../../models/Disease Tracking Models/DiseasesModel.js";
import express, {request, response} from "express";

const router = express.Router();

//create new disease record
router.post('/', async (request, response) => {
    try{
        console.log('Request Body:', request.body);
        if (
            !request.body.disease_name ||
            !request.body.crop ||
            !request.body.date ||
            !request.body.location ||
            !request.body.treatment ||
            !request.body.severity ||
            !request.body.status
        ) {
            return response.status(400).send({
                message: 'Send all required fields',
            });
        }
        const newDiseaseRecord = {
            disease_name: request.body.disease_name,
            crop: request.body.crop,
            date: request.body.date,
            location: request.body.location,
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
            !request.body.crop ||
            !request.body.date ||
            !request.body.location ||
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
