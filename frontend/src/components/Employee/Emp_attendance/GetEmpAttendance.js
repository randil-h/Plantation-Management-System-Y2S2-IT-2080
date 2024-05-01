import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useSnackbar } from "notistack";

const GetEmpAttendance = () => {
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
    const [attendanceData, setAttendanceData] = useState({});
    const [loading, setLoading] = useState(false);
    const { enqueueSnackbar } = useSnackbar();

    // Dummy employee data
    const employees = [
        { id: 1, e_name: 'Amal Subasinghe' },
        { id: 2, e_name: 'Hemapala Kuruvita' },
        { id: 3, e_name: 'Kamani Hewage' },
        { id: 4, e_name: 'Chatura Pahathgama' },
        { id: 5, e_name: 'Thushari Liyanagama' },
        { id: 6, e_name: 'Senanai Rathnapitiya' },
        { id: 7, e_name: 'Ajith Nanayakkara' },
        { id: 8, e_name: 'Sumeda Pathirana' },
        { id: 9, e_name: 'Nimal Anandha' },
        { id: 10, e_name: 'Priyantha Perera' },
        { id: 11, e_name: 'Sarath Jayasekara' },
        { id: 12, e_name: 'Sasiru Gamalath' },
        { id: 13, e_name: 'Jeewani Liyanage' },
        { id: 14, e_name: 'Nayanakantha Jayamaha' },
        { id: 15, e_name: 'Muditha Ranasinghe' },
        { id: 16, e_name: 'Rohitha Rathnayaka' },
        { id: 17, e_name: 'Manjula Sooriyaarachi' },
        { id: 18, e_name: 'Wasantha Kalubowila' },
        { id: 19, e_name: 'Nadeeka Wijethunga' },
        { id: 20, e_name: 'Praboth Athuraliya' },
        { id: 21, e_name: 'Lalith Karunasiri' },

    ];

    useEffect(() => {
        // Load or reset attendance data when the date changes
        const loadData = () => {
            const savedData = localStorage.getItem(`attendanceData-${selectedDate}`);
            if (savedData) {
                setAttendanceData(JSON.parse(savedData));
            } else {
                setAttendanceData({});
            }
        };

        loadData();
    }, [selectedDate]);

    useEffect(() => {
        // Save to localStorage whenever attendanceData changes
        if (Object.keys(attendanceData).length > 0) {  // Only save if there's data to save
            localStorage.setItem(`attendanceData-${selectedDate}`, JSON.stringify(attendanceData));
        }
    }, [attendanceData, selectedDate]);

    const handleAttendanceChange = async (employeeName, value) => {
        const updatedAttendanceData = {
            ...attendanceData,
            [employeeName]: value,
        };

        setAttendanceData(updatedAttendanceData);

        try {
            const attendanceRecord = {
                e_name:employeeName,
                e_date: selectedDate,
                att_status: value,
            };

            await axios.post('https://elemahana-backend.vercel.app/attendanceRecords', attendanceRecord);
            enqueueSnackbar('Attendance recorded successfully', { variant: 'success' });
        } catch (error) {
            enqueueSnackbar('Error recording attendance', { variant: 'error' });
            console.error('Error updating attendance:', error);
        }
    };

    return (
        <div className="flex justify-center">
            <div className="w-1/4 bg-gray-100 p-4">
                <h2 className="text-lg font-semibold mb-4">Select Date</h2>
                <input
                    type="date"
                    value={selectedDate}
                    onChange={event => setSelectedDate(event.target.value)}
                    className="cursor-pointer p-2 w-full border rounded"
                />
            </div>
            <div className="w-3/4 p-4">
                <h2 className="text-lg font-semibold mb-4">Daily Attendance</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Employee</th>
                            <th scope="col" className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Attendance</th>
                        </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                        {employees.map(employee => (
                            <tr key={employee.id}>
                                <td className="px-4 py-2 whitespace-nowrap">{employee.e_name}</td>
                                <td className="px-4 py-2 whitespace-nowrap text-center">
                                    <div className="flex justify-center space-x-4">
                                        <label className="text-green-500">
                                            <input
                                                type="radio"
                                                name={`attendance-${employee.e_name}`}
                                                value="present"
                                                checked={attendanceData[employee.e_name] === 'present'}
                                                onChange={() => handleAttendanceChange(employee.e_name, 'present')}
                                            /> Present
                                        </label>
                                        <label className="text-red-500">
                                            <input
                                                type="radio"
                                                name={`attendance-${employee.e_name}`}
                                                value="absent"
                                                checked={attendanceData[employee.e_name] === 'absent'}
                                                onChange={() => handleAttendanceChange(employee.e_name, 'absent')}
                                            /> Absent
                                        </label>
                                        <label className="text-yellow-500">
                                            <input
                                                type="radio"
                                                name={`attendance-${employee.e_name}`}
                                                value="halfday"
                                                checked={attendanceData[employee.e_name] === 'halfday'}
                                                onChange={() => handleAttendanceChange(employee.e_name, 'halfday')}
                                            /> Half Day
                                        </label>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default GetEmpAttendance;
