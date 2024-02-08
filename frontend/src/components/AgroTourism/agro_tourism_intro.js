import { Link } from "react-router-dom";
export default function AgroTourism(){
    return (
        <div>
            <p class="text-center ...">
                <p className="text-5xl ...">
                    <div><br/></div>
                    <h1 className="font-bold ...">Sow,Grow,Explore </h1>
                </p>
                <div><br/></div>
                <p>Discover the beauty of agriculture with us.</p>
                <p class="px-8 ...">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                    incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <div><br/><br/><br/></div>
            </p>
            <div className="px-8 ...">
                <div className="flex justify-center items-center pb-12 ...">
                    <div className="flex space-x-4">
                        {/* Option 1 */}
                        <div className="flex-1 bg-gray-100 p-10 rounded-md">
                            <p className="text-xl font-semibold">Guided farm tours</p>
                            <p>t dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit</p>
                            <div><br/></div>

                        </div>

                        {/* Option 2 */}
                        <div className="flex-1 bg-gray-100 p-10 rounded-md">
                            <p className="text-xl font-semibold">Fruit and vegetable picking</p>
                            <p>farm to plate experience blah blah culpa qui officia deserunt mollit anim id est
                                laborum.Duis
                                aute irure dolor in reprehenderit in voluptate velit esse</p>
                            <div><br/><br/></div>

                        </div>

                        {/* Option 3 */}
                        <div className="flex-1 bg-gray-100 p-10 rounded-md">
                            <p className="text-xl font-semibold">Farm chore exp or workshop idk
                            </p>
                            <p>or workshop and classes.Offer workshops or classes on various agricultural topics such as
                                sustainable farming practices, gardening, or cooking with farm-fresh ingredients.</p>
                            <div><br/></div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="flex p-12">
                {/* Left side with pictures */}
                <div className="w-1/2 px-20">
                    <img
                        src="https://wallpapers.com/images/hd/funny-aesthetic-pictures-orh6df2mtw9ymchj.jpg"  // Replace with your image URLs
                        alt="pic"
                        className="rounded-md w-50 h-60"
                    />
                    {/* Add more images as needed */}
                </div>

                {/* Right side with caption and "Book Now" button */}
                <div className="w-1/2 p-10 bg-gray-100 rounded-xl flex flex-col justify-center items-center">

                    <p className="text-xl mb-4  ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                        eiusmod tempor
                        incididunt ut labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                        ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor</p>

                    <button className="bg-black text-white px-4 py-2 rounded-xl mt-2 hover:bg-emerald-700">
                        <Link to="/booking" className="text-white">
                            Book Now
                        </Link>
                    </button>
                </div>
            </div>


        </div>


    );
}

