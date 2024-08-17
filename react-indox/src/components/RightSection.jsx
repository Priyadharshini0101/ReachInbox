import React from "react";
import {Details,Activity} from './index.js'
import { openIcon, sentIcon } from "../assets/index.js";
function RightSection({ currentMail }) {
  return (
    <div className="w-[35%] border-l pb-[25px] pt-[75px] px-2.5 dark:border-[#343A40] gap-[10px] flex flex-col dark:bg-black bg-white">
      <div className="bg-[#ECEFF3] dark:bg-[#23272C] p-[8px] text-white text-[14px] font-semibold rounded-lg">
        Lead Details
      </div>
      <div className="flex flex-col gap-[20px] px-[12px] py-[8px] ">
        <Details title="Name" data={currentMail.fromName}></Details>
        <Details title="Contact No" data="+54-9062827869"></Details>
        <Details title="Email ID" data={currentMail.fromEmail}></Details>
        <Details
          title="Linkedin"
          data={"linkedin.com/in/" + currentMail.fromName}
        ></Details>
        <Details title="Company Name" data="Reachinbox"></Details>
      </div>
      <div className="bg-[#23272C] p-[8px] text-white text-[14px] bg-[#ECEFF3] dark:bg-[#23272C]  font-semibold rounded-lg">
        Activities
      </div>
      <div className="flex flex-col gap-[20px] px-[12px] py-[8px]">
        <h1 className="font-semibold text-[15px] text-black dark:text-white px-[8px]">
          Campaign Name
        </h1>
        <div className="flex gap-[10px] text-[12px] text-black dark:text-white px-[8px] ">
          <h1 className="">3 Steps </h1>
          <hr className="w-[1px] h-[20px] border-[0.2px] border-[#DFE3E8] border-[#403F3F]"></hr>
          <h1>5 Days in Sequence</h1>
        </div>
        <Activity
          step="1"
          img={sentIcon}
          detail="Sent 3rd, Feb"
        ></Activity>
        <Activity
          step="2"
          img={openIcon}
          detail="Opened 5th, Feb"
        ></Activity>
        <Activity
          step="3"
          img={openIcon}
          detail="Opened 5th, Feb"
        ></Activity>
      </div>
    </div>
  );
}

export default RightSection;
