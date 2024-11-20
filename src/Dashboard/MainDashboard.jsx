import React, { useState } from "react";
import { Button } from "react-bootstrap";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaSearch,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { ImLinkedin2 } from "react-icons/im";

export default function MainDashboard() {
  const data = [
    {
      icon: <FaFacebookF className="my-2 h-9 w-9 bg-blue-900 text-white border mx-auto pt-1 hover:scale-125" />,
      value: "250",
      percentage: "12%",
      person: "Fans Count",
    },
    {
      icon: <FaTwitter className="my-2 h-9 w-9 font-extrabold text-sky-400 mx-auto pt-1 hover:scale-150"/>,
      value: "245",
      percentage: "-2%",
      person: "Followers",
    },
    {
      icon: <FaYoutube className="my-2 h-9 w-9 font-extrabold text-red-600 mx-auto pt-1 hover:scale-150" />,
      value: "220",
      percentage: "16%",
      person: "Subscribers",
    },

    {
      icon: <ImLinkedin2 className="my-2 h-9 w-9 bg-cyan-600 text-white border mx-auto p-1 hover:scale-125"/>,
      value: "26",
      percentage: "-4%",
      person: "Followers",
    },
    {
      icon: <FaPinterest className="my-2 h-9 w-9 font-extrabold text-red-600 mx-auto pt-1 hover:scale-150" />,
      value: "123",
      percentage: "17%",
      person: "Followers",
    },
    {
      icon: <FaInstagram className="my-2 h-9 w-9 font-extrabold  mx-auto p-1 hover:scale-125" style={{background: "linear-gradient(to right,red,blue,green)"}} />,
      value: "270",
      percentage: "15%",
      person: "Followers",
    },
  ];

  return (
    <header className="h-1vh align-middle ">
      <div className="flex p-3 relative">
        <p className="font-bold">3.Social Media Dashboard</p>
        <div className="flex ml-24">
          <FaSearch className=" mt-1 ml-48 absolute" />
          <input type="text"  className=" border w-52 h-6" />
        </div>
      </div>
      <div className="flex flex-wrap">
        {data.map((meraData) => (
          <div className=" p-1 border w-[40%] h-52 my-1 bg-white mx-auto ">
            {meraData.icon}
            <h3 className="my-3 p-1 font-bold">{meraData.value}</h3>
            <p className=" p-1 font-normal ">{meraData.percentage}</p>
            <p className="my-3 font-medium p-1">{meraData.person}</p>
        
          </div>
        ))}
  
       
      </div>
     
    </header>
  );
}
