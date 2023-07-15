import React from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import NSlider from "../components/new/NSlider";
import Banner from "../components/Banner";
import ProductDesc from "../components/ProductDesc";
import image1 from "../assets/shop-new-4.jpg";
import image2 from "../assets/shop-new-14.jpg";
import image3 from "../assets/shop-new-21.jpg";
import image4 from "../assets/shop-new-22.jpg";
import image5 from "../assets/shop-new-23.jpg";
import NewsLetter from "../components/NewsLetter";
import Footer from '../components/Footer'

const Home = () => {
  const new_products = [
    {
      id: 1,
      name: "Luke Moisturizing",
      image1: image1,
      image2: "",
      price: "7.50",
      discount: "2%",
    },
    {
      id: 2,
      name: "Luke Moisturizing",
      image1: image2,
      image2: "",
      price: "7.50",
      discount: "2%",
    },
    {
      id: 3,
      name: "Luke Moisturizing",
      image1: image3,
      image2: "",
      price: "7.50",
      discount: "2%",
    },
    {
      id: 4,
      name: "Luke Moisturizing",
      image1: image4,
      image2: "",
      price: "7.50",
      discount: "2%",
    },
    {
      id: 5,
      name: "Luke Moisturizing",
      image1: image5,
      image2: "",
      price: "7.50",
      discount: "2%",
    },
  ];

  return (
    <div className="box-border font-sans">
      <Navbar />
      <Carousel />
      <Banner />
      <div className="mt-[50px] mb-[50px] flex justify-center items-center uppercase text-[20px] font-light">
        <h1>What's New For You</h1>
      </div>
      <div className="mb-[50px]">
        <NSlider products={new_products} />
      </div>
      <ProductDesc />
      <div className="mt-[60px] mb-[50px] flex justify-center items-center uppercase text-[20px] font-light">
        <h1>BlockBuster Collection</h1>
      </div>
      <div className="mb-[50px]">
        <NSlider products={new_products} />
      </div>
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Home;
