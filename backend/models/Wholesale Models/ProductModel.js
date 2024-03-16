import mongoose from "mongoose"

const ProductSchema = mongoose.Schema(
    {
        productID: {
            type: String,
            required: true,
        },
        productName: {
            type: String,
            required: true,
        },
        productDescription: {
            type: String,
            required: true,
        },
        productQuantity: {
            type: Number,
            required: true,
        },
        productPrice: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export const Products = mongoose.model('ProductRecords', ProductSchema);