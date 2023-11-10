import React, { useState } from "react";
import logo from "../assets/mpanies1.png";
import { Link } from "react-router-dom";
import { signup } from "../features/auth/authActions";
import { useSelector, useDispatch } from "react-redux";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Bounce } from "react-activity";
import "react-activity/dist/library.css";

const SignUp = () => {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  // const [phone_number, setPhoneNumber] = useState("");
  const [passValue, setPassValue] = useState({
    password: "",
    cpassword: "",
    showPassword: false,
  });

  const handlePasswordChange = (prop) => (event) => {
    setPassValue({ ...passValue, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setPassValue({ ...passValue, showPassword: !passValue.showPassword });
  };
  // const [cpassword, setConfirmPassword] = useState("");

  //   console.log(phone_number.slice(1));
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.users.isLoading);

  const handleSignUp = () => {
    if (
      first_name === "" ||
      last_name === "" ||
      email === "" ||
      // phone_number === "" ||
      password === "" ||
      cpassword === ""
    ) {
      alert("You have a missing field");
    } else {
      if (password !== cpassword) {
        alert("Passwords do not match");
      } else {
        dispatch(
          signup({
            first_name: first_name,
            last_name: last_name,
            email: email,
            // phone_number: phone_number.slice(1),
            password: passValue.password,
          })
        );
        setFirstName("");
        setLastName("");
        setEmail("");
        // setPhoneNumber("");
        setPassValue("");
      }
    }
  };

  return (
    <div className="flex justify-center items-center w-full h-[100vh] bg-green-200">
      <div className="bg-white/80 shadow-md backdrop-blur-md rounded-md md:w-[30%] w-max-[40%] p-4">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-center text-[30px]">Sign Up</h1>
          <img src={logo} alt="logo" className="w-[200px]" />
        </div>
        <div className="flex flex-col justify-center py-2 place-items-center">
          <div className="w-full flex py-2 px-3 gap-5 flex-col items-center">
            <div className="flex flex-col  w-full">
              <label>First Name</label>
              <input
                type="text"
                value={first_name}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-min-[150px] w-[100%] p-2 border-solid border-[2px] rounded-xl border-black/20"
              />
            </div>
            <div className="flex flex-col w-full">
              <label>Last Name</label>
              <input
                type="text"
                value={last_name}
                onChange={(e) => setLastName(e.target.value)}
                className="w-min-[150px] w-[100%] p-2 border-solid border-[2px] rounded-xl border-black/20"
              />
            </div>
            <div className="flex flex-col w-full">
              <label>Email</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-min-[150px] w-[100%] p-2 border-solid border-[2px] rounded-xl border-black/20"
              />
            </div>
            {/* <div className="flex flex-col">
              <label>Phone Number</label>
              <PhoneInput
                placeholder="Enter phone number"
                value={phone_number}
                onChange={setPhoneNumber}
                className="md:max-w-[450px] md:w-[400px] py-4 h-[60px]"
              />
              <input
								type="text"
								value={phone_number}
								onChange={(e) => setPhoneNumber(e.target.value)}
								className="md:max-w-[450px] md:w-[400px] p-2 border-solid border-[2px] rounded-xl border-black/20"
							/>
            </div> */}
            <div className="flex flex-col w-full">
              <label>Password</label>
              <div>
                <input
                  type={passValue.showPassword ? "text" : "password"}
                  value={passValue.password}
                  onChange={handlePasswordChange("password")}
                  className="w-min-[150px] w-[100%] p-2 border-solid border-[2px] rounded-xl border-black/20"
                />
                <div
                  className="absolute top-[445px] right-[45px] text-[35px]"
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
            <div className="flex flex-col w-full">
              <label>Confirm Password</label>
              <div>
                <input
                  type={passValue.showPassword ? "text" : "password"}
                  value={passValue.cpassword}
                  onChange={handlePasswordChange("cpassword")}
                  className="w-min-[150px] w-[100%] p-2 border-solid border-[2px] rounded-xl border-black/20"
                />
                <div
                  className="absolute top-[535px] right-[45px] text-[35px]"
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
              onClick={handleSignUp}
              className="bg-black text-white w-min-[150px] w-[100%] py-3 rounded-md hover:bg-green-600 duration-500"
            >
              {loading ? <Bounce /> : " Sign Up"}
            </button>
            <div className="flex gap-4">
              <h4>Already Have An Account ?</h4>

              <Link to="/login">
                <h4 className="cursor-ointer text-blue-500">Sign In</h4>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
