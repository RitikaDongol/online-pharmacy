import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const OrderPage = () => {
  const [details, setDetails] = useState([]);
  const [address, setAddress] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  // const [paymentStatus, setPaymentStatus] = useState("");
  const [message, setMessage] = useState("");
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("ticket"),
    },
  };
  var paymentStatus;
  if(paymentMethod === 'Cash On Delivery'){
    paymentStatus = "Pending";
  } else {
    paymentStatus = "Paid";
  }
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
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div className="container mt-5 my-3">
      <div className="row justify-content-center">
        {/* <div className="text-center pghead fs-1 mb-4">Order Summary</div> */}
         
          <div className="col-sm-5 ms-5 border shadow  py-2 px-5 rounded">
            <form className="">
            <h3 className="text-center">Checkout</h3>
            <div className="py-2 form-group">
                <label>Shipping Address:</label>
                <input type="text" onChange={(e) => {
                  setAddress(e.target.value);
                }} />
            </div>
            <div className="py-2 form-group">
                <label>Contact no:</label>
                <input type="text" onChange={(e) => {
                  setContactNo(e.target.value);
                }} />
            </div>
           
            <div className="py-2 form-group">
              <label>Payment Method:</label>
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
            <div className="py-3 form-group">
                <label>Payment Status</label>
                <input type="text" disabled value="Pending" />
            </div>
            <div>
              <label> Total Price:</label>
              <p className="fs-4">
                {details.reduce(
                  (a, c) => a + c.pid.pprice * c.quantity,
                  0
                )}
              </p>
            </div>
            <Link
              to="/myorder"
              //   to={"/updateguitar/" + singleData._id}
              class="btn btn-primary my-btn mt-4 p-2"
              onClick={orderProduct}
            >
              <i class="fa fa-edit" aria-hidden="true"></i>Place Order
            </Link>
            </form>
          </div>
        </div>
      </div>

  );
};
export default OrderPage;