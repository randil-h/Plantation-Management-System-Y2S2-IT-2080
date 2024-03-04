import mongoose from 'mongoose';
const AddChemicalSchema = mongoose.Schema(
    {
        add_chemical: {
            type: String,
            required: true,
        },
        chemicaladd_no: {
            type: String,
            required: true,
        },
        chemical_store: {
            type: String,
            required: true,
        },
        chemical_stock: {
            type: String,
            required: true,
        },
        chemical_expire: {
            type: Date,
            required: true,
        },

    },
    {
        timestamps:true,
    }
);

export const AddChemicalRecord = mongoose.model('AddChemicalRecord', AddChemicalSchema);















