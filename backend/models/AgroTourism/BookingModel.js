import mongoose from 'mongoose';

const bookingSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        telNo: {
            type: String,
            required: true,
        },
        nicNo: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        selectedPackage: {
            type: String,
            required: true,
        },
        date: {
            type: Date,
            required: true,
        },
        numberOfDays: {
            type: Number,

        },
    },

    {
        timestamps: true,
    }
);

const Booking = mongoose.model('Booking', bookingSchema);

export default Booking;
