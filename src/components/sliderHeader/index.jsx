import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import './index.css'; 

function Carousel({ props }) {
  return (
    <div className="carousel-container">
      <Splide
        aria-label="banner_slider"
        className="carousel"
      >
        <SplideSlide>
          <div  style={props.style}>
            
          </div>
        </SplideSlide>
        <SplideSlide>
            <div style={props.style}>

            </div>
        </SplideSlide>
      </Splide>
    </div>
  );
}

export default Carousel;