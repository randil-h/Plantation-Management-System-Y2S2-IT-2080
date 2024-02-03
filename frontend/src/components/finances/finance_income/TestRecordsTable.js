import { Link } from 'react-router-dom';
import {BsInfoCircle} from "react-icons/bs";
import {AiOutlineEdit} from "react-icons/ai";
import {MdOutlineDelete} from "react-icons/md";
import React from "react";

export default function  TestRecordsTable({testRecords}) {
    return (
        <div className="flex flex-col items-center">
            <table className="p-4 w-10/12 ">
                <thead className="text-md ">
                <tr>
                    <th className='border-b border-slate-300 rounded-md'>No</th>
                    <th className='border-b border-slate-300 rounded-md'>First Name</th>
                    <th className='border-b border-slate-300 rounded-md max-md:hidden'>Last Name</th>
                    <th className='border-b border-slate-300 rounded-md max-md:hidden'>Email</th>
                    <th className='border-b border-slate-300 rounded-md'>Country</th>
                    <th className='border-b border-slate-300 rounded-md'>Street</th>
                    <th className='border-b border-slate-300 rounded-md'>City</th>
                    <th className='border-b border-slate-300 rounded-md'>State</th>
                    <th className='border-b border-slate-300 rounded-md'>Postal code</th>
                    <th className='border-b border-slate-300 rounded-md'>Operations</th>
                </tr>
                </thead>
                <tbody>
                {testRecords && testRecords.map((testRecords, index) => (
                    <tr key={testRecords._id} className='h-8'>
                        <td className='border border-slate-700 rounded-md text-center'>
                            {index + 1}
                        </td>
                        <td className='border border-slate-700 rounded-md text-center'>
                            {testRecords.first_name}
                        </td>
                        <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                            {testRecords.last_name}
                        </td>
                        <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                            {testRecords.uemail}
                        </td>
                        <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                            {testRecords.country}
                        </td>
                        <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                            {testRecords.street_address}
                        </td>
                        <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                            {testRecords.city}
                        </td>
                        <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                            {testRecords.region}
                        </td>
                        <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                            {testRecords.postal_code}
                        </td>


                        <td className='border border-slate-700 rounded-md text-center'>
                            <div className='flex justify-center gap-x-4'>
                                <Link to={`/financeincome/viewrecord/${testRecords._id}`}>
                                    <BsInfoCircle className='text-2xl text-green-800'/>
                                </Link>
                                <Link to={`/financeincome/updaterecord/${testRecords._id}`}>
                                    <AiOutlineEdit className='text-2xl text-yellow-600'/>
                                </Link>
                                <Link to={`/financeincome/deleterecord/${testRecords._id}`}>
                                    <MdOutlineDelete className='text-2xl text-red-600'/>
                                </Link>
                            </div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}