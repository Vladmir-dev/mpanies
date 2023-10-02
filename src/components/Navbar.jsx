import React, { useState, useEffect } from "react";
import logo from "../assets/mpanies.png";
import { Link } from "react-router-dom";
import { BsPersonFill } from "react-icons/bs";
import { FaCartPlus } from "react-icons/fa";
import {
  AiOutlineSearch,
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineTwitter,
  AiFillFacebook,
  AiOutlineInstagram,
} from "react-icons/ai";
import {MdOutlineRemoveShoppingCart} from 'react-icons/md'
import {useSelector, useDispatch} from 'react-redux'
import { add_to_cart, decrease_qty} from '../features/cart/cartActions'

const Navbar = () => {
  const links = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Shop",
      link: "/shop",
    },
    {
      name: "About",
      link: "/about",
    },
  ];

  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [search, setSearch] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

// const bg = "[#A5D6A6]"
const dispatch = useDispatch()
const cart = useSelector((state) => state.cart.cartItems)
console.log("cart==>", cart)

  const totalPrice = cart.reduce(
    (price, item) => price + item.qty * item.price,
    0,
  );

  return (
    <div
      className={
        show
          ? "w-full bg-green-200 flex justify-center items-center fixed z-10 shadow-md"
          : "fixed w-full  flex justify-center items-center z-10"
      }
    >
      <div className="flex justify-between items-center w-full md:px-[50px] px-[20px]">
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? (
              <AiOutlineClose className="text-[27px]" />
            ) : (
              <AiOutlineMenu className="text-[27px]" />
            )}
          </button>
        </div>

        <Link to="/">
          <div>
          <img src={logo} alt="logo" className="w-[120px]" />
        </div>
        </Link>
        

        {/* <div className="hidden md:block"> */}
        <div
          className={
            open
              ? "flex md:flex-row flex-col ml-[-20px] md:ml-0 md:h-auto h-[100vh] md:p-0 p-4 md:bg-inherit transition ease-in-out delay-450 items-start justify-start md:relative fixed md:top-0 top-[130px] opacity-100 bg-green-200  md:shadow-none shadow-xl md:w-auto w-[300px] list-none gap-8 text-[20px]"
              : "hidden md:block md:flex md:flex-row md:list-none md:gap-8 text-[20px]"
          }
        >
          {links.map((item, index) => (
            <Link
              to={item.link}
              key={index}
              className="hover:text-green-500 duration-500"
            >
              <li>{item.name}</li>
            </Link>
          ))}
          <div className="md:hidden mt-[50px]">
            <div className="flex flex-col justify-start items-start gap-5">
              <div className="flex gap-3 justify-center items-center">
                <BsPersonFill className="" />

                <button className="text-[15px]">Login</button>
              </div>
              <div className="flex gap-8">
                <li>
                  <AiOutlineTwitter />{" "}
                </li>
                <li>
                  <AiFillFacebook />{" "}
                </li>
                <li>
                  <AiOutlineInstagram />{" "}
                </li>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}

        <div className="flex gap-8 text-[24px]">
          <BsPersonFill className="hidden md:block hover:text-green-500" />

          <div>
            <button onClick={() => setShowCart(!showCart)}>
              <div className="bg-green-400 text-[10px] px-2 absolute mt-[-13px] ml-[11px] rounded-full">
                {cart.length}
              </div>
              <FaCartPlus className="hover:text-green-400" />
            </button>
            {showCart && (
              <div className="bg-white fixed md:h-[100vh] h-[120vh] mt-[-80px] md:w-[370px] p-4 w-[300px] md:ml-[-240px] right-0  shadow-xl">
                <div className=" flex justify-between">
                  <h1>Your Cart</h1>
                  <button onClick={() => setShowCart(!showCart)}>
                    <AiOutlineClose className="text-[27px]" />
                  </button>
                </div>
                <div className="flex justify-between uppercase mt-[20px]">
                  <h4>Product</h4>
                  <h4>Total</h4>
                </div>
                <hr />
                <div>
                  {cart.length <= 0 ? (
                          <div className="flex flex-col h-[100vh]  justify-around items-center">
                            <div className="flex flex-col gap-8">
                              <h1 className="text-[25px]">
                                Your cart is empty
                              </h1>
                             
                              <button onClick={() => setOpenCart(!openCart)} className="w-auto px-4 text-[17px] bg-blue-900 text-white rounded-full py-3 hover:bg-indigo-900">
                                Continue Shopping
                              </button>
                             
                            </div>
                            <div className="p-2  w-[367px] h-[300px] flex flex-col justfiy-center items-center text-[17px]">
                              <MdOutlineRemoveShoppingCart />

                              <h4 className="flex gap-3 justify-center items-center">
                                Kids
                                
                              </h4>
                            </div>
                          </div>
                        ) : (
                          <div className="flex flex-col justify-between h-[90vh]">
                            <div>
                              <div className="flex justify-between items-end text-[18px] font-bold text-[#1948c9] mt-[10px] uppercase">
                                <h2>Product</h2>
                                <h2>Total</h2>
                              </div>

                              {/* <div className="flex justify-between"> */}
                              <div className="flex flex-col gap-3 mt-[10px]">
                                {cart.map((item, index) => (
                                  <div className="flex justify-between">
                                    <div className="flex gap-5">
                                      <img
                                        src={item.image1}
                                        alt={`cart item ${index}`}
                                        className="w-[120px] h-[120px]"
                                      />
                                      <div className="flex flex-col gap-2">
                                        <h4 className="font-bold text-[15px]">
                                          {item.name}
                                        </h4>
                                        <h4 className="text-[15px]">
                                          $ {item.price}.00 USD
                                        </h4>
                                        <h4 className="text-[15px]">
                                          Color: Pink
                                        </h4>
                                        <div className="flex mt-[10px] justify-between items-center py-2 px-4 gap-5 w-[120px] rounded-full text-[18px] border-solid border-[1px] border-black">
                                          <button
                                            onClick={() =>
                                              dispatch(
                                                decrease_qty(item),
                                              )
                                            }
                                          >
                                            -
                                          </button>
                                          <h4>{item.qty}</h4>
                                          <button
                                            onClick={() =>
                                              dispatch(
                                                add_to_cart(item)
                                              )
                                            }
                                          >
                                            +
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div>
                                      <h4 className="text-[18px]">
                                        $ {item.price * item.qty} USD
                                      </h4>
                                    </div>
                                  </div>
                                ))}
                              </div>
                              {/* <div>
                                <h4 className="text-[18px]">
                                  $ {totalPrice} USD
                                </h4>
                              </div>
                            </div> */}
                            </div>

                            <div className="w-[100%]">
                              <hr className="border-[1px] bg-gray-500" />
                              <div className="flex justify-between  w-[100%] py-4 text-[20px]">
                                <h4>Subtotal</h4>
                                <h4>$ {totalPrice} USD</h4>
                              </div>
                              <h1>
                                Taxes and shipping calculated at
                                checkout
                              </h1>
                              <Link to="/checkout">
                              <button className="w-full bg-[#1948c9] text-white mt-[10px] p-3 text-[20px] rounded-full">
                                Checkout
                              </button>
                              </Link>
                              
                            </div>
                          </div>
                        )}
                </div>
              </div>
            )}
          </div>
          <div className="">
            <button onClick={() => setSearch(!search)}>
              <AiOutlineSearch className="hover:text-green-500" />
            </button>
            {search && (
              <div className="bg-white fixed w-[100vw] h-[120px] top-0 left-0 flex justify-center gap-3 md:p-5 p-2 items-center">
                {/* <h2 className="md:block hidden">Search</h2> */}

                <div>
                  <input
                    type="text"
                    placeholder="Type To Search"
                    className="p-2 md:w-[500px] border-solid border-[2px] border-[#ffaf9b] focus:outline-0"
                  />
                </div>
                <button onClick={() => setSearch(!search)}>
                  <AiOutlineClose className="text-[27px]" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
