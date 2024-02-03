import express, {request, response} from "express";
import {PORT, mongoDBURL} from "./config.js";
import mongoose from "mongoose";
import {TestRecord} from "./models/TestModel.js";
import cors from 'cors';
import testRoute from "./routes/TestRoute.js";

const app = express();

// Middleware for parsing request body
app.use(express.json());

app.use(cors());

/*
app.use(
  cors({
     origin: 'http://localhost:3000',
     methods: ['GET', 'POST', 'PUT', 'DELETE'],
     allowedHeaders: ['Content-Type'],
   })
 );
*/
app.get('/', (request, response) => {
     console.log(request);
     return response.status(234).send('Welcome to ELEMAHANA');
});

app.use('/financeincome', testRoute);

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




