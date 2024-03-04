// ProgressStepper.js
import React from 'react';
import { FaUser, FaMoneyBill, FaCheck } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const ProgressStepper = () => {
    const location = useLocation();

    const getCurrentStep = (pathname) => {
        switch (pathname) {
            case '/booking':
                return 1;
            case '/payment':
                return 2;
            case '/confirmation':
                return 3;
            default:
                return 1; // Default to the first step
        }
    };

    const currentStep = getCurrentStep(location.pathname);

    const steps = [
        { icon: <FaUser color={currentStep === 1 ? 'white' : 'black'} />, label: 'Step 1: Booking' },
        { icon: <FaMoneyBill color={currentStep === 2 ? 'white' : 'black'} />, label: 'Step 2: Payment' },
        { icon: <FaCheck color={currentStep === 3 ? 'white' : 'black'} />, label: 'Step 3: Confirmation' },
    ];

    return (
        <div className="flex items-center justify-center space-x-8">
            {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center">
                    <div
                        className={`w-12 h-12 flex items-center justify-center rounded-full border-4 mb-3 mt-8 mx-20 ${
                            index + 1 === currentStep
                                ? 'border-black bg-black text-white'
                                : 'border-gray-300 bg-white text-gray-500 '
                        }`}
                    >
                        {step.icon}
                    </div>
                    <p className={`${index + 1 === currentStep ? 'text-black' : 'text-gray-500'}`}>
                        {step.label}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default ProgressStepper;
