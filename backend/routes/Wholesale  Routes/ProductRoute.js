import express, {request, response} from "express";
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




// router.get('/', async(request,response) =>{
//     try{
//         const  {id} = request.params;
//
//         if(!id){
//             return response.status(400).json({ message: 'ID parameter is required' });
//         }
//
//         const  productRecords = await Products.findOne(id);
//         if(!productRecords){
//             return response.status(404).json({ message: 'Product Record not found' });
//         }
//         return response.status(200).jason(productRecords);
//     }catch(error){
//
//     }
// })

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