import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";


export default function AddDisease() {
    const [disease_name, setName] = useState('');
    const [plant_id, setId] = useState('');
    const [crop, setType] = useState('');
    const [date, setDate] = useState('');
    const [location, setLocation] = useState('');
    const [treatment, setTreatment] = useState([]);
    const [plant_count, setPlantCount] = useState('');
    const [severity, setSeverity] = useState('');
    const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [diseaseIdError, setDiseaseIdError] = useState('');

    const handleDiseaseChange = (e) => {
        const selectedDisease = e.target.value;
        setName(selectedDisease); // Update diseaseName state
        // Set treatment based on selected disease
        if (selectedDisease === "Anthracnose") {
            setTreatment(["Daconil Chlorothalonil (chlorothalonil 500g/l SC) fungicide"]);
        } else if (selectedDisease === "Leaf Curling disease") {
            setTreatment(["Mitsu Abamectin (abamectin 18g/l EC) insecticide"]);
        } else if (selectedDisease === "Fungal Disease") {
            setTreatment(["Oasis Thiram (thiuram disulfide) fungicide"]);
        } else if (selectedDisease === "Plesispa") {
            setTreatment(["Marshal 20 SC (carbosulfan 200g/l SC) insecticide"]);
        } else {
            setTreatment(["Daconil Chlorothalonil (chlorothalonil 500g/l SC) fungicide", "Mitsu Abamectin (abamectin 18g/l EC) insecticide","Oasis Thiram (thiuram disulfide) fungicide", "Marshal 20 SC (carbosulfan 200g/l SC) insecticide"]); // Reset treatment if disease changes
        }
    };

    /*const handleDiseaseChange = (e) => {
        const selectedDisease = e.target.value;
        setName(selectedDisease);

        axios.post(`https://elemahana-backend.vercel.app/checkTreatment/recommendTreatment`, {selectedDisease})
            .then((response) => {
                setTreatment(response.data.treatment);
            })
            .catch((error) => {
                console.log(error);
            });
    };*/

    const handleDiseaseIdChange = (e) => {
        const enteredDiseaseId = e.target.value;
        setId(enteredDiseaseId); // Update plant_id state

        // Validate disease ID format
        const diseaseIdRegex = /^D\d{3}$/;
        if (!diseaseIdRegex.test(enteredDiseaseId)) {
            setDiseaseIdError("Disease ID should start with 'D' followed by 3 digits");
        } else {
            setDiseaseIdError("");
        }
    };

    const handleSaveDisease = (e) => {
        e.preventDefault();
        const data = {
            disease_name,
            plant_id,
            crop,
            date,
            location,
            plant_count,
            treatment: treatment.join(', '),
            severity,
            status
        };

        if (diseaseIdError) {
            return; // Don't proceed if there's an error
        }

        setLoading(true);
        axios
            .post(`https://elemahana-backend.vercel.app/checkTreatment`, {treatment}) //checking availability of treatment
            .then((response) => {
                setLoading(false);
                //if treatment available
                if(response.data.available) {
                    axios
                        .post(`https://elemahana-backend.vercel.app/diseases`, data)
                        .then(() => {
                            setLoading(false);
                            navigate('/diseases/records');
                            window.alert("Record Added Successfully!");
                        })
                        .catch((error) => {
                            setLoading(false);
                            alert('An error happened. Please check console');
                            console.log(error);
                        });
                } else {
                    window.alert("Treatment is not available in Inventory!!"); //if treatment is not found or unavailable
                }
            })
            .catch((error) => {
                setLoading(false);
                alert('An error happened. Please check console');
                console.log(error);
            });
    };
    return (
        <div className='items-center justify-center ml-96'>
            <form method="post"
                  onSubmit={handleSaveDisease}
                  className="max-w-md ml-1/3 mt-16 p-4 bg-gray-200 rounded-lg items-center justify-center flex flex-col">
                <legend className='text-x font-bold mb-2 '>Add New Disease Record</legend>
                <label className='text-md mr-4 text-gray-500 mb-1'>Disease ID</label>
                <input
                    type='text'
                    required
                    value={plant_id}
                    onChange={handleDiseaseIdChange}
                    placeholder="Enter Disease ID"
                    className='border-2 rounded-md mb-1 border-gray-500 px-4 py-2 w-full'
                />
                {diseaseIdError && <span className="text-red-500 text-sm mb-2">{diseaseIdError}</span>}
                <label className='text-md mr-4 text-gray-500 mb-1'>Disease Name</label>
                <select
                    value={disease_name}
                    onChange={handleDiseaseChange}
                    className='border-2 rounded-md mb-4 border-gray-500 px-4 py-2 w-full'
                >
                    <option>Select Disease</option>
                    <option value="Anthracnose">Anthracnose Disease</option>
                    <option value="Plesispa">Plesispa (Coconut Bug)</option>
                    <option value="Fungal Disease">Fungal Disease</option>
                    <option value="Leaf Curling disease">Leaf Curling Disease</option>
                    <option value="Other">Other</option>
                </select>
                <label className='text-md mr-4 text-gray-500 mb-1'>Crop Type</label>
                <select
                    value={crop}
                    onChange={(e) => setType(e.target.value)}
                    className='border-2 rounded-md mb-4 border-gray-500 px-4 py-2 w-full'
                >
                    <option>Select Crop</option>
                    <option value="Papaya">Papaya</option>
                    <option value="Apple Guava">Apple Guava</option>
                    <option value="Coconut">Coconut</option>
                </select>
                <label className='text-md mr-4 text-gray-500 mb-1'>Date</label>
                <input
                    type='date'
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className='border-2 rounded-md mb-5 border-gray-500 px-4 py-2 w-full'
                />
                <label className='text-md mr-4 mb-1 text-gray-500'>Location</label>
                <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className='border-2 rounded-md mb-4 border-gray-500 px-4 py-2 w-full'
                >
                    <option>Select Location</option>
                    <option value="Field A">Field A</option>
                    <option value="Field B">Field B</option>
                    <option value="Field C">Field C</option>
                    <option value="Field D">Field D</option>
                    <option value="Field E">Field E</option>
                    <option value="Field F">Field F</option>
                    <option value="Field G">Field G</option>
                </select>
                <label className='text-md mr-4 mb-1 text-gray-500'>Treatment</label>
                <select
                    required
                    value={treatment}
                    onChange={(e) => setTreatment(e.target.value)}
                    className='border-2 mb-4 rounded-md border-gray-500 px-4 py-2 w-full'
                >
                    <option>Select Treatment</option>
                    {treatment.map((treatmentOption, index) => (
                        <option key={index} value = {treatmentOption}>{treatmentOption}</option>
                        ))}
                </select>
                <label className='text-md mb-1 mr-4 text-gray-500'>Trees Affected</label>
                <input
                    type= 'number'
                    required
                    value={plant_count}
                    onChange={(e) => setPlantCount(e.target.value)}
                    placeholder= "Enter number of trees affected"
                    min={1}
                    className='border-2 rounded-md mb-4 border-gray-500 px-4 py-2 w-full'
                />
                <label className='text-md mb-1 mr-4 text-gray-500'>Severity</label>
                <input
                    type='text'
                    required
                    value={severity}
                    onChange={(e) => setSeverity(e.target.value)}
                    placeholder="Comment on severity"
                    className='border-2 rounded-md mb-4 border-gray-500 px-4 py-2 w-full'
                />
                <label className='text-md mr-4 mb-1 text-gray-500'>Status</label>
                <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className='border-2 rounded-md mb-4 border-gray-500 px-4 py-2 w-full'
                >
                    <option>Select Status</option>
                    <option value="Not Treated">Not Treated</option>
                    <option value="Under Treatment">Under Treatment</option>
                    <option value="Recovered">Recovered</option>
                </select>
                <button
                    className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                    Add
                </button>
            </form>
        </div>

    );

};
