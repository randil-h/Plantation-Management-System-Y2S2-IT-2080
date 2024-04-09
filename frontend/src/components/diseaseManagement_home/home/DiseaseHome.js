import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {useSnackbar} from "notistack";
import axios from "axios";

export default function DiseaseHome() {

    const [DiseaseRecords, setDiseaseRecords] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const {id} = useParams();
    const [searchQuery, setSearchQuery] = useState('');
    const [diseaseChart, setDiseaseChart] = useState({});
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        setLoading(true);
        axios
            .get('https://elemahana-mern-8d9r.vercel.app/diseases')
            .then((response) => {
                setDiseaseRecords(response.data.data);
                setLoading(false);
                checkUntreatedRecords(response.data.data);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    const checkUntreatedRecords = (records) => {
        const untreatedRecords = records.filter(record =>  record.status === "Under Treatment");
        const untreatedRecords1 = records.filter(record =>  record.status === "Not Treated");
        if (untreatedRecords.length > 0) {
            enqueueSnackbar(
                <div>
                    There are plants under treatment !{' '}
                    <a href="/diseases/records" >Click Here</a>
                </div>,
                { variant: 'warning' }
            );
        }
        if (untreatedRecords1.length > 0)
        {
            enqueueSnackbar( <div>
                    There are untreated plants !{' '}
                    <a href="/diseases/records" >Click Here</a>
                </div>,
                { variant: 'warning' }
            );
        }
    };


}