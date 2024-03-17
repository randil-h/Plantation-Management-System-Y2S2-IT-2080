import mongoose from 'mongoose';
const TaskSchema = mongoose.Schema(
    {

        emp_id: {
            type: String,
            required: true,
        },
        task: {
            type: String,
            required: true,
        },
        assign_date: {
            type: Date,
            required:true,
        },
        due_date: {
            type: Date,
            required:true,
        },
        task_des: {
            type: String,
            required: true,
        },
        task_status: {
            type: String,
            required: true,
        },

    },

    {
        timestamps:true,
    }
);

export const TaskRecord = mongoose.model('TaskRecord', TaskSchema);