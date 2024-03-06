import React from 'react';

const Confirmation = ({ location }) => {
    const formData = location.state.formData;

    if (!formData) {
        // Handle case when accessing /confirmation without form data
        return (
            <div className="flex justify-center items-center h-screen">
                <h2 className="text-4xl my-8">No booking data available</h2>
            </div>
        );
    }

    // Render the form data in a table or however you prefer
    return (
        <div>
            <h2>Booking Confirmation</h2>
            <table>
                <tbody>
                <tr>
                    <td>Name:</td>
                    <td>{formData.name}</td>
                </tr>
                <tr>
                    <td>Contact Number:</td>
                    <td>{formData.telNo}</td>
                </tr>
                <tr>
                    <td>NIC:</td>
                    <td>{formData.nicNo}</td>
                </tr>
                <tr>
                    <td>Email:</td>
                    <td>{formData.email}</td>
                </tr>
                <tr>
                    <td>Package:</td>
                    <td>{formData.selectedPackage}</td>
                </tr>
                <tr>
                    <td>Date:</td>
                    <td>{formData.package}</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Confirmation;
