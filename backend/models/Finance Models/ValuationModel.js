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
        subtype: {
            type: String,
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
        },
        price: {
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
        },
        appreciationOrDepreciation: {
            type: Number,
            required: true,
        }
    },
    {
        timestamps:true,
    }
);

export const ValuationsRecord = mongoose.model('ValuationsRecord', FinanceSchema);















