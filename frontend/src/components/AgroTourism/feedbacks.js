import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";


export default function Feedback() {
    return (
        <div>
            <p className="text-3xl font-semibold text-center">
                Visitor Stories: Hear What Others Have Experienced
            </p>
            <div className="p-8">
                <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center">
                    {/* Customer 1 Feedback */}
                    <div className="bg-white border border-gray-600 p-4 mb-6 rounded-xl">
                        {/* Profile picture */}
                        <img src="/profile1.jpg" alt="Anna" className="rounded-full h-20 w-20 mx-auto mb-2" />
                        <p className="text-xl font-semibold mb-2">Anna</p>
                        <p>My experience was absolutely wonderful! The staff was incredibly helpful and friendly. I would highly recommend this place to anyone looking for a memorable experience.</p>
                        <div><br/><br/></div>
                        <div className="flex justify-center">
                            <FaStar className="h-5 w-5 text-yellow-500"/>
                            <FaStar className="h-5 w-5 text-yellow-500"/>
                            <FaStar className="h-5 w-5 text-yellow-500"/>
                            <FaStar className="h-5 w-5 text-yellow-500"/>
                        </div>
                    </div>

                    {/* Customer 2 Feedback */}
                    <div className="bg-white border border-gray-600 p-4 mb-6 rounded-xl">
                        {/* Profile picture */}
                        <img src="/oprofile2.jpg" alt="Eric" className="rounded-full h-20 w-20 mx-auto mb-2" />
                        <p className="text-xl font-semibold mb-2">Eric</p>
                        <p>I had a great time during my visit. The atmosphere was welcoming, and the service was top-notch. I will definitely be returning in the future.</p>
                        <div><br/><br/></div>
                        <div className="flex justify-center">
                            <FaStar className="h-5 w-5 text-yellow-500"/>
                            <FaStar className="h-5 w-5 text-yellow-500"/>
                            <FaStar className="h-5 w-5 text-yellow-500"/>
                        </div>
                    </div>
                    {/* Customer 3 Feedback */}
                    <div className="bg-white border border-gray-600 p-4 mb-6 rounded-xl">
                        {/* Profile picture */}
                        <img src="/profile3.jpg" alt="Michelle" className="rounded-full h-20 w-20 mx-auto mb-2" />
                        <p className="text-xl font-semibold mb-2">James</p>
                        <p>I can't say enough good things about my experience here. From the moment I walked in, I felt valued and well taken care of. The facilities were clean, and the staff went above and beyond to ensure my comfort. I will be recommending this place to all my friends and family.</p>
                        <div className="flex justify-center">
                            <FaStar className="h-5 w-5 text-yellow-500"/>
                            <FaStar className="h-5 w-5 text-yellow-500"/>
                            <FaStar className="h-5 w-5 text-yellow-500"/>
                            <FaStar className="h-5 w-5 text-yellow-500"/>
                            <FaStar className="h-5 w-5 text-yellow-500"/>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center mt-4 mb-4">
                    <p className="text-xl">
                        Want to give us a feedback?{" "}
                        <Link to="/feedback" className="text-blue-500">
                            Click here
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
