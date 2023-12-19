import React, { useState } from "react";
import image5 from "../../assets/shop-new-23.jpg";
import { FaCartPlus } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { add_to_cart } from "../../features/cart/cartActions";
import icon from "../../assets/favicon.png";

const Scard = ({ item }) => {
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  return (
    <div
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      className="m-2 bg-white md:max-w-[260px] md:w-[250px] w-[200px] "
    >
      <div className="w-full h-[400px] md:max-h-[410px] md:h-[400px]  h-[200px] group">
        <img src={item.image} alt={item.name} className="w-full h-full cover" />
        <div className="absolute w-[35px] h-[45px] mt-[-380px] ml-[180px]">
          <img src={icon} className="w-full h-full object-cover" />
        </div>
        <div className="hidden group-hover:block duration-500">
          <div className="flex  justify-center items-center md:mt-[-200px] mt-[-200px] md:gap-8 gap-5 duration-500">
            <button
              onClick={() => dispatch(add_to_cart(item))}
              className="p-2 rounded-md bg-white hover:bg-black hover:text-white duration-500"
            >
              <FaCartPlus />
            </button>
            <button className="p-2 bg-white rounded-md hover:bg-black hover:text-white duration-500">
              <AiOutlineHeart />
            </button>
          </div>
        </div>

        {/* )} */}
      </div>
      <div className="w-full flex flex-col justify-center items-center mt-[20px] gap-5">
        <h4 className="uppercase text-[16px] font-light">{item.name}</h4>
        <div className=" flex justify-space-evenly">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>

        {item.discount > 0 ? (
          <div>
            <strike>
              <h4 className="text-[16px]">UGX {item.price}</h4>
            </strike>

            <h4 className="text-[16px]">
              UGX {parseFloat(item.price) * parseFloat(item.discount / 100)}
            </h4>
          </div>
        ) : (
          <h4 className="text-[16px]">UGX {parseFloat(item.price)}</h4>
        )}
      </div>
    </div>
  );
};

export default Scard;
