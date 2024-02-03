import mongoose from 'mongoose';
const TestSchema = mongoose.Schema(
    {
        first_name: {
            type: String,
            required: true,
        },
        last_name: {
            type: String,
            required: true,
        },
        uemail: {
            type: String,
            required: true,
        },
        country: {
            type: String,
            required: true,
        },
        street_address: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        region: {
            type: String,
            required: true,
        },
        postal_code: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps:true,
    }
);

export const TestRecord = mongoose.model('TestRecord', TestSchema);















