import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import breadcrumb from "../assets/breadcrumb.jpg";
import { AiOutlineSend } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { create_request } from "../features/requests/requestAction";

const RequestPage = () => {
  const bgImageStyle = {
    backgroundImage: ` url(${breadcrumb})`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    // transition: "background 0.6s ease-in-out",
    backgroundAttachment: "fixed",
  };

  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [product_name, setName] = useState("");
  const [description, setDescription] = useState("");
  const token = useSelector((state) => state.users.token);

  const dispatch = useDispatch();

  const handleSubmit = () => {
    if ((first_name === "", last_name === "", email === "")) {
      alert("Fill in blank spaces");
    } else {
      const request = {
        first_name: first_name,
        last_name: last_name,
        email: email,
        image: image,
        product_name: product_name,
        description: description,
      };

      const data = new FormData();
      for (const key in request) {
        data.append(key, request[key]);
      }
      dispatch(create_request({ token: token, data: data }));

      setFirstName("");
      setLastName("");
      setEmail("");
      setImage("");
      setName("");
      setDescription("");
    }
  };

  return (
    <div>
      <Navbar />
      <div style={bgImageStyle} className="h-[250px] w-full">
        <div className="flex justify-center items-center h-full  bg-green-200/60">
          <h1 className="uppercase text-[30px]">Request</h1>
        </div>
      </div>
      <div className="m-20 flex flex-col justify-center items-center ">
        <div className="md:w-[50%] flex flex-col justify-center items-center gap-5">
          <div className="flex justify-between items-center w-full">
            <input
              type="text"
              placeholder="First name"
              value={first_name}
              className="border-solid border-[2px] w-full px-4 py-2 mr-2"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last name"
              value={last_name}
              className="border-solid border-[2px] px-4 w-full py-2 ml-2"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <input
            type="text"
            placeholder="Email"
            value={email}
            className="border-solid border-[2px] px-4 py-2 w-full"
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="flex md:flex-row flex-col justify-between w-full">
            <input type="file" onChange={(e) => setImage(e.target.files[0])} />
            <div className="flex flex-col md:w-[50%] mt-[10px] md:mt-0 gap-5">
              <input
                type="text"
                placeholder="Name"
                value={product_name}
                className="border-solid border-[2px] w-full px-4 py-2"
                onChange={(e) => setName(e.target.value)}
              />
              <textarea
                type="text"
                value={description}
                placeholder="Description"
                className="border-solid border-[2px] px-4 md:h-[200px] w-full py-2"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>
        </div>
        <button
          onClick={handleSubmit}
          className="bg-black px-4 py-2 text-white mt-[20px] flex gap-5 justify-center items-center hover:bg-green-500 duration-500"
        >
          Send <AiOutlineSend />{" "}
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default RequestPage;
