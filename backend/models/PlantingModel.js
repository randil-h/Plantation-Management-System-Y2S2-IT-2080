import mongoose from "mongoose"

const PlantingSchema = mongoose.Schema(
    { 
        date: {
            type: Date,
            default: Date.now,
        },
        fieldName: {
            type: String,
            required: true,
        },
        cropType: {
            type: String,
            required: true,
        },
        variety: {
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

export const Planting = mongoose.model('PlantingRecords', PlantingSchema);