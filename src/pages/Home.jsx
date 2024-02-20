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
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import { selectNewArrivalProducts, selectFeaturedProducts } from "../utils";

const Home = () => {
  // const products = useSelector((state) => state.products.products);

  // console.log("products", products);

  // if (!products) {
  //   // Render loading indicator or return early
  //   return <div>Loading...</div>;
  // }

  // Now that products is guaranteed to be defined, you can safely access its properties
  const is_new_arivals = useSelector(selectNewArrivalProducts);
  const is_featured = useSelector(selectFeaturedProducts);

  // console.log("is_new_arivals", is_new_arivals)
  // console.log("is_featured", is_featured)

  //   const productsArray = products.filter(
  //     (product) => product.is_new_arival === true
  //   );
  //   const featured = products.filter((product) => product.is_featured === true);

  // const new_products = [
  //   {
  //     id: 1,
  //     name: "Luke Moisturizing",
  //     image: image1,
  //     image2: "",
  //     price: "7.50",
  //     discount: "2%",
  //   },
  //   {
  //     id: 2,
  //     name: "Luke Moisturizing",
  //     image: image2,
  //     image2: "",
  //     price: "7.50",
  //     discount: "2%",
  //   },
  //   {
  //     id: 3,
  //     name: "Luke Moisturizing",
  //     image: image3,
  //     image2: "",
  //     price: "7.50",
  //     discount: "2%",
  //   },
  //   {
  //     id: 4,
  //     name: "Luke Moisturizing",
  //     image: image4,
  //     image2: "",
  //     price: "7.50",
  //     discount: "2%",
  //   },
  //   {
  //     id: 5,
  //     name: "Luke Moisturizing",
  //     image: image5,
  //     image2: "",
  //     price: "7.50",
  //     discount: "2%",
  //   },
  // ];

  return (
    <div className="box-border font-sans">
      <Navbar />
      <Carousel />
      <Banner />
      <div className="mt-[50px] mb-[50px] flex justify-center items-center uppercase text-[20px] font-light">
        <h1>What's New For You</h1>
      </div>
      <div className="mb-[50px]">
        <NSlider products={is_new_arivals} />
      </div>
      <ProductDesc />
      <div className="mt-[60px] mb-[50px] flex justify-center items-center uppercase text-[20px] font-light">
        <h1>Featured Collection</h1>
      </div>
      <div className="mb-[50px]">
        <NSlider products={is_featured} />
      </div>
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Home;
