import mongoose from 'mongoose';
const InventoryMaintainSchema = mongoose.Schema(
    {
        Eq_machine_main: {
            type: String,
            required: true,
        },
        Eq_id_main: {
            type: String,
            required: true,
        },
        date_referred: {
            type: Date,
            required: true,
        },
        date_received: {
            type: Date,
            required: true,
        },
        price:{
            type: Number,
            required: true,
        },
        pay_person:{
            type: String,
            required: true,
        },
        ref_loc: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            required: true,
        },
        comment: {
            type: String,
            required: true,
        },

    },
    {
        timestamps:true,
    }
);

export const InventoryRecord = mongoose.model('InventoryRecord', InventoryMaintainSchema);















