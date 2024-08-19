import React, { useState } from "react";
import axios from "axios";
import {FaCaretDown } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { imageIcon, linkIcon, personRemoveIcon, previewIcon, sentimentSatisfiedIcon, spellCheckIcon, unfoldMore, variableIcon } from "../assets";
import PropTypes from  'prop-types'

ReplyMail.propTypes = {
  modalIsOpen: PropTypes.boolean,
  currentMail: PropTypes.object,
  closeModal:PropTypes.boolean
}


function ReplyMail({ modalIsOpen, currentMail, closeModal }) {
  const [replyData, setReplyData] = useState({
    to: currentMail.fromEmail,
    from: currentMail.toEmail,
    subject: "",
    body: "",
    inReplyTo: "",
    references: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReplyData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendReply = async () => {
    const token = localStorage.getItem("token");
    try {
      await axios.post(
        `https://hiring.reachinbox.xyz/api/v1/onebox/reply/${currentMail.threadId}`,
        {
          from: replyData.from,
          to: replyData.to,

          subject: replyData.subject,
          body: replyData.body,
        },

        {
          headers: {
            Authorization: token,
          },
        }
      );
    } catch (error) {
      alert("Reply is not sent successfully");
      console.log(error);
    }
    closeModal(false);
    setReplyData({
      to: currentMail.fromEmail,
      from: currentMail.toEmail,
      subject: "",
      body: "",
      inReplyTo: "",
      references: "",
    });
  };

  return (
    <div
      className={` absolute bottom-0 p-2 flex justify-center items-end left-0  h-full w-full bg-gray-400/50 z-50 ${
        !modalIsOpen ? `hidden` : ``
      }`}
    >
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
            value={replyData.from}
            onChange={handleChange}
          />
        </div>

        <div className="flex text-sm py-2 border-b border-[#41464B] pl-8">
          <div className="text-[#BAB9BD] w-[64px]">From :</div>
          <input
            className="bg-transparent w-full mx-4"
            placeholder="Your Email"
            name="from"
            value={replyData.to}
            onChange={handleChange}
          />
        </div>

        <div className="flex text-sm py-2 border-b border-[#41464B] pl-8">
          <div className="text-[#BAB9BD] w-[64px]">Subject :</div>
          <input
            className="bg-transparent w-full mx-4"
            placeholder="Subject"
            name="subject"
            value={replyData.subject}
            onChange={handleChange}
          />
        </div>

        <div className="flex text-sm border-b border-[#41464B] px-4 py-4  h-2/3">
          <textarea
            className="bg-transparent ml-4 w-full h-[250px]"
            placeholder="Message Body"
            name="body"
            value={replyData.body}
            onChange={handleChange}
          />
        </div>

        <div className="flex space-x-8 items-center my-2 mx-4">
          <div
            className="bg-gradient-to-r from-[#4B63DD] to-[#0524BFFC] px-4 py-2 rounded-md flex items-center cursor-pointer"
            onClick={sendReply}
          >
            Send <FaCaretDown className="ml-4" />
          </div>
          <div className="flex items-center gap-[10px] text-[#ADADAD]">
            <img src={variableIcon}></img>
            Variables
          </div>
          <div className="flex gap-[10px] items-center text-[#ADADAD]">
          <img src={previewIcon}></img>    
            Preview Email
          </div>
          <div className="flex space-x-4 items-center text-xl text-[#ADADAD]">
            <div>
              <img src={spellCheckIcon}></img> 
            </div>
            <div>
              <img src={linkIcon}></img>
            </div>
            <div>
              <img src={imageIcon}></img>
            </div>
            <div>
            <img src={sentimentSatisfiedIcon}></img>
            </div>
            <div>
              <img src={personRemoveIcon}></img>
            </div>
            <div>
            <img src={unfoldMore}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReplyMail;
