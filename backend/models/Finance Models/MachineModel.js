import mongoose from 'mongoose';
const FinanceSchema = mongoose.Schema(
    {
        start_date: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            required: true,
        },
        rate: {
            type: Number,
            required: true,
        },
        payee: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        total_amount: {
            type: Number,
        },
        paid_amount: {
            type: Number,
        }
    },
    {
        timestamps:true,
    }
);

export const MachinesRecord = mongoose.model('MachinesRecord', FinanceSchema);















