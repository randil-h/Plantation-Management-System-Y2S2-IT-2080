import express from "express";
import { Products } from '../../models/Wholesale Models/ProductModel.js';

const router = express.Router();

router.post('/', async(request, response) =>{
    try {
        if (
            !request.body.productID ||
            !request.body.productName ||
            !request.body.productDescription ||
            !request.body.productQuantity ||
            !request.body.productPrice
        ) {
            return response.status(400).send ({
                message: 'Send all required fields',
            });
        }
        const newProduct = {
            productID: request.body.productID,
            productName: request.body.productName,
            productDescription: request.body.productDescription,
            productQuantity: request.body.productQuantity,
            productPrice: request.body.productPrice,
        };

        const product = await Products.create(newProduct);

        return response.status(201).send(product);
    } catch(error) {
        console.log(error.message);
        response.status(500).send({message:error.message});
    }

});

export default router;