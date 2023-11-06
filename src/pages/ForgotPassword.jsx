import React, { useState } from "react";
import logo from "../assets/mpanies1.png";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const ForgotPassword = () => {
  const [cpassword, setCPassword] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.users.isLoading);

  const handleLogin = () => {
    // if (password === "" || email === "") {
    //   alert("passwrd or email is empty");
    // } else {
    //   console.log(email);
    //   console.log(password);
    //   dispatch(login({ email: email, password: password }));
    //   setEmail("");
    //   setPassword("");
    // }
  };
  return (
    <div className="flex justify-center items-center w-full h-[100vh] bg-green-200">
      <div className="bg-white/80 shadow-md backdrop-blur-md rounded-md md:w-[30%] p-4">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-center text-[30px]">Recover Password</h1>
          <img src={logo} alt="logo" className="w-[200px]" />
        </div>
        <div className="flex flex-col justify-center py-2 place-items-center">
          <div className="w-full flex py-2 gap-5 flex-col items-center">
            <div className="flex flex-col">
              <label>Password</label>
              <input
                type="password"
                // value={email}
                onChange={(e) => setPassword(e.target.value)}
                className="md:max-w-[450px] md:w-[400px] p-2 border-solid border-[2px] rounded-xl border-black/20"
              />
            </div>
            <div className="flex flex-col">
              <label>Confirm Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setCPassword(e.target.value)}
                className="md:max-w-[450px] md:w-[400px] p-2 border-solid border-[2px] rounded-xl border-black/20"
              />
            </div>

            <button
              // onClick={handleLogin}
              className="bg-black text-white md:max-w-[450px] md:w-[400px] py-3 rounded-md hover:bg-green-600 duration-500"
            >
              {loading ? "Loading..." : "Sign In "}
            </button>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword