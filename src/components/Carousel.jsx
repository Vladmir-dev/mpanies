import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import slider2 from '../assets/slider-2.jpg'
import slider1 from '../assets/slider-1-removebg.png'

const Carousel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <div className="w-full">
      <Slider {...settings}>
        <div className=" flex justify-center items-center w-[100vw] h-[100vh]">
          <div className="w-full h-full flex justify-center items-center px-4">
            <div className="md:w-[40%] flex flex-col md:justify-start justify-center items-center md:items-start md:gap-8 gap-10">
              <h3 className="uppercase md:text-[36px] font-thin text-[45px] md:text-start text-center">Skin Lightening</h3>
              <p className="md:text-start text-center text-[16px]">
                Deal with hyperpigmentation, Mpanies skin lightening products
                are formulated to evenout skin tone and restore skin's natiral
                color get even, clear and radiant skin
              </p>
              <button className="bg-black text-white px-[20px] py-[15px] hover:bg-green-600 duration-500 mt-[20px] w-[150px]">View More</button>
            </div>
            <div className="h-full  hidden md:block top-0">
                <img src={slider2} className="h-full"/>
            </div>
          </div>
        </div>
        <div className="bg-[#A5D6A6] flex justify-center items-center w-[100vw] h-[100vh]">
          <div className="w-full h-full flex justify-center items-center px-4">
            
            <div className="h-full hidden md:block ">
                <img src={slider1} className="h-full "/>
            </div>
            <div className="md:w-[40%] flex flex-col md:justify-end justify-center md:gap-8 gap-10 items-center md:items-end">
              <h3 className="uppercase md:text-[36px] font-thin text-[45px] md:text-end text-center">Skin Lightening</h3>
              <p className="md:text-end text-center font-[16px]">
                Deal with hyperpigmentation, Mpanies skin lightening products
                are formulated to evenout skin tone and restore skin's natiral
                color get even, clear and radiant skin
              </p>
              <button className="bg-black text-white px-[20px] py-[15px] mt-[20px] hover:bg-green-600 duration-500">View More</button>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
