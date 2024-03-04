import {Link} from "react-router-dom";
import {BsInfoCircle} from "react-icons/bs";
import {AiOutlineEdit} from "react-icons/ai";
import {MdOutlineDelete} from "react-icons/md";


export default function DiseaseList({diseases}) {
    return (
        <table className='w-full border-separate border-spacing-2'>
            <thead>
            <tr>
                <th className='border border-slate-600 rounded-md'>Disease Name</th>
                <th className='border border-slate-600 rounded-md'>Crop Type</th>
                <th className='border border-slate-600 rounded-md'>Date</th>
                <th className='border border-slate-600 rounded-md'>Location</th>
                <th className='border border-slate-600 rounded-md'>Severity</th>
                <th className='border border-slate-600 rounded-md'>Treatment</th>
                <th className='border border-slate-600 rounded-md max-md:hidden'>Status</th>
            </tr>
            </thead>
            <tbody>
            {diseases.map((drecord, index) => (
                <tr key={drecord._id} className='h-8'>
                    <td className='border-slate-700 rounded-md text-center'>
                        {drecord.disease_name}
                    </td>
                    <td className='border-slate-700 rounded-md text-center'>
                        {drecord.cropType}
                    </td>
                    <td className='border-slate-700 rounded-md text-center'>
                        {drecord.date}
                    </td>
                    <td className='border-slate-700 rounded-md text-center'>
                        {drecord.location}
                    </td>
                    <td className='border-slate-700 rounded-md text-center'>
                        {drecord.severity}
                    </td>
                    <td className='border-slate-700 rounded-md text-center'>
                        {drecord.treatment}
                    </td>
                    <td className='border-slate-700 rounded-md text-center max-md:hidden'>
                        {drecord.status}
                    </td>
                    <td className='border-slate-700 rounded-md text-center'>
                        <div className='flex justify-center gap-4'>
                            <Link to={'/diseases/records/viewDisease/${drecord._id}'}>
                                <BsInfoCircle className='text-2xl text-green-800'/>
                            </Link>
                            <Link to={'/diseases/records/updateDisease/${drecord._id}'}>
                                <AiOutlineEdit className='text-2xl text-yellow-600'/>
                            </Link>
                            <Link to={'/diseases/records/deleteDisease/${drecord._id}'}>
                                <MdOutlineDelete className='text-2xl text-red-600'/>
                            </Link>
                        </div>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}