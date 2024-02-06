import {
    PencilSquareIcon,
    TrashIcon
} from '@heroicons/react/24/outline'
import {ChevronDownIcon} from "@heroicons/react/20/solid";

export default function TransactionsList() {
    return (
        <div className=" overflow-x-auto  ">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <caption
                    className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                    Transaction records
                    <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Browse a list of all income and expense records stored in the system</p>
                </caption>
                <thead className="text-xs text-gray-700 shadow-md uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Date
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Type
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Amount
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Description
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Payer/Payee
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Payment Method
                    </th>
                    <th scope="col" className="px-6 py-3">
                        <span className="sr-only">Edit</span>
                    </th>
                </tr>
                </thead>
                <tbody>
                {/*
                {testRecords.map((data, index) => (
                    <tr key={index}
                        className={index % 2 === 0 ? "bg-white border-b dark:bg-gray-800 dark:border-gray-700" : "bg-white dark:bg-gray-800"}>
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {testRecords.first_name}
                        </th>
                        <td className="px-6 py-4">
                            {testRecords.uemail}
                        </td>
                        <td className="px-6 py-4">
                            {testRecords.country}
                        </td>
                        <td className="px-6 py-4">
                            {testRecords.first_name}
                        </td>
                        <td className="px-6 py-4">
                            {testRecords.first_name}
                        </td>
                        <td className="px-6 py-4">
                            {testRecords.first_name}
                        </td>
                        <td className="px-6 py-4">
                            {testRecords.first_name}
                        </td>
                        <td className="px-6 py-4 text-right">
                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        </td>
                    </tr>
                ))} */}
                </tbody>
            </table>
        </div>
    )
}
