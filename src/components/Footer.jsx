import React from "react";
import location from "../assets/vector13.svg";
import { GiPositionMarker } from "react-icons/gi";
import { AiOutlineClockCircle,AiOutlineTwitter,AiFillFacebook,AiOutlineInstagram } from "react-icons/ai";
import { BsTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Footer = () => {
  return (
    <div className="h-auto relative  bg-black text-white md:p-10 flex justify-center items-center flex-col">
      <div className="flex md:flex-row flex-col md:justify-around justify-center w-full md:pl-0 p-[20px] items-start md:gap-0 gap-10">
        <div className="flex flex-col gap-5">
          <h1 className="text-[20px] uppercase">Store</h1>
          <ul className="flex flex-col gap-2">
            <li className="flex gap-3 justify-start items-center">
              <GiPositionMarker />
              Kampala, Uganda
            </li>
            <li className="flex gap-3 justify-start items-center">
              {" "}
              <AiOutlineClockCircle />
              09.00 am - 06.00 pm
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="text-[20px] uppercase">Reach Us</h1>
          <ul className="flex flex-col gap-2">
            <li className="flex gap-3 justify-start items-center">
              <BsTelephoneFill /> (0000) 123 - 456789
            </li>
            <li className="flex gap-3 justify-start items-center">
              {" "}
              <GrMail /> info@example.com
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="text-[20px] uppercase">Info</h1>
          <ul className="flex flex-col gap-2">
            <li className="flex gap-3 justify-start items-center">
              {" "}
              <MdOutlineKeyboardArrowRight /> Contact
            </li>
            <li className="flex gap-3 justify-start items-center">
              <MdOutlineKeyboardArrowRight />
              Shipping & Returns
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="text-[20px] uppercase">Share With Us</h1>
          <ul className="flex text-[20px] gap-2">
            <li><AiOutlineTwitter /></li>
            <li><AiFillFacebook /></li>
            <li><AiOutlineInstagram /></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
