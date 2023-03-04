import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SingleProduct from "../singleProduct";


const DisplayPrescription=()=>{

const [prescriptionDetails, setPrescriptiondetails] = useState([]);
const user = localStorage.getItem('user');

    const config ={
        headers:{
            Authorization:'Bearer ' + localStorage.getItem('ticket')
        }
    }
    const deletePrescription =(pid)=>{
       
        // const data ={
        //     id:pid
        // }
        axios.delete("http://localhost:90/prescription/delete/"+pid, config)
        .then(result=>{
            console.log(result)
            if(result.data.status){
                window.location.reload();
            }
        })
        .catch()
    }
    useEffect(()=>{
        axios.get("http://localhost:90/prescription/displayall", config)
        .then(result=>{
            console.log(result)
            setPrescriptiondetails(result.data.data)
        })
        .catch(e=>{
            console.log(e)
        })
    },[])
    return(
        <div class="container">
        <div class="row mt-5 mb-3">
            <div class="col-md-10 offset-md-1">
                <h2 class="text-center mb-4">All Uploaded Prescription</h2>
              
    
                <div class="card mt-1">
                    <table class="table-striped mb-4 mt-0 text-center">
                        <tr class="text-center ">
                    
                            <th>Prescription</th>
                            <th>Phone</th>
                            <th>Message</th>
                            <th>Action</th>
                        </tr>
                     
    
                       {prescriptionDetails.map(singleProduct=>{
                            return(
                                <tr>
                                {/* <td>{singleProduct.user}</td> */}
                                
                                <td><img src={"http://localhost:90/"+singleProduct.image} alt="" width="150" /></td>
                                <td> {singleProduct.phone}</td>
                                <td> {singleProduct.message}</td>
                                
                                <td>
                                <button className="btn btn-danger" onClick={() => { deletePrescription(singleProduct._id) }}>Delete</button></td>
                            </tr>
                            )
                       })}
                        
    
                    </table>
                </div>
            </div>
        </div>
    </div>

        // <div>
        //     <div className="container">
        //         <div className="row">
        //             <div className="col-md-4">
        //                 <h3>Product title</h3>
        //                 <div className="description">
        //                     <p> This si product description</p>
        //                 </div>
        //                 </div>
        //                 <div className="row">
        //                     {productDetails.map(singleProduct=>{
        //                 return(
        //                     <div className="col-md-4">
        //                 <p>Name: {singleProduct.pname}</p>
        //                 <p>Price: {singleProduct.pprice}</p>
        //                 <p>Category: {singleProduct.pcategory}</p>
        //                 <Link to={"/updateproduct/" + singleProduct._id}>Update</Link>
        //                 <button onClick={()=>{deleteProduct(singleProduct._id)}}>Delete</button>
        //                 <Link to={"/product/single/"+singleProduct._id}>Read More</Link>
        //                 {/* <p>Quantity: {singleProduct.pquantiy}</p> */}
        //             </div>
                    
        //                 )
                        
        //             })}
        //             </div>
                    
        //             </div>
                
        //     </div>
        // </div>
    )
}
export default DisplayPrescription;