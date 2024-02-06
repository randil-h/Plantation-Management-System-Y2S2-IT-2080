import React from 'react';

function Breadcrumb({ items }) {
    return (
        <nav className="flex ml-8 mt-4" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                {items.map((item, index) => (
                    <li key={index} className="inline-flex items-center">
                        {index !== 0 && ( // Add arrow separator for all items except the first one
                            <div className="flex items-center">
                                <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                                </svg>
                            </div>
                        )}
                        <a href={item.href} className="inline-flex items-center text-sm font-normal text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                            {/* Render the name of the breadcrumb item */}
                            {item.name}
                        </a>
                    </li>
                ))}
            </ol>
        </nav>
    );
}

export default Breadcrumb;
