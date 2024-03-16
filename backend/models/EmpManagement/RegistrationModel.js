import mongoose from 'mongoose';
const RegistrationSchema = mongoose.Schema(
    {

        f_name: {
            type: String,
            required: true,
        },
        l_name: {
            type: String,
            required: true,
        },
        dob: {
            type: Date,
            required:true,
        },
        gender: {
            type: String,
            required: true,
        },
        contact_no: {
            type: String,
            required: true,
        },
        emp_email: {
            type: String,
            required: true,
        },
        nic: {
            type: String,
            required: true,
        },
        e_address: {
            type: String,
            required: true,
        },
        emp_type: {
            type: String,
            required: true,
        },
        qualifications: {
            type: String,
            required: true,
        },
        h_date: {
            type: Date,
            required: true,
        },
    },

    {
        timestamps:true,
    }
);

export const RegistrationRecord = mongoose.model('RegistrationRecord', RegistrationSchema);


