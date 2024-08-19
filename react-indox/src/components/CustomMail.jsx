import React, { useState, useEffect } from "react";
import parse from "html-react-parser";
import PropTypes from "prop-types"

CustomMail.propTypes = {
  message: PropTypes.object,
};

function CustomMail({ message }) {
  const [currentDate, setCurrentDate] = useState("");
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

  const formatDate = (date) => {
    const day = date.getDate().toString().padStart(2, "0");
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  useEffect(() => {
    setCurrentDate(formatDate(new Date(message.sentAt)));
  }, [message]);
  return (
    <div className="px-[24px] pt-[12px] flex flex-col gap-[10px] ">
      <div className="flex  justify-center items-center">
        <hr className="border-gray-300 dark:border-[#323440] h-[0.2px] w-[50%] "></hr>
        <p className="text-[#637381] dark:text-white text-[10px] font-semibold w-[50px] text-center">
          {currentDate.slice(0, 6)}
        </p>
        <hr className="border-gray-300 dark:border-[#323440] h-[0.2px] w-[50%]"></hr>
      </div>
      <div className="flex flex-col bg-white dark:bg-black gap-[25px] w-full px-[16px] p-[12px] border-gray-300 dark:border-[#7F7F7F] rounded-md border-[1px]">
        <div className="flex flex-col gap-[5px]">
          {" "}
          <div className="flex justify-between ">
            <h1 className="text-[14px] font-semibold dark:text-white text-black">
              {message.subject}
            </h1>
            <h1 className="text-[14px] text-[#637381] dark:text-[#7F7F7F]">
              {message.sentAt}
            </h1>
          </div>
          <h1 className="text-[14px] text-[#637381] dark:text-[#AEAEAE]">
            from : {message.fromEmail}
          </h1>
          <h1 className="text-[14px] text-[#637381] dark:text-[#AEAEAE]">
            to : {message.toEmail}
          </h1>
        </div>
        <p className="text-[14px] text-[#172B4D] dark:text-[#E1E0E0]">
          {parse(message.body)}
        </p>
      </div>
    </div>
  );
}

export default CustomMail;
