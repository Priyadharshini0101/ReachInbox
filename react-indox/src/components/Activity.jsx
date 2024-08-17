import React from "react";
import { useSelector } from "react-redux";
import { mailIcon, mailIconDark} from '../assets/index.js'
function Activity({ step, img, detail }) {
  const theme = useSelector((state) => state.themes.mode);

  return (
    <div className="flex gap-[25px] px-[8px]">
      <img src={theme === "light" ? mailIconDark : mailIcon}></img>
      <div className="flex flex-col gap-[10px]">
        <h1 className="font-semibold text-[13px] text-black dark:text-white">
          {"Step " + step + ": Email"}
        </h1>
        <p className="text-[10px] text-[#b9b9b9] flex gap-[5px]">
          <img src={img}></img>
          {detail}
        </p>
      </div>
    </div>
  );
}

export default Activity;
