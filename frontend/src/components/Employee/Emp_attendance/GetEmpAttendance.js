import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";


const GetEmpAttendance = () => {
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [attendanceData, setAttendanceData] = useState({});
    const [loading, setLoading] = useState(false);
    const { enqueueSnackbar } = useSnackbar(); // Snackbar hook for displaying notifications
    const navigate = useNavigate();

    // Dummy employee data
    const employees = [
        { id: 1, e_name: 'Amal Subasinghe' },
        { id: 2, e_name: 'Hemapala Kuruvita' },
        { id: 3, e_name: 'Kamani Hewage' },
        { id: 4, e_name: 'Chatura Pahathgama' },
        { id: 5, e_name: 'Thushari Liyanagama' },
        { id: 6, e_name: 'Senanai Rathnapitiya' },
        { id: 7, e_name: 'Ajith Nanayakkara' },
    ];

    // Handle employee selection
    const handleEmployeeSelect = (employee) => {
        setSelectedEmployee(employee);
        // Reset attendance data for selected employee if any
        setAttendanceData({});
    };

    // Generate calendar for the month
    const generateCalendar = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth();
        const daysInMonth = new Date(year, month + 1, 0).getDate(); // Get total days in the month
        const calendar = [];

        for (let i = 1; i <= daysInMonth; i++) {
            const dateString = new Date(year, month, i).toISOString().split('T')[0];
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
        }

        return calendar;
    };

    // Handle attendance change
    const handleAttendanceChange = (date, value) => {
        setAttendanceData({
            ...attendanceData,
            [date]: value,
        });
    };

    // Save attendance data to MongoDB
    useEffect(() => {
        const saveAttendanceToDatabase = async () => {
            if (selectedEmployee) {
                setLoading(true);
                try {
                    const attendanceRecords = Object.keys(attendanceData).map(date => ({
                        e_name: selectedEmployee.e_name,
                        e_date: new Date(date),
                        att_status: attendanceData[date],
                    }));

                    await axios.post('http://localhost:5555/attendanceRecords', attendanceRecords);

                    enqueueSnackbar('Records created successfully', { variant: 'success' });
                    navigate('/employees/attendance', { state: { highlighted: true } });
                } catch (error) {
                    enqueueSnackbar('Error', { variant: 'error' });
                    console.error('Error saving attendance:', error);
                } finally {
                    setLoading(false);
                }
            }
        };

        saveAttendanceToDatabase();
    }, [attendanceData, selectedEmployee, enqueueSnackbar, navigate]);

    return (
        <div className="flex justify-center ">
            {/* Sidebar for employee selection */}
            <div className="w-1/4 bg-gray-100 p-4 ">
                <h2 className="text-lg font-semibold mb-4">Employee List</h2>
                <ul>
                    {employees.map((employee) => (
                        <li key={employee.id} onClick={() => handleEmployeeSelect(employee)} className="cursor-pointer hover:bg-gray-200 p-2 rounded">
                            {employee.e_name}
                        </li>
                    ))}
                </ul>
            </div>
            {/* Attendance Display */}
            <div className="w-3/4 p-4 ">
                {selectedEmployee && (
                    <div>
                        <h2 className="text-lg font-semibold mb-4">{`Attendance for ${selectedEmployee.e_name}`}</h2>
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
