import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const AddCart = () => {
    const [details, setDetails] = useState([]);
    const [address, setAddress] = useState("");
    const [contactNo, setContactNo] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("");
    const [msg, setMsg] = useState('');
    // const [paymentStatus, setPaymentStatus] = useState("");
    const [message, setMessage] = useState("");
    const config = {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('ticket')
        }
    }
    var paymentStatus;
    if (paymentMethod === 'Cash On Delivery') {
        paymentStatus = "Pending";
    } else {
        paymentStatus = "Paid";
    }
    const deleteCart = (cart_id) => {
        console.log(cart_id);
        axios
            .delete("http://localhost:90/cart/delete/" + cart_id, config)
            .then((result) => {
                console.log(result);
                if (result.data.success) {
                    console.log("Cart Deleted Successfull");
                    window.location.replace("/cart");
                } else {
                    console.log("Please Try Again!!!");
                }
            })
            .catch((e) => {
                console.log(e);
            });
    };
    useEffect(() => {
        axios
            .get("http://localhost:90/cart/get", config)
            .then((result) => {
                console.log(result);
                setDetails(result.data.data);
            })
            .catch((e) => {
                console.log(e);
            });
    }, []);
    const orderProduct = () => {
        const data = {
            orderItem: details,
            totalPrice: details.reduce(
                (a, c) => a + c.pid.pprice * c.quantity,
                0
            ),
            paymentMethod: paymentMethod,
            paymentStatus: paymentStatus,
            contactNo: contactNo,
            address: address,
        };
        axios
            .post("http://localhost:90/order/insert", data, config)
            .then((response) => {
                if (response.data.success === true) {
                    setMessage("Order Made Successfully");
                } else {
                    setMessage("Please Try Again! Something Went Wrong!!!");
                }
                console.log(response);
                setMsg(response.data.msg);
                console.log(response.data.msg)
            })
            .catch((e) => {
                console.log(e);
            });
    };
    return (
        <div className="cart-body mt-5 pt-4">
            <div className="container mb-4">
                <h2 className="mb-5 first-cap text-center">My Cart</h2>
                <div className="row">
                    <div className="col-12">
                        <div className="table-responsive">
                            <table className="table table-striped table-bordered">
                                <thead className="thead-dark">
                                    <tr className='table-dark' >
                                        <th scope="col" className="text-center" style={{ fontWeight: '500' }}>Image</th>
                                        <th scope="col" className="text-center" style={{ fontWeight: '500' }}>Name</th>
                                        <th scope="col" className="text-center" style={{ fontWeight: '500' }}>Price</th>
                                        <th scope="col" className="text-center" style={{ fontWeight: '500' }}>Quantity</th>
                                        <th scope="col" className="text-center" style={{ fontWeight: '500' }}>Total</th>
                                        <th scope="col" className="text-center" style={{ fontWeight: '500' }}>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {details.map(singleProduct => {
                                        return (
                                            <tr>


                                                <td className='text-center'><img src={"http://localhost:90/" + singleProduct.pid.pimage} alt="" width="150" className='text-center' /></td>
                                                <td className='text-center'> {singleProduct.pid.pname}</td>
                                                <td className='text-center'> {singleProduct.pid.pprice}</td>
                                                <td className='text-center'> {singleProduct.quantity}</td>
                                                <td className='text-center'> {singleProduct.pid.pprice * singleProduct.quantity}</td>

                                                <td ><a class="btn btn-primary" href="/cakes/update_cake/{{i.id}}">Edit</a> &nbsp;
                                                    <a class="btn btn-danger"
                                                        onClick={() => { deleteCart(singleProduct._id) }}>Delete</a></td>
                                            </tr>
                                        )
                                    })}


                                    <tr>
                                        <td colSpan="4"></td>
                                        <td className="text-center">NRs. 000.0</td>
                                        <td colSpan="2">Free Shipping</td>
                                    </tr>
                                    {/* <tr>
                                    <td colSpan="4"></td>
                                    <td className="text-center">Total Amount</td>
                                    <td colSpan="2">Sub-Total</td>
                                </tr> */}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col mb-2">
                        <div className="row">
                            <div className="col-sm-12  col-md-6 ms-4">
                                <Link to="/userProduct" className="btn btn-lg btn-block rounded btn-light text-uppercase">Continue Shopping</Link>
                            </div>
                            {/* <div className="col-sm-12 col-md-5 text-end">
                                    <Link className="btn btn-lg btn-block btn-success"
                                        to="/order"
                                    >Checkout</Link>
                                </div> */}
                            <div className="col-sm-12 col-md-5 text-end">
                                <button type="button" class="btn btn-lg btn-block btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                                    Checkout
                                </button>
                            </div>


                            <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModal1Label" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModal1Label">Checkout</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <div className="container px-3">
                                                <div className="row justify-content-center">
                                                    {/* <div className="text-center pghead fs-1 mb-4">Order Summary</div> */}

                                                    <div className="col-md-9 border py-2 rounded">
                                                        <form className="text-center">
                                                            {
                                                                msg ? <div class="alert col-md-12 py-1 m-auto alert-success text-center" role="alert">
                                                                    {msg}

                                                                </div>

                                                                    : null
                                                            }
                                                            {/* <h3 className="text-center">Checkout</h3> */}
                                                            <div className="py-2 ">
                                                                <label className='fw-semibold'>Shipping Address</label>
                                                                <input type="text" onChange={(e) => {
                                                                    setAddress(e.target.value);
                                                                }} />
                                                            </div>
                                                            <div className="py-2">
                                                                <label className='fw-semibold'>Contact number</label>
                                                                <input type="text" onChange={(e) => {
                                                                    setContactNo(e.target.value);
                                                                }} />
                                                            </div>

                                                            <div className="py-2">
                                                                <label className='fw-semibold'>Payment Method</label>
                                                                {/* <input
                type="text"
                className="form-control"
                placeholder="Guitar Category"
                onChange={(e) => {
                  setGuitarCategory(e.target.value);
                }}
              /> */}
                                                                <select
                                                                    class="form-select form-select-sm mb-3"
                                                                    aria-label=".form-select-sm example"
                                                                    onChange={(e) => {
                                                                        setPaymentMethod(e.target.value);
                                                                    }}
                                                                >
                                                                    <option selected>Select Category</option>
                                                                    <option value="Cash On Delivery">Cash On Delivery</option>
                                                                    <option value="Esewa">Esewa</option>
                                                                    <option value="Khalti">Khalti</option>
                                                                </select>
                                                            </div>
                                                            <div className="py-1">
                                                                <label className='fw-semibold'>Payment Status</label>
                                                                <input type="text" disabled value="Pending" />
                                                            </div>
                                                            <div>
                                                                <label className='fw-semibold'> Total Price:</label>
                                                                <p className="fs-4">
                                                                    {details.reduce(
                                                                        (a, c) => a + c.pid.pprice * c.quantity,
                                                                        0
                                                                    )}
                                                                </p>
                                                            </div>

                                                        </form>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <Link
                                                to=""
                                                //   to={"/updateguitar/" + singleData._id}
                                                class="btn btn-primary my-btn"
                                                onClick={orderProduct}
                                            >
                                                <i class="fa fa-edit" aria-hidden="true"></i>Place Order
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddCart
