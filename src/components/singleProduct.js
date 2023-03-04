import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import moment from "moment";
import $ from "jquery";

const SingleProduct = () => {
    const { pid } = useParams();
    const { productid } = useParams();
    const [details, setDetails] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [message, setMessage] = useState('');
    const [comment, setComment] = useState('');
    const [review, setReview] = useState([]);


    const config = {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('ticket')
        }
    }
    useEffect(() => {
        axios.get("http://localhost:90/product/single/" + pid, config)
            .then(result => {
                console.log(result)
                setDetails(result.data.data);
            })
            .catch();
        axios.get("http://localhost:90/review/get/" + pid)
            .then(result => {
                console.log(result)
                setReview(result.data.data);
            })
            .catch()
    }, []);
    const deleteReview = (review_id) => {
        console.log(review_id);
        axios
            .delete("http://localhost:90/review/delete/" + review_id, config)
            .then((result) => {
                console.log(result);
                if (result.data.success) {
                    console.log("Review Deleted Successfull");
                    window.location.reload();
                } else {
                    console.log("Please Try Again!!!");
                }
            })
            .catch((e) => {
                console.log(e);
            });
    };
    const addToCart = (e) => {
        e.preventDefault();
        const data = {
            pid: pid,
            quantity: quantity,
        };
        axios
            .post("http://localhost:90/cart/insert", data, config)
            .then((response) => {
                if (response.data.success === true) {
                    setMessage("Product Added To Cart Successfully");
                    window.location.replace("/cart");
                } else {
                    setMessage("Please Try Again! Something Went Wrong!!!");
                }
                console.log(response);
            })
            .catch((e) => {
                console.log(e);
            });
    };
    const addReview = (e) => {
        e.preventDefault();
        const data = {
            pid: pid,
            comment: comment,
        };
        axios
            .post("http://localhost:90/review/insert", data, config)
            .then((response) => {
                if (response.data.success === true) {
                    setMessage("Review Added Successfully");
                    window.location.reload();
                } else {
                    setMessage("Please Try Again! Something Went Wrong!!!");
                }
                console.log(response);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    const incrementQuantity = () => {

        setQuantity(parseInt(quantity) + 1);

    };
    const decrementQuantity = () => {

        if (parseInt(quantity) > 1) {

            setQuantity(parseInt(quantity) - 1);

        }

    };

    return (
        <>
            <div className="container single-page">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li class="breadcrumb-item"><Link to="/userProduct">Products</Link></li>
                        <li class="breadcrumb-item active" aria-current="page">{details.pname}</li>
                    </ol>
                </nav>
                <div className="row shadow single-row">
                    <div className="col-md-6  text-center p-5">
                        <img className="single-image" src={"http://localhost:90/" + details.pimage} alt="" height={300} />
                    </div>
                    {/* <div class="vl"></div> */}
                    <div className="col-md-6 vl">
                        <h2 className="fs-3 mt-4 ms-4 general-title">{details.pname}</h2>
                        <p className="ms-4 col-md-9">{details.pdescription}</p>
                        <form className="rating-form">
                            <span class="rating-star">
                                <input type="radio" name="rating" value="5" /><span class="star"></span>

                                <input type="radio" name="rating" value="4" /><span class="star"></span>

                                <input type="radio" name="rating" value="3" /><span class="star"></span>

                                <input type="radio" name="rating" value="2" /><span class="star"></span>

                                <input type="radio" name="rating" value="1" /><span class="star"></span>
                            </span>
                            <span id="selected-rating" class="selected-rating" >Be the first to review this product</span>
                            <p className="mt-3">Manufacturer: <span className="manufacturer">Bhaskar Herbaceuticals</span></p>
                            <p>Delivery date: 1-3 days</p>
                            <div>

                                <span onClick={decrementQuantity}>-</span>

                                <input value={parseInt(quantity)} disabled className="quantity-box" />

                                <span onClick={incrementQuantity}>+</span>

                            </div>
                            <p className="price-detail mt-2">Price: ${details.pprice}.00</p>
                            <input type="submit" className="btn btn-primary product-btn rounded-pill px-3 py-2 " onClick={addToCart} value="Add to cart" />
                            {/* <span id="selected-rating" class="selected-rating" >0</span> */}
                        </form>
                    </div>
                    {/* <h2>{details.pname}</h2>
                <p>{details.pdescription}</p> */}
                </div>
            </div>
            <div className='container review'>
                <h2 className="grey fs-4 mt-5"> Reviews </h2>
                <div className='card review-card shadow px-3'>
                    <input type="submit" className="btn btn-primary review-btn rounded-pill py-2 mt-2 col-md-2" value="Add your Reviews" onClick={addReview} />
                    <textarea className="form-control col-md-10 px-2 mt-3 mb-3" rows="2" placeholder="Write your review here" onChange={(e) => setComment(e.target.value)}></textarea>

                </div>

            </div>

            <div className='comments mt-4 ms-2 me-2' >
                <div className='container review'>
                    {review.map((reviewDetails) => {
                        return (
                            <div className='row shadow my-2'>
                                <div className='col-md-1 ms-5'>
                                    <img src={"http://localhost:90/" + reviewDetails.userid.picture} style={{ width: "80px" }} className="rounded-circle" />
                                </div>
                                <div className='col-md-2 mt-3'>
                                    <span style={{ color: "blue" }}>{reviewDetails.userid.fn}  {reviewDetails.userid.ln}</span><br/>
                                    <span style={{fontSize:"12px", color:"gray"}}>{moment(reviewDetails.createdAt).format("MMMM Do YYYY, h:mm:ss a")}</span>
                                </div>
                                <div className='col-md-6 mt-4'>
                                    <p style={{fontSize:"14px"}}>{reviewDetails.comment}</p>
                                </div>
                                <div className='col-md-1 mt-3'>
                                    <Link to='' onClick={()=>{
                                        deleteReview(reviewDetails._id);
                                    }} className="btn btn-sm btn-danger"><i class="fa-solid fa-trash-can" style={{fontSize:"14px"}}></i></Link>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </>
    )
}

export default SingleProduct;
