import React, { useState } from "react";
import SideBar from "./SideBar";
import Smain from "./Smain";

const Shop = ({ data }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000000000);

  // console.log("The data *****", data);

  const filterData = () => {
    if (minPrice < 0 || maxPrice < 0) {
      return data; // No filter applied if minPrice or maxPrice is not provided
    }

    return data.filter((product) => {
      const priceCondition =
        product.price >= parseFloat(minPrice) &&
        product.price <= parseFloat(maxPrice);

      // Check if the product is in stock (assuming `in_stock` is a boolean property)
      const stockCondition = selectedOptions.includes("In stock")
        ? product.in_stock
        : true;

      return priceCondition && stockCondition;
    });
  };

  const filteredData = filterData();

  console.log("price", filteredData);

  return (
    <div className="w-full mt-[50px] mb-[50px] flex justify-center items-center ">
      <div className="w-[95%]  flex justify-start items-start">
        <SideBar
          selectedOptions={selectedOptions}
          setSelectedOptions={setSelectedOptions}
          minPrice={minPrice}
          setMinPrice={setMinPrice}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
        />
        <Smain products={filteredData} />
      </div>
    </div>
  );
};

export default Shop;
