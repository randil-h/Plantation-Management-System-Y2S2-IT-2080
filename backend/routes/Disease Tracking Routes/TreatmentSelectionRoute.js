import express from "express";
import {InventoryInput} from "../../models/Inventory Models/InventoryRecordModel.js";

const router = express.Router();

/*
router.post('/recommendTreatment', (req, res) => {
    const selectedDisease = req.body.disease_name;

    const treatmentData = getTreatmentData(selectedDisease);

    if(treatmentData) {
        res.status(200).json({treatment : treatmentData});
    }
    else {
        res.status(404).json({error: 'Treatment data not found for the selected disease'});
    }
});

async function getTreatmentData(selectedDisease) {
    try {
        const disease = await Disease.findOne({disease_name: selectedDisease});

        if (disease) {
            return disease.treatment;
        }
        else {
            return null;
        }
    }catch(error) {
        console.error('Error fetching treatment data: ', error);
        return null;
    }
}*/

router.post('/recommendTreatment', (req, res) => {

    const {disease_name} = req.body;

    const treatment = recommendTreatment(disease_name);

    res.json({treatment});

});


function recommendTreatment(disease_name) {
    let treatment = "";

    switch (disease_name) {
        case "Anthracnose" :
            treatment = "Daconil Chlorothalonil (chlorothalonil 500g/l SC) fungicide";
            break;
        case "Leaf Curling disease":
            treatment = "Mitsu Abamectin (abamectin 18g/l EC) insecticide";
            break;
        case "Fungal Disease" :
            treatment = "Oasis Thiram (thiuram disulfide) fungicide";
            break;
        case "Plesispa" :
            treatment = "Marshal 20 SC (carbosulfan 200g/l SC) insecticide";
            break;
        default:
            treatment = "No recommended treatment available";
    }

    return treatment;
}

router.post('/', async (req, res) => {
    try{
        const {treatment} = req.body;

        const inventoryRecord = await InventoryInput.findOne({record_name: treatment});

        if (inventoryRecord && inventoryRecord.quantity > 0) {
            // Treatment is available if inventory item exists and quantity is greater than 0
            res.json({ available: true });
        } else {
            // Treatment is not available
            res.json({ available: false });
        }
    }catch (error){
        console.error('An error occurred: ', error);
        return res.status(500).json({message: 'An error occured please try again'});
    }

});

export default router;
