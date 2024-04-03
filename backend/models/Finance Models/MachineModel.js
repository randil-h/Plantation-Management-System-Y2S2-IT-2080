import mongoose from 'mongoose';
const FinanceSchema = mongoose.Schema(
    {
        date: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            required: true,
        },
        hours_nos: {
            type: Number,
            required: true,
        },
        rate: {
            type: Number,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        payer_payee: {
            type: String,
            required: true,
        }
    },
    {
        timestamps:true,
    }
);

export const MachinesRecord = mongoose.model('MachinesRecord', FinanceSchema);















