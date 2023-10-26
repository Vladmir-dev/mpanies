import React, { useState, useEffect } from "react";
import logo from "../assets/new_logo.png";
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
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { add_to_cart, decrease_qty } from "../features/cart/cartActions";
import { get_user } from "../features/auth/authActions";
import { AllProducts } from "../features/products/productActions";

const Navbar = () => {
  const links = [
    // {
    //   name: "Home",
    //   link: "/",
    //   submenu: false,
    // },
    // {
    //   name: "Products",
    //   link: "/shop",
    //   submenu: false,
    //   subitems: [
    //     {
    //       name: "New In",
    //       headitems: [
    //         {
    //           name: "Acne Cream",
    //         },
    //         {
    //           name: "Ale Lotion",
    //         },
    //         {
    //           name: "Fairnes",
    //         },
    //         {
    //           name: "Whitening",
    //         },
    //       ],
    //     },
    //     {
    //       name: "Cosmetics",
    //       headitems: [
    //         {
    //           name: "Acne Cream",
    //         },
    //         {
    //           name: "Ale Lotion",
    //         },
    //         {
    //           name: "Fairnes",
    //         },
    //         {
    //           name: "Whitening",
    //         },
    //       ],
    //     },
    //     {
    //       name: "Skin",
    //       headitems: [
    //         {
    //           name: "Acne Cream",
    //         },
    //         {
    //           name: "Ale Lotion",
    //         },
    //         {
    //           name: "Fairnes",
    //         },
    //         {
    //           name: "Whitening",
    //         },
    //       ],
    //     },
    //     {
    //       name: "Make Up",
    //       headitems: [
    //         {
    //           name: "Acne Cream",
    //         },
    //         {
    //           name: "Ale Lotion",
    //         },
    //         {
    //           name: "Fairnes",
    //         },
    //         {
    //           name: "Whitening",
    //         },
    //       ],
    //     },
    //   ],
    // },
    {
      name: "Skin Care",
      link: "1",
      submenu: true,
      subitems: [
        {
          name: "Clensers",
        },
        {
          name: "Moisturizers",
        },
        {
          name: "Serums",
        },
        {
          name: "SunScreen",
        },
        {
          name: "Face Masks",
        },
        {
          name: "Eye Creams",
        },
      ],
    },
    {
      name: "Makeup",
      link: "2",
      submenu: true,
      subitems: [
        {
          name: "Foundation",
        },
        {
          name: "Lipstick",
        },
        {
          name: "EyeShadow",
        },
        {
          name: "Mascara",
        },
        {
          name: "Blush",
        },
        {
          name: "Concealers",
        },
      ],
    },
    {
      name: "Hair Care",
      link: "3",
      submenu: true,
      subitems: [
        {
          name: "Shampoo",
        },
        {
          name: "Conditioner",
        },
        {
          name: "Hair Styling Products",
        },
        {
          name: "Hair Color",
        },
        {
          name: "Hair Treatments",
        },
        {
          name: "Hair Accessories",
        },
      ],
    },
    {
      name: "Fragrances",
      link: "4",
      submenu: true,
      subitems: [
        {
          name: "Clensers",
        },
        {
          name: "Moisturizers",
        },
        {
          name: "Serums",
        },
        {
          name: "SunScreen",
        },
        {
          name: "Face Masks",
        },
        {
          name: "Eye Creams",
        },
      ],
    },
    {
      name: "Nail Care",
      link: "5",
      submenu: true,
      subitems: [
        {
          name: "Nail Polish",
        },
        {
          name: "Nail Polish Removers",
        },
        {
          name: "Nail Care Kits",
        },
        {
          name: "Nail Accessories",
        },
      ],
    },
    {
      name: "Body & Bath",
      link: "6",
      submenu: true,
      subitems: [
        {
          name: "Body Wash",
        },
        {
          name: "Lotions",
        },
        {
          name: "Soaps",
        },
        {
          name: "Bath Bombs",
        },
        {
          name: "Deodrant",
        },
        {
          name: "Body Scrubs",
        },
      ],
    },
    {
      name: "Men's Grooming",
      link: "7",
      submenu: true,
      subitems: [
        {
          name: "Men's Skincare",
        },
        {
          name: "Shaving Products",
        },
        {
          name: "Beard Care",
        },
        {
          name: "Men's Fragrances",
        },
        {
          name: "Men's HairCare",
        },
      ],
    },
    {
      name: "Organic & Natural Products",
      link: "8",
      submenu: true,
      subitems: [
        {
          name: "Makeup brushes",
        },
        {
          name: "Hair Styling Tools",
        },
        {
          name: "Mirrors",
        },
        {
          name: "Applicators",
        },
        {
          name: "Sponges",
        },
      ],
    },
  ];

  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showDrop, setShowDrop] = useState(false);
  const [search, setSearch] = useState(false);
  const [drop, setDrop] = useState("");
  const token = useSelector((state) => state.users.token);

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
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cartItems);
  console.log("cart==>", cart);

  const totalPrice = cart.reduce(
    (price, item) => price + item.qty * item.price,
    0
  );

  useEffect(() => {
    dispatch(AllProducts(token));
    dispatch(get_user(token));
  }, [dispatch, token]);

  return (
    <div
      className={
        show
          ? "w-full bg-green-200 flex justify-center items-center p-5 fixed z-10 shadow-md"
          : "fixed w-full  flex justify-center items-center z-10 p-5"
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
            <div
              key={index}
              onMouseEnter={() => setDrop(index)}
              onMouseLeave={() => setDrop("")}
            >
              <Link
                to={`/category/${item.link}`}
                className="hover:text-green-500 duration-500"
              >
                <li>{item.name}</li>
              </Link>
              {drop === index && (
                <div className="absolute   p-4  rounded-md shadow-md">
                  {item.submenu ? (
                    <div className="flex bg-white p-4 flex-col gap-5 justify-evenly">
                      {item.subitems.map((ele, index) => (
                        <div key={index} className="">
                          <h4 className="">{ele.name}</h4>
                          {/* <div className="flex flex-col gap-3 mt-[10px]">
                            {ele.headitems.map((sitem, index) => (
                              <h4 className="text-[18px]">{sitem.name}</h4>
                            ))}
                          </div> */}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>
              )}
            </div>
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
          <div>
            <BsPersonFill
              onClick={() => setShowDrop(!showDrop)}
              className="hidden md:block hover:text-green-500"
            />

            {showDrop && (
              <div className="bg-white absolute shadow-md px-4 pt-4 pb-[15px] mt-[10px] rounded-md ml-[-80px] w-[250px]">
                <div>
                  <Link to="/login">
                    <button className="bg-black hover:bg-green-600 duration-500 text-white w-full text-[20px] rounded-md py-[5px]">
                      Sign In
                    </button>
                  </Link>
                  <div className="mt-[10px] text-[18px] flex justify-center items-center gap-2">
                    <h4 className="text-[17px]">New to Mpanies ?</h4>
                    <Link to="/signup">
                      <h4 className="text-blue-500">Sign Up</h4>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div>
            <button onClick={() => setShowCart(!showCart)}>
              <div className="bg-green-400 text-[10px] px-2 absolute mt-[-13px] ml-[11px] rounded-full">
                {cart.length}
              </div>
              <FaCartPlus className="hover:text-green-400" />
            </button>
            {showCart && (
              <div className="bg-white fixed md:h-[100vh] h-[120vh] mt-[-60px] md:w-[450px] p-4 w-[300px] md:ml-[-240px] right-0  shadow-xl">
                <div className=" flex justify-between">
                  <h1>Your Cart</h1>
                  <button onClick={() => setShowCart(!showCart)}>
                    <AiOutlineClose className="text-[27px]" />
                  </button>
                </div>

                <hr />
                <div>
                  {cart.length <= 0 ? (
                    <div className="flex flex-col h-[100vh]  justify-around items-center">
                      <div className="flex flex-col gap-8">
                        <h1 className="text-[25px]">Your cart is empty</h1>

                        <button
                          onClick={() => setOpenCart(!openCart)}
                          className="w-auto px-4 text-[17px] bg-black text-white rounded-md py-3 hover:bg-green-600"
                        >
                          Continue Shopping
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col justify-between h-[90vh]">
                      <div>
                        <div className="flex justify-between items-end text-[18px] font-bold text-green-500 mt-[10px] uppercase">
                          <h2>Product</h2>
                          <h2>Total</h2>
                        </div>

                        {/* <div className="flex justify-between"> */}
                        <div className="flex flex-col gap-3 mt-[10px]">
                          {cart.map((item, index) => (
                            <div className="flex justify-between w-full ">
                              <div className="flex gap-5">
                                <img
                                  src={item.image}
                                  alt={`cart item ${index}`}
                                  className="w-[120px] h-[120px]"
                                />
                                <div className="flex flex-col gap-2">
                                  <h4 className="font-bold text-[15px]">
                                    {item.name}
                                  </h4>
                                  <h4 className="text-[15px]">
                                    {item.price}.00 UGX
                                  </h4>
                                  <h4 className="text-[15px]">Color: Pink</h4>
                                  <div className="flex mt-[10px] justify-between items-center py-2 px-4 gap-5 w-[120px]  text-[18px] border-solid border-[1px] border-black">
                                    <button
                                      onClick={() =>
                                        dispatch(decrease_qty(item))
                                      }
                                    >
                                      -
                                    </button>
                                    <h4>{item.qty}</h4>
                                    <button
                                      onClick={() =>
                                        dispatch(add_to_cart(item))
                                      }
                                    >
                                      +
                                    </button>
                                  </div>
                                </div>
                              </div>

                              <div className="">
                                <h4 className="text-[18px] text-end ">
                                  {item.price * item.qty} UGX
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
                        <Link to="/cart">
                          <button className="w-full bg-black hover:bg-green-600 duration-500 text-white mt-[10px] p-3 text-[20px] ">
                            View Cart
                          </button>
                        </Link>
                        <Link to="/checkout">
                          <button className="w-full bg-black hover:bg-green-600 duration-500 text-white mt-[10px] p-3 text-[20px] ">
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
