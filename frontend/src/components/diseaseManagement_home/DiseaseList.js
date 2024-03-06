import {
    PencilSquareIcon,
    TrashIcon,
    InformationCircleIcon
} from '@heroicons/react/24/outline'


export default function DiseaseList({DiseaseRecords}) {
    return (
        <div className=" overflow-x-auto  ">
            <div className="flex flex-row justify-between items-center px-8 py-4">
                <div>
                    <h1 className=" text-lg font-semibold text-left">Disease records</h1>
                </div>

                <div>
                    <a href="/diseases/records/addDisease"
                       className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900">
                        Add New Disease Record <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>

            </div>

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
                {/*<tbody className="border-b border-green-400">

                {DiseaseRecords.map((drecord, index) => (
                    <tr key={drecord._id} className='h-8'>
                        <td className='border border-slate-700 rounded-md text-center'>
                            {drecord.disease_name}
                        </td>
                        <td className='border border-slate-700 rounded-md text-center'>
                            {drecord.cropType}
                        </td>
                        <td className='border border-slate-700 rounded-md text-center'>
                            {drecord.date}
                        </td>
                        <td className='border border-slate-700 rounded-md text-center'>
                            {drecord.location}
                        </td>
                        <td className='border border-slate-700 rounded-md text-center'>
                            {drecord.severity}
                        </td>
                        <td className='border border-slate-700 rounded-md text-center'>
                            {drecord.treatment}
                        </td>
                        <td className='border border-slate-700 rounded-md text-center'>
                            {drecord.status}
                        </td>
                        <td className=" py-4 text-right">
                            <a href="/finances/transactions/viewTransactionDetails"
                               className="font-medium text-blue-600  hover:underline">
                                <InformationCircleIcon
                                    className="h-6 w-6 flex-none bg-gray-300 p-1 rounded-full text-gray-800 hover:bg-gray-500"
                                    aria-hidden="true"/>
                            </a>
                        </td>
                        <td className=" py-4 text-right">
                            <a href="#" className="font-medium text-blue-600 hover:underline">
                                <PencilSquareIcon
                                    className="h-6 w-6 flex-none bg-blue-200 p-1 rounded-full text-gray-800 hover:bg-blue-500"
                                    aria-hidden="true"/>
                            </a>
                        </td>
                        <td className=" py-4 text-right">
                            <a href="/finances/transactions/deleteTransaction"
                               className="font-medium text-blue-600 hover:underline">
                                <TrashIcon
                                    className="h-6 w-6 flex-none bg-red-200 p-1 rounded-full text-gray-800 hover:bg-red-500"
                                    aria-hidden="true"/>
                            </a>
                        </td>
                    </tr>
                ))}


                </tbody>*/}
            </table>
        </div>
    )
}
