import { Link } from "react-router-dom";

export default function AgroTourism() {
    return (
        <div>
            <div className="text-center ...">
                <div className="text-5xl ...">
                    <div><br/></div>
                    <h1 className="font-bold ...">Sow, Grow, Explore </h1>
                </div>
                <div><br/></div>
                <p className="text-xl">Discover the beauty of agriculture with us.</p>
                <p className="px-8 text-xl">Welcome to the vibrant world of agro-tourism, where nature's bounty meets
                    the
                    charm of rural landscapes! Our website is your gateway to a unique and immersive experience that
                    blends the tranquility of the countryside with the excitement of agricultural exploration.
                </p>
                <div><br/><br/></div>
                <p className="font-bold text-3xl">Tour Packages</p>
                <div><br/></div>
            </div>
            <div className="px-8 ...">
                <div className="flex justify-center items-center pb-12 text-center">
                    <div className="flex space-x-4">
                        {/* Option 1 */}
                        <div className="flex-1 bg-gray-100 p-10 rounded-md flex flex-col items-center">
                            <p className="text-2xl font-semibold">Guided Farm Tours</p>
                            <p>Explore agriculture up close with our Guided Farm Tours, a hands-on journey into the
                                heart of sustainable farming and rural charm.</p>
                            <div><br/></div>
                            <img src="/agri1.jpg" alt="agri1" className=" w-50 h-60"/>
                            <div><br/></div>
                            <button className="bg-black text-white px-4 py-2 rounded-xl mt-2 hover:bg-emerald-700">
                                <Link to="/farmtour" className="text-white">
                                    View details
                                </Link>
                            </button>

                        </div>

                        {/* Option 2 - Fruit and Vegetable Picking*/}
                        <div className="flex-1 bg-gray-100 p-10 rounded-md flex flex-col items-center">
                            <p className="text-2xl font-semibold">Fruit and Vegetable Picking</p>
                            <p>Embark on a delightful farm-to-plate journey with our Fruit and Vegetable Picking
                                experience, where the lush fields invite you to harvest the freshest produce.</p>
                            <div><br/></div>
                            <img src="/agri2.jpg" alt="agri2" className=" w-50 h-60"/>
                            <div><br/></div>
                            <button className="bg-black text-white px-4 py-2 rounded-xl mt-2 hover:bg-emerald-700">
                                <Link to="/fruitvegpick" className="text-white">
                                    View details
                                </Link>
                            </button>
                        </div>

                        {/* Option 3 */}
                        <div className="flex-1 bg-gray-100 p-10 rounded-md flex flex-col items-center">
                            <p className="text-2xl font-semibold">Farm Chore Experience
                            </p>
                            <p>Embark on an immersive farm chore experience, where hands-on activities blend with the
                                serenity of rural life.</p>
                            <div><br/></div>
                            <img src="/agri3.png" alt="agri3" className=" w-50 h-60"/>
                            <div><br/></div>
                            <button className="bg-black text-white px-4 py-2 rounded-xl mt-2 hover:bg-emerald-700">
                                <Link to="/farmchore" className="text-white">
                                    View details
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="text-center px-8">
                <p className="text-xl mb-2">
                    Embark on a seamless journey to create unforgettable memories with our hassle-free booking process.
                    Dive into the world of agro-tourism and reserve your spot to sow, grow, and explore the beauty of
                    agriculture with just a few clicks. Your next adventure awaits – book now and cultivate
                    extraordinary experiences!
                </p>
                <button
                    className="bg-blue-900 text-white px-4 py-2 rounded-xl mt-2 hover:bg-emerald-700">
                    <Link to="/booking" className="text-white">
                        Book Your Package Now!
                    </Link>
                </button>
                <div><br/><br/></div>
            </div>


        </div>

    );
}
