import {DiseasesRecord} from "../models/DiseasesModel.js";
import express, {request, response} from "express";

const router = express.Router();

//create new disease record
router.post('/', async (request, response) => {
    try{
        if (
            !request.body.disease_name ||
            !request.body.crop ||
            !request.body.date ||
            !request.body.location ||
            !request.body.severity ||
            !request.body.treatment ||
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
            severity: request.body.severity,
            treatment: request.body.treatment,
            status: request.body.status,
        };

        const disease = await DiseasesRecord.create(newDiseaseRecord);

        return response.status(201).send(disease);
    }catch(error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
} );

export default router;
