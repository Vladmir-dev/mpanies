import React, { useState } from "react";
import logo from "../assets/mpanies1.png";
import { Link } from "react-router-dom";
import { login } from "../features/auth/authActions";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Bounce } from "react-activity";
import "react-activity/dist/library.css";

const Login = () => {
  const [emailValue, setEmailValue] = useState({
    email: "",
  });
  const [passValue, setPassValue] = useState({
    password: "",
    showPassword: false,
  });

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.users.isLoading);

  const handleClickShowPassword = () => {
    setPassValue({ ...passValue, showPassword: !passValue.showPassword });
  };

  const handleLogin = () => {
    if (passValue.password === "" || emailValue.email === "") {
      alert("passwrd or email is empty");
    } else {
      console.log(emailValue.email);
      console.log(passValue.password);

      dispatch(
        login({ email: emailValue.email, password: passValue.password })
      );

      setEmailValue({
        email: "",
      });

      setPassValue({
        password: "",
        showPassword: false,
      });
    }
  };

  const handleEmailValue = (e) => {
    const { name, value } = e.target;

    setEmailValue({
      ...emailValue,
      [name]: value,
    });
    // console.log(emailValue);
  };

  const handlePasswordChange = (prop) => (event) => {
    setPassValue({ ...passValue, [prop]: event.target.value });
  };

  return (
    <div className="flex justify-center items-center w-full h-[100vh] bg-green-200">
      <div className="bg-white/80 shadow-md backdrop-blur-md rounded-md md:w-[30%] p-4">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-center text-[30px]">Sign In</h1>
          <img src={logo} alt="logo" className="w-[200px]" />
        </div>
        <div className="flex flex-col justify-center py-2 place-items-center">
          <div className="w-full flex py-2 px-3 gap-5 flex-col items-center">
            <div className="flex flex-col w-full">
              <label>Email</label>
              <input
                className="input block border border-gray-300 focus:border-pitch-black  py-3 px-3 w-full focus:outline-none "
                type="text"
                name="email"
                value={emailValue.email}
                onChange={handleEmailValue}
              />
            </div>
            <div className="flex flex-col w-full">
              <label>Password</label>
              <div className="eye_div">
                <input
                  className="input block border border-gray-300 focus:border-pitch-black  py-3 px-3 w-full focus:outline-none "
                  type={passValue.showPassword ? "text" : "password"}
                  onChange={handlePasswordChange("password")}
                  value={passValue.password}
                />
                <div
                  className="absolute top-[280px] right-[45px] text-[35px]"
                  onClick={handleClickShowPassword}
                >
                  {passValue.showPassword ? (
                    <AiOutlineEye className="h-6 font-extralight" />
                  ) : (
                    <AiOutlineEyeInvisible className="h-6 font-extralight" />
                  )}
                </div>
              </div>
            </div>

            <button
              onClick={handleLogin}
              className="bg-black text-white w-min-[150px] w-[100%] py-3 rounded-md hover:bg-green-600 duration-500"
            >
              {loading ? <Bounce /> : "Sign In "}
            </button>
            <div className="flex gap-4">
              <h4>Don't Have An Account ?</h4>
              <Link to="/signup">
                <h4 className="text-blue-500">Sign Up</h4>
              </Link>
            </div>
            <div className="flex gap-4">
              <h4>forgot Password ?</h4>
              <Link to="/forgot">
                <h4 className="text-blue-500">Click Here</h4>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
