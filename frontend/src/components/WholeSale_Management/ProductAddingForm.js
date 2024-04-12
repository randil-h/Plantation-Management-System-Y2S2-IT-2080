import React, {useState} from "react";
import axios from "axios";
import {useNavigate, useNavigation} from "react-router-dom";
import {useSnackbar} from "notistack";

const ProductAddingForm = () => {
    const [productID, setproductID] = useState('');
    const [productName, setproductName] = useState('');
    const [productDescription, setproductDescription] = useState('');
    const [productQuantity, setproductQuantity] = useState('');
    const [productPrice, setproductPrice] = useState('');
    const {enqueueSnackbar} = useSnackbar();
    const navigate = useNavigate();
    const [productImage,setImage] = useState();


    // const [formData, setFormData] = useState({
    //     productID: '',
    //     productName: '',
    //     productDescription: '',
    //     productQuantity: '',
    //     productPrice: ''
    // });

    // const handleChange = (e) => {
    //     setFormData({...formData, [e.target.name]: e.target.value});
    // };

    // const onInputChange = (e) => {
    //     console.log(e.target.files[0]);
    //     setImage(e.target.files[0]);
    // };

    const handlesubmit =  (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("image", productImage);

        const data = {
            productID,
            productName,
            productDescription,
            productQuantity,
            productPrice,
        };

        axios
            .post('http://localhost:5555/productRecords', data)
            .then(() => {
                enqueueSnackbar('Record Create Successfully', {variant: 'success'});
                navigate('/wholesaleDashboard', {state:{highlighted: true}}); //
            })
            .catch((error) => {
                enqueueSnackbar('Error', { variant: 'error' });
                console.log(error);
            });
    };
    return (
        <div>
            <form onSubmit={handlesubmit}>
                <div className="mx-auto max-w-7xl px-10 lg:px-8 flex justify-center">
                    <div className="space-y-12">
                            <h2 className="text-xl font-semibold leading-7 text-gray-900 mt-4">Add a Product</h2>
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
                                               onChange={(e) => setproductID(e.target.value)}
                                               value={productID}
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
                                               onChange={(e) => setproductName(e.target.value)}
                                               value={productName}
                                               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                    </div>
                                </div>

                                <div className="col-span-full">
                                    <label
                                        className="block text-sm font-medium leading-6 text-gray-900">Description</label>
                                    <div className="mt-2">
                                            <textarea id="productDescription"
                                                      name="productDescription"
                                                      onChange={(e) => setproductDescription(e.target.value)}
                                                      value={productDescription}
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
                                               onChange={(e) => setproductQuantity(e.target.value)}
                                               value={productQuantity}
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
                                               onChange={(e) => setproductPrice(e.target.value)}
                                               value={productPrice}
                                               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label
                                        className="block text-sm font-medium leading-6 text-gray-900">Add A
                                        picture</label>
                                    <input type="file"
                                           accept="image/*"
                                           name="productImage"
                                           id="productImage"
                                           //onChange={onInputChange}
                                           // onChange={(e) => setproductPrice(e.target.value)}
                                           // value={productPrice}
                                           //className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/
                                    />
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

export default ProductAddingForm;