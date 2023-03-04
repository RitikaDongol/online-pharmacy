import React from 'react'
import './style.css';
import { useState } from "react";

const Review = () => {
    const[comment, setComment]=useState('');
    const[review, setReview]=useState('');
    return (
        <>
        <div className='container review'>
            <h2 className="grey fs-4 mt-5"> Reviews </h2>
            <div className='card review-card shadow px-3'>
            <input type="submit" className="btn btn-primary review-btn rounded-pill py-2 mt-2 col-md-2" value="Add your Reviews" onChange={(e) =>setComment(e.target.value) }/>
            <textarea className="form-control col-md-10 px-2 mt-3 mb-3" rows="2" placeholder="Write your review here"></textarea>

            </div>
            
        </div>
        <div className='comments mt-4' >
            <div className='container review'>
                <div className='row'>
                    <div className='col-md-1 ms-5'>
                <img src='/images/profile-1.jpg' style={{width:"80px"}} className="rounded-circle" />
                </div>
                <div className='col-md-2'>
                    <p style={{color:"blue"}}>Rijwol Shakya</p>
                    <span>Date</span>
                </div>
                <div className='col-md-6'>
                    <p>this is my comment over here this is my comment over here this is my comment over here</p>
                </div>
                <div className='col-md-1'>
                    <button>Delete</button>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Review;
