import { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import './style.css'

const Register = () => {
    const [fn, setFirstname] = useState('');
    const [ln, setLastname] = useState('');
    const [age, setAge] = useState('');
    const [dob, setDob] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setContact] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const registerCustomer = (e) => {
        e.preventDefault();
        const data = {
            email: email,
            fn: fn,
            ln: ln,
            age: age,
            dob: dob,
            phone: phone,
            password: password

        }
        axios.post('http://localhost:90/customer/register', data)
            .then(response => {
                setMessage(response.data.message);
                console.log(response.data.message)
            })
            .catch(e => { console.log(e) })
    }
    return (
        <div className="register mt-5">
            <h2>Register</h2>
            {
                message ? <div class="alert alert-success" role="alert">
                    {message}
                </div> : null
            }

            <form>
                <input
                    type="text"
                    name="Firstname"
                    placeholder="Firstname..."
                    required
                    onChange={(e) => setFirstname(e.target.value)}
                />
                <input
                    type="text"
                    name="Lastname"
                    placeholder="Lastname..."
                    required
                    onChange={(e) => setLastname(e.target.value)}
                />
                <input
                    type="number"
                    name="Age"
                    placeholder="Age..."
                    required
                    onChange={(e) => setAge(e.target.value)}
                />
                <input
                    type="date"
                    name="DOB"
                    placeholder="DOB..."
                    required
                    onChange={(e) => setDob(e.target.value)}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email..."
                    required
                    onChange={(e) => setEmail(e.target.value)}

                />
                <input
                    type="number"
                    name="contact"
                    placeholder="Contact..."
                    required
                    onChange={(e) => setContact(e.target.value)}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password..."
                    required
                    onChange={(e) => setPassword(e.target.value)}

                />


                <div className="row">
                    <button type="sumbit" onClick={registerCustomer}>Register</button>
                    <span className="center">
                        Have already an account? 
                        <Link to="/login">Login here.</Link>
                    </span>
                </div>
            </form>
        </div>

        // <div className="container center register">
        //     <div className="row center">
        //         <div className="col-md-4">
        //             <h2>Registration</h2>
        //            {
        //                   message ? <div class="alert alert-success" role="alert">
        //                     {message}
        //                 </div> : null
        //            }

        //             <form>
        //                 <div className="form-group">
        //                     <label>First name</label>
        //                     <input type="text" className="form-control" onChange={(e) => setFirstname(e.target.value)} />
        //                 </div>
        //                 <div className="form-group">
        //                     <label>Last name</label>
        //                     <input type="text" className="form-control" onChange={(e) => setLastname(e.target.value)} />
        //                 </div>
        //                 <div className="form-group">
        //                     <label>Age</label>
        //                     <input type="text" className="form-control" onChange={(e) => setAge(e.target.value)} />
        //                 </div>
        //                 <div className="form-group">
        //                     <label>DOB</label>
        //                     <input type="date" className="form-control" onChange={(e) => setDob(e.target.value)} />
        //                 </div>
        //                 <div className="form-group">
        //                     <label>Email</label>
        //                     <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} />
        //                 </div>
        //                 <div className="form-group">
        //                     <label>Contact</label>
        //                     <input type="number" className="form-control" onChange={(e) => setContact(e.target.value)} />
        //                 </div>
        //                 <div className="form-group">
        //                     <label>Password</label>
        //                     <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} />
        //                 </div>
        //                 <div className="row">
        //                 <button type="submit" className="btn btn-primary mt-3" onClick={registerCustomer}> Register</button>
        //                 </div>
        //             </form>
        //         </div>
        //     </div>
        // </div>
    )
}
export default Register;