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
                <h3 className="text-base font-semibold leading-7 text-gray-900">DISEASED PLANT DETAILS</h3>
            </div>
                                <div className='flex flex-col border-sky-400 rounded-xl w-fit p-4'>
                                    <div className='my-4'>
                                        <span className='text-xl mr-4 text-gray-500'>Disease Name</span>
                                        <span>{DiseaseRecords.disease_name}</span>
                                    </div>
                                    <div className='my-4'>
                                        <span className='text-xl mr-4 text-gray-500'>Crop Type</span>
                                        <span>{DiseaseRecords.crop}</span>
                                    </div>
                                    <div className='my-4'>
                                        <span className='text-xl mr-4 text-gray-500'>Date</span>
                                        <span>{DiseaseRecords.date}</span>
                                    </div>
                                    <div className='my-4'>
                                        <span className='text-xl mr-4 text-gray-500'>Location</span>
                                        <span>{DiseaseRecords.location}</span>
                                    </div>
                                    <div className='my-4'>
                                        <span className='text-xl mr-4 text-gray-500'>Severity</span>
                                        <span>{DiseaseRecords.severity}</span>
                                    </div>
                                    <div className='my-4'>
                                        <span className='text-xl mr-4 text-gray-500'>Treatment</span>
                                        <span>{DiseaseRecords.treatment}</span>
                                    </div>
                                    <div className='my-4'>
                                        <span className='text-xl mr-4 text-gray-500'>Status</span>
                                        <span>{DiseaseRecords.status}</span>
                                    </div>

                                </div>

        </div>

    );

}