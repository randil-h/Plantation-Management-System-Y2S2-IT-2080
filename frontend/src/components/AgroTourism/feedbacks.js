import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Feedback() {
    return (
        <div>
            <p className="text-3xl font-semibold text-center">
                Visitor Stories: Hear What Others Have Experienced
            </p>
            <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Customer 1 Feedback */}
                    <div className="bg-white border border-gray-600 p-4 mb-6 rounded-xl">
                        <p className="text-xl font-semibold mb-2">Anna</p>
                        <p>Great experience! Would highly recommend.</p>
                        <div><br/></div>
                        <div className="flex">
                            <FaStar className="text-yellow-500"/>
                            <FaStar className="text-yellow-500"/>
                            <FaStar className="text-yellow-500"/>
                            <FaStar className="text-yellow-500"/>
                        </div>
                    </div>

                    {/* Customer 2 Feedback */}
                    <div className="bg-white border border-gray-600 p-4 mb-6 rounded-xl">
                        <p className="text-xl font-semibold mb-2">Eric</p>
                        <p>Good service. Enjoyed the visit.</p>
                        <div><br/></div>
                        <div className="flex">
                            <FaStar className="text-yellow-500"/>
                            <FaStar className="text-yellow-500"/>
                            <FaStar className="text-yellow-500"/>
                        </div>
                    </div>
                    <div className="bg-white border border-gray-600 p-4 mb-6 rounded-xl">
                        <p className="text-xl font-semibold mb-2">James</p>
                        <p>It was a pleasant visit and amazing experience. I would totally recommend this to others.</p>
                        <div className="flex">
                            <FaStar className="text-yellow-500"/>
                            <FaStar className="text-yellow-500"/>
                            <FaStar className="text-yellow-500"/>
                            <FaStar className="text-yellow-500"/>
                            <FaStar className="text-yellow-500"/>
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
