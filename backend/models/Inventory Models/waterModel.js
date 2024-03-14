import mongoose from 'mongoose';
const WaterSchema = mongoose.Schema(
    {
        water_level1: {
            type: Number,
            required: true,
        },
        water_level2: {
            type: Number,
            required: true,
        },
        water_date: {
            type: Date,
            required: true,
        },
        water_des: {
            type: String,
            required: true,
        },
    },
    {
        timestamps:true,
    }
);

export const WaterRecord = mongoose.model('WaterRecord', WaterSchema);















