import React from 'react';
import { FaRegHeart, FaUserCircle, FaCartArrowDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './navbar.css';
import axios from "axios";
import { useEffect, useState } from "react";

import $ from 'jquery';

const Navbar2 = () => {
  const [categoryDetails, setCategorydetails] = useState([]);

  const [details, setDetails] = useState([]);
  const [detailsNumber, setDetailsNumber] = useState([]);

    const config ={
        headers:{
            Authorization:'Bearer ' + localStorage.getItem('ticket')
        }
    }
    useEffect(()=>{
      axios.get("http://localhost:90/category/displayall", config)
      .then(result=>{
          console.log(result)
          setCategorydetails(result.data.data)
      })
      .catch(e=>{
          console.log(e)
      })
      axios
            .get("http://localhost:90/cart/get", config)
            .then((result) => {
                console.log(result);
                setDetails(result.data.data);
                setDetailsNumber(result.data.data.length);
            })
            .catch((e) => {
                console.log(e);
            });
  },[])
  const logOut = () => {
    //logout function
    //we need to erase the localStorage
    localStorage.clear();
    window.location.replace('/login');
  }
  var menu;
  if (localStorage.getItem('ticket')) {
    menu = (
      <>
        <li class="nav-item  px-2">
          <Link class="nav-link position-relative" to="/cart">
            <FaCartArrowDown className="cart-icon" />
            <span class="position-absolute top-10 start-100 translate-middle badge rounded-pill bg-danger">
              {detailsNumber}
              <span class="visually-hidden">unread messages</span>
            </span>
          </Link>
        </li>

        <li class="nav-item px-3">
          <Link class="nav-link" to="/profile"><FaUserCircle className="user-icon" /></Link>
        </li>
        <li class="nav-item px-2">
          <button className="btn btn-primary logout text-center" onClick={logOut}>Log Out</button>
        </li>
        {/* <li class="nav-item">
       <button onClick={logOut}>Log out</button>

     </li> */}
      </>
    )
  } else {
    menu = (
      <>
        <li class="nav-item px-2">
          <Link class="nav-link" to="/login">Login</Link>
        </li>
      </>
    )
  }
  return (
    <div>
      <nav class="navbar navbar-expand-lg  navbar2 ps-5">
        <div class="container">

          <div class="collapse navbar-collapse col-9" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-2">
              <li class="nav-item dropdown px-2">
                <a class="nav-link dropdown-toggle " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Shop
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                {categoryDetails.map(singleProduct=>{
                  return(
                
                  <li><Link class="dropdown-item" to="/userProduct">{singleProduct.cname}</Link></li>
                  // <li><a class="dropdown-item" href="#">Another action</a></li>
                  // <li><hr class="dropdown-divider" /></li>
                  // <li><a class="dropdown-item" href="#">Something else here</a></li>
                  )
                })}
                </ul>
              </li>
              <li class="nav-item px-2">
                <Link class="nav-link" to="/aboutus">About</Link>
              </li>
              <li class="nav-item px-2">
                <Link class="nav-link" to="/displayLibrary">Health Library</Link>
              </li>
              <li class="nav-item px-2">
                <Link to="/contactus" class="nav-link" href="#">Contact Us</Link>
              </li>

            </ul>

          </div>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-4">
              {menu}



            </ul>

          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar2;
window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".navbar2");
  navbar.classList.toggle("sticky", window.scrollY > 3);
});