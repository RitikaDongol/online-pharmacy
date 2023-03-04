import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class SliderTwo extends Component {
  render() {
    var settings = {
      dots: true,
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
        <h2 className="grey fs-3"> New Products </h2>
        <Slider {...settings}>
    
        
    <div className="card">
        <img src="images/i8.jpeg" class="card-img-top image" alt="..." />
        <div class="card-body text-center product-body">
            <div class="card-title product-price fs-4">$12</div>
          <p class="card-text product-name fs-6">Multi vitamins </p>
          <a href="#" class="btn btn-primary product-btn rounded-pill px-3 py-2">Add to cart</a>
        </div>
      </div>
      
      <div className="card">
        <img src="images/i9.jpeg" class="card-img-top image" alt="..." />
        <div class="card-body text-center product-body">
        <div class="card-title product-price fs-4">$22</div>
          <p class="card-text product-name fs-6">Melao Scars </p>
          <a href="#" class="btn btn-primary product-btn rounded-pill px-3 py-2">Add to cart</a>
        </div>
      </div>
      <div className="card">
        <img src="images/i10.jpeg" class="card-img-top image" alt="..." />
        <div class="card-body text-center product-body">
        <div class="card-title product-price fs-4">$14</div>
          <p class="card-text product-name fs-6">Hair Vitamins </p>
          <a href="#" class="btn btn-primary product-btn rounded-pill px-3 py-2">Add to cart</a>
        </div>
      </div>
      <div className="card">
        <img src="images/i11.png" class="card-img-top image" alt="..." />
        <div class="card-body text-center product-body">
        <div class="card-title product-price fs-4">$3</div>
          <p class="card-text product-name fs-6">Mother Spash </p>
          <a href="#" class="btn btn-primary product-btn rounded-pill px-3 py-2">Add to cart</a>
        </div>
      </div>
      <div className="card">
        <img src="images/i3.png" class="card-img-top image" alt="..." />
        <div class="card-body text-center product-body">
        <div class="card-title product-price fs-4">$13</div>
          <p class="card-text product-name fs-6">Disinfected Mist</p>
          <a href="#" class="btn btn-primary product-btn rounded-pill px-3 py-2">Add to cart</a>
        </div>
      </div>
   
         
          
         
          
        </Slider>
      </div>
    );
  }
}