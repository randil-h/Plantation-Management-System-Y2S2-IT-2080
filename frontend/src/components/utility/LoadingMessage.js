import React from "react";

const LoadingMessage = () => {
    return (
        <div className="flex items-center h-screen flex-col">
            {/* Centering container */}
            <div className="flex justify-center items-center w-64 h-64">
                {/* Image */}
                <img src="/E.gif" alt="Loading" className="w-full h-auto"/>
            </div>
            <div>
                <p className= "font-medium text-lg text-center">
                    Prices are being generated. This may take a while..... ඉවසන්න pls!<br/>
                    (ඉවසන ධනා රුපු උදයට ජය කොඩිය)
                </p>
            </div>

        </div>
    );
};

export default LoadingMessage;
