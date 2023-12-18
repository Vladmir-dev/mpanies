import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useSelector, useDispatch } from "react-redux";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
// import { create } from "@mui/material/styles/createTransitions";
import { create_order } from "../features/orders/orderActions";
import { reset } from "../features/cart/cartSlice";

const Checkout = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cartItems);
  const user = useSelector((state) => state.users.currentUser);
  const token = useSelector((state) => state.users.token);

  const totalPrice = cart.reduce(
    (price, item) => price + item.qty * item.price,
    0
  );

  console.log("cart items", cart);

  const handleOrder = () => {
    console.log("hello begining");

    let formData = [];
    for (let i = 0; i < cart.length; i++) {
      let item = {
        product: cart[i].id,
        quantity: cart[i].qty,
      };
      console.log("item", item);
      formData.push(item);
    }
    console.log("order", formData);

    const data = {
      user: user.id,
      items: formData,
      total_price: totalPrice,
    };
    dispatch(create_order({ token, data }));
    dispatch(reset());
  };

  const [amount, setAmount] = useState(totalPrice);
  const [phone, setPhone] = useState("");
  // const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [zip, setZip] = useState("");

  const config = {
    public_key: "FLWPUBK_TEST-f8006a9c64a016743f03067d5fbdc60a-X",
    tx_ref: Date.now(),
    amount: amount,
    currency: "UGX",
    payment_options: "mobilemoney",
    customer: {
      email: user.email,
      phone_number: phone,
      name: user.first_name,
    },
    customizations: {
      title: "my Payment Title",
      description: "Payment for items in cart",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);
  return (
    <div className="box-border">
      <Navbar />
      <div className="flex md:flex-row flex-col overflow-y-auto overflow-x-hidden">
        <div className="md:flex-[0.5] md:h-[100vh] flex md:justify-end md:items-start px-6">
          <div className="mt-[100px] flex flex-col gap-10">
            <div className="flex flex-col w-[90%]">
              <label className="md:text-[30px] text-[25px]">Contact</label>
              <input
                placeholder="Enter Mobile Or Phone Number"
                className="md:w-full w-[300px] p-2 rounded-md border-solid border-[1px] border-black"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div>
              <label className="md:text-[30px] text-[25px]">Delivery</label>
              <div className="flex flex-col gap-5">
                {/* <div className="flex md:w-full w-[350px] pr-2 gap-5">
                  <input
                    placeholder="First Name"
                    className="p-2 w-full rounded-md border-solid border-[1px] border-black"
                  />
                  <input
                    placeholder="Last Name"
                    className="p-2 w-full rounded-md border-solid border-[1px] border-black"
                  />
                </div> */}
                {/* <input
                  placeholder="Address"
                  onChange={(e) => setAddress(e.target.value)}
                  className="p-2 md:w-full w-[340px] rounded-md border-solid border-[1px] border-black"
                /> */}
                <div className="flex gap-4 md:w-full w-[350px] pr-2">
                  <input
                    value={city}
                    placeholder="City"
                    onChange={(e) => setCity(e.target.value)}
                    className="p-2 w-full rounded-md border-solid border-[1px] border-black"
                  />
                  <input
                    value={district}
                    placeholder="District"
                    onChange={(e) => setDistrict(e.target.value)}
                    className="p-2 w-full rounded-md border-solid border-[1px] border-black"
                  />
                  <input
                    value={zip}
                    placeholder="Zip Code"
                    onChange={(e) => setZip(e.target.value)}
                    className="p-2 w-full rounded-md border-solid border-[1px] border-black"
                  />
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                if (
                  phone === "" ||
                  city === "" ||
                  district === "" ||
                  zip === ""
                ) {
                  alert("Please fill in your contact details");
                } else {
                  handleOrder();

                  setPhone("");
                  // setAddress("");
                  setCity("");
                  setDistrict("");
                  setZip("");

                  handleFlutterPayment({
                    callback: (response) => {
                      console.log(response);
                      closePaymentModal();
                    },

                    onClose: () => {},
                  });
                }
              }}
              className="bg-black text-white py-4 rounded-md hover:bg-green-600"
            >
              Pay
            </button>
          </div>
        </div>
        <div className="border-solid border-[1px] border-black md:h-[90vh] mt-[100px] hidden md:block"></div>
        <div className="md:flex-[0.5]  h-[100vh] px-5">
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
              <div className="flex md:w-[500px] w-full justify-between md:gap-[250px]">
                <h1>Sub Total</h1>
                <h1>UGX {totalPrice}</h1>
              </div>
              <div className="flex md:w-[500px] w-full  justify-between md:gap-[250px]">
                <h1>Shipping</h1>
                <h1>Enter shipping address</h1>
              </div>
              <div className="flex md:w-[500px] w-full  justify-between md:gap-[250px]">
                <h1>Total</h1>
                <h1>UGX {totalPrice}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="mt-[100px]"> */}
      <Footer />
      {/* </div> */}
    </div>
  );
};

export default Checkout;
