import {HarvestingRecord} from "../../models/Harvest Models/RecordModels.js";
import express from "express";
import {TransactionsRecord} from "../../models/Finance Models/TransactionsModel.js";

const router = express.Router();

router.post('/', async(request, response) =>
{
    try{
        if(
            !request.body.date ||
            !request.body.cropType ||
            !request.body.ageOfYield ||
            !request.body.wayPicked ||
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
            quantity: request.body.quantity,
            remarks: request.body.remarks,
        };

        const HarvestRecord = await TransactionsRecord.create(NewHarvestRecord);
        return response.status(201).send(NewHarvestRecord);

    }catch(error)
    {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});