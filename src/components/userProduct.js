
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './style.css'
const ShowProduct = () => {
    const [productDetails, setProductdetails] = useState([]);
    const config = {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('ticket')
        }
    }
    let cartDetails = {}

    const cartAdd = (e) => {
        e.preventDefault();
        console.log("Hekllo");
        axios.post('http://localhost:90/carts', cartDetails, config)
        .then(result => {
            console.log(result)
            window.location.replace('/cart')
        })
        .catch(e => {
            console.log(e);
        })
    }

    useEffect(() => {
        axios.get("http://localhost:90/product/display", config)
            .then(result => {
                console.log(result)
                setProductdetails(result.data.data);
            })
            .catch(e => {
                console.log(e);
            })
    }, [])


    return (
        <div>
            <div className="container">
                <div class="row justify-content-around mt-2">
                    <div className="col-md-4 mt-4 mb-2">
                        <h1 class="text-center mt-5 mb-3 product-title fs-2"> Our Products </h1>
                        
                    </div>
                    <div className="row">
                        {productDetails.map(singleProduct => {
                            
                            cartDetails = {
                                productid: singleProduct._id,
                                pname: singleProduct.pname,
                                pdescription: singleProduct.pdescription,
                                pprice: singleProduct.pprice,
                                pimage: singleProduct.pimage,
                                addedbyName: localStorage.getItem('name'),
                                addedbyId: localStorage.getItem('id'),

                            }
                            return (


                                <div className="col-md-3">
                                    <div className="card product-card">
                                        <img src={"http://localhost:90/" + singleProduct.pimage} class="card-img-top image" alt="..." height={250} />
                                        <div class="card-body text-center product-body">
                                            <div class="card-title product-price fs-4">${singleProduct.pprice}</div>
                                            <Link to={"/product/single/"+singleProduct._id} className="product-name-link"><p class="card-text product-name fs-6 m-0"> {singleProduct.pname} </p></Link>
                                            <Link to={"/product/single/"+singleProduct._id}  className="btn btn-primary product-btn rounded-pill px-3 py-0">Shop Now</Link>
                                            {/* <Link type="submit" className="btn btn-primary product-btn rounded-pill px-3 py-0" to={"/product/single/"+singleProduct._id}>Shop Now</Link> */}
                                        </div>
                                    </div>
                                </div>



                                // <div className="col-md-3">
                                //     <div class="card shadow p-3 mb-3 bg-white rounded" >
                                //         <img src={"http://localhost:90/" + singleProduct.pimage} alt="Product image" height={150} />
                                //         <p>Product Name: {singleProduct.pname}</p>
                                //         <p>Description:{singleProduct.pdescription}</p>
                                //         <p>Price: {singleProduct.pprice}</p>
                                //         <p>Category: {singleProduct.pcategory.cname}</p>
                                //         <p>Quantity: {singleProduct.pquantity}</p>
                                //         <input type="submit" className="btn btn-primary btn-cart" onClick={cartAdd} value="Add to cart" />
                                //     </div>
                                // </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ShowProduct;


// const UserProduct =()=>{
//     return(
    //     <div className="container">

    //         <div className="row">
    //             <div className="col-md-4">
    //     <div className="card">
    //     <img src="images/ii.png" class="card-img-top image" alt="..." />
    //     <div class="card-body text-center cake-body">
    //         <div class="card-title cake-price fs-2">$22</div>
    //       <p class="card-text cake-name fs-5">Rose Wedding cake </p>
    //       <a href="#" class="btn btn-primary cake-btn">Add to cart</a>
    //     </div>
    //   </div>
    //   </div>
    //   </div>
    //   </div>
//     )
// }
// export default UserProduct;