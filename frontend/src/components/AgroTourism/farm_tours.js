import { Link } from "react-router-dom";

export default function FarmTour() {
    return (
        <div className="container mx-auto mt-8 p-8">
            <h1 className="text-4xl font-bold mb-4 text-center">Farm Tour Experience</h1>
            <p className="text-lg text-center">
                Immerse yourself in the tranquility of rural life and discover the secrets of sustainable agriculture
                with our Guided Farm Tour.</p>
            <p className="text-lg mb-6 text-center"> Join us for an unforgettable journey through lush fields, hands-on
                experiences, and the beauty of
                nature.
            </p>

            <div className="flex mb-8 items-center justify-center">
                <img src="/agri5.jpeg" alt="agri5" className="w-86 h-96 object-cover px-8"/>
                <img src="/agri6.jpg" alt="agri6" className="w-86 h-96 object-cover px-8"/>
            </div>


    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
        {/* Feature 1 */}
        <div className="bg-gray-100 p-6 rounded-md">
            <h2 className="text-xl font-semibold mb-2">Up Close with Nature</h2>
                    <p>Explore the natural beauty of our farm, surrounded by greenery and fresh air, as you connect with the heart of agriculture.Immerse yourself in the picturesque landscapes that surround the farm. Our guided tours take you through sprawling fields and scenic vistas, providing a peaceful and rejuvenating escape from the hustle and bustle of urban life.</p>
                </div>

                {/* Feature 2 */}
                <div className="bg-gray-100 p-6 rounded-md">
                    <h2 className="text-xl font-semibold mb-2">Educational Insights</h2>
                    <p>Our knowledgeable guides will lead you through the various facets of farming, offering a deep dive into the cultivation techniques, crop cycles, and the symbiotic relationship between nature and agriculture. Learn about the importance of sustainable farming and witness firsthand how these practices contribute to the well-being of the land.</p>
                </div>

                {/* Feature 3 */}
        <div className="bg-gray-100 p-6 rounded-md">
            <h2 className="text-xl font-semibold mb-2">Available Days </h2>
            <p>Weekend - 8am to 1pm</p>
            <p>Weedays - 3pm to 5pm</p>
            <div><br/></div>
            <h2 className="text-xl font-semibold mb-2">Price Range </h2>
            <p>Local - Rs 700/= per person</p>
            <p>Foreign - Rs 2000/= per person</p>
        </div>
    </div>

            <div className="mt-8 pb-12 text-center">
                <p className="text-lg mb-4">
                    Ready for a memorable farm experience? Book your tour now!
                </p>
                <button className="bg-green-900 text-white px-4 py-2 rounded-full hover:bg-emerald-700 focus:outline-none mr-2">
                    <Link to="/booking" className="text-white">
                        Book now
                    </Link>
                </button>
            </div>
        </div>
);
}
