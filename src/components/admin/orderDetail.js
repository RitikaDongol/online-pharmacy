import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import moment from "moment";
const OrderDetail = () => {
  const [orders, setOrders] = useState([]);
  const [message, setMessage] = useState("");
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("ticket"),
    },
  };
  const acceptOrder = (id, e) => {
    e.preventDefault();
    const data = {
      id: id,
    };
    axios
      .put("http://localhost:90/order/accept", data, config)
      .then((response) => {
        console.log(response);
        if (response.data.success === true) {
          setMessage("Order accepted Successfully");
          window.location.reload();
        } else {
          setMessage("Please Try Again! Something Went Wrong!!!");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const deliverOrder = (id, e) => {
    e.preventDefault();
    const data = {
      id: id,
    };
    axios
      .put("http://localhost:90/order/delivered", data, config)
      .then((response) => {
        console.log(response);
        if (response.data.success === true) {
          setMessage("Order delivered Successfully");
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
      .get("http://localhost:90/order/get", config)
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
      <div className="mt-5">
        <h2 className="text-center mt-5">My Orders</h2>
        <div className="nav-articlepage-div">
          {orders.map((data) => (
            <div className="shadow d-flex flex-wrap p-4 justify-content-center">
              {data.orderItem.map((product) => (
                <div
                  class="border-bottom mb-3"
                  style={{
                    maxWidth: "400px",
                  }}
                >
                  <div class="row g-0">
                    <div class="col-md-8">
                      <img
                        src={`http://localhost:90/${product.pid.pimage}`}
                        class="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div class="col-md-5">
                      <div class="card-body">
                        <h5 class="card-title text-dark">
                          {product.pid.pname}
                        </h5>
                        <p class="card-text my-3">
                          <p>
                            <b>Quantity :</b>
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
                  className="btn btn-success fs-6 ms-5 p-0"
                  style={{ width: "110px", height:"40px" }}
                  onClick={(e) => {
                    acceptOrder(data._id, e);
                  }}
                >
                  Accept
                </button>

              )}
              {data.orderStatus === "On the Way" && (

                <button
                  className="btn btn-danger  fs-5 "
                  style={{ width: "30px" }}
                  onClick={(e) => {
                    deliverOrder(data._id, e);
                  }}
                >
                  Delivered
                </button>

              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default OrderDetail;