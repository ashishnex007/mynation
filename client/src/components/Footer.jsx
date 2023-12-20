import React from "react";
import Logo from "./Logo";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="p-4 px-20 pt-6 pd-2 bg-slate-900  text-white ">
      <div className="flex justify-between">
        <div>
          <div className="flex flex-col">
            <a href="/"><Logo w="70%" h="10%" className="mb-2" /></a>
            <p className="mx-4" style={{ width: "20rem" }}>
              My nation is an initiative to give prisoners a second chance
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="mx-20 my-10">
            <h1 className="text-2xl font-semibold">Important Links</h1>
            <div className="pt-4">
              <a href="/about"><p>About us</p></a>
              <a href="/menu"><p>Our Products</p></a>
              <a href="/privacy"><p>Privacy Policy</p></a>
              <a href="/payment"><p>Payment Policy</p></a>
            </div>
          </div>
          <div className="mx-2 my-10">
            <h1 className="text-2xl font-semibold">
            Follow us on
            </h1>
            <div className="flex pt-4 justify-center space-x-4">
              <a href="https://www.facebook.com/mynation12?mibextid=JRoKGi" target="_blank"><FaFacebook size={30} /></a>
              <a href=" https://x.com/_my_nation__?t=BlWFP7enUiikUU7gU_xdSA&s=08" target="_blank"><AiFillTwitterCircle size={30} /></a>
              <a href="https://www.instagram.com/_my_nation__" target="_blank"><AiFillInstagram size={30} /></a>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <h1 className="font-semibold text-center">
      Made by Team 405
      </h1>
    </div>
  );
};

export default Footer;
