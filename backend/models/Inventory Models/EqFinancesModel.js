import mongoose from 'mongoose';
const EqFinancesSchema = mongoose.Schema(
    {
        eq_n: {
            type: String,
            required: true,
        },
        eqbill_no: {
            type: String,
            required: true,
        },
        eq_name: {
            type: String,
            required: true,
        },
        eq_purchase: {
            type: Date,
            required: true,
        },
        eq_unit: {
            type: String,
            required: true,
        },
        eq_bulk: {
            type: String,
            required: true,
        },
        eq_tot: {
            type: String,
            required: true,
        },

    },
    {
        timestamps:true,
    }
);

export const EqFinancesRecord = mongoose.model('EqFinancesRecord', EqFinancesSchema);















