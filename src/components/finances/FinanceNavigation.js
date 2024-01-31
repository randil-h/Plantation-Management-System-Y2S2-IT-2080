import React, { Fragment, useState } from 'react'
import {Link, useLocation} from "react-router-dom";

const menuItems = [
    { name: "Home", path: "/finances"},
    { name: "Incomes", path: "/dashboard"},
    { name: "Expenses", path: "/crops",},
    { name: "Assets", path: "/employees",},
    { name: "Liabilities", path: "/fertilizer",},
];

export default function Example() {
    const [open, setOpen] = useState(false)
    const location = useLocation();
    const isActive = (path) => location.pathname === path;

    return (
        <div className="bg-white sticky top-0">
            <header className="relative ">
                <nav aria-label="Top" className="">
                    <div className="border-b border-gray-200 pl-8">
                        <div className="flex items-center justify-center">
                            <ul className="flex flex-row items-center w-full gap-6 text-gray-800  text-sm h-8">
                                {menuItems.map((item) => (
                                    <li
                                        key={item.name}
                                        className={`flex gap-6 focus:outline-none focus:ring focus:ring-lime-500 ${
                                            isActive(item.path) ? " text-lime-600 border-b border-lime-600" : "hover:text-gray-600"
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
