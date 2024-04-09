import {useEffect, useState} from "react";
import axios from "axios";

export default function GenerateReport() {

    const [DiseaseRecords, setDiseaseRecords] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios
            .get('https://elemahana-mern-8d9r.vercel.app/diseases')
            .then((response) => {
                setDiseaseRecords(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

}