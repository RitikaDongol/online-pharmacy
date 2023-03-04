import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Navbaradmin = () => {
  const logOut = () => {
    //logout function
    //we need to erase the localStorage
    localStorage.clear();
    window.location.replace('/login');
  }
  return (
    <div className='container-admin'>
      <div className='menu-bar row'>
        <div className='col-md-8'>
        <button class="btn btn-dark my-3 mx-4" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
          Menu
        </button>
        </div>
        <div className='col-md-3 mt-3'>
          <h2 className='fs-4 text-end admin-panel mt-1'>Admin Panel</h2>
        </div>
      </div>
      <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasExampleLabel">Admin Dashboard</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="list-unstyled">
            <li className='my-1'><Link class="nav-link" to="/"> <i class="fas fa-users-cog"></i> Admin panel</Link></li>
            {/* <li><a class="dropdown-item" href="">Category</a></li> */}
            <li className='my-2'><Link class="nav-link" to="/displayProduct"><i class="fa-solid fa-pills"></i> Products</Link></li>
            <li className='my-2'><Link class="nav-link" to="/displayCategory"> <i class="fa fa-list-alt" aria-hidden="true"></i> Category</Link></li>
            <li className='my-2'><Link class="nav-link" to="/displayHealth"><i class="fas fa-book"></i> Health Library</Link></li>
            <li className='my-2'><Link class="nav-link" to="/displayPrescription"><i class="fas fa-newspaper"></i> Prescription</Link></li>
            <li className='my-2'><Link class="nav-link" to="/orderDetail"> <i class="fa-solid fa-bag-shopping"></i> Order</Link></li>
            <li className='my-2'><Link class="nav-link" to="/orderDetail"><i class="fa-solid fa-gears"></i> Settings</Link></li>
            {/* <li><a class="dropdown-item" href="">Orders</a></li>
        <li><a class="dropdown-item" href="">Messages</a></li> */}
            {/* <li><a class="dropdown-item " href="/admins/users">Users</a></li>
        <li><a class="dropdown-item " href="/admins/admins">Admins</a></li> */}
            <li className='my-2'><button className="logout-btn" onClick={logOut}><i class="fa-solid fa-right-from-bracket"></i> Log out</button></li>
          </ul>
          <div class="dropdown mt-3">
            {/* <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
        Dropdown button
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
      </ul> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbaradmin;
