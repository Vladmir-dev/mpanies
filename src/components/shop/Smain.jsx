import React, { useState, useEffect } from "react";
import Scard from "./Scard";
import image1 from "../../assets/shop-new-4.jpg";
import image2 from "../../assets/shop-new-14.jpg";
import image3 from "../../assets/shop-new-21.jpg";
import image4 from "../../assets/shop-new-22.jpg";
import image5 from "../../assets/shop-new-23.jpg";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CardList from "./CardList";
import SkeletonCard from "../SkeletonCard";
import "../../App.css";

const Smain = () => {
  const products = useSelector((state) => state.products.products);
  // const loading = useSelector((state) => state.products.is_loading);
  const categoryName = useParams();
  console.log("category ===>", products);
  const filteredProducts = products?.filter(
    (product) => product.category.name === categoryName.id
  );

  console.log("all products ==>", filteredProducts);

  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const recordsPerPage = 16;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = filteredProducts?.slice(firstIndex, lastIndex);
  const npage = Math.ceil(filteredProducts?.length / recordsPerPage);
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

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setData(records);
      setLoading(false);
    }, 5000);
    // Cancel the timer while unmounting
    return () => clearTimeout(timer);
  }, []);

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

      <div>
        {loading && <SkeletonCard />}
        {!loading && <CardList data={records} />}
      </div>

      <nav className="w-full flex justify-center items-center mt-[50px]">
        <ul className="flex gap-5">
          <li
            onClick={prevPage}
            className={
              "bg-black w-[40px] h-[40px] text-white text-[30px] flex justify-center items-center hover:bg-green-300 duration-500"
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
