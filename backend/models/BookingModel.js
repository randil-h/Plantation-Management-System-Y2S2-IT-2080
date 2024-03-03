import mongoose from 'mongoose';

const bookingSchema = mongoose.Schema(
    {
        fullName: {
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
        packageType: {
            type: String,
            required: true,
        },
        bookingDate: {
            type: Date,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Booking = mongoose.model('Booking', bookingSchema);

export default Booking;
