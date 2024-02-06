
export default function IncomeRecordsList({ testRecords }) {
    return (
        <div className="flex-col flex items-center justify-center">

            <ul role="list" className="divide-y divide-gray-100 px-0 py-16 w-6/12 ">
                <div className="flex flex-row justify-between my-8 items-center ">

                    <h1 className="text-2xl font-medium">Income Records</h1>
                    <a
                        href="/finances/financeincome/addnewrecord"
                        className=" rounded-full bg-gray-900 px-3.5 py-1 text-sm font-medium text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                    >
                        Add a new record <span aria-hidden="true">&rarr;</span>
                    </a>


                </div>

                {testRecords && testRecords.map((testRecords, index) => (
                    <li key={testRecords._id} className="flex justify-between gap-x-6 py-5 ">

                        <div className="flex min-w-0 gap-x-4">

                            <div className="min-w-0 flex-auto">
                                <p className="text-sm font-semibold leading-6 text-gray-900">{testRecords.first_name.concat(testRecords.last_name) }</p>
                                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{testRecords.uemail}</p>
                            </div>
                        </div>
                        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                            <p className="text-sm leading-6 text-gray-900">{testRecords.street_address.concat(testRecords.city, testRecords.region, testRecords.country)}</p>

                                <p className="mt-1 text-xs leading-5 text-gray-500">
                                    { testRecords.postal_code}
                                </p>

                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
