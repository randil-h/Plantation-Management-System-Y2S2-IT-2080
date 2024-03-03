import mongoose from "mongoose"

const ChemicalSchema = mongoose.Schema(
    { 
        date: {
            type: Date,
            default: Date.now,
        },
        fieldName: {
            type: String,
            required: true,
        },
        chemicalType: {
            type: String,
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
        },
        unitCost: {
            type: Number,
            required: true,
        },
        remarks: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export const Chemicals = mongoose.model('ChemicalRecords', ChemicalSchema);