import {useKindeAuth} from "@kinde-oss/kinde-auth-react";
import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon, UserCircleIcon } from '@heroicons/react/20/solid'

const products = [
    { name: 'Assign a Task', description: 'Assign tasks to your employees', href: '#', icon: ChartPieIcon },
    { name: 'Monitor Progress', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
    { name: 'Payments', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },

]
const callsToAction = [
    { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
    { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const { login, register } = useKindeAuth();



    return (
        <header className="bg-white bg-opacity-70 backdrop-blur text-emerald-950 sticky top-0 w-screen z-50 shadow-md">
            <nav
                className="text-lg h-full  mx-auto flex max-w-7xl items-center relative justify-between p-6 lg:px-8 py-2 gap-4">
                <div className="flex lg:flex-1">
                    <a href="/" className="-m-1.5 p-1.5">
                        <span className="text-2xl font-bold flex flex-row">ELEMAHANA <span
                            className="font-light text-base">&trade;</span></span>
                    </a>
                </div>
                <a href="/" className="nav-item">
                    <div
                        className=" h-full font-medium px-6 rounded-full transition-all duration-200 hover:bg-lime-200">
                        Home

                    </div>
                </a>
                <a href="/placeOrder" className="nav-item">
                    <div className="h-full font-medium px-6 rounded-full transition-all duration-200 hover:bg-lime-200">
                        Marketplace

                    </div>
                </a>
                <a href="/tourism" className="nav-item">
                    <div className="h-full font-medium px-6 rounded-full transition-all duration-200 hover:bg-lime-200">
                        Visit Us

                    </div>
                </a>
                <a href="/dashboard" className="nav-item">
                    <div className="h-full font-medium px-6 rounded-full transition-all duration-200 hover:bg-lime-200">
                        Dashboard

            </div></a>

            <div
                className="hidden lg:flex lg:flex-1 lg:justify-end gap-4 font-medium content-center items-center align-middle">
                <button onClick={register} type="button"
                        className="border-black border px-4 rounded-full hover:border-lime-600 hover:text-lime-600">Register
                </button>
                |
                <button onClick={login} type="button" className="hover:text-lime-600">Log In</button>
                <UserCircleIcon className="w-6 h-6"/>
            </div>
        </nav>
</header>


)
}