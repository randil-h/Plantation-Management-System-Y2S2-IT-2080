import { Link } from "react-router-dom";

export default function FarmChoreExperience() {
    return (
        <div className="container mx-auto mt-8 p-8">
            <h1 className="text-4xl font-bold mb-4 text-center">Farm Chore Experience</h1>
            <p className="text-lg text-center">
                Immerse yourself in the daily tasks of farm life with our hands-on Farm Chore Experience.
            </p>
            <p className="text-lg mb-6 text-center">
                From tending to crops to understanding sustainable farming practices, discover the fulfillment
                of being a farmer for a day.
            </p>

            <div className="flex mb-8 items-center justify-center">
                <img src="/agri4.jpg" alt="farm_chore_experience1" className="w-86 h-96 object-cover px-8"/>
                <img src="/agri10.jpg" alt="farm_chore_experience2" className="w-86 h-96 object-cover px-8"/>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
                {/* Feature 1 */}
                <div className="bg-gray-100 p-6 rounded-md">
                    <h2 className="text-xl font-semibold mb-2">Hands-On Farming Tasks</h2>
                    <p>Engage in the daily routines of farming, from planting seeds and caring for crops. Engage in a variety of hands-on farming tasks, from planting seeds and nurturing crops to feeding and caring for our friendly animals. Experience the satisfaction of seeing your efforts directly impact the farm's operations. Escape the hustle and bustle of city life and reconnect with nature.</p>
                </div>

                {/* Feature 2 */}
                <div className="bg-gray-100 p-6 rounded-md">
                    <h2 className="text-xl font-semibold mb-2">Guided Learning</h2>
                    <p>Our experienced farmers will guide you through each task, offering valuable insights into sustainable farming practices. Our experienced farmers will be your guides, providing valuable insights into sustainable farming practices. Learn about crop cycles and the intricate balance between nature and agriculture. It's an educational experience that goes beyond the basics.</p>
                </div>

                {/* Feature 3 */}
                <div className="bg-gray-100 p-6 rounded-md">
                    <h2 className="text-xl font-semibold mb-2">Available Days </h2>
                    <p>Weekend - 9am to 2pm</p>
                    <p>Weedays - 2pm to 5pm</p>
                    <div><br/></div>
                    <h2 className="text-xl font-semibold mb-2">Price Range </h2>
                    <p>Local - Rs 1200/= per person</p>
                    <p>Foreign - Rs 2500/= per person</p>
                </div>
            </div>

            <div className="mt-8 pb-12 text-center">
                <p className="text-lg mb-4">
                    Ready to experience farm life firsthand? Book your Farm Chore Experience now!
                </p>
                <button className="bg-black text-white px-4 py-2 rounded-xl mt-2 hover:bg-emerald-700">
                    <Link to="/booking" className="text-white">
                        Book now
                    </Link>
                </button>
            </div>
        </div>
    );
}
