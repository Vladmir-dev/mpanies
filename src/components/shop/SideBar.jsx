import React from "react";
import Item from "./Item";

const SideBar = ({
  selectedOptions,
  setSelectedOptions,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
}) => {
  const items = [
    { title: "Availability", options: ["In stock", "Out of stock"] },
    { title: "Price", options: ["Option A", "Option B", "Option C"] },
    // { title: "Product Type", options: ["Cream", "Lotion"] },
  ];
  return (
    <div className="md:flex-[1.8] hidden md:block">
      <div className="h-auto  p-3 flex justify-start items-start flex-col gap-5">
        <div className="w-full text-[26px]">
          <h1>Filter</h1>
          <hr className="border-[2px] border-solid w-full" />
        </div>

        <div className="container mx-auto p-4">
          {items.map((item, index) => (
            <Item
              key={index}
              title={item.title}
              options={item.options}
              selectedOptions={selectedOptions}
              setSelectedOptions={setSelectedOptions}
              minPrice={minPrice}
              setMinPrice={setMinPrice}
              maxPrice={maxPrice}
              setMaxPrice={setMaxPrice}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
