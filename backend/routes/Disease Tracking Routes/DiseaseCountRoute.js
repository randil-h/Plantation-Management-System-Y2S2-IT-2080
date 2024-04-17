import express, {request, response} from "express";
import {DiseasesRecord} from "../../models/Disease Tracking Models/DiseasesModel.js";
import moment from "moment";

const router = express.Router();
const monthAgo = moment().subtract(31, 'days').format("YYYY-MM-DD");

//get count of untreated plants
/*router.get('/', async (request, response) => {
    try{
        const count = await DiseasesRecord.countDocuments({status: "Not Treated"});
        return response.status(200).json({count});
    }catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message});
    }
});*/

router.get('/untreatedPlants', async (request, response) => {
    try {
        const sumTreesAffected = await DiseasesRecord.aggregate([
            {
                $match: {
                    status: "Not Treated",
                    date: { $gte: monthAgo}
                } // Filter documents with status "Not Treated"
            },
            {
                $group: {
                    _id: null,
                    totalTreesAffected: { $sum: "$plant_count" } // Sum the plant_count field
                }
            }
        ]);

        console.log("Aggregation Result:", sumTreesAffected); // Log aggregation result for debugging

        // Extract the total trees affected from the aggregation result
        const totalTreesAffected = sumTreesAffected.length > 0 ? sumTreesAffected[0].totalTreesAffected : 0;

        return response.status(200).json({ totalTreesAffected });
    } catch (error) {
        console.log("Error:", error.message); // Log error for debugging
        response.status(500).send({ message: error.message });
    }
});

router.get('/recoveredPlants', async (request, response) => {
    try {
        const sumTreesAffected = await DiseasesRecord.aggregate([
            {
                $match: {
                    status: "Recovered",
                    date: {$gte: monthAgo}
                } // Filter documents with status "Recovered"
            },
            {
                $group: {
                    _id: null,
                    totalTreesAffected: { $sum: "$plant_count" } // Sum the plant_count field
                }
            }
        ]);

        console.log("Aggregation Result:", sumTreesAffected); // Log aggregation result for debugging

        // Extract the total trees affected from the aggregation result
        const totalTreesAffected = sumTreesAffected.length > 0 ? sumTreesAffected[0].totalTreesAffected : 0;

        return response.status(200).json({ totalTreesAffected });
    } catch (error) {
        console.log("Error:", error.message); // Log error for debugging
        response.status(500).send({ message: error.message });
    }
});

router.get('/underTreatmentPlants', async (request, response) => {
    try {
        const sumTreesAffected = await DiseasesRecord.aggregate([
            {
                $match: {
                    status: "Under Treatment",
                    date: {$gte: monthAgo}
                } // Filter documents with status "Under treatment"
            },
            {
                $group: {
                    _id: null,
                    totalTreesAffected: { $sum: "$plant_count" } // Sum the plant_count field
                }
            }
        ]);

        console.log("Aggregation Result:", sumTreesAffected); // Log aggregation result for debugging

        // Extract the total trees affected from the aggregation result
        const totalTreesAffected = sumTreesAffected.length > 0 ? sumTreesAffected[0].totalTreesAffected : 0;

        return response.status(200).json({ totalTreesAffected });
    } catch (error) {
        console.log("Error:", error.message); // Log error for debugging
        response.status(500).send({ message: error.message });
    }
});


//get count of recovered plants
/*router.get('/', async (request, response) => {
    try{
        const count = await DiseasesRecord.countDocuments({status : "Recovered"});
        return response.status(200).json({ count});
    }catch (error) {
        console.log(error.message);
        response.status(500).send({message : error.message});
    }
});*/


export default router;