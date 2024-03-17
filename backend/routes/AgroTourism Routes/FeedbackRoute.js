import express from 'express';
import Feedback from '../../models/AgroTourism Models/FeedbackModel.js';

const router = express.Router();

// Route to save a new feedback
router.post('/', async (req, res) => {
    try {
        const { name, email, feedback, rating } = req.body;

        // Check if all required fields are provided
        if (!name || !email || !feedback || !rating) {
            return res.status(400).send({
                message: 'All required fields must be provided: name, email, feedback, rating',
            });
        }

        const newFeedback = await Feedback.create({ name, email, feedback, rating });

        return res.status(201).send(newFeedback);
    } catch (error) {
        console.error('Error saving feedback:', error);
        res.status(500).send({ message: 'An error occurred while processing the request' });
    }
});

// Route to get all feedbacks from the database
router.get('/', async (req, res) => {
    try {
        const feedbacks = await Feedback.find({});
        res.status(200).json({ count: feedbacks.length, data: feedbacks });
    } catch (error) {
        console.error('Error fetching feedbacks:', error);
        res.status(500).send({ message: 'An error occurred while processing the request' });
    }
});

// Route to get a feedback by ID
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const feedback = await Feedback.findById(id);
        if (!feedback) {
            return res.status(404).json({ message: 'Feedback not found' });
        }
        res.status(200).json(feedback);
    } catch (error) {
        console.error('Error fetching feedback by ID:', error);
        res.status(500).send({ message: 'An error occurred while processing the request' });
    }
});

// Route to update a feedback
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updatedFeedback = await Feedback.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedFeedback) {
            return res.status(404).json({ message: 'Feedback not found' });
        }
        res.status(200).send({ message: 'Feedback updated successfully', data: updatedFeedback });
    } catch (error) {
        console.error('Error updating feedback:', error);
        res.status(500).send({ message: 'An error occurred while processing the request' });
    }
});

// Route to delete a feedback
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedFeedback = await Feedback.findByIdAndDelete(id);
        if (!deletedFeedback) {
            return res.status(404).json({ message: 'Feedback not found' });
        }
        res.status(200).send({ message: 'Feedback deleted successfully', data: deletedFeedback });
    } catch (error) {
        console.error('Error deleting feedback:', error);
        res.status(500).send({ message: 'An error occurred while processing the request' });
    }
});

export default router;
