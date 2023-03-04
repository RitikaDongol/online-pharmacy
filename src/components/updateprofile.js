import { useEffect, useState } from "react";
import axios from 'axios';
import './style.css';
const UpdateProfile = () => {
    // const[fn, setFirstname]=useState('');
    // const[ln, setLastname]=useState('');
    // const[age, setAge]=useState('');
    // // const[dob, setDob]=useState('');
    // const[email, setEmail]=useState('');
    // const[contact, setContact]=useState('');
    // const[password, setPassword]=useState('');
    const [message, setMessage] = useState('');

    const [user, setUserdata] = useState('');

    const [fn, setFn] = useState('');
    const [ln, setLn] = useState('');
    const [age, setage] = useState('');
    const [email, setemail] = useState('');

    const config = {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('ticket')
        }
    }
    const updateProfile = (e) => {
        e.preventDefault();
        const data = {
            fn: fn,
            ln: ln,
            email: email,
            age: age
        }
        axios.put("http://localhost:90/customer/update", data, config)
            .then(result => {
                console.log(result)
                window.location.replace('/profile')
            })
            .catch(e => {
                console.log(e);
            })
    }

    useEffect(() => {
        axios.get("http://localhost:90/customer/dashboard", config)
            .then(result => {
                console.log(result);
                setUserdata(result.data.data);
                setFn(result.data.data.fn);
                setLn(result.data.data.ln);
                setage(result.data.data.age);
                setemail(result.data.data.email);
            })
            .catch(e => {
                console.log(e)
            })
    }, [])

    // const UpdateCustomer=(e)=>{
    //     e.preventDefault();
    //     const data={
    //         email:email,
    //         fn:fn,
    //         ln:ln,
    //         age:age,
    //         dob:dob,
    //         phone:contact,
    //         password:password

    //     }
    //     axios.post('http://localhost:90/customer/update', data)
    //     .then(response=>{
    //         setMessage(response.data.message);
    //         console.log(response.data.message)
    //     })
    //     .catch(e=>{console.log(e)})
    // }
    return (
        <div className="container">
            {/* <div className="row justify-content-center">
            <div className="col-md-4 mt-5"> */}

            {/* <p>{message}</p> */}

            <form className="my-form update-form my-5">
                <h2 className="text-center mb-4 mt-4">Update Profile</h2>
                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" value={fn} onChange={(e) => { setFn(e.target.value) }} />
                </div>
                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" value={ln} onChange={(e) => { setLn(e.target.value) }} />
                </div>
                <div className="form-group">
                    <label>Age</label>
                    <input type="text" className="form-control" value={age} onChange={(e) => { setage(e.target.value) }} />
                </div>
                {/* <div className="form-group">
                    <label>DOB</label>
                    <input type="date" className="form-control" onChange={(e) =>setDob(e.target.value)}/>
                </div> */}
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" value={email} onChange={(e) => { setemail(e.target.value) }} />
                </div>
                {/* <div className="form-group">
                    <label>Contact</label>
                    <input type="number" className="form-control" onChange={(e) =>setContact(e.target.value) }/>
                </div> */}
                {/* <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" onChange={(e) =>setPassword(e.target.value)} />
                </div> */}

                <button type="submit" className="btn mt-3 rounded-pill profile-update-btn" onClick={updateProfile}> Update</button>
            </form>
        </div>
        //     </div>
        // </div>
    )
}
export default UpdateProfile;