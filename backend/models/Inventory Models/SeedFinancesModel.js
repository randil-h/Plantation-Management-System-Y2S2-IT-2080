import mongoose from 'mongoose';
const SeedFinancesSchema = mongoose.Schema(
    {
        fin_seed: {
            type: String,
            required: true,
        },
        finbill_no: {
            type: String,
            required: true,
        },
        fin_name: {
            type: String,
            required: true,
        },
        fin_purchase: {
            type: Date,
            required: true,
        },
        fin_expire: {
            type: Date,
            required: true,
        },
        fin_unit: {
            type: String,
            required: true,
        },
        fin_bulk: {
            type: String,
            required: true,
        },
        fin_tot: {
            type: String,
            required: true,
        },

    },
    {
        timestamps:true,
    }
);

export const SeedFinancesRecord = mongoose.model('SeedFinancesRecord', SeedFinancesSchema);















