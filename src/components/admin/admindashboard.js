import axios from "axios";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const AdminDashboard = () => {
    const [categoryDetails, setCategorydetails] = useState([]);
    const [categoryNumber, setCategoryNumber] = useState('');

    const [productDetails, setProductdetails] = useState([]);
    const [productNumber, setProductNumber] = useState('');

    const [prescriptionDetails, setPrescriptiondetails] = useState([]);
    const [prescriptionNumber, setPrescriptionNumber] = useState('');

    const [healthDetails, setHealthdetails] = useState([]);
    const [healthNumber, setHealthNumber] = useState('');

    const config = {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('ticket')
        }
    }
    useEffect(() => {
        //display all categories
        axios.get("http://localhost:90/category/displayall", config)
            .then(result => {
                console.log(result)
                setCategorydetails(result.data.data)
                setCategoryNumber(result.data.data.length)
            })
            .catch(e => {
                console.log(e)
            })
        //display all products
        axios.get("http://localhost:90/product/display", config)
            .then(result => {
                console.log(result)
                setProductdetails(result.data.data)
                setProductNumber(result.data.data.length)
            })
            .catch(e => {
                console.log(e)
            })
        //display all prescriptions
        axios.get("http://localhost:90/prescription/displayall", config)
            .then(result => {
                console.log(result)
                setPrescriptiondetails(result.data.data)
                setPrescriptionNumber(result.data.data.length)
            })
            .catch(e => {
                console.log(e)
            })
            //display all health library
            axios.get("http://localhost:90/health/displayall", config)
            .then(result=>{
                console.log(result)
                setHealthdetails(result.data.data)
                setHealthNumber(result.data.data.length)
            })
            .catch(e=>{
                console.log(e)
            })
    }, [])

    return (
        <>

            <div class="content">
                <div class="dashboard-title d-flex justify-content-between">
                    <h2 class="mt-4 ms-4 fs-3">Dashboard</h2>
                    <nav aria-label="breadcrumb" class="mt-4 me-4">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Dashboard</li>
                        </ol>
                    </nav>
                </div>
                <div class="cards">
                    <div class="card-box bg-info">
                        <div class="box">
                            <Link to="/displayCategory">
                                <h1 class="card-title ">{categoryNumber}</h1>
                            </Link>
                            <h3> Category</h3>
                        </div>
                        <div class="icon">
                            <i class="fa fa-list-alt" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div class="card-box bg-warning">
                        <div class="box">
                            <Link to="/displayProduct">
                                <h1 class="card-title ">{productNumber}</h1>
                            </Link>
                            <h3> Products</h3>
                        </div>
                        <div class="icon">
                            <i class="fa-solid fa-pills"></i>
                        </div>
                    </div>
                    <div class="card-box bg-success">
                        <div class="box">
                            <Link to="/displayHealth">
                                <h1 class="card-title ">{healthNumber}</h1>
                            </Link>
                            <h3> Health Library</h3>
                        </div>
                        <div class="icon">
                            <i class="fas fa-book"></i>
                        </div>
                    </div>

                    <div class="card-box bg-warning">
                        <div class="box">
                            <a href="/admins/users">
                                <h1 class="card-title ">3</h1>
                            </a>
                            <h3>Orders</h3>
                        </div>
                        <div class="icon">
                        <i class="fa-solid fa-bag-shopping"></i>
                        </div>
                    </div>

                    <div class="card-box bg-secondary">
                        <div class="box">
                            <a href="/pickabook/get_news">
                                <h1 class="card-title ">{prescriptionNumber}</h1>
                            </a>
                            <h3> Uploaded Prescription</h3>
                        </div>
                        <div class="icon">
                            <i class="fas fa-newspaper"></i>
                        </div>
                    </div>

                    <div class="card-box bg-danger">
                        <div class="box">
                            <a href="/admins/users">
                                <h1 class="card-title ">4</h1>
                            </a>
                            <h3> Users</h3>
                        </div>
                        <div class="icon">
                            <i class="fa fa-users" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div class="card-box bg-info">
                        <div class="box">
                            <a href="/admins/admins">
                                <h1 class="card-title">1</h1>
                            </a>
                            <h3> Admin</h3>
                        </div>
                        <div class="icon">
                            <i class="fas fa-users-cog"></i>
                        </div>
                    </div>
                </div>
                <div class="content2">

                </div>
            </div>
        </>


    );
}
export default AdminDashboard;