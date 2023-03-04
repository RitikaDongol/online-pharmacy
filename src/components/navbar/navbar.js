import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import './navbar.css';
import { FaSearch, FaRegHeart, FaAlgolia, FaFileMedical } from "react-icons/fa";

const Navbar = () => {
  const [image, setImage] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  


  const [msg, setMsg] = useState('');

  const addPrescription = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('image', image);
    data.append('phone', phone);
    data.append('message', message);
    // const data={
    //     cname:cname,
    //     cdescription:cdescription,
    //     cimage:cimage,
    // }
    const config = {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('ticket')
      }
    }
    axios.post('http://localhost:90/prescription/insert', data, config)
      .then(response => {
        console.log(response);
        setMsg(response.data.msg);
        console.log(response.data.msg)
      })
      .catch(e)
  }
  return (
    <nav class="navbar navbar-expand-lg bg-light ps-5">
      <div class="container">
        <Link class="navbar-brand col-md-1 ms-4" to="/">e-Pharma</Link>
        <button class="navbar-toggler bg-light navbar-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">

          <form class="d-flex ms-1">
            <input class="form-control" type="search" placeholder="Search for prescription medicines or OTC products..." aria-label="Search" />
            <button class="btn btn-outline-success px-3 btn-search search-btn" type="submit"><FaSearch /></button>
          </form>

          <ul class="navbar-nav me-auto mb-2 mb-lg-0 px-5">
            {/* <li class="nav-item px-2">
            <a class="nav-link" aria-current="page" href="#">About</a>
          </li>
          <li class="nav-item px-2">
            <a class="nav-link" href="#">FAQ</a>
          </li>
          <li class="nav-item px-2">
              <a class="nav-link" aria-current="page" href="#">Reviews</a>
            </li>
            <li class="nav-item px-2">
              <a class="nav-link" href="#">Blog</a>
            </li> */}
            <li class="nav-item pe-2">
              <a class="nav-link">
                <FaRegHeart className="cart-icon" />

              </a>
            </li>
            <li class="nav-item px-2 text-center">
              <button type="button" class="btn btn-primary prescription b-color" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <FaFileMedical className="camera" />Upload Prescription
              </button>


              <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title text-center ms-1" id="exampleModalLabel">Upload Prescription</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    {
                msg ? <div class="alert col-md-12 py-1 m-auto alert-success text-center" role="alert">
                    {msg}
                    
                </div> 

                : null
            }
                      <form className="px-2">
                        <div className="form-group mb-3">
                          <label className="fw-semibold">Image</label>
                          <input type="file" className="form-control" onChange={(e) => setImage(e.target.files[0])} />
                        </div>
                        <div className="form-group mb-3">
                          <label className="fw-semibold text-start">Phone number</label>
                          <input type="text" className="form-control" onChange={(e) => setPhone(e.target.value)} />
                        </div>
                        <div className="form-group">
                          <label className="fw-semibold">Message</label>
                          <textarea className="form-control" rows={4} onChange={(e) => setMessage(e.target.value)} />
                        </div>





                        

                      </form>




                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="submit" className="btn btn-primary my-btn px-3" onClick={addPrescription}> Upload</button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            {/* <li class="nav-item px-2">
            <button className="btn btn-primary prescription b-color"><FaFileMedical className="camera"/>Upload Prescription</button>
          </li> */}

          </ul>
        </div>
      </div>
    </nav>


  )
  /* const logOut=()=>{
//     //logout function
//     //we need to erase the localStorage
//     localStorage.clear();
//     window.location.replace('/login');
//   }

//   var menu;
 

//   if(localStorage.getItem('ticket')){
//     menu=(
//       //login vayesi
//       <>
//         <li class="nav-item">
//           <Link class="nav-link" to="/addProduct">Add Products</Link>
//         </li>
//         <li class="nav-item">
//           <Link class="nav-link" to="/displayProduct">My Products</Link>
//         </li>
//         <li class="nav-item">
//           <Link class="nav-link" to="/profile">Profile</Link>
//         </li>
//         <li class="nav-item">
//       <button onClick={logOut}>Log out</button>

//     </li>
       
//      </>
    
//     )
//   }else{
//     menu=(
//       <>
//        <li class="nav-item">
//           <Link class="nav-link" to="/register">Register</Link>
//         </li>
//         <li class="nav-item">
//           <Link class="nav-link" to="/login">Login</Link>
//         </li></>
//     )
//   }
//     return(
//         <nav class="navbar navbar-expand-lg">
//   <div class="container-fluid">
//     <a class="navbar-brand" href="#">Navbar</a>
//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//         <li class="nav-item">
//           <a class="nav-link active" aria-current="page" href="/">Home</a>
//         </li>
      

    
     
//         <li class="nav-item dropdown">
//           <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Dropdown
//           </a>
//           <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
//             <li><a class="dropdown-item" href="#">Action</a></li>
//             <li><a class="dropdown-item" href="#">Another action</a></li>
//             <li><hr class="dropdown-divider"/></li>
//             <li><a class="dropdown-item" href="#">Something else here</a></li>
//           </ul>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link disabled">Disabled</a>
//         </li>
//         {menu}
//       </ul>
     
//       <form class="d-flex" role="search">
//         <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//         <button class="btn btn-outline-success" type="submit">Search</button>
//       </form>
//     </div>
//   </div>
// </nav>

   //) */
}

export default Navbar;
