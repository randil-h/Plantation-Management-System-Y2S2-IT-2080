import express, {request, response} from "express";
import { Products } from '../../models/Wholesale Models/ProductModel.js';
import upload from "../../ProductPictures/Pictures.js";


const router = express.Router();

router.post('/', upload.single('productImage'), async (request, response) => {
    try {
        if (
            !request.body.productID ||
            !request.body.productName ||
            !request.body.productDescription ||
            !request.body.productQuantity ||
            !request.body.productPrice ||
            !request.file
        ) {
            return response.status(400).send({
                message: 'Send all required fields',
            });
        }

        const newProduct = {
            productID: request.body.productID,
            productName: request.body.productName,
            productDescription: request.body.productDescription,
            productQuantity: request.body.productQuantity,
            productPrice: request.body.productPrice,
            productImage: request.file.path,
        };

        const product = await Products.create(newProduct);

        return response.status(201).send(product);
    } catch (error) {
        console.log(error.message);

        // If the error is a Mongoose validation error, return a 400 Bad Request with the error messages
        if (error.name === 'ValidationError') {
            return response.status(400).send({ message: error.message });
        }

        // For other errors, return a 500 Internal Server Error with the error message
        return response.status(500).send({ message: 'Internal Server Error' });
    }
});


router.get('/', async (request, response) => {
    try {
        const productrecords = await Products.find({});
        return response.status(200).json({
            count: productrecords.length,
            data: productrecords
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});




router.get('/:id', async(request,response) =>{
    try{
        const  {id} = request.params;

        // if(!id){
        //     return response.status(400).json({ message: 'ID parameter is required' });
        // }

        const  productRecords = await Products.findById(id);

        return response.status(200).json(productRecords);
        // if(!productRecords){
        //     return response.status(404).json({ message: 'Product Record not found' });
        // }
        //return response.status(200).jason(productRecords);
    }catch(error){
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});


router.put('/:id', async (request, response) => {
    try{
        if(
            !request.body.productID ||
            !request.body.productName ||
            !request.body.productDescription ||
            !request.body.productQuantity ||
            !request.body.productPrice
        ) {
            return response.status(400).send({
                message: 'Send all required fields'
            });
        }

        const { id } = request.params;

        const result = await Products.findByIdAndUpdate(id, request.body);

        if(!result){
            return response.status(404).json({message: 'Product Records not Founded'});
        }

        return response.status(200).send({ message: 'Product record updated successfully' });

    }catch (error){
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

router.delete('/:id', async (request, response) =>{
    try{
        const { id } = request.params;

        const  result = await Products.findByIdAndDelete(id);

        if(!result){
            return response.status(404).json({message: 'Product Record not found'});
        }

        return response.status(200).send({message: 'Product Record delete Successfully'});
    }catch (error){
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

export default router;