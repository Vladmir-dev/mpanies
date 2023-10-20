import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";

const Checkout = () => {
  const cart = useSelector((state) => state.cart.cartItems);
  const totalPrice = cart.reduce(
    (price, item) => price + item.qty * item.price,
    0
  );
  return (
    <div>
      <Navbar />
      <div className="flex">
        <div className=" flex-[0.5] h-[100vh] flex justify-end items-start px-6">
          <div className="mt-[100px] flex flex-col gap-10">
            <div className="flex flex-col w-[90%]">
              <label className="text-[30px]">Contact</label>
              <input
                placeholder="Enter Mobile Or Phone Number"
                className="w-full p-2 rounded-md border-solid border-[1px] border-black"
              />
            </div>

            <div>
              <label className="text-[30px]">Delivery</label>
              <div className="flex flex-col gap-5">
                <div className="flex w-full gap-5">
                  <input
                    placeholder="First Name"
                    className="p-2 rounded-md border-solid border-[1px] border-black"
                  />
                  <input
                    placeholder="Last Name"
                    className="p-2 rounded-md border-solid border-[1px] border-black"
                  />
                </div>
                <input
                  placeholder="Address"
                  className="p-2 rounded-md border-solid border-[1px] border-black"
                />
                <div className="flex gap-4">
                  <input
                    placeholder="City"
                    className="p-2 rounded-md border-solid border-[1px] border-black"
                  />
                  <input
                    placeholder="District"
                    className="p-2 rounded-md border-solid border-[1px] border-black"
                  />
                  <input
                    placeholder="Zip Code"
                    className="p-2 rounded-md border-solid border-[1px] border-black"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="text-[30px]">Payment</label>
              <h4>All transactions are secure and encrypted.</h4>
              <div className="mt-[20px] border-[2px] rounded-md border-solid border-black bg-gray-200">
                <div className="flex justify-between items-center border-solid  border-[1px] border-black p-2">
                  <h2>Credit Card</h2>
                </div>
                <div className="p-4 flex flex-col gap-5">
                  <input
                    placeholder="Card Number"
                    className="p-2 rounded-md border-solid border-[1px] w-full border-black"
                  />
                  <div className="flex justify-between w-full gap-5">
                    <input
                      placeholder="Expiration Date"
                      className="p-2 rounded-md border-solid border-[1px] border-black"
                    />
                    <input
                      placeholder="Security Code"
                      className="p-2 rounded-md border-solid border-[1px] border-black"
                    />
                  </div>
                  <input
                    placeholder="Name On Card"
                    className="p-2 rounded-md border-solid border-[1px] border-black"
                  />
                </div>
              </div>
            </div>
            <button className="bg-black text-white py-4 rounded-md hover:bg-green-600">
              Pay
            </button>
          </div>
        </div>

        <div className="flex-[0.5]  h-[100vh] px-5">
          <div className="mt-[100px] flex flex-col gap-3">
            {cart.map((item, index) => (
              <div key={index} className="flex gap-40">
                <div className="flex gap-4">
                  <div>
                    <img
                      src={item.image}
                      className="w-[100px] h-[100px] rounded-md"
                    />
                    <div className="bg-gray-500 rounded-full absolute px-2 mt-[-100px] ml-[80px] flex justify-center items-center text-[12px]">
                      {item.qty}
                    </div>
                  </div>
                  <div>
                    <h2>{item.name}</h2>
                    {/* <h2>UGX {item.price}</h2> */}
                  </div>
                </div>
                <div>
                  <h2>UGX {item.price * item.qty}</h2>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-[50px] px-5">
            <div className="flex flex-col gap-8">
              <div className="flex gap-[250px]">
                <h1>Sub Total</h1>
                <h1>UGX {totalPrice}</h1>
              </div>
              <div className="flex gap-[250px]">
                <h1>Shipping</h1>
                <h1>Enter shipping address</h1>
              </div>
              <div className="flex gap-[280px]">
                <h1>Total</h1>
                <h1>UGX {totalPrice}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
