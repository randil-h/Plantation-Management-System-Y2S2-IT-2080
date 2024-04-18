import React from 'react';

const ProgressBar = ({ progress }) => {
    return (
        <div className="bg-gray-200 h-2 w-1/8 rounded-full">
            <div
                className="bg-blue-500 h-full rounded-full"
                style={{ width: `${50}%` }}
            ></div>
        </div>
    );
};

export default ProgressBar;
