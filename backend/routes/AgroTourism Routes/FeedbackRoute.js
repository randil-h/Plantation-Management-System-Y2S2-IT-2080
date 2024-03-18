// Import the necessary modules and models
import express from 'express';
import Feedback from '../../models/AgroTourism Models/FeedbackModel.js';

// Create an Express router
const router = express.Router();

// Route to save a new feedback
router.post('/', async (req, res) => {
    try {
        // Extract data from the request body
        const { name, email, feedback, rating } = req.body;

        // Check if all required fields are provided
        if (!name || !email || !feedback || !rating) {
            return res.status(400).send({
                message: 'All required fields must be provided: name, email, feedback, rating',
            });
        }

        // Create a new feedback document in the database
        const newFeedback = await Feedback.create({ name, email, feedback, rating });

        // Send a success response with the newly created feedback document
        return res.status(201).send(newFeedback);
    } catch (error) {
        // Handle errors by logging them and sending an error response
        console.error('Error saving feedback:', error);
        res.status(500).send({ message: 'An error occurred while processing the request' });
    }
});

// Route to get all feedbacks from the database
router.get('/', async (req, res) => {
    try {
        // Fetch all feedback documents from the database
        const feedbacks = await Feedback.find({});

        // Send a success response with the fetched feedback documents
        res.status(200).json({ count: feedbacks.length, data: feedbacks });
    } catch (error) {
        // Handle errors by logging them and sending an error response
        console.error('Error fetching feedbacks:', error);
        res.status(500).send({ message: 'An error occurred while processing the request' });
    }
});

// Route to get a feedback by ID
router.get('/:id', async (req, res) => {
    try {
        // Extract the feedback ID from the request parameters
        const { id } = req.params;

        // Find the feedback document by ID in the database
        const feedback = await Feedback.findById(id);

        // If the feedback document is not found, send a 404 response
        if (!feedback) {
            return res.status(404).json({ message: 'Feedback not found' });
        }

        // Send a success response with the fetched feedback document
        res.status(200).json(feedback);
    } catch (error) {
        // Handle errors by logging them and sending an error response
        console.error('Error fetching feedback by ID:', error);
        res.status(500).send({ message: 'An error occurred while processing the request' });
    }
});

// Route to update a feedback
router.put('/:id', async (req, res) => {
    try {
        // Extract the feedback ID from the request parameters
        const { id } = req.params;

        // Find and update the feedback document by ID in the database
        const updatedFeedback = await Feedback.findByIdAndUpdate(id, req.body, { new: true });

        // If the feedback document is not found, send a 404 response
        if (!updatedFeedback) {
            return res.status(404).json({ message: 'Feedback not found' });
        }

        // Send a success response with the updated feedback document
        res.status(200).send({ message: 'Feedback updated successfully', data: updatedFeedback });
    } catch (error) {
        // Handle errors by logging them and sending an error response
        console.error('Error updating feedback:', error);
        res.status(500).send({ message: 'An error occurred while processing the request' });
    }
});

// Route to delete a feedback
router.delete('/:id', async (req, res) => {
    try {
        // Extract the feedback ID from the request parameters
        const { id } = req.params;

        // Find and delete the feedback document by ID in the database
        const deletedFeedback = await Feedback.findByIdAndDelete(id);

        // If the feedback document is not found, send a 404 response
        if (!deletedFeedback) {
            return res.status(404).json({ message: 'Feedback not found' });
        }

        // Send a success response with the deleted feedback document
        res.status(200).send({ message: 'Feedback deleted successfully', data: deletedFeedback });
    } catch (error) {
        // Handle errors by logging them and sending an error response
        console.error('Error deleting feedback:', error);
        res.status(500).send({ message: 'An error occurred while processing the request' });
    }
});

// Export the router for use in other modules
export default router;
