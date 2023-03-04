// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

// function ImageSlider(){
//   let settings = {
//     dot: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     cssEase:"linear",
//   }
//   return(
//     <Slider {...settings}>
//       <div className="card-wrapper">
//         <div className="card">
//           <div className="card-image">
//             <img src="images/iii.png" />
//           </div>
//         </div>
//       </div>
//       </Slider>
//   )
// }


import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

export default class SliderOne extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            
          }
        }
      ]
    };
    return (
      <div className="container home mt-5">
        <h2 className="grey fs-3"> Top Brand Products </h2>
        <Slider {...settings}>
    
        
    <div className="card">
        <img src="images/i7.jpeg" class="card-img-top image" alt="..." />
        <div class="card-body text-center product-body">
            <div class="card-title product-price fs-4">$32</div>
          <p class="card-text product-name fs-6">Vegan Diary Omega-3 </p>
          <a href="#" class="btn btn-primary product-btn rounded-pill px-3 py-2">Add to cart</a>
        </div>
      </div>
      
      <div className="card">
        <img src="images/i6.jpeg" class="card-img-top image" alt="..." />
        <div class="card-body text-center product-body">
        <div class="card-title product-price fs-4">$12</div>
          <p class="card-text product-name fs-6">Goli Nutrition Gummies </p>
          <Link to="/login" class="btn btn-primary product-btn rounded-pill px-3 py-2">Add to cart</Link>
        </div>
      </div>
      <div className="card">
        <img src="images/i3.png" class="card-img-top image" alt="..." />
        <div class="card-body text-center product-body">
        <div class="card-title product-price fs-4">$23</div>
          <p class="card-text product-name fs-6">Disinfected Mist </p>
          <a href="#" class="btn btn-primary product-btn rounded-pill px-3 py-2">Add to cart</a>
        </div>
      </div>
      <div className="card">
        <img src="images/i4.png" class="card-img-top image" alt="..." />
        <div class="card-body text-center product-body">
        <div class="card-title product-price fs-4">$28</div>
          <p class="card-text product-name fs-6">Goli Ashwagandha Gummies </p>
          <a href="#" class="btn btn-primary product-btn rounded-pill px-3 py-2">Add to cart</a>
        </div>
      </div>
      <div className="card">
        <img src="images/i3.png" class="card-img-top image" alt="..." />
        <div class="card-body text-center product-body">
        <div class="card-title product-price fs-4">$12</div>
          <p class="card-text product-name fs-6">Goli Nutrition Gummies </p>
          <a href="#" class="btn btn-primary product-btn rounded-pill px-3 py-2">Add to cart</a>
        </div>
      </div>
   
         
          
         
          
        </Slider>
      </div>
    );
  }
}