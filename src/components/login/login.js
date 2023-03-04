import { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import './style.css'

const Login = (e) =>{
    const[email, setEmail]=useState('');
    const[password, setPassword]=useState('');
    const [message, setMessage] = useState('');

    const loginCustomer=(e)=>{
        e.preventDefault();
        const data={
            email:email,
            
            password:password

        }
        axios.post('http://localhost:90/customer/login', data)
        .then(response=>{
            
            console.log(response.data.token)
            if(response.data.token){
                //login success
                
                // localStorage.setItem('userType','Customer');
                localStorage.setItem('userType',response.data.userType);
                localStorage.setItem('ticket', response.data.token);
                //redirect to anypage you want
                window.location.replace("/");
            }else{
                //login failure
                setMessage("Invalid login credentials");
            }
        })
        .catch(e=>{console.log(e)})

    }
    return(
 
        <div className="login">
         <h2>Login</h2>
         <form>
            <input
               type="email"
               name="email"
               placeholder="Email..."
               required
               className="form-control"
               onChange={(e) =>setEmail(e.target.value)}
               
              
            />
            <input
               type="password"
               name="password"
               placeholder="Password..."
               required
               className="form-control"
               onChange={(e) =>setPassword(e.target.value)}
              
              
            />

            <div className="row">
               <button type="sumbit"  onClick={loginCustomer}>Login</button>
               <span>
                  No account yet? <Link to="/register">Register here.</Link>
               </span>
            </div>
         </form>
      </div>


        // <div className="container center">
        //     <div className="row center">
        //     <div className="col-md-4">
        //         <h2>Login</h2>
        //         <p>{message}</p>
               
        //     <form>
            
        //         <div className="form-group">
        //             <label>Email</label>
        //             <input type="email" className="form-control" onChange={(e) =>setEmail(e.target.value)}/>
        //         </div>

        //         <div className="form-group">
        //             <label>Password</label>
        //             <input type="password" className="form-control" onChange={(e) =>setPassword(e.target.value)} />
        //         </div>
                   
        //         <button type="submit" className="btn btn-primary mt-3" onClick={loginCustomer}> Login</button>
        //     </form>
        //     </div>
        //     </div>
        // </div>
    )
}
export default Login;