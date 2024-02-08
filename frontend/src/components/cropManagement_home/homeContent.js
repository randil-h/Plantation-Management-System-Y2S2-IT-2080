import React from "react";

export default function HomeContent() {
    const handleSeedButtonClick = () => {
        window.location.href = '/seedsPlanting';
    };

    function handleRotationButtonClick() {
        window.location.href = '/rotation';
    }

    function handleFertiliserButtonClick() {
        window.location.href = '/fertiliser';
    }

    return (
        <div className="position left-1/2 w-full col-span-5 flex flex-col ">
            <div className="w-full flex justify-center items-center absolute top-16 right-0 mr-4 mt-4">
                <h1 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    <span className="inline-block bg-white p-2 rounded-lg">Crop Management</span>
                </h1>
            </div>

            <div className="mt-40 ml-auto relative top-20">
                <div
                    className="bg-white p-4 rounded-lg shadow-md text-center absolute left-96 transform -translate-x-1/2 -translate-y-1/2 w-48 h-56 border border-neutral-900 transition duration-300 hover:bg-neutral-300">
                    <h1 className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-black ">Crop
                        rotation management</h1>
                    <div className="space-x-4">
                        <button onClick={handleRotationButtonClick}
                                className="bg-black text-white px-8 py-2 rounded-full font-semibold text-lg transition duration-300 hover:bg-lime-500 mt-4">Go
                            to page
                        </button>
                    </div>
                </div>

                <div
                    className="bg-white p-4 rounded-lg shadow-md text-center absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-56 border border-neutral-900 transition duration-300 hover:bg-neutral-300 ml-1.5">
                    <h1 className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-black ">Seeds/Planting</h1>
                    <div className="space-x-4">
                        <button onClick={handleSeedButtonClick}
                                className="bg-black text-white px-8 py-2 rounded-full font-semibold text-lg transition duration-300 hover:bg-lime-500 mt-11">Go
                            to page
                        </button>
                    </div>
                </div>

                <div
                    className="bg-white p-4 rounded-lg shadow-md text-center absolute left-3/4 transform -translate-x-1/2 -translate-y-1/2 w-48 h-56 border border-neutral-900 transition duration-300 hover:bg-neutral-300">
                    <h1 className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-black ">Add
                        Fertiliser</h1>
                    <div className="space-x-4">
                        <button onClick={handleFertiliserButtonClick}
                                className="bg-black text-white px-8 py-2 rounded-full font-semibold text-lg transition duration-300 hover:bg-lime-500 mt-11">Go
                            to page
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
