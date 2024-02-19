import React, { useState } from "react";
import image5 from "../../assets/shop-new-23.jpg";
import { FaCartPlus } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { add_to_cart } from "../../features/cart/cartActions";
import icon from "../../assets/favicon.png";
import { useNavigate } from "react-router-dom";

const Scard = ({ item }) => {
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();
  let naviagte = useNavigate();

  return (
    <div
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      className="m-2 bg-white md:max-w-[260px] md:w-[250px] w-[200px] "
      onClick={() => naviagte(`/product/${item.id}`)}
    >
      <div className="w-full h-[400px] md:max-h-[410px] md:h-[400px]  h-[200px] group relative">
        <div className="group duration-500">
          <img
            src={item.image1}
            alt={item.name}
            className="w-full h-full cover group-hover:hidden duration-500"
          />
          <img
            src={item.image2}
            alt={item.name}
            className="w-full h-full cover hidden duration-500 group-hover:block"
          />
        </div>

        <div className="absolute top-0 right-0 w-[35px]  h-[45px] mt-2 mr-2">
          <img src={icon} className="w-full h-full object-cover" />
        </div>

        <div className="hidden group-hover:block duration-500 absolute top-0 right-0 w-full h-full">
          <div className="w-full h-[400px] md:max-h-[410px] md:h-[400px] h-[200px] group flex md:gap-8 gap-5 justify-center items-center">
            <button
              onClick={() => dispatch(add_to_cart({ product: item, qty: 1 }))}
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

export default Scard;
