import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import breadcrumb from "../assets/breadcrumb.jpg";
import { BsPerson } from "react-icons/bs";
import { logout } from "../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";

const UserDetailsPage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.currentUser);
  console.log("page user", user);
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

      <div className="flex md:flex-row flex-col justify-center items-center m-[100px] md:gap-[300px]">
        <div className="flex flex-col justify-center items-center gap-10">
          <h1 className="text-[45px]">Account</h1>
          <div className="flex gap-5 text-[25px] justify-center items-center text-green-600">
            <BsPerson />{" "}
            <button
              onClick={() => dispatch(logout())}
              className="underline cursor-pointer"
            >
              Log Out
            </button>
          </div>

          <div>
            <h1 className="text-[45px]">Order History</h1>
            <div>
              <h1>You haven't placed any orders yet</h1>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-[40px] font-light">Account Details</h1>
          <div className="">
            <div className="flex gap-8 text-[25px]">
              <label className="font-bold">Name</label>
              <h1>
                {user.first_name} {user.last_name}
              </h1>
            </div>
            <div className="flex gap-8 text-[25px]">
              <label className="font-bold">Email</label>
              <h1>{user.email}</h1>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserDetailsPage;
