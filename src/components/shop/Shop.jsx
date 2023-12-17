import React from "react";
import SideBar from "./SideBar";
import Smain from "./Smain";

const Shop = ({ data }) => {
  // console.log("The data *****", id);
  return (
    <div className="w-full mt-[50px] mb-[50px] flex justify-center items-center ">
      <div className="w-[95%]  flex justify-start items-start">
        <SideBar />
        <Smain products={data} />
      </div>
    </div>
  );
};

export default Shop;
