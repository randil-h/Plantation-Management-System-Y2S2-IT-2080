import mongoose from "mongoose"

const OrderSchema = mongoose.Schema(
    {
        orderID: {
            type: String,
            required: true,
        },
        orderDate: {
            type: Date,
            default: Date.now,
        },
        orderQuantity: {
            type: Number,
            required: true,
        },
        orderPrice: {
            type: Number,
            required: true,
        },
    },
);

export  const Orders = mongoose.model('OrderRecords', OrderSchema);