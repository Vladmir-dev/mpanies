import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import breadcrumb from "../assets/breadcrumb.jpg";
import Footer from "../components/Footer";
import Shop from "../components/shop/Shop";
import { useSelector } from "react-redux";

const BrandPage = () => {
  const bgImageStyle = {
    backgroundImage: ` url(${breadcrumb})`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    // transition: "background 0.6s ease-in-out",
    backgroundAttachment: "fixed",
  };
  const { id } = useParams();
  const products = useSelector((state) => state.products.products);

  const filteredProducts = products.filter(
    (product) => product.brand.id === Number(id)
  );

  return (
    <div>
      <Navbar />
      <div style={bgImageStyle} className="h-[250px] w-full">
        <div className="flex justify-center items-center h-full  bg-green-200/60">
          <h1 className="uppercase text-[30px]">Brands</h1>
        </div>
      </div>
      <Shop data={filteredProducts} />
      <Footer />
    </div>
  );
};

export default BrandPage;
