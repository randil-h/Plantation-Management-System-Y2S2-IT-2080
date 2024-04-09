import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom"
import {InformationCircleIcon, PencilSquareIcon, TrashIcon} from "@heroicons/react/24/outline";
import {FaSearch} from "react-icons/fa";
import {StyleSheet} from "@react-pdf/renderer";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const pdfStyles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#ffffff',
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    }
});

const ProductHistory = () =>{
    const [productRecords, setProductRecords] = useState([]);
    const [loading,setLoading] = useState(false);
    const [filteredRecords, setFilteredRecords] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        setLoading(true);
        axios
            .get('http://elemahana-mern-8d9r.vercel.app/productRecords')
            .then((response) =>{
                setProductRecords(response.data.data); // Assuming response.data is an object with a 'data' property containing an array of records
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);



    const handleDelete = (recordId) => {
        axios
            .delete(`http://elemahana-mern-8d9r.vercel.app/productRecords/${recordId}`)
            .then(() => {
                setProductRecords(prevRecord => prevRecord.filter(record => record._id !== recordId));
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleSearch = (event) => {
        const query = event.target.value.toLowerCase();
        setSearchQuery(query);
        const filteredRecords = productRecords.filter(record =>
            record.productName.toLowerCase().includes(query) ||
            record.productID.toLowerCase().includes(query)
        );
        setFilteredRecords(filteredRecords);
    };


    const generatePDF = () => {
        const input = document.getElementById('product-table');
        if (input) {
            html2canvas(input)
                .then((canvas) => {
                    const imgData = canvas.toDataURL('image/png');
                    const pdf = new jsPDF('l', 'mm', 'b4');
                    pdf.addImage(imgData, 'PNG', 0, 0);
                    pdf.save('product-list.pdf');
                })
                .catch((error) => {
                    console.error('Error generating PDF:', error);
                });
        } else {
            console.error('Table element not found');
        }
    };


    return(
        <div>
            <div className="flex justify-between items-center">
                <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                    <div className="flex justify-betwee">
                        <div className="px-6">
                            <a href="/OperationManager/AddingProduct"
                               className="mt-10 block rounded-md bg-black px-8 py-1 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500
                                       focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 left-2"> Add
                                a Product
                            </a>
                        </div>

                        <button
                            onClick={generatePDF}
                            className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                            focus-visible:outline-gray-900 absolute top-24 right-5"
                        >
                            Print PDF
                        </button>
                    </div>
                </div>
                <div className="mt-10">
                    <div className="max-w-xs px-8">
                        <input
                            type="text"
                            placeholder="Search Product"
                            value={searchQuery}
                            onChange={handleSearch}
                            className="border border-gray-300 rounded-full px-3 py-1"
                        />
                        <FaSearch className="absolute left-3 top-2 text-gray-400"/>
                    </div>

                </div>
            </div>

            <div class="flex flex-col">
                <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
                    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                            <table class="min-w-full">
                                <thead class="bg-gray-200 border-b">
                                <tr>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Product ID
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Product Name
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                        // style={{ maxWidth: '100px', wordWrap: 'break-word' }}
                                    >
                                        Product Description
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Product Quantity
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Product Price
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Info
                                    </th>
                                    {/*<th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">*/}
                                    {/*    Edit*/}
                                    {/*</th>*/}
                                    {/*<th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">*/}
                                    {/*    Delete*/}
                                    {/*</th>*/}
                                </tr>
                                </thead>

                                <tbody>
                                {(searchQuery ? filteredRecords : productRecords).map((record, index) => (
                                    <tr key={index}
                                        className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{index + 1}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{record.productID}</td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{record.productName}</td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                                            style={{maxWidth: '300px', wordWrap: 'break-word', whiteSpace: 'pre-wrap'}}>
                                            {record.productDescription}
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{record.productQuantity}</td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{record.productPrice}</td>
                                        <td className=" py-4 text-right flex flex-col items-center">
                                            <a href="#" className="font-medium text-blue-600 hover:underline">
                                                <InformationCircleIcon
                                                    className="h-6 w-6 flex-none bg-gray-300 p-1 rounded-full text-gray-800 hover:bg-gray-500 mt-2"
                                                    aria-hidden="true"/>
                                            </a>
                                            <Link to={`/editProduct/${record._id}`}
                                                  className="font-medium text-blue-600 hover:underline">
                                                <PencilSquareIcon
                                                    className="h-6 w-6 flex-none bg-blue-200 p-1 rounded-full text-gray-800 hover:bg-blue-500 mt-2"
                                                    aria-hidden="true"/>
                                            </Link>
                                            <button className="flex items-center"
                                                    onClick={() => handleDelete(record._id)}>
                                                <TrashIcon
                                                    className="h-6 w-6 flex-none bg-red-200 p-1 rounded-full text-gray-800 hover:bg-red-500 mt-2"
                                                    aria-hidden="true"/>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductHistory;