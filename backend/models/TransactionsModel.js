import mongoose from 'mongoose';
const FarmSchema = mongoose.Schema(
    {
        date: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            required: true,
        },
        amount: {
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
        method: {
            type: String,
            required: true,
        },

    },
    {
        timestamps:true,
    }
);

export const TransactionsRecord = mongoose.model('TransactionsRecord', FarmSchema);















