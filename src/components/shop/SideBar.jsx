import React from "react";
import Item from "./Item";

const SideBar = () => {
  const items = [
    { title: "Availability", options: ["In stock", "Out of stock"] },
    { title: "Price", options: ["Option A", "Option B", "Option C"] },
    { title: "Product Type", options: ["Cream", "Lotion"] },
    
  ];
  return (
    <div className="md:flex-[1.8] h-auto  p-3 flex justify-start items-start flex-col gap-5">
      <div className="w-full text-[26px]">
        <h1>Filter</h1>
        <hr className="border-[2px] border-solid w-full" />
      </div>

      <div className="container mx-auto p-4">
        {items.map((item, index) => (
          <Item key={index} title={item.title} options={item.options} />
        ))}
      </div>
      <div className="flex flex-col gap-5">
        {/* <div>
          <h1>Availability</h1>
        </div>

        <div>
          <h1>Price</h1>
        </div>

        <div>
          <h1>Product Type</h1>
        </div> */}
      </div>
    </div>
  );
};

export default SideBar;
