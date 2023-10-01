import React from "react";
import Navbar from "../components/Navbar";
import breadcrumb from "../assets/breadcrumb.jpg";
import Shop from "../components/shop/Shop";
import Footer from "../components/Footer";

const ShopPage = () => {
  const bgImageStyle = {
    backgroundImage: ` url(${breadcrumb})`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    // transition: "background 0.6s ease-in-out",
    backgroundAttachment: "fixed",
  };

  return (
    <div>
      <Navbar />
      <div style={bgImageStyle} className="h-[250px]">
        <div className="flex justify-center items-center h-full bg-green-200/60">
          <h1 className="uppercase text-[30px]">Collection</h1>
        </div>
      </div>
      <Shop />
      <Footer />
    </div>
  );
};

export default ShopPage;
