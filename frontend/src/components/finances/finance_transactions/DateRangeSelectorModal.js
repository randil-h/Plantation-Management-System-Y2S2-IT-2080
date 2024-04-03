import React, { useState } from 'react';
import { saveAs } from 'file-saver';

const DateRangeSelectorModal = ({ onClose, onDownload }) => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handleDownload = () => {
        onDownload(startDate, endDate);
        onClose();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-lg font-semibold mb-4">Select Date Range</h2>
                <div className="mb-4">
                    <label className="block mb-2">Start Date</label>
                    <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="border border-gray-300 rounded px-3 py-1 text-sm w-full"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">End Date</label>
                    <input
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        className="border border-gray-300 rounded px-3 py-1 text-sm w-full"
                    />
                </div>
                <div className="flex justify-end">
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-4"
                        onClick={handleDownload}
                    >
                        Download PDF
                    </button>
                    <button
                        className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
                        onClick={onClose}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DateRangeSelectorModal;
