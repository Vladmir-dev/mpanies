import React, { useState, useEffect, useCallback } from "react";
// import "./Carousel.css";
import NCard from "./NCard";

import Slider from "react-slick";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

const NSlider = ({ products }) => {
  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  };

  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  };

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-[95%]">
        <Slider {...settings}>
          {products.map((slide, index) => {
            return (
              <div key={index}>
                <NCard item={slide} />
                {/* <img src={slide.img} alt={`slide${index}`} /> */}
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
    
    // <div
    //   className={`carousel-wrapper ${effect}`}
    //   onKeyDown={handleKeyDown}
    //   tabIndex="0"
    //   aria-live="polite"
    //   aria-roledescription="carousel"
    // >
    //   <div className="carousel-items">
    //     {new_products.map((image, index) => (
    //       <div
    //         key={index}
    //         className={`carousel-item ${index === activeIndex ? "active" : ""}`}
    //         style={
    //           effect === "slide"
    //             ? { transform: `translateX(-${activeIndex * 100}%)` }
    //             : {}
    //         }
    //       >
    //         <img src={image.image1} alt={image.name} />
    //       </div>
    //     ))}
    //   </div>
    //   {showControls && (
    //     <>
    //       <button
    //         className="carousel-control prev"
    //         onClick={handlePrev}
    //         aria-label="Previous slide"
    //       >
    //         Previous
    //       </button>
    //       <button
    //         className="carousel-control next"
    //         onClick={handleNext}
    //         aria-label="Next slide"
    //       >
    //         Next
    //       </button>
    //     </>
    //   )}
    //   {showIndicators && (
    //     <div className="carousel-pagination">
    //       {new_products.map((_, index) => (
    //         <button
    //           key={index}
    //           className={`pagination-indicator ${
    //             index === activeIndex ? "active" : ""
    //           }`}
    //           onClick={() => setActiveIndex(index)}
    //           aria-label={`Go to slide ${index + 1}`}
    //           aria-selected={index === activeIndex}
    //         ></button>
    //       ))}
    //     </div>
    //   )}
    // </div>
  );
};

export default NSlider;
