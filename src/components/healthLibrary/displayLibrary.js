import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SingleProduct from "../singleProduct";
import { FaRegCalendarAlt } from "react-icons/fa";
import './library.css';


const ShowLibrary = () => {

    const [libraryDetails, setLibrarydetails] = useState([]);

    const config = {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('ticket')
        }
    }

    useEffect(() => {
        axios.get("http://localhost:90/health/displayall", config)
            .then(result => {
                console.log(result)
                setLibrarydetails(result.data.data)
            })
            .catch(e => {
                console.log(e)
            })
    }, [])
    return (
        <div class="container library">
            <div class="row mt-5">
                <div class="col-md-10 mt-5">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li class="breadcrumb-item active" aria-current="page">Library</li>
                        </ol>
                    </nav>
                </div>
            </div>
            <div className="row">
                {libraryDetails.map(singleProduct => {


                    return (
                        <div className="col-md-4">
                            <div class="card p-3 mb-4 bg-white rounded display-card">
                                <img src={"http://localhost:90/" + singleProduct.image} alt="Product image" height={290} />
                                <h2 className="fs-5 my-2">{singleProduct.title}</h2>
                                <span className="date-color"><FaRegCalendarAlt className=" me-1" />{singleProduct.date}</span>
                                <p className="desc mt-3">{singleProduct.desc}</p>
                                <Link to={"/health/single/"+singleProduct._id} className="btn btn-primary btn-read p-2 rounded-pill mt-3">Read Now</Link>
                                {/* <input type="submit" onClick={"/singleLibrary"} className="btn btn-primary rounded-pill mt-3 btn-read" value="Read Now" /> */}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>


    )
}

export default ShowLibrary;
