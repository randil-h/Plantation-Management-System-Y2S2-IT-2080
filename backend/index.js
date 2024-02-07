import express, {request, response} from "express";
import {PORT, mongoDBURL} from "./config.js";
import mongoose from "mongoose";
import {TestRecord} from "./models/TestModel.js";
import cors from 'cors';
import testRoute from "./routes/TestRoute.js";
import TransactionsRoute from "./routes/TransactionsRoute.js";

const app = express();

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


app.use('/financeincome', testRoute);
app.use('/transactions', TransactionsRoute);

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