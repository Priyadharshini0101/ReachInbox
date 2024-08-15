import React,{lazy, useEffect,useState} from 'react'
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
import { CiSearch } from "react-icons/ci";
import {Menu,MenuButton,MenuItem,MenuItems} from '@headlessui/react'
import Message from './Message';
import axios from 'axios';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Details from './Details';
import Activity from './Activity';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import { useSelector } from 'react-redux';
import { current } from '@reduxjs/toolkit';
import parse from 'html-react-parser'
import CustomMail from './CustomMail';



function Inbox() {
  const currentMail = useSelector((state) => state.mails.mails)
  const navigate = useNavigate()
  const [selectedMail,setSelectedMail] = useState([])
   useEffect(() =>{

    const fetch = async () => {
      try {
      const token = localStorage.getItem("token");
      const res = await axios.get(
        `https://hiring.reachinbox.xyz/api/v1/onebox/messages/${currentMail.threadId}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
    setSelectedMail(res.data.data)
    //  dispatch(addMail(res.data.data));
} catch (error) {
    console.error("Error fetching data:", error);
}
}
fetch()
 console.log(selectedMail,currentMail.length)
},[currentMail])

     
  return (
    <div className='flex justify-between '> 
    <LeftSection></LeftSection>
    {currentMail.length !== 0 ? <><div className='flex flex-col w-full  '>
    <div className='flex px-[24px] py-[16px] justify-between border-b  dark:border-[#343A40]  '>
      <div className='flex flex-col '>
     <h1 className='text-[14px] text-white font-semibold'>{currentMail.fromName}</h1>
     <p className='text-[12px] text-gray-500'>{currentMail.fromEmail}</p>
     </div>
  <div className='flex gap-[25px]'>
    <Menu as="div" className=" relative text-left">
            <MenuButton className=" flex  border-[1px] rounded-md border-[#343A40] bg-[#222426]  text-[16px] sm:text-[14px]  px-[16px]  py-[6px]   text-white shadow-sm hover:bg-[#6d6d6eb3]">
              <div className='flex gap-[5px] items-center'>
            <div class=" inline-flex mr-[5px] items-center border-[#444234] justify-center w-3 h-3 bg-[#E1D162] rounded-full "></div>
          Meeting Completed
      <MdOutlineKeyboardArrowDown className='w-[24px] h-[24px]'></MdOutlineKeyboardArrowDown>
      </div>
            </MenuButton>
            <MenuItems
              transition
              className="absolute  bg-black  left-0 z-10 w-48 origin-top-right  shadow-lg ring-1 ring-inset ring-gray-300  transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in">
              <div className="py-1">
                {/* {genres.map((genre, index) => (
                  <MenuItem >
                    <a
                      href="#"
                      className="block px-2 py-1 text-sm text-white data-[focus]:underline data-[focus]:text-white"
                      onClick={() => {
                        addGenreHandler(genre);
                      }}
                    >
                     
                    </a>
                  </MenuItem>
                ))} */}
              </div>
            </MenuItems>
          </Menu>
          
     <Menu as="div" className=" relative text-left">
            <MenuButton className=" flex  border-[1px] border-[#343A40] bg-[#222426] rounded-md   text-[16px] sm:text-[14px]  px-[16px]  py-[6px]   text-white shadow-sm hover:bg-[#6d6d6eb3]">
              <div className='flex gap-[5px] items-center'>
       Move
      <MdOutlineKeyboardArrowDown className='w-[24px] h-[24px]'></MdOutlineKeyboardArrowDown>
      </div>
            </MenuButton>
            <MenuItems
              transition
              className="absolute  bg-black  left-0 z-10 w-48 origin-top-right  shadow-lg ring-1 ring-inset ring-gray-300  transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in">
              <div className="py-1">
                {/* {genres.map((genre, index) => (
                  <MenuItem >
                    <a
                      href="#"
                      className="block px-2 py-1 text-sm text-white data-[focus]:underline data-[focus]:text-white"
                      onClick={() => {
                        addGenreHandler(genre);
                      }}
                    >
                     
                    </a>
                  </MenuItem>
                ))} */}
              </div>
            </MenuItems>
          </Menu>
    
          <button className='flex text-[18px] font-semibold justify-center w-[36px] h-[36px] border-[1px] border-[#343A40] bg-[#222426] rounded-md text-white shadow-sm '>
            ...
          </button>
    </div>
   </div>
   {selectedMail ? selectedMail.map((message) => (
    <CustomMail message={message}></CustomMail>
   )):<div></div>}
   </div>
    <RightSection currentMail={currentMail}></RightSection>
    </>:<div className='flex flex-col w-[136%]'>
      
      </div>}
    </div>
  
 

  )
}

export default Inbox