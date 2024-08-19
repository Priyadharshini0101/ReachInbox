import React, { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addTheme } from "../app/themeSlice";
function TopBar() {
  const [darkMode, setDarkMode] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    const root = window.document.documentElement;
    const color = darkMode ? "light" : "dark";
    const color1 = darkMode ? "dark" : "light";
    root.classList.remove(color);
    root.classList.add(color1);
    dispatch(addTheme(color1));
  }, [darkMode]);

  return (
    <div className="absolute  left-[-15px] flex w-full h-[64px] bg-white dark:bg-[#1F1F1F] border-b border-gray-100 dark:border-[#343A40] justify-between items-center pr-[25px] pl-[100px]">
      <h1 className="font-bold  text-[16px] text-black dark:text-white">
        Onebox
      </h1>
      <div className="flex gap-[25px]">
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            value=""
            className="sr-only peer "
            onClick={() => setDarkMode(!darkMode)}
          ></input>
          <div className="relative w-[50px] h-[24px] bg-gray-200 dark:bg-[#343A40]  rounded-full   peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full  after:content-[''] after:absolute after:top-[2px] after:start-[5px] after:bg-[#ffffff] dark:after:bg-[#888686] after:rounded-full after:h-5 after:w-5 after:transition-all">
            {darkMode ? (
              <FaSun className="my-1 ml-7  text-[#e8c364]" />
            ) : (
              <FaMoon className="my-1 ml-1  text-[#e8c364]" />
            )}
          </div>
        </label>
        <h1 className="text-[14px]  text-black dark:text-white font-semibold inline-flex items-center">
          Priya&apos; Workspace{" "}
          <MdOutlineKeyboardArrowDown className="text-3xl ml-2.5 cursor-pointer" />
        </h1>
      </div>
    </div>
  );
}

export default TopBar;
