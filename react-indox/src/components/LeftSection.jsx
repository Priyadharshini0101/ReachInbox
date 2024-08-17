import React, { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import {Message} from './index.js'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
function LeftSection() {
  const [refresh, setRefresh] = useState("/src/assets/refresh.svg");
  const theme = useSelector((state) => state.themes.mode);
  useEffect(() => {
    if (theme === "dark") {
      setRefresh("/src/assets/refresh.svg");
    } else {
      setRefresh("/src/assets/refresh_dark.svg");
    }
  }, [theme]);

  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(
          "https://hiring.reachinbox.xyz/api/v1/onebox/list",
          {
            headers: {
              Authorization: token,
            },
          }
        );
        setData(res.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const reload = async () => {
    setLoading(true);
    const token = localStorage.getItem("token");
    const res = await axios.get(
      "https://hiring.reachinbox.xyz/api/v1/onebox/reset",
      {
        headers: {
          Authorization: token,
        },
      }
    );
    setLoading(false);
  };

  return (
    <div className=" w-[35%] border-e p-2.5 dark:border-[#343A40]  flex flex-col dark:bg-black bg-white">
      <div className="justify-between flex  p-[10px] ">
        <h1 className="text-[#4285F4] font-bold text-[20px] gap-[4px]  inline-flex items-center ">
          All Inbox(s)
          <MdOutlineKeyboardArrowDown className="font-medium mt-1 cursor-pointer" />
        </h1>
        <button
          className="dark:bg-[#25262b] w-[32px] h-[32px] border-[1px] p-[8px] border-[#DFE3E8] dark:border-gray-900 rounded-md"
          onClick={() => reload()}
        >
          <img src={refresh} className=""></img>
        </button>
      </div>
      <div className="flex px-[10px] text-[14px]  gap-[5px] items-center">
        <h1 className="font-bold text-black dark:text-white">
          {data.length}/25
        </h1>
        <p className="text-[#7f7f7f]">Inboxes selected</p>
      </div>
      <div className="p-2.5">
        <div className="relative">
          <input
            placeholder=" Search"
            className="w-full text-black dark:text-white dark:bg-[#23272C] bg-[#F4F6F8] rounded-md p-1 pl-8 border dark:border-[#FFFFFF1A] border-[#DFE3E8]"
          />
          <CiSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-800 dark:text-gray-400 h-5 w-5" />
        </div>
      </div>
      <div className="flex justify-between px-2.5 ">
        <div>
          <div class="my-2 inline-flex mr-[5px] items-center justify-center w-6 h-6 text-xs font-semibold  bg-gray-200 dark:bg-[#222426] text-[#5C7CFA] rounded-full ">
            {data.length}
          </div>
          <h1 className="text-black dark:text-[#e6e6e6]  text-[14px] font-semibold inline-flex items-center">
            New Replies
          </h1>
        </div>
        <h1 className="text-black dark:text-[#e6e6e6] font-semibold text-[14px] gap-[16px]  inline-flex items-center ">
          Newest
          <MdOutlineKeyboardArrowDown className="w-[18px] h-[18px] cursor-pointer" />
        </h1>
      </div>
      <div className="p-[12px] ">
        <hr className="  border-transparent dark:border-[#323440]"></hr>
      </div>

      <div className="">
        {!loading ? (
          data ? (
            data.map((message) => (
              <Message
                message={message}
                id={message.threadId}
                key={message.id}
                email={message.fromEmail}
                text={message.subject}
                date={message.sentAt}
              ></Message>
            ))
          ) : (
            <div></div>
          )
        ) : (
          <div className="flex h-full  justify-center items-center">
            <div
              className="inline-block h-[30px] w-[30px] text-blue-500 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            ></div>
          </div>
        )}
      </div>
    </div>
  );
}

export default LeftSection;
