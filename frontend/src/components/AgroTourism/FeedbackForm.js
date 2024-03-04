import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

const FeedbackForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [feedback, setFeedback] = useState("");
    const [rating, setRating] = useState(0); // Initial rating

    const handleRatingChange = (newRating) => {
        setRating(newRating);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the form submission (e.g., send data to server)
        console.log("Submitted Data:", { name, email, feedback, rating });
    };

    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <form onSubmit={handleSubmit} className="w-120 border p-10 rounded-lg bg-gray-200">
                <h1 className="text-3xl font-semibold mb-4">Give Us Your Feedback</h1>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mt-1 p-2 w-full border rounded-md"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-1 p-2 w-full border rounded-md"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="feedback" className="block text-sm font-medium text-gray-600">
                        Feedback
                    </label>
                    <textarea
                        id="feedback"
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        className="mt-1 p-2 w-full border rounded-md"
                        required
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">Rating</label>
                    <div className="flex items-center">
                        {[1, 2, 3, 4, 5].map((number) => (
                            <label key={number} className="inline-flex items-center mr-4">
                                <input
                                    type="radio"
                                    name="rating"
                                    value={number}
                                    onChange={() => handleRatingChange(number)}
                                    className="form-radio text-blue-500"
                                />
                                <span className="ml-2">{number}</span>
                            </label>
                        ))}
                    </div>
                </div>
                <div className="mb-3 mt-8 flex justify-center">
                    <button
                        type="submit"
                        className="bg-black text-white px-4 py-2 rounded-2xl hover:bg-gray-800"
                    >
                        Submit Feedback
                    </button>
                </div>
            </form>
            <p className="mt-4 text-lg flex items-center">
                <Link to="/tourism" className="text-black flex items-center">
                    <IoMdArrowRoundBack className="mr-2"/> Go back
                </Link>
            </p>

        </div>
    );
};

export default FeedbackForm;
