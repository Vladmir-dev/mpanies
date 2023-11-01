import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import breadcrumb from "../assets/breadcrumb.jpg";
import { BsPerson } from "react-icons/bs";
import { logout } from "../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";

const UserDetailsPage = () => {
  const dispatch = useDispatch();

  const bgImageStyle = {
    backgroundImage: ` url(${breadcrumb})`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    // transition: "background 0.6s ease-in-out",
    backgroundAttachment: "fixed",
  };

  return (
    <div>
      <Navbar />
      <div style={bgImageStyle} className="h-[250px] w-full">
        <div className="flex justify-center items-center h-full  bg-green-200/60">
          <h1 className="uppercase text-[30px]">Your Account</h1>
        </div>
      </div>

      <div className="flex md:flex-row flex-col justify-center items-center m-[100px]">
        <div>
          <h1 className="text-[45px]">Account</h1>
          <div className="flex gap-5 text-[25px] justify-center items-center text-green-600">
            <BsPerson />{" "}
            <button
              onClick={dispatch(logout())}
              className="underline cursor-pointer"
            >
              Log Out
            </button>
          </div>
        </div>
        <div></div>
      </div>
      <Footer />
    </div>
  );
};

export default UserDetailsPage;
