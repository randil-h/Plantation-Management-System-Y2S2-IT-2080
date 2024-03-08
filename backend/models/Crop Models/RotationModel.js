import mongoose from "mongoose"

const rotationSchema = mongoose.Schema(
    {
        season: {
            type: String,
            required: true,
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
        yield: {
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

export const Rotation = mongoose.model('RotationRecords', rotationSchema);