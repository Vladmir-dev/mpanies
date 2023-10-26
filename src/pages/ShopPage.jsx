import React from "react";
import Navbar from "../components/Navbar";
import breadcrumb from "../assets/breadcrumb.jpg";
import Shop from "../components/shop/Shop";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";

const ShopPage = () => {
  const { id } = useParams();
  const bgImageStyle = {
    backgroundImage: ` url(${breadcrumb})`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    // transition: "background 0.6s ease-in-out",
    backgroundAttachment: "fixed",
  };
  console.log("The id =====><>", id);

  return (
    <div>
      <Navbar />
      <div style={bgImageStyle} className="h-[250px] w-full">
        <div className="flex justify-center items-center h-full  bg-green-200/60">
          <h1 className="uppercase text-[30px]">Collection</h1>
        </div>
      </div>

      <Shop />
      <Footer />
    </div>
  );
};

export default ShopPage;
