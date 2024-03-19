import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

export default function ViewDisease() {

    const [DiseaseRecords, setDiseaseRecord] = useState({});
    const [loading, setLoading] = useState(false);
    const {id} = useParams();

    useEffect(() => {
        setLoading(true);
        axios
            .get(`http://localhost:5555/diseases/${id}`)
            .then((response) => {
                setDiseaseRecord(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    return (

        <div className="px-8 py-8">
            <div className="px-4 sm:px-0">
                <h3 className="text-base font-bold leading-7 text-gray-900">RECORD DETAILS</h3>
                <p className="mt-1 text-sm font-normal text-gray-500 0">View details regarding diseased plants...</p>
            </div>
            <div className=' mt-4 flex flex-col border-green-400 rounded-xl w-full p-4  divide-y border-2'>
                <div className='my-2'>
                    <span className='text-lg mr-4 text-gray-500'>Disease Name :</span>
                    <span>{DiseaseRecords.disease_name}</span>
                </div>
                <div className='my-2'>
                    <span className='text-lg mr-4 text-gray-500'>Crop Type :</span>
                    <span>{DiseaseRecords.crop}</span>
                </div>
                <div className='my-2'>
                    <span className='text-lg mr-4 text-gray-500'>Date Detected :</span>
                    <span>{DiseaseRecords.date}</span>
                </div>
                <div className='my-2'>
                    <span className='text-lg mr-4 text-gray-500'>Location : </span>
                    <span>{DiseaseRecords.location}</span>
                </div>
                <div className='my-2'>
                    <span className='text-lg mr-4 text-gray-500'>Severity :</span>
                    <span>{DiseaseRecords.severity}</span>
                </div>
                <div className='my-2'>
                    <span className='text-lg mr-4 text-gray-500'>Treatment Used :</span>
                    <span>{DiseaseRecords.treatment}</span>
                </div>
                <div className='my-2'>
                    <span className='text-lg mr-4 text-gray-500'>Status</span>
                    <span>{DiseaseRecords.status}</span>
                </div>

                                </div>

        </div>

    );

}