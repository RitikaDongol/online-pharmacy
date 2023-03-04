
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import moment from "moment";
const MyOrder = () => {
    const [orders, setOrders] = useState([]);
    const [message, setMessage] = useState("");
    const config = {
        headers: {
            Authorization: "Bearer " + localStorage.getItem("ticket"),
        },
    };
    const cancelOrder = (id, e) => {
        e.preventDefault();
        const data = {
            id: id,
        };
        axios
            .put("http://localhost:90/order/cancel", data, config)
            .then((response) => {
                console.log(response);
                if (response.data.success === true) {
                    setMessage("Order Cancelled Successfully");
                    window.location.reload();
                } else {
                    setMessage("Please Try Again! Something Went Wrong!!!");
                }
            })
            .catch((e) => {
                console.log(e);
            });
    };
    useEffect(() => {
        axios
            .get("http://localhost:90/order/getUserOrder", config)
            .then((res) => {
                console.log(res.data.data);
                setOrders(res.data.data);
            })
            .catch((e) => {
                console.log(e);
            });
    }, []);
    return (
        <>
            <div className="mt-5 pt-1 container">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb mt-5">
                        <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li class="breadcrumb-item"> <Link to="/profile">Profile</Link></li>
                        <li class="breadcrumb-item active" aria-current="page">My Order</li>
                    </ol>
                </nav>
                <h2 className="text-center mb-4">My Orders</h2>
                <div className="nav-articlepage-div mb-4">
                    {orders.map((data) => (
                        <div className="shadow d-flex flex-wrap p-4 justify-content-center">
                            {data.orderItem.map((product) => (
                                <div
                                    class="border-bottom mb-1"
                                    style={{
                                        maxWidth: "400px",
                                    }}
                                >
                                    <div class="row g-0">
                                        <div class="col-md-10">
                                            <img
                                                src={`http://localhost:90/${product.pid.pimage}`}
                                                class="img-fluid rounded img-thumbnail"
                                                style={{ width: "70%" }}
                                                alt="..."
                                            />
                                        </div>
                                        <div class="col-md-6 pt-1 text-center">
                                            <div class="card-body">
                                                <h5 class="card-title text-dark">
                                                    {product.pid.pname}
                                                </h5>
                                                <p class="card-text my-3">
                                                    <p>
                                                        <span className="fw-semibold">Quantity : </span>
                                                        {product.quantity}
                                                    </p>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div>
                                <p>
                                    Order Date:
                                    {moment(data.createdAt).format("MMMM Do YYYY, h:mm:ss a")}
                                </p>
                                <p>Total Price: Rs. {data.totalPrice}</p>
                                <p>Order Status: {data.orderStatus}</p>
                                <p>Payment Method: {data.paymentMethod}</p>
                                <p>Phone Number: {data.contactNo}</p>
                                <p>Address: {data.address}</p>
                            </div>
                            {data.orderStatus === "Requested" && (

                                <button
                                    className="btn btn-danger fs-5"
                                    style={{ width: "98px", height: "41px", marginLeft: "100px" }}
                                    onClick={(e) => {
                                        cancelOrder(data._id, e);
                                    }}
                                >
                                    Cancel
                                </button>

                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
export default MyOrder;