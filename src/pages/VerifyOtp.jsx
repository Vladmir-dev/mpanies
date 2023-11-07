import React, { useState } from "react";
import logo from "../assets/mpanies1.png";
import { Link } from "react-router-dom";
import { sendotp } from "../features/auth/authActions";
import { useDispatch, useSelector } from "react-redux";

const VerifyOtp = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const loading = useSelector((state) => state.users.isLoading);

  const handleSubmit = () => {
    if (email === "" || otp === "") {
      alert("You have a missing fields");
    } else {
      dispatch(sendotp({ otp: otp, email: email }));
      setEmail("");
      setOtp("");
    }
  };

  return (
    <div className="flex justify-center items-center w-full h-[100vh] bg-green-200">
      <div className="bg-white/80 shadow-md backdrop-blur-md rounded-md md:w-[30%] p-4">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-center text-[30px]">Verify OTP</h1>
          <img src={logo} alt="logo" className="w-[200px]" />
        </div>
        <div className="flex flex-col justify-center py-2 place-items-center">
          <div className="w-full flex py-2 px-3 gap-5 flex-col items-center">
            <div className="flex flex-col w-full">
              <label>Email</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-min-[150px] w-[100%] p-2 border-solid border-[2px] rounded-xl border-black/20"
              />
            </div>
            <div className="flex flex-col w-full">
              <label>Code</label>
              <input
                type="number"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-min-[150px] w-[100%] p-2 border-solid border-[2px] rounded-xl border-black/20"
              />
            </div>

            <button
              onClick={handleSubmit}
              className="bg-black text-white w-min-[150px] w-[100%] py-3 rounded-md hover:bg-green-600 duration-500"
            >
              {loading ? "Loading..." : "Submit "}
              
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyOtp;
