import React from 'react';

const ProgressBar = ({ progress }) => {
    return (
        <div className="flex items-center justify-center mt-2 p-4">
            <div className="bg-gray-200 h-2 rounded-full" style={{ width: 1250}}>
                <div
                    className="bg-green-500 h-full rounded-full"
                    style={{width: `${75}%`}}
                ></div>
            </div>
        </div>

    );
};

export default ProgressBar;
