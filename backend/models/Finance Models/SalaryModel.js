import mongoose from 'mongoose';
const FinanceSchema = mongoose.Schema(
    {
        payment_date: {
            type: String,
            required: true,
        },
        emp_name: {
            type: String,
            required: true,
        },
        salary_start_date: {
            type: String,
            required: true,
        },
        salary_end_date: {
            type: String,
            required: true,
        },
        nic: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            required: false,
        },
        basic_days: {
            type: Number,
            required: false,
        },
        basic_rate: {
            type: Number,
            required: false,
        },
        bonus_salary: {
            type: Number,
            required: false,
        },
        ot_hours: {
            type: Number,
            required: false,
        },
        ot_rate: {
            type: Number,
            required: false,
        },
        epf_etf: {
            type: Number,
            required: false,
        },
        description: {
            type: String,
            required: false,
        }
    },
    {
        timestamps:true,
    }
);

export const SalariesRecord = mongoose.model('SalariesRecord', FinanceSchema);















