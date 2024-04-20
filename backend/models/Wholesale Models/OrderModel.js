import mongoose from "mongoose"

const OrderSchema = mongoose.Schema(
    {
        orderId: {
            type: String,
            default: true,
        },
        orderProductName: {
            type: String,
            default: true,
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
        orderProductPricePerKilo: {
            type: Number,
            required: true,
        },
    },
);

export  const Orders = mongoose.model('OrderRecords', OrderSchema);