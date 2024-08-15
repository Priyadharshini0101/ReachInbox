import React,{lazy, useEffect,useState} from 'react'
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
import { CiSearch } from "react-icons/ci";
import Message from './Message';
import axios from 'axios';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Details from './Details';
import Activity from './Activity';
import LeftSection from './LeftSection';
import { useSelector } from 'react-redux';

function RightSection({currentMail}) {
  // const currentMail = useSelector((state) => state.mails.mails)
  return (
 
    <div className='w-[35%] h-screen border-l py-[25px] px-2.5 dark:border-[#343A40] gap-[10px] flex flex-col dark:bg-black bg-white'>
    <div className='bg-[#23272C] p-[8px] text-white text-[14px] font-semibold rounded-lg'>Lead Details</div>
    <div className='flex flex-col gap-[20px] px-[12px] py-[8px] '>
      <Details title="Name" data={currentMail.fromName}></Details>
      <Details title="Contact No" data='+54-9062827869'></Details>
      <Details title="Email ID" data={currentMail.fromEmail}></Details>
      <Details title="Linkedin" data={'linkedin.com/in/' + currentMail.fromName}></Details>
      <Details title="Company Name" data="Reachinbox"></Details>
    </div>
    <div className='bg-[#23272C] p-[8px] text-white text-[14px] font-semibold rounded-lg'>Activities</div>
    <div className='flex flex-col gap-[20px] px-[12px] py-[8px]'>
      <h1 className='font-semibold text-[20px] text-white px-[8px]'>Campaign Name</h1>
      <div className='flex gap-[10px] text-[12px] text-white px-[8px] '>
        <h1 className=''>3 Steps </h1>
          <hr className='w-[1px] h-[15px] border-[0.2px] border-[#403F3F]'></hr>
          <h1>5 Days in Sequence</h1>
      </div>
      <Activity step="1" img="/src/assets/sent.svg" detail="Sent 3rd, Feb"></Activity>
      <Activity step="2" img="/src/assets/open.svg" detail="Opened 5th, Feb"></Activity>
      <Activity step="3" img="/src/assets/open.svg" detail="Opened 5th, Feb"></Activity>
    </div>
    </div>   
  )
}

export default RightSection