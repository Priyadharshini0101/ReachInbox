import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { emailIcon, graphIcon, homeIcon, inboxIcon, logoIconDark, logoIconWhite, messageIcon, searchIcon, viewListIcon } from "../assets";
function SideBar() {
  const theme = useSelector((state) => state.themes.mode);
  const [currentPage,setCurrentPage] = useState("Home");
  return (
    <>
      <Helmet>
        <title>{'ReachInbox - '+ currentPage}</title>
        <meta name="description" content={``}></meta>
      </Helmet>
    <div className="dark:bg-[#101113] bg-white z-50 w-[56px]  border-e  border-gray-100 dark:border-[#343A40]">
      <div className="flex flex-col h-full items-center justify-between">
        <div className="py-[24px] px-[8px]">
          <img src={theme === "light"?logoIconDark:logoIconWhite}></img>
        </div>
        <div className=" flex flex-col  items-center  gap-[40px]">
          <Link to="/home" onClick={() =>setCurrentPage("Home")}>
            <div className="w-[32px] h-[32px] items-center inline-flex justify-center hover:rounded-md dark:hover:bg-[#2F3030] hover:bg-gray-100">
              <img
                src={homeIcon}
                className="w-[20px] h-[20px]"
              ></img>
            </div>
          </Link>
          <Link to="/home" onClick={() =>setCurrentPage("Search")}>
            <div className="w-[32px] h-[32px] items-center  inline-flex justify-center hover:rounded-md dark:hover:bg-[#2F3030] hover:bg-gray-100">
              <img
                src={searchIcon}
                className="w-[20px] h-[20px]"
              ></img>
            </div>
          </Link>

          <Link to="/home" onClick={() =>setCurrentPage("Email")}>
            <div className="w-[32px] h-[32px] items-center  inline-flex justify-center hover:rounded-md dark:hover:bg-[#2F3030] hover:bg-gray-100">
              <img
                src={emailIcon}
                className="w-[20px] h-[20px]"
              ></img>
            </div>
          </Link>
          <Link to="/home" onClick={() =>setCurrentPage("Message")}>
            <div className="w-[32px] h-[32px] items-center  inline-flex justify-center hover:rounded-md dark:hover:bg-[#2F3030] hover:bg-gray-100">
              <img
                src={messageIcon}
                className="w-[20px] h-[20px]"
              ></img>
            </div>
          </Link>

          <Link to="/home" onClick={() =>setCurrentPage("ViewList")}>
            <div className="w-[32px] h-[32px] items-center  inline-flex justify-center hover:rounded-md dark:hover:bg-[#2F3030] hover:bg-gray-100">
              <img
                src={viewListIcon}
                className="w-[20px] h-[20px]"
              ></img>
            </div>
          </Link>
          <Link to="/inbox" onClick={() =>setCurrentPage("Inbox")}>
            <div
              className={`relative w-[32px] h-[32px] items-center inline-flex justify-center hover:rounded-md dark:hover:bg-[#2F3030]  hover:bg-gray-100 ${
                useLocation().pathname === "/inbox"
                  ? `dark:bg-[#2F3030] bg-gray-100 rounded-md`
                  : ``
              }`}
            >
              <img
                src={inboxIcon}
                className="w-[24px] h-[24px]"
              ></img>
              <div className="absolute inline-flex items-center justify-center w-4 h-4 text-xs font-semibold text-white bg-red-500 rounded-full -top-1.5 -end-1.5">
                2
              </div>
            </div>
          </Link>

          <Link to="/home" onClick={() =>setCurrentPage("Graph")}>
            <div className="w-[32px] h-[32px] items-center  inline-flex justify-center hover:rounded-md dark:hover:bg-[#2F3030] hover:bg-gray-100">
              <img
                src={graphIcon}
                className="w-[20px] h-[20px]"
              ></img>
            </div>
          </Link>
        </div>
        <div className="py-1 px-3 m-2.5 bg-blue-500 rounded-full ">P</div>
      </div>
    </div>
    </>
  );
}

export default SideBar;
