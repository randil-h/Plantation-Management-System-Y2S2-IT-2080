import express from 'express';
import Booking from '../../models/AgroTourism Models/BookingModel.js';

const router = express.Router();
// Route to get bookings by user ID
router.get('/booking', async (req, res) => {
    const userId = req.query.userId;
    try {
        const bookings = await Booking.find({ userId });
        res.json({ data: bookings });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});
// Route to save a new booking
router.post('/', async (request, response) => {
    try {
        const {
            name,
            telNo,
            nicNo,
            email,
            selectedPackage,
            date,
            numberOfDays,
            numberOfPeople,
            visitorType,
            totalPayment,
        } = request.body;

        // Check if all required fields are provided
        if (!name || !telNo || !nicNo || !email || !selectedPackage || !date || !numberOfPeople || !visitorType)  {
            return response.status(400).send({
                message: 'All required fields must be provided: name, telNo, nicNo, email, selectedPackage, date',
            });
        }

        // Additional validation for guidedFarmTour package
        if (selectedPackage === 'guidedFarmTour' && !numberOfDays) {
            return response.status(400).send({
                message: 'Number of days is required for the guided farm tour package',
            });
        }

        const newBooking = {
            name,
            telNo,
            nicNo,
            email,
            selectedPackage,
            date,
            numberOfDays,
            numberOfPeople,
            visitorType,
            totalPayment,
        };

        const booking = await Booking.create(newBooking);

        return response.status(201).send(booking);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: 'An error occurred while processing the request' });
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
        response.status(500).send({ message: 'An error occurred while processing the request' });
    }
});

// Route to get a booking by ID
router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const booking = await Booking.findById(id);

        if (!booking) {
            return response.status(404).json({ message: 'Booking not found' });
        }

        return response.status(200).json(booking);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: 'An error occurred while processing the request' });
    }
});

// Route to update a booking
router.put('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const result = await Booking.findByIdAndUpdate(id, request.body, { new: true });

        if (!result) {
            return response.status(404).json({ message: 'Booking not found' });
        }

        return response.status(200).send({ message: 'Booking updated successfully' });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: 'An error occurred while processing the request' });
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
        response.status(500).send({ message: 'An error occurred while processing the request' });
    }
});



export default router;
