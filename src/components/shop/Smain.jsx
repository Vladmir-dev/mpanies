import React, { useState } from "react";
import Scard from "./Scard";
import image1 from "../../assets/shop-new-4.jpg";
import image2 from "../../assets/shop-new-14.jpg";
import image3 from "../../assets/shop-new-21.jpg";
import image4 from "../../assets/shop-new-22.jpg";
import image5 from "../../assets/shop-new-23.jpg";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Smain = () => {
  const products = [
    {
      id: 1,
      name: "Luke Moisturizing",
      image1: image1,
      image2: "",
      price: "7.50",
      discount: "2%",
    },
    {
      id: 2,
      name: "Luke Moisturizing",
      image1: image2,
      image2: "",
      price: "7.50",
      discount: "2%",
    },
    {
      id: 3,
      name: "Luke Moisturizing",
      image1: image3,
      image2: "",
      price: "7.50",
      discount: "2%",
    },
    {
      id: 4,
      name: "Luke Moisturizing",
      image1: image4,
      image2: "",
      price: "7.50",
      discount: "2%",
    },
    {
      id: 5,
      name: "Luke Moisturizing",
      image1: image5,
      image2: "",
      price: "7.50",
      discount: "2%",
    },
    {
      id: 6,
      name: "Luke Moisturizing",
      image1: image1,
      image2: "",
      price: "7.50",
      discount: "2%",
    },
    {
      id: 7,
      name: "Luke Moisturizing",
      image1: image2,
      image2: "",
      price: "7.50",
      discount: "2%",
    },
    {
      id: 8,
      name: "Luke Moisturizing",
      image1: image3,
      image2: "",
      price: "7.50",
      discount: "2%",
    },
    {
      id: 9,
      name: "Luke Moisturizing",
      image1: image4,
      image2: "",
      price: "7.50",
      discount: "2%",
    },
    {
      id: 10,
      name: "Luke Moisturizing",
      image1: image5,
      image2: "",
      price: "7.50",
      discount: "2%",
    },
    {
      id: 11,
      name: "Luke Moisturizing",
      image1: image1,
      image2: "",
      price: "7.50",
      discount: "2%",
    },
    {
      id: 12,
      name: "Luke Moisturizing",
      image1: image2,
      image2: "",
      price: "7.50",
      discount: "2%",
    },
    {
      id: 13,
      name: "Luke Moisturizing",
      image1: image3,
      image2: "",
      price: "7.50",
      discount: "2%",
    },
    {
      id: 14,
      name: "Luke Moisturizing",
      image1: image4,
      image2: "",
      price: "7.50",
      discount: "2%",
    },
    {
      id: 15,
      name: "Luke Moisturizing",
      image1: image5,
      image2: "",
      price: "7.50",
      discount: "2%",
    },
    {
      id: 17,
      name: "Luke Moisturizing",
      image1: image1,
      image2: "",
      price: "7.50",
      discount: "2%",
    },
    {
      id: 18,
      name: "Luke Moisturizing",
      image1: image2,
      image2: "",
      price: "7.50",
      discount: "2%",
    },
    {
      id: 19,
      name: "Luke Moisturizing",
      image1: image3,
      image2: "",
      price: "7.50",
      discount: "2%",
    },
    {
      id: 20,
      name: "Luke Moisturizing",
      image1: image4,
      image2: "",
      price: "7.50",
      discount: "2%",
    },
    {
      id: 21,
      name: "Luke Moisturizing",
      image1: image5,
      image2: "",
      price: "7.50",
      discount: "2%",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 16;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = products.slice(firstIndex, lastIndex);
  const npage = Math.ceil(products.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  const prevPage = () => {
    if (currentPage !== firstIndex && currentPage - 1 > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== lastIndex && currentPage + 1 < 2) {
      setCurrentPage(currentPage + 1);
    }
  };

  const changeCPage = (id) => {
    setCurrentPage(id);
  };

  return (
    <div className="md:flex-[8.2] bg-white w-full h-auto flex flex-col">
      <div className="w-full bg-green-200 p-6 rounded-md flex justify-end items-end">
        <div className="flex gap-5 text-[18px] font-bold">
          <h4>Sort By:</h4>
          <select className="bg-green-200">
            <option>Alphabetically, A-Z</option>
            <option>Alphabetically, z-A</option>
            <option>Price, Low to High</option>
            <option>Price, High to Low</option>
          </select>
        </div>
      </div>
      
      <div className="mt-[20px] grid md:grid-cols-4 grid-cols-2 mr-15">
        {records.map((item, index) => (
          <div key={index}>
            <Scard item={item} />
          </div>
        ))}
      </div>

      <nav className="w-full flex justify-center items-center mt-[50px]">
        <ul className="flex gap-5">
          <li
            onClick={prevPage}
            className={
              "bg-black w-[40px] h-[40px] text-white text-[30px] flex justify-center items-center hover:bg-[#ffaf9b] duration-500"
            }
          >
            <MdKeyboardArrowLeft />
          </li>

          {numbers.map((n, i) => (
            <li
              onClick={() => changeCPage(n)}
              key={i}
              className={`w-[40px] h-[40px] text-white text-[30px] flex justify-center items-center duration-500 ${
                currentPage === n ? "bg-green-300" : "bg-black"
              }`}
            >
              {n}
            </li>
          ))}
          <li
            onClick={nextPage}
            className="bg-black w-[40px] h-[40px] text-white text-[30px] flex justify-center items-center hover:bg-green-300 duration-500"
          >
            <MdKeyboardArrowRight />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Smain;
