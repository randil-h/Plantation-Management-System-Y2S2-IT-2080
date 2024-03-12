import {
    PencilSquareIcon,
    TrashIcon,
    InformationCircleIcon
} from '@heroicons/react/24/outline'


export default function TaskList() {
    return (
        <div className=" overflow-x-auto  ">

            <div className="flex flex-row justify-between items-center px-8 py-4">
                <div>
                    <h1 className=" text-lg font-semibold text-left">Task Details</h1>
                    <p className="mt-1 text-sm font-normal text-gray-500 0">Easily access stored task details
                        within the system for thorough insights.</p>
                </div>

                <div>
                    <a href="/employees/tasks/addTask"
                       className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900">
                        Add new task <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </div>

            <table className="w-full text-sm text-left rtl:text-right text-gray-500  ">
                <thead
                    className="text-xs text-gray-700 shadow-md uppercase bg-gray-100 border-l-4 border-gray-500 ">
                <tr className=" ">
                    <th></th>
                    <th scope="col" className="px-6 py-3">
                        Employee ID
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Task
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Assign Date
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Due Date
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Task Description
                    </th>
                    <th scope="col" className=" py-3">
                        <span className="sr-only">Info</span>
                    </th>
                    <th scope="col" className=" py-3">
                        <span className="sr-only">Edit</span>
                    </th>
                    <th scope="col" className=" py-3">
                        <span className="sr-only">Delete</span>
                    </th>
                </tr>
                </thead>
                {/*     <tbody className="border-b border-green-400">*/}

                {/*    {TransactionsRecords.map((record, index) => (*/}
                {/*        <tr key={record._id}*/}
                {/*            className={` divide-y*/}
                {/*${record.type === 'expense' ? 'border-l-4 border-red-400 ' : 'border-l-4 border-green-400 '}`}*/}
                {/*        >*/}
                {/*            <td></td>*/}
                {/*            <td className="px-6 py-4">*/}
                {/*                {record.date}*/}
                {/*            </td>*/}
                {/*            <td className="px-6 py-4">*/}
                {/*                {record.type}*/}
                {/*            </td>*/}
                {/*            <td className="px-6 py-4">*/}
                {/*                {record.amount}*/}
                {/*            </td>*/}
                {/*            <td className="px-6 py-4">*/}
                {/*                {record.description}*/}
                {/*            </td>*/}
                {/*            <td className="px-6 py-4">*/}
                {/*                {record.payer_payee}*/}
                {/*            </td>*/}
                {/*            <td className="px-6 py-4">*/}
                {/*                {record.method}*/}
                {/*            </td>*/}
                {/*            <td className=" py-4 text-right">*/}
                {/*                <a href="/finances/transactions/viewTransactionDetails" className="font-medium text-blue-600  hover:underline">*/}
                {/*                    <InformationCircleIcon*/}
                {/*                        className="h-6 w-6 flex-none bg-gray-300 p-1 rounded-full text-gray-800 hover:bg-gray-500"*/}
                {/*                        aria-hidden="true"/>*/}
                {/*                </a>*/}
                {/*            </td>*/}
                {/*            <td className=" py-4 text-right">*/}
                {/*                <a href="#" className="font-medium text-blue-600 hover:underline">*/}
                {/*                    <PencilSquareIcon*/}
                {/*                        className="h-6 w-6 flex-none bg-blue-200 p-1 rounded-full text-gray-800 hover:bg-blue-500"*/}
                {/*                        aria-hidden="true"/>*/}
                {/*                </a>*/}
                {/*            </td>*/}
                {/*            <td className=" py-4 text-right">*/}
                {/*                <a href="/finances/transactions/deleteTransaction" className="font-medium text-blue-600 hover:underline">*/}
                {/*                    <TrashIcon*/}
                {/*                        className="h-6 w-6 flex-none bg-red-200 p-1 rounded-full text-gray-800 hover:bg-red-500"*/}
                {/*                        aria-hidden="true"/>*/}
                {/*                </a>*/}
                {/*            </td>*/}
                {/*        </tr>*/}
                {/*    ))}*/}


                {/*    </tbody> */}
            </table>
        </div>
    )
}