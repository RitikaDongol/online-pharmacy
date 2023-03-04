import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SingleProduct from "../singleProduct";


const DisplayCategory=()=>{

const [categoryDetails, setCategorydetails] = useState([]);

    const config ={
        headers:{
            Authorization:'Bearer ' + localStorage.getItem('ticket')
        }
    }
    const deleteCategory =(pid)=>{
       
        // const data ={
        //     id:pid
        // }
        axios.delete("http://localhost:90/category/delete/"+pid, config)
        .then(result=>{
            console.log(result)
            if(result.data.status){
                window.location.reload();
            }
        })
        .catch()
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
    },[])
    return(
        <div class="container">
        <div class="row mt-5 mb-3">
            <div class="col-md-10 offset-md-1">
                <h1 class="text-center">All Category</h1>
              
                <div class="card card-body">
                            <form class="form myForm p-2">
                             

                                <Link to={'/addCategory'}
                       class="btn btn-primary btn-sm ms-auto float-end my-btn">Add new category</Link>
                            </form>
                </div>
    
                <div class="card mt-1">
                    <table class="table-striped mb-4 mt-0 text-center">
                        <tr class="text-center">
                            <th>Category Name</th>
                            <th>Image</th>
                            <th>Actions</th>
                        </tr>
                     
    
                       {categoryDetails.map(singleProduct=>{
                            return(
                                <tr>
                                <td> {singleProduct.cname}</td>
                                
                                <td><img src={"http://localhost:90/"+singleProduct.cimage} alt="" width="150" /></td>
                                
        
                                <td><a class="btn btn-primary" href="/cakes/update_cake/{{i.id}}">Edit</a> &nbsp;
                                    <a class="btn btn-danger"
                                       href="/cakes/delete_cake/{{i.id}}"
                                       onclick="return confirm('Are you sure?')">Delete</a></td>
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
export default DisplayCategory;