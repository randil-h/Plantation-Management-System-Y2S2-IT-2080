import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { TestRecord } from "./models/TestModel.js";
import cors from 'cors';
import testRoute from "./routes/TestRoute.js";
import BookingRoute from "./routes/AgroTourism/BookingRoute.js";
import TransactionsRoute from "./routes/Finance Routes/TransactionsRoute.js";
import DiseaseRoute from "./routes/Disease Tracking Routes/DiseaseRoute.js";

import RotationRoute from "./routes/Crop Routes/RotationRoute.js"
import PlantingRoute from "./routes/Crop Routes/PlantingRoute.js"
import ChemicalRoute from "./routes/Crop Routes/ChemicalRoute.js"
import CropInputRoute from "./routes/Crop Routes/CropInputRoute.js"

import EqMaintainroute from "./routes/Inventory Routes/EqMaintainroute.js";
import WaterRoute from "./routes/Inventory Routes/waterRoute.js";
import InventoryRecordRoute from "./routes/Inventory Routes/InventoryRecordRoute.js";

import RegistrationRoute from "./routes/Employee Routes/RegistrationRoute.js";


const app = express();

app.use(express.json());

//app.use(cors());


app.use(
  cors({
     origin: 'http://localhost:3000',
     methods: ['GET', 'POST', 'PUT', 'DELETE'],
     allowedHeaders: ['Content-Type'],
   })
 );

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('welcome to');
});



app.use('/financeincome', testRoute);
app.use('/transactions', TransactionsRoute);

app.use('/booking', BookingRoute);
app.use('/confirmation', BookingRoute);

app.use('/diseases', DiseaseRoute);

app.use('/rotation', RotationRoute);
app.use('/planting', PlantingRoute);
app.use('/chemicals', ChemicalRoute);

app.use('/cropinput', CropInputRoute);

app.use('/inventoryrecords', EqMaintainroute);
app.use('/waterRecords', WaterRoute);
app.use('/inventoryinputs', InventoryRecordRoute);

app.use('/employeeRecords',RegistrationRoute);

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App connected to the database');
        app.listen(PORT, () => {
            console.log(`App is listening to port : ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });
