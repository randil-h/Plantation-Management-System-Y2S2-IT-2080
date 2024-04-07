import { Link } from "react-router-dom";

export default function FruitVegetablePicking() {
    return (
        <div className="container mx-auto mt-8 p-8">
            <h1 className="text-4xl font-bold mb-4 text-center">Fruit and Vegetable Picking</h1>
            <p className="text-lg text-center">
                Embark on a delightful farm-to-plate journey with our Fruit and Vegetable Picking experience.
            </p>
            <p className="text-lg mb-6 text-center">
                The lush fields invite you to harvest the freshest produce and immerse yourself in the joy of farm-fresh
                flavors.
            </p>

            <div className="flex mb-8 items-center justify-center">
                <img src="/agri7.jpg" alt="fruit_veg_picking1" className="w-86 h-96 object-cover px-8"/>
                <img src="/agri8.jpg" alt="fruit_veg_picking2" className="w-86 h-96 object-cover px-8"/>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
                {/* Feature 1 */}
                <div className="bg-gray-100 p-6 rounded-md">
                    <h2 className="text-xl font-semibold mb-2">Harvest Your Own Produce</h2>
                    <p>Experience the thrill of picking your own fruits and vegetables straight from the farm. From ripe
                        fruits to crisp vegetables, enjoy a hands-on harvesting adventure.Picture yourself strolling through the bountiful fields, surrounded by rows of flourishing crops. With baskets in hand, you have the freedom to choose and harvest your favorite fruits and vegetables directly from the plants.</p>
                </div>

                {/* Feature 2 */}
                <div className="bg-gray-100 p-6 rounded-md">
                    <h2 className="text-xl font-semibold mb-2">Guided Sessions</h2>
                    <p>Our knowledgeable guides will assist you throughout the picking process, providing insights into
                        the best practices of harvesting and ensuring a delightful experience for all. Whether you're a seasoned gardener or just curious about agriculture, our guides are there to answer questions, provide tips on harvesting, and offer a deeper understanding of the entire farming process.</p>
                </div>

                {/* Feature 3 */}
                <div className="bg-gray-100 p-6 rounded-md">
                    <h2 className="text-xl font-semibold mb-2">Available Days </h2>
                    <p>Weekend - 8am to 10pm</p>
                    <p>Weedays - 8am to 10am</p>
                    <div><br/></div>
                    <h2 className="text-xl font-semibold mb-2">Price Range </h2>
                    <p>Local - RS 300/= & cost of the picked vegetables/fruits</p>
                    <p>Foreign - RS 300/= & cost of the picked vegetables/fruits</p>
                </div>
            </div>

            <div className="mt-8 pb-12 text-center">
                <p className="text-lg mb-4">
                    Ready for a farm-to-plate adventure? Book your Fruit and Vegetable Picking session now!
                </p>
                <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-emerald-700 focus:outline-none mr-2">
                    <Link to="/booking" className="text-white">
                        Book now
                    </Link>
                </button>
            </div>
        </div>
    );
}
