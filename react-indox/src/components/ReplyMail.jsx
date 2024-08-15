import React from 'react'

import { BsLightningChargeFill } from "react-icons/bs";
import {
  FaCaretDown,
  FaEye,
  FaImage,
  FaRegSmile,
  FaUserMinus,
} from "react-icons/fa";
import { IoMdCode } from "react-icons/io";
import { IoLinkSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { TbSquareLetterA } from "react-icons/tb";
function ReplyMail({modalIsOpen,currentMail,closeModal}) {
  return (
    

<div className={` absolute bottom-0 p-2 flex justify-center items-end left-0  h-full w-full bg-gray-400/50 z-50 ${!modalIsOpen ? `hidden`:``}`}>
      <div className="bg-[#141517] rounded-lg border  w-[50%] border-[#41464B]">
        <div className="flex justify-between items-center px-4 bg-[#23272C] rounded-t-lg py-2 border-b border-[#41464B]">
          <div className="pl-4 text-sm">Reply</div>
          <div onClick={closeModal}>
            {" "}
            <RxCross2 className="text-[20px] cursor-pointer" />
          </div>
        </div>
        <div className="flex text-sm py-2 border-b border-[#41464B] pl-8">
          <div className="text-[#BAB9BD] w-[64px]">To :</div>
          <input
            className="bg-transparent  w-full mx-4"
            placeholder="Recipient's Email"
            name="to"
            value={currentMail.fromEmail}
            // onChange={handleInputChange}
          />
        </div>

        <div className="flex text-sm py-2 border-b border-[#41464B] pl-8">
          <div className="text-[#BAB9BD] w-[64px]">From :</div>
          <input
            className="bg-transparent w-full mx-4"
            placeholder="Your Email"
            name="from"
            value={currentMail.fromName}
            // onChange={handleInputChange}
          />
        </div>

        <div className="flex text-sm py-2 border-b border-[#41464B] pl-8">
          <div className="text-[#BAB9BD] w-[64px]">Subject :</div>
          <input
            className="bg-transparent w-full mx-4"
            placeholder="Subject"
            name="subject"
            value={currentMail.subject}
            // onChange={handleInputChange}
          />
        </div>

        <div className="flex text-sm border-b border-[#41464B] px-4 py-4  h-2/3">
          <textarea
            className="bg-transparent ml-4 w-full h-[250px]"
            placeholder="Message Body"
            name="body"
            value={''}
            // onChange={handleTextAreaChange}
          />
        </div>

        <div className="flex space-x-8 items-center my-2 mx-4">
          <div
            className="bg-gradient-to-r from-[#4B63DD] to-[#0524BFFC] px-4 py-2 rounded-md flex items-center cursor-pointer"
            // onClick={handleSendReply}
          >
            Send <FaCaretDown className="ml-4" />
          </div>
          <div className="flex items-center text-[#ADADAD]">
            <BsLightningChargeFill className="mr-3" />
            Variables
          </div>
          <div className="flex items-center text-[#ADADAD]">
            <FaEye className="mr-3" />
            Preview Email
          </div>
          <div className="flex space-x-4 text-xl text-[#ADADAD]">
            <div>
              <TbSquareLetterA />
            </div>
            <div>
              <IoLinkSharp />
            </div>
            <div>
              <FaImage />
            </div>
            <div>
              <FaRegSmile />
            </div>
            <div>
              <FaUserMinus />
            </div>
            <div>
              <IoMdCode />
            </div>
          </div>
        </div>
      </div>
    </div>
    
    
    
  )
}

export default ReplyMail