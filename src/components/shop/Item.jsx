import React, { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const Item = ({ title, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCheckboxChange = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value);
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
  };

  return (
    <div className="mb-4">
      <div className="flex items-center w-full justify-between text-[25px]">
        <h2 className="mr-2">{title}</h2>
        <button className="p-1 text-[35px] rounded" onClick={toggleDropdown}>
          {isOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
        </button>
      </div>

      
      {isOpen && title !== "Price" ? (
        <div className="mt-4 text-[18px]">
          {options.map((option) => (
            <div key={option} className="flex items-center mb-1">
              <input
                type="checkbox"
                id={option}
                value={option}
                checked={selectedOptions.includes(option)}
                onChange={() => handleCheckboxChange(option)}
              />
              <label htmlFor={option} className="ml-2">
                {option}
              </label>
            </div>
          ))}
          
        </div>
      ) : (
        <div>
            {(isOpen && title === "Price") && (
            <div className="flex gap-2">
              <div className="flex flex-col items-center mt-2">
                <label htmlFor="minPrice">Min Price:</label>
                <input
                  type="number"
                  id="minPrice"
                  value={minPrice}
                  onChange={handleMinPriceChange}
                  className="ml-2 p-1 border border-gray-300 w-[100px] rounded"
                />
              </div>
              <div className="flex flex-col items-center mt-2">
                <label htmlFor="maxPrice">Max Price:</label>
                <input
                  type="number"
                  id="maxPrice"
                  value={maxPrice}
                  onChange={handleMaxPriceChange}
                  className="ml-2 p-1 border border-gray-300 w-[100px] rounded"
                />
              </div>
            </div>
          )}
        </div>
        
      )}
    </div>
  );
};

export default Item;
