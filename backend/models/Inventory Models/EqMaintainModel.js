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
            type: Date, // Assuming you want to store dates
            required: true,
        },
        date_received: {
            type: Date,
            required: true,
        },
        ref_loc: {
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















