import express from 'express';
import Booking from '../../models/AgroTourism/BookingModel.js'; // Updated model import

const router = express.Router();

// Route to save a new booking
router.post('/', async (request, response) => {
    try {
        const {
            fullName,
            telNo,
            nicNo,
            email,
            packageType,
            bookingDate,
        } = request.body;

        if (!fullName || !telNo || !nicNo || !email || !packageType || !bookingDate) {
            return response.status(400).send({
                message: 'Send all required fields: fullName, telNo, nicNo, email, packageType, bookingDate',
            });
        }

        const newBooking = {
            fullName,
            telNo,
            nicNo,
            email,
            packageType,
            bookingDate,
        };

        const booking = await Booking.create(newBooking);

        return response.status(201).send(booking);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route to get all the bookings from the database
router.get('/', async (request, response) => {
    try {
        const bookings = await Booking.find({});

        return response.status(200).json({
            count: bookings.length,
            data: bookings,
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route to get a booking by ID
router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const booking = await Booking.findById(id);

        return response.status(200).json(booking);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route to update a booking
router.put('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const result = await Booking.findByIdAndUpdate(id, request.body);

        if (!result) {
            return response.status(404).json({ message: 'Booking not found' });
        }

        return response.status(200).send({ message: 'Booking updated successfully' });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route to delete a booking
router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const result = await Booking.findByIdAndDelete(id);

        if (!result) {
            return response.status(404).json({ message: 'Booking not found' });
        }

        return response.status(200).send({ message: 'Booking deleted successfully' });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

export default router;
