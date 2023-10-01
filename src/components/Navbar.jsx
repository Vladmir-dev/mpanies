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
const bg = "[#A5D6A6]"
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
        <div>
          <img src={logo} alt="logo" className="w-[120px]" />
        </div>

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
              className="hover:text-green-100 duration-500"
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
          <BsPersonFill className="hidden md:block hover:text-[#ffaf9b]" />

          <div>
            <button onClick={() => setShowCart(!showCart)}>
              <div className="bg-green-100 text-[10px] px-2 absolute mt-[-13px] ml-[11px] rounded-full">
                0
              </div>
              <FaCartPlus className="hover:text-green-100" />
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
                  <div></div>
                </div>
              </div>
            )}
          </div>
          <div className="">
            <button onClick={() => setSearch(!search)}>
              <AiOutlineSearch className="hover:text-[#ffaf9b]" />
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
