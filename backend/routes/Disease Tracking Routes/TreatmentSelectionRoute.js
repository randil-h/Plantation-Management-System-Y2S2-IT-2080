import express from "express";
import {InventoryInput} from "../../models/Inventory Models/InventoryRecordModel.js";

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const { treatment } = req.body;

        // Find all records with the specified treatment name
        const inventoryRecords = await InventoryInput.find({ record_name: treatment });
        console.log('Inventory Records:', inventoryRecords);

        // Check if any record has status "in stock"
        const hasInStockRecord = inventoryRecords.some(record => record.ava_status === "in stock");

        console.log('Has In Stock Record:', hasInStockRecord);

        // If at least one record with status "in stock" is found, treatment is available
        if (hasInStockRecord) {
            res.json({ available: true });
        } else {
            res.json({ available: false });
        }
    } catch (error) {
        console.error('An error occurred: ', error);
        return res.status(500).json({ message: 'An error occurred, please try again' });
    }
});

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



export default router;
