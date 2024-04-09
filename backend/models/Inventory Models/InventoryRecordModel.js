import mongoose from 'mongoose';
const InventoryRecordSchema = mongoose.Schema(
    {
        type:{
            type: String,
            required: true,
        },
        record_ID: {
            type: String,
            required: true,
        },
        record_name: {
            type: String,
            required: true,
        },
        storage: {
            type: String,
            required: true,
        },
        size: {
            type: Number,
            required: true,
        },
        unit: {
            type: String,
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
        },
        expire_date: {
            type: Date,
            required: false,
        },
        description: {
            type: String,
            required: true,
        },

    },
    {
        timestamps:true,
    }
);

export const InventoryInput = mongoose.model('InventoryInput', InventoryRecordSchema);















