import mongoose from "mongoose";

const DiseaseSchema = mongoose.Schema(
    {
        disease_name: {
            type: String,
            required: true,
        },
        crop: {
            type: String,
            required: true,
        },
        date: {
            type: String,
            required: true,
        },
        location: {
            type: String,
            required: true,
        },
        treatment: {
            type: String,
            required: true,
        },
        severity: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export const DiseasesRecord = mongoose.model('DiseasesRecord', DiseaseSchema);