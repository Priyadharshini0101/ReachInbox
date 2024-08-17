import React, { useEffect } from "react";
import {  useLocation } from "react-router-dom";
import { noMessageIcon } from "../assets"

function Home() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", `Bearer ${token}`);    
    }
    
  }, [token]);
  return (
    <div className="h-screen pt-[64px] w-full gap-[50px] bg-white dark:bg-black flex justify-center  items-center  flex-col">
      <img src={noMessageIcon}></img>
      <div className="gap-[25px] flex flex-col items-center">
        <h1 className="font-bold text-black dark:text-white text-[24px]">
          It’s the beginning of a legendary sales pipeline
        </h1>
        <p className="font-medium text-[#9e9e9e] w-64 text-center">
          When you have inbound E-mails you’ll see them here
        </p>
      </div>
    </div>
  );
}

export default Home;
