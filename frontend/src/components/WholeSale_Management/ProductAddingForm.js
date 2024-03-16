import React, {useState} from "react";
import axios from "axios";

export default function ProductAddingForm(){
    const [formData, setFormData] = useState({
        productID: '',
        productName: '',
        productDescription: '',
        productQuantity: '',
        productPrice: ''
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handlesubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('', formData);
            console.log(response.data);
            setFormData({
                productID: '',
                productName: '',
                productDescription: '',
                productQuantity: '',
                productPrice: ''
            });
        }catch (error) {
            console.log(error.message);
        }
    }
    return (
        <div>
            <form>
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="space-y-12">
                        <div className="border-b border-gray-900/10 pb-12">
                            <h2 className="text-base font-semibold leading-7 text-gray-900">Add a Product</h2>
                        </div>
                    </div>
                </div>
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="space-y-12">
                        <div className="border-b border-gray-900/10 pb-12">
                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                    <label
                                           className="block text-sm font-medium leading-6 text-gray-900">Product
                                        ID</label>
                                    <div className="mt-2">
                                        <input type="text"
                                               name="productID"
                                               id="productID"
                                               onChange={handleChange}
                                               value={formData.productID}
                                               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label
                                           className="block text-sm font-medium leading-6 text-gray-900">Product
                                        Name</label>
                                    <div className="mt-2">
                                        <input type="text"
                                               name="productName"
                                               id="productName"
                                               onChange={handleChange}
                                               value={formData.productName}
                                               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                    </div>
                                </div>

                                <div className="col-span-full">
                                    <label
                                           className="block text-sm font-medium leading-6 text-gray-900">Description</label>
                                    <div className="mt-2">
                                            <textarea id="productDescription"
                                                      name="productDescription"
                                                      onChange={handleChange}
                                                      value={formData.productDescription}
                                                      rows="3"
                                                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                                    </div>

                                </div>

                                <div className="sm:col-span-3">
                                    <label
                                           className="block text-sm font-medium leading-6 text-gray-900">Quantity</label>
                                    <div className="mt-2">
                                        <input type="text"
                                               name="productQuantity"
                                               id="productQuantity"
                                               onChange={handleChange}
                                               value={formData.productQuantity}
                                               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label
                                           className="block text-sm font-medium leading-6 text-gray-900">Price Per
                                        1Kg</label>
                                    <div className="mt-2">
                                        <input type="text"
                                               name="productPrice"
                                               id="productPrice"
                                               onChange={handleChange}
                                               value={formData.productPrice}
                                               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button type="submit"
                                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save
                        </button>
                    </div>
                </div>
            </form>

        </div>
    );
}