import React, { Fragment, useState } from 'react'
import {Link, useLocation} from "react-router-dom";

const menuItems = [
    { name: "Home", path: "/finances/financehome"},
    { name: "Incomes", path: "/finances/financeincome"},
    { name: "Expenses", path: "/finances/financeexpense",},
    { name: "Assets", path: "/employees",},
    { name: "Liabilities", path: "/fertilizer",},
];

export default function Example() {
    const [open, setOpen] = useState(false)
    const location = useLocation();
    const isActive = (path) => location.pathname.startsWith(path);;

    return (
        <div className="bg-gray-100 bg-opacity-50 backdrop-blur fixed top-12 border-b w-screen">
            <header className=" ">
                <nav aria-label="Top" className="">
                    <div className=" border-gray-200 pl-8">
                        <div className="flex items-center justify-center">
                            <ul className="flex flex-row items-center w-full gap-2 text-gray-800 px-2 text-sm h-8">
                                {menuItems.map((item) => (
                                    <li
                                        key={item.name}
                                        className={`flex focus:outline-none focus:ring focus:ring-lime-500 ${
                                            isActive(item.path) ? " text-gray-100 px-2 py-0.5 bg-gradient-to-tr from-emerald-500 via-green-500 to-lime-400 rounded-full " : "hover:text-gray-600"
                                        }`}
                                    >
                                        <Link to={item.path} className="px-2 flex items-center ">
                                            {item.icon && <item.icon className="mr-4"/>}
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}
