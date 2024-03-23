import React, { useState } from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
import image1 from "../../assets/shop-new-4.jpg";
import image2 from "../../assets/shop-new-14.jpg";
import image3 from "../../assets/shop-new-21.jpg";
import image4 from "../../assets/shop-new-22.jpg";
import image5 from "../../assets/shop-new-23.jpg";
import { FaCartPlus } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { add_to_cart } from "../../features/cart/cartActions";
import { useNavigate } from "react-router-dom";

const NCard = ({ item }) => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  let naviagte = useNavigate();

  return (
    <div
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onClick={() => naviagte(`/product/${item.id}`)}
      className="m-2 bg-white md:w-[400px] w-[300px] "
    >
      <div className="w-full h-[400px] max-h-[400px] max-w-[250px] group">
        <img src={item.image1} alt="product" className="w-full h-full" />
        {/* {show && ( */}
        <div className="hidden group-hover:block duration-500">
          <div className="flex  justify-center items-center md:mt-[-250px] mt-[-200px] md:gap-8 gap-5 duration-500">
            <button
              onClick={() => dispatch(add_to_cart({ product: item, qty: 1 }))}
              className="p-2 bg-white  hover:bg-black hover:text-white duration-500"
            >
              <FaCartPlus />
            </button>
            <button className="p-2 bg-white hover:bg-black hover:text-white duration-500">
              <AiOutlineHeart />
            </button>
          </div>
        </div>

        {/* )} */}
      </div>
      <div className="w-full flex flex-col justify-center items-center mt-[20px] gap-5">
        <h4 className="uppercase text-[16px] font-light">{item.name}</h4>
        {/* <h4 className="text-[16px]">UGX {item.price}</h4> */}
        {item.discount > 0 ? (
          <div>
            <strike>
              <h4 className="text-[16px]">UGX {Math.trunc(item.price)}</h4>
            </strike>

            <h4 className="text-[16px]">
              UGX{" "}
              {parseFloat(item.price) -
                parseFloat(item.price) * (parseFloat(item.discount) / 100)}
            </h4>
          </div>
        ) : (
          <h4 className="text-[16px]">UGX {parseFloat(item.price)}</h4>
        )}
      </div>
    </div>
  );
};

export default NCard;
