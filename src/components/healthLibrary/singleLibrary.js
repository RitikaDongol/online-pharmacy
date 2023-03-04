import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './library.css';
import { FaRegCalendarAlt } from "react-icons/fa";

const SingleLibrary = () => {
    const { pid } = useParams();
    const [details, setDetails] = useState('');
    const config = {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('ticket')
        }
    }
    useEffect(() => {
        axios.get("http://localhost:90/health/single/" + pid, config)
            .then(result => {
                console.log(result)
                setDetails(result.data.data);
            })
            .catch()
    }, [])
    return (
        <div className="container mt-5 library">
            <div className="row mt-5">
                <img src={"http://localhost:90/" + details.image} height={480} />
                <h2 className="mt-3 fw-bold" >{details.title}</h2>
                <span className="date-color mb-3"><FaRegCalendarAlt className=" me-1" />{details.date}</span>
                <p className="mt-2">{details.description}</p>
                <p className="text-end fw-semibold">{details.author}</p>
            </div>
        </div>
    )
}
export default SingleLibrary;