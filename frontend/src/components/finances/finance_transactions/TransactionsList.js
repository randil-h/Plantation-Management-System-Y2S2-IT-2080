import {
    PencilSquareIcon,
    TrashIcon
} from '@heroicons/react/24/outline'
import {ChevronDownIcon} from "@heroicons/react/20/solid";

export default function TransactionsList({TransactionsRecords}) {
    return (
        <div className=" overflow-x-auto  ">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <caption
                    className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                    Transaction records
                    <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Browse a list of all income
                        and expense records stored in the system</p>
                    <a
                        href="/finances/transactions/addTransaction"

                        className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                    >
                        Add new transaction <span aria-hidden="true">&rarr;</span>
                    </a>
                </caption>
                <thead
                    className="text-xs text-gray-700 shadow-md uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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

                {TransactionsRecords.map((TransactionsRecords, index) => (
                    <tr key={TransactionsRecords._id}
                        className={index % 2 === 0 ? "bg-white border-b dark:bg-gray-800 dark:border-gray-700" : "bg-white dark:bg-gray-800"}>
                        <td className="px-6 py-4">
                            {TransactionsRecords.date}
                        </td>
                        <td className="px-6 py-4">
                            {TransactionsRecords.type}
                        </td>
                        <td className="px-6 py-4">
                            {TransactionsRecords.amount}
                        </td>
                        <td className="px-6 py-4">
                            {TransactionsRecords.description}
                        </td>
                        <td className="px-6 py-4">
                            {TransactionsRecords.payer_payee}
                        </td>
                        <td className="px-6 py-4">
                            {TransactionsRecords.method}
                        </td>
                        <td className="px-6 py-4 text-right">
                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}
