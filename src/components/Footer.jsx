import React from "react";
import location from "../assets/vector13.svg";
import { GiPositionMarker } from "react-icons/gi";
import {
  AiOutlineClockCircle,
  AiOutlineTwitter,
  AiFillFacebook,
  AiOutlineInstagram,
} from "react-icons/ai";
import { BsTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="h-auto relative bottom-0 bg-black text-white md:p-10 flex justify-center items-center flex-col">
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
              <BsTelephoneFill /> +256 707 684 746 / +257 781316707
            </li>
            <li className="flex gap-3 justify-start items-center">
              {" "}
              <GrMail /> info@mpanies.com
            </li>
            <li className="flex gap-3 justify-start items-center">
              {" "}
              <GrMail /> sales@mpanies.com
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="text-[20px] uppercase">Info</h1>
          <ul className="flex flex-col gap-2">
            {/* <Link to="/about">
              {" "}
              <li className="flex gap-3 justify-start items-center">
                {" "}
                <MdOutlineKeyboardArrowRight /> About Us
              </li>{" "}
            </Link> */}
            <Link to="/privacypolicy">
              {" "}
              <li className="flex gap-3 justify-start items-center">
                {" "}
                <MdOutlineKeyboardArrowRight /> Privacy Policy
              </li>{" "}
            </Link>
            <Link to="/terms">
              {" "}
              <li className="flex gap-3 justify-start items-center">
                {" "}
                <MdOutlineKeyboardArrowRight /> Terms & Conditions
              </li>{" "}
            </Link>

            <Link to="/returns">
              <li className="flex gap-3 justify-start items-center">
                <MdOutlineKeyboardArrowRight />
                Shipping & Returns
              </li>
            </Link>
          </ul>
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="text-[20px] uppercase">Share With Us</h1>
          <ul className="flex text-[20px] gap-2">
            <li>
              <Link to="https://twitter.com/mpanies_?s=21&t=DZ6LyZ87TLncOCvulE9Iuw">
                <AiOutlineTwitter />
              </Link>
            </li>
            <li>
              <Link to="https://www.facebook.com/profile.php?id=61553561423098&mibextid=LQQJ4d ">
                <AiFillFacebook />
              </Link>
            </li>
            <li>
              <Link to="/">
                <AiOutlineInstagram />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
