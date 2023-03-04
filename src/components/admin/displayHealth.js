import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SingleProduct from "../singleProduct";


const DisplayHealth=()=>{

const [healthDetails, setHealthdetails] = useState([]);

    const config ={
        headers:{
            Authorization:'Bearer ' + localStorage.getItem('ticket')
        }
    }
    const deleteHealth =(pid)=>{
       
        // const data ={
        //     id:pid
        // }
        axios.delete("http://localhost:90/health/delete/"+pid, config)
        .then(result=>{
            console.log(result)
            if(result.data.status){
                window.location.reload();
            }
        })
        .catch()
    }
    useEffect(()=>{
        axios.get("http://localhost:90/health/displayall", config)
        .then(result=>{
            console.log(result)
            setHealthdetails(result.data.data)
        })
        .catch(e=>{
            console.log(e)
        })
    },[])
    return(
        <div class="container">
        <div class="row mt-5 mb-3">
            <div class="col-md-10 offset-md-1">
                <h1 class="text-center">All Health Library</h1>
              
                <div class="card card-body">
                            <form class="form myForm p-2">
                             

                                <Link to={'/addHealth'}
                       class="btn btn-primary btn-sm ms-auto float-end my-btn">Add new health library</Link>
                            </form>
                </div>
    
                <div class="card mt-1">
                    <table class="mb-4 mt-0 text-center">
                        <tr class="text-center">
                            <th>Title</th>
                            <th>Description</th>
                            <th>Image</th>
                            <th>Date</th>
                            <th>Author</th>
                            <th>Action</th>
                        </tr>
                        
    
                       {healthDetails.map(singleProduct=>{
                            return(
                                <tr className="">
                                <td> {singleProduct.title}</td>
                                <td className="text-start"> {singleProduct.description}</td>
                                <td><img src={"http://localhost:90/"+singleProduct.image} alt="" width="150" /></td>
                                <td> {singleProduct.date}</td>
                                <td> {singleProduct.author}</td>
                                
        
                                <td><a class="btn btn-primary" href="/cakes/update_cake/{{i.id}}">Edit</a> &nbsp;
                                    {/* <a class="btn btn-danger"
                                       href=""
                                       onclick="return confirm('Are you sure?')">Delete</a>*/}
                                        <button className="btn btn-danger" onClick={() => { deleteHealth(singleProduct._id) }}>Delete</button>
                                       </td> 
                                       
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
export default DisplayHealth;