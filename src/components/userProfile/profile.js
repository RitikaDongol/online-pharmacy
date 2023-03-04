import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './profile.css';

const Profile = () => {
    const [image, setImage] = useState('');
    const [userdata, setUserdata] = useState('');
    const config = {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('ticket')
        }
    }


    const updateProfile = (e) => {

        e.preventDefault();


        const profilePic = new FormData();
        profilePic.append('pic', image);

        axios.put('http://localhost:90/customer/picture/update', profilePic, config)
            .then(result => {
                console.log(result)
                if (result.data.status) {
                    window.location.reload();
                }
            })
            .catch(e => {
                console.log(e)
            })
    }

    useEffect(() => {
        axios.get("http://localhost:90/customer/dashboard", config)
            .then(result => {
                console.log(result);
                setUserdata(result.data.data);
                // set id to local storage
                localStorage.setItem('id', result.data.data._id);
                localStorage.setItem('name', result.data.data.fn);
                console.log("This is data");
                console.log(result.data.data._id);
            })
            .catch(e => {
                console.log(e)
            })
    }, [])
    return (
        <div className="container mt-5">
            <div className="row mt-5 mb-5 justify-content-center">
               
                <nav aria-label="breadcrumb">
  <ol class="breadcrumb mt-5">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item"><Link to='/myorder'>My Order</Link></li>
    <li class="breadcrumb-item active" aria-current="page">Profile</li>
  </ol>
</nav>
 <h2 class="text-center mb-3 product-title fs-2"> My Profile </h2>
                {/* <div className="col-md-6">
                    <form>
                        <div className="form-group">
                            <input type="file" className="form-control" onChange={(e)=>setImage(e.target.files[0])}/>
                        </div>
                        <div className="form-group">
                            <input type="submit" className="btn btn-dark" onClick={updateProfile}/>
                        </div>
                    </form>
                </div> */}

                <div class="col-md-3 shadow mt-4 px-5 pt-5 user-image bg-success bg-gradient bg-opacity-75">
                    <img src={"http://localhost:90/" + userdata.picture} className="img-fluid rounded-circle" alt="upload profile picture"/>
                    <p className="text-center my-4 text-light">{userdata.fn} {userdata.ln}</p>
                </div>
                <div className="col-md-4 shadow mt-4 ps-4">
                    <h5 className="mt-2 mb-4 user-info fs-5 text-color pb-1">User Information</h5>
                    <div className="row ">
                        <div className="col-md-4 ">
                            <p className="fw-semibold fs-6 text-color">Full-Name: <span className="fw-normal">{userdata.fn} {userdata.ln}</span> </p>
                        </div>
                        <div className="col-md-4 ps-5">
                            <p className="fw-semibold text-color">Email: <span className="fw-normal">{userdata.email}</span></p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 ">
                            <p className="fw-semibold text-color">Phone: <span className="fw-normal">{userdata.phone}</span> </p>
                        </div>
                        <div className="col-md-4 ps-5">
                            <p className="fw-semibold text-color">Age of ::   <span className="fw-normal">  {userdata.age}</span></p>
                        </div>
                    </div>
                    
                        <div className="">
                            <form className="choose-image">
                            <div className="row">
                                
                                    <label className="fw-semibold text-color">Update Picture:</label>
                                    <div className="form-group col-md-8">
                                    <input type="file" className="form-control" onChange={(e) => setImage(e.target.files[0])} />
                                </div>
                                <div className="form-group col-md-2">
                                    <input type="submit" className="btn btn-dark update-btn rounded-pill" onClick={updateProfile} value="Update" />
                                </div>
                                </div>
                            </form>
                        </div>
                        <p><Link to="/updateprofile" className="btn btn-primary rounded-pill update-profile mt-5 py-2">Update Profile</Link></p>
                    


                    {/* <div className="form-group">
                            <input type="submit" className="btn btn-dark" value="Update Profile"/>
                        </div> */}
                </div>

            </div>
        </div>
    )
}
export default Profile;