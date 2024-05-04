import mongoose from 'mongoose';
const FinanceSchema = mongoose.Schema(
    {
        task_id: {
            type: String,
            required: true,
        },
        record_date: {
            type: String,
            required: true,
        },
        record_reading: {
            type: Number,
            required: true,
        },
        record_pay: {
            type: String,
            required: true,
        },
    },
    {
        timestamps:true,
    }
);

export const MachinesRecord = mongoose.model('MachinesRecord', FinanceSchema);















