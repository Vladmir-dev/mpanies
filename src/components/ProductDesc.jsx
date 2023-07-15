import React from "react";
import makeup from "../assets/cosmetics.jpg";

const ProductDesc = () => {
  const bgImageStyle = {
    backgroundImage: ` url(${makeup})`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    // transition: "background 0.6s ease-in-out",
    backgroundAttachment: "fixed",
  };

  return (
    <div
      style={bgImageStyle}
      className="w-[100vw] md:h-[90vh] h-[500px] mb-[10px]  flex flex-col justify-center items-center"
    >
      <div className="w-full flex flex-col justify-center items-center bg-[#ffebe7]/60 font-normal h-[100%] gap-8">
        <h1 className="text-[20px] text-center">
          CLEAN ORGANIC AND NATURAL COSMETIC PRODUCTS
        </h1>
        <p className="text-[16px] md:w-[50%] text-center">
          Deal with hyperpigmentation, Beaux skin lightening products are
          formulated to even out skin tone and restore the skin’s natural color
          get even, clear and radiant
        </p>
        <div className="flex flex-col">
          <button className="text-[20px] ">View Products</button>
          <hr className="border-[1px] border-solid border-black" />
        </div>
      </div>
      {/* <img src={makeup} alt="makeup" className="w-full h-full" /> */}
    </div>
  );
};

export default ProductDesc;
