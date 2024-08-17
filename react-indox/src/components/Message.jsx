import React, { useState, useEffect } from "react";
import parse from "html-react-parser";
import { useSelector, useDispatch } from "react-redux";
import { addMail } from "../app/mailSlice";
function Message({ email, text, date, id, message }) {
  const dispatch = useDispatch();

  const [currentDate, setCurrentDate] = useState(null);

  const currentMessage = useSelector((state) => state.mails.mails);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const openMail = async () => {
    dispatch(addMail(message));
  };

  const formatDate = (date) => {
    const day = date.getDate().toString().padStart(2, "0");
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  useEffect(() => {
    setCurrentDate(formatDate(new Date(date)));
  }, []);
  return (
    <div
      className="mx-4 hover:bg-gray-200 dark:hover:bg-gray-800 "
      onClick={() => openMail()}
    >
      <div
        id={id}
        className={`cursor-pointer flex flex-col px-[8px] py-[12px] gap-[8px] ${
          id === currentMessage.threadId
            ? `border-blue-500 border-l border-l-[2.5px]`
            : ``
        }`}
      >
        <div className="flex justify-between">
          <h1 className="text-[14px] font-medium text-[#343A40] dark:text-white">
            {email}
          </h1>
          <p className="text-[12px] text-[#919EAB] dark:text-gray-500">
            {currentDate ? currentDate.slice(0, 6) : ""}
          </p>
        </div>
        <p className="text-[12px] text-[#343A40] dark:text-[#E1E0E0]">
          {parse(text.slice(0, 35))}
        </p>
        <div className="flex gap-[25px] py-[5px]">
          <button className="text-[#57E0A6] font-semibold text-[10px] px-[8px] py-[3px] bg-[#F0F0F0] dark:bg-[#2D3833] rounded-lg">
            <div class=" inline-flex mr-[5px] items-center justify-center w-2 h-2 bg-[#57E0A6] rounded-full "></div>
            Interested
          </button>
          <button className="text-[#637381] dark:text-white font-semibold text-[10px] px-[8px] py-[3px] bg-[#F0F0F0] dark:bg-[#2D3833] rounded-lg">
            <img
              class=" inline-flex  mr-[5px] items-center justify-center w-[12px] h-[12px]"
              src={message}
            ></img>
            Campaign Name
          </button>
        </div>
      </div>
      <hr className="  dark:border-[#323440] border-transparent "></hr>
    </div>
  );
}

export default Message;
