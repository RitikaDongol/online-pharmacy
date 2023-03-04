import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SingleProduct from "../singleProduct";


const DisplayProduct = () => {

    const [productDetails, setProductdetails] = useState([]);

    const config = {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('ticket')
        }
    }
    const deleteProduct = (pid) => {

        // const data ={
        //     id:pid
        // }
        axios.delete("http://localhost:90/product/delete/" + pid, config)
            .then(result => {
                console.log(result)
                if (result.data.status) {
                    window.location.reload();
                }
            })
            .catch()
    }
    useEffect(() => {
        axios.get("http://localhost:90/product/display", config)
            .then(result => {
                console.log(result)
                setProductdetails(result.data.data)
            })
            .catch(e => {
                console.log(e)
            })
    }, [])
    return (
        <div class="container">
            <div class="row mt-5 mb-3">
                <div class="col-md-10 offset-md-1">
                    <h1 class="text-center">All Products</h1>

                    <div class="card card-body">
                        <form class="form myForm p-2">


                            <Link to={'/addProduct'}
                                class="btn btn-primary btn-sm ms-auto float-end">Add new product</Link>
                        </form>
                    </div>

                    <div class="card mt-1">
                        <table class="table-striped mb-4 mt-0 text-center">
                            <tr class="text-center">
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Image</th>
                                <th>Category</th>
                            
                                <th>Actions</th>
                            </tr>


                            {productDetails.map(singleProduct => {
                                return (
                                    <tr>
                                        <td> {singleProduct.pname}</td>
                                        <td> {singleProduct.pprice}</td>
                                        <td><img src={"http://localhost:90/" + singleProduct.pimage} alt="" width="150" /></td>
                                        <td>{singleProduct.pcategory.cname} </td>
                                 

                                        <td><Link class="btn btn-primary me-1" to={"/updateproduct/" + singleProduct._id} >Edit</Link>
                                            <button className="btn btn-danger" onClick={() => { deleteProduct(singleProduct._id) }}>Delete</button>
                                            {/* <a class="btn btn-danger"
                                       href="/cakes/delete_cake/{{i.id}}"
                                       onclick="return confirm('Are you sure?')">Delete</a>*/}
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
        //                      <Link class="btn btn-primary" to={"/updateproduct/" + singleProduct._id} >
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
export default DisplayProduct;