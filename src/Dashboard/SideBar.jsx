import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import { MdOutlineDashboard } from "react-icons/md";

export default function SideBar() {
  const [toggelBar, setToggelebar] = useState(true);
  
//   const [showSidebar, setShowSidebar] = useState(false);
//   {showSidebar ? (
//     <SideBar />
//   ) : (
//     <FaBars onClick={() => setShowSidebar(!showSidebar)} className="mt-1 ml-1"  />
//   )}
  

  return (
    <nav className="h-lvh w-48 bg-gray-600 ">
      <div className="py-3 flex gap-2 text-xl text-white font-extrabold">
        <MdOutlineDashboard className=" bg-black text-3xl rounded-full p-1 " />
        Dashboard 
        {toggelBar ? (
          <FaBars onClick={() => setToggelebar(!toggelBar)} className="mt-1 ml-1" />
        ) : (
          <IoIosCloseCircle onClick={() => setToggelebar(!toggelBar)} className="mt-1 ml-1"/>
        )}
      </div>
      <div className="text-left flex flex-col">
        <a
          href=""
          className="no-underline py-1  text-white  hover:bg-black"
        >
          1.Setting
        </a>
        <a
          href=""
          className="no-underline py-1  text-white  hover:bg-black"
        >
          2.Metrics
        </a>
        <a
          href=""
          className="no-underline py-1  text-white  hover:bg-black"
        >
          3.Social Media Dashboard
        </a>
        <a
          href=""
          className="no-underline py-1  text-white  hover:bg-black"
        >
          4.Social Media Reports
        </a>
        <a
          href=""
          className="no-underline py-1  text-white hover:bg-black "
        >
          Help and Support
        </a>
      </div>
    </nav>
  );
}
