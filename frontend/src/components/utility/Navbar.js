import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { Fragment, useEffect, useState } from 'react';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import {
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    XMarkIcon,
    UserCircleIcon
} from '@heroicons/react/24/outline';
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { login, register, onRedirectCallback, logout, user, isAuthenticated, isLoading } = useKindeAuth();

    useEffect(() => {
        const handleRedirectCallback = async () => {
            try {
                const { user, app_state } = await onRedirectCallback();
                console.log({ user, app_state });
                // Additional handling of user and app_state if needed
            } catch (error) {
                console.error('Error handling redirect callback:', error);
            }
        };

        handleRedirectCallback();
    }, [onRedirectCallback]);

    if (isLoading) {
        return <p>Loading</p>;
    }

    return (
        <header className="bg-white bg-opacity-70 backdrop-blur text-emerald-950 sticky top-0 w-screen z-50 shadow-md">
            <nav
                className="text-lg h-full mx-auto flex max-w-7xl items-center relative justify-between p-6 lg:px-8 py-2 gap-4">
                {/* Navbar content */}
                <div className="flex lg:flex-1">
                    <a href="/" className="-m-1.5 p-1.5">
                        <span className="text-2xl font-bold flex flex-row">ELEMAHANA <span
                            className="font-light text-base">&trade;</span></span>
                    </a>
                </div>
                <a href="/" className="nav-item">
                    <div
                        className="h-full font-medium px-6 rounded-full transition-all duration-200 hover:bg-lime-200">Home
                    </div>
                </a>
                <a href="/placeOrder" className="nav-item">
                    <div
                        className="h-full font-medium px-6 rounded-full transition-all duration-200 hover:bg-lime-200">Marketplace
                    </div>
                </a>
                <a href="/tourism" className="nav-item">
                    <div
                        className="h-full font-medium px-6 rounded-full transition-all duration-200 hover:bg-lime-200">Visit
                        Us
                    </div>
                </a>
                <a href="/dashboard" className="nav-item">
                    <div
                        className="h-full font-medium px-6 rounded-full transition-all duration-200 hover:bg-lime-200">Dashboard
                    </div>
                </a>
                <div
                    className="hidden lg:flex lg:flex-1 lg:justify-end gap-4 font-medium content-center items-center align-middle">
                    {isAuthenticated ? (
                        <>
                            <div className="text-sm text-gray-600">Welcome, {user.email}</div>
                            <button onClick={logout}
                                    className="px-3 py-1 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <button onClick={register} type="button"
                                    className="px-3 py-1 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">Register
                            </button>
                            <button onClick={() => login({authUrlParams: {login_hint: "john@exmail.com"}})}
                                    type="button"
                                    className="px-3 py-1 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Log
                                In
                            </button>
                        </>
                    )}
                    <UserCircleIcon className="w-6 h-6"/>
                </div>

            </nav>
        </header>
    );
}
