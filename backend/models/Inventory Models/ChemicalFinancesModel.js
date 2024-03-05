import mongoose from 'mongoose';
const ChemicalFinancesSchema = mongoose.Schema(
    {
        chem_n: {
            type: String,
            required: true,
        },
        chembill_no: {
            type: String,
            required: true,
        },
        chem_name: {
            type: String,
            required: true,
        },
        chem_purchase: {
            type: Date,
            required: true,
        },
        chem_expire: {
            type: Date,
            required: true,
        },
        chem_unit: {
            type: String,
            required: true,
        },
        chem_bulk: {
            type: String,
            required: true,
        },
        chem_tot: {
            type: String,
            required: true,
        },

    },
    {
        timestamps:true,
    }
);

export const ChemicalFinancesRecord = mongoose.model('ChemicalFinancesRecord', ChemicalFinancesSchema);















