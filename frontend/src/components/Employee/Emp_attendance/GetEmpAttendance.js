import React, { useState } from 'react';

const GetEmpAttendance = () => {
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [attendanceData, setAttendanceData] = useState({});

    // Dummy employee data
    const employees = [
        { id: 1, name: 'Amal Subasinghe' },
        { id: 2, name: 'Hemapala Kuruvita' },
        { id: 3, name: 'Kamani Hewage' },
        // Add more employees as needed
    ];

    // Handle employee selection
    const handleEmployeeSelect = (employee) => {
        setSelectedEmployee(employee);
        // Reset attendance data for selected employee if any
        setAttendanceData({});
    };

    // Handle attendance radio button change
    const handleAttendanceChange = (date, value) => {
        setAttendanceData({
            ...attendanceData,
            [date]: value,
        });
    };

    // Generate calendar for the month
    const generateCalendar = () => {
        // You can customize the range of dates as per your requirement
        const startDate = new Date(2024, 3, 1); // April 1, 2024
        const endDate = new Date(2024, 3, 30); // April 30, 2024

        const calendar = [];
        let currentDate = new Date(startDate);

        while (currentDate <= endDate) {
            const dateString = currentDate.toISOString().split('T')[0];
            const attendance = attendanceData[dateString] || '';

            calendar.push(
                <div key={dateString} className="flex items-center space-y-2">
                    <span className="text-gray-600 mr-96">{dateString}</span>
                    <div className="flex justify-end items-center space-x-4">
                        <input
                            type="radio"
                            name={`attendance-${dateString}`}
                            value="present"
                            checked={attendance === 'present'}
                            onChange={() => handleAttendanceChange(dateString, 'present')}
                        />
                        <label className="text-green-600 ">Present</label>
                        <input
                            type="radio"
                            name={`attendance-${dateString}`}
                            value="absent"
                            checked={attendance === 'absent'}
                            onChange={() => handleAttendanceChange(dateString, 'absent')}
                        />
                        <label className="text-red-600 ">Absent</label>
                        <input
                            type="radio"
                            name={`attendance-${dateString}`}
                            value="halfday"
                            checked={attendance === 'halfday'}
                            onChange={() => handleAttendanceChange(dateString, 'halfday')}
                        />
                        <label className="text-yellow-600 ">Half Day</label>
                    </div>
                </div>
            );

            // Move to the next day
            currentDate.setDate(currentDate.getDate() + 1);
        }

        return calendar;
    };

    return (
        <div className="flex justify-center">
            {/* Sidebar for employee selection */}
            <div className="w-1/4 bg-gray-100 p-4">
                <h2 className="text-lg font-semibold mb-4">Employee List</h2>
                <ul>
                    {employees.map((employee) => (
                        <li key={employee.id} onClick={() => handleEmployeeSelect(employee)} className="cursor-pointer hover:bg-gray-200 p-2 rounded">
                            {employee.name}
                        </li>
                    ))}
                </ul>
            </div>
            {/* Attendance Display */}
            <div className="w-3/4 p-4">
                {selectedEmployee && (
                    <div>
                        <h2 className="text-lg font-semibold mb-4">{`Attendance for ${selectedEmployee.name}`}</h2>
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                    <th scope="col" className="pr-10 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider ">Attendance</th>
                                </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                {generateCalendar()}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default GetEmpAttendance;
