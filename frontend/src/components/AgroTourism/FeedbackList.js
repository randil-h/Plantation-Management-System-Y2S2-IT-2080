import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';
import axios from 'axios';

const FeedbackList = () => {
    const [feedbackRecords, setFeedbackRecords] = useState([]);
    const [filteredRecords, setFilteredRecords] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchInput, setSearchInput] = useState('');

    useEffect(() => {
        setLoading(true);
        axios
            .get(`http://localhost:5555/feedback`)
            .then((response) => {
                setFeedbackRecords(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        setFilteredRecords(feedbackRecords);
    }, [feedbackRecords]);

    const handleSearch = () => {
        const searchQuery = searchInput.toLowerCase();
        const filtered = feedbackRecords.filter((record) =>
            Object.values(record).some((value) =>
                typeof value === 'string' ? value.toLowerCase().includes(searchQuery) : false
            )
        );
        setFilteredRecords(filtered);
    };

    const handleReset = () => {
        setSearchInput('');
        setFilteredRecords(feedbackRecords);
    };

    const handleDelete = (recordId) => {
        axios
            .delete(`http://localhost:5555/feedback/${recordId}`)
            .then(() => {
                setFeedbackRecords((prevRecords) => prevRecords.filter((record) => record._id !== recordId));
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div>
            <div className="flex items-center justify-center mb-4 mt-8">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    className="border rounded-md px-3 py-1 mr-3 focus:outline-none focus:border-blue-500 w-64"
                />
                <button
                    className="bg-black text-white px-4 py-2 rounded-md hover:bg-emerald-700 focus:outline-none "
                    onClick={handleSearch}
                >
                    Search
                </button>
                <button
                    onClick={handleReset}
                    className="bg-black text-white px-4 py-2 rounded-md hover:bg-emerald-700 focus:outline-none ml-4"
                >
                    Reset
                </button>
                <Link to="/dashboard">
                    <button
                        className="bg-black text-white px-8 py-2 rounded-md hover:bg-emerald-700 focus:outline-none ml-4"
                    >
                        View Dashboard
                    </button>
                </Link>
            </div>

            {loading ? (
                <div>Loading...</div>
            ) : (
                <div className="container mx-auto px-10 mt-4 mb-4">
                    <table id="feedback-table" className="w-auto bg-white shadow-md rounded-md overflow-hidden mx-auto">

                        <thead className="bg-gray-200">
                        <tr>
                            <th className="py-2 px-4 border border-gray-400">No</th>
                            <th className="py-2 px-4 border border-gray-400">Name</th>
                            <th className="py-2 px-4 border border-gray-400">Email</th>
                            <th className="py-2 px-4 border border-gray-400">Feedback</th>
                            <th className="py-2 px-4 border border-gray-400">Rating</th>
                            <th className="py-2 px-4 border border-gray-400">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {filteredRecords.map((record, index) => (
                            <tr className="hover:bg-gray-100" key={index}>
                                <td className="py-2 px-4 border border-gray-400">{index + 1}</td>
                                <td className="py-2 px-4 border border-gray-400">{record.name}</td>
                                <td className="py-2 px-4 border border-gray-400">{record.email}</td>
                                <td className="py-2 px-4 border border-gray-400">{record.feedback}</td>
                                <td className="py-2 px-4 border border-gray-400">{record.rating}</td>
                                <td className="py-2 px-4 border border-gray-400">
                                    <div className="flex">
                                        <Link
                                            to={`/feedback/${record._id}`} // Update the path to match the feedback form URL
                                            className="bg-black text-white px-4 py-2 rounded-md hover:bg-lime-400 hover:text-black transition duration-300 cursor-pointer border-none flex items-center"
                                        >
                                            <FaEdit className="mr-1"/>
                                            <span>Edit</span>
                                        </Link>

                                        <button
                                            className="bg-black text-white px-4 py-2 rounded-md hover:bg-lime-400 hover:text-black transition duration-300 cursor-pointer ml-6 border-none flex items-center"
                                            onClick={() => handleDelete(record._id)}
                                        >
                                            <FaTrash className="mr-1"/>
                                            <span>Delete</span>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default FeedbackList;
