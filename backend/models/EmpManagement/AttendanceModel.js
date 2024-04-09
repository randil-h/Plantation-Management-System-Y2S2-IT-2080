import mongoose from 'mongoose';
const AttendanceSchema = mongoose.Schema(
    {

        e_name: {
            type: String,
            required: true,
        },

        e_date: {
            type: Date,
            required:true,
        },
        att_status: {
            type: String,
            required: true,
        },

    },

    {
        timestamps:true,
    }
);

export const AttendanceRecord = mongoose.model('AttendanceRecord', AttendanceSchema);