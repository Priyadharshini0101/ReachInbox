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
import MailBox from './MailBox';



function Inbox() {
  const currentMail = useSelector((state) => state.mails.mails)
  const [expand,setExpand] = useState(false)
  const menu1 = [
    { 
      color:`bg-[#E6D162]`,
      text:"Meeting Completed"
    },
    {
      color:`bg-[#57E0A6]`,
      text:"Interested"
    },{
      color:`bg-[#626FE6]`,
      text:"Closed"
    }
  ]

  const menu2 = [
    {
      img:'/src/assets/markAsRead.svg',
      text:'Mark as unread'
    },{
      img:'/src/assets/editLead.svg',
      text:'Edit lead'
    },{
      img:'/src/assets/removeLead.svg',
      text:'Remove lead'
    },{
      img:'/src/assets/setReminder.svg',
      text:'Set reminder'
    },{
      img:'/src/assets/delete.svg',
      text:'Delete'
    }
  ]
  const [ currentMenu,setCurrentMenu] = useState(menu1[0])
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
    {currentMail.length !== 0 ? <>
  <MailBox currentMail={currentMail}></MailBox>
    <RightSection currentMail={currentMail}></RightSection>
    </>
    
    :<div className='flex flex-col w-[136%]'>
      
      </div>}
    </div>
  
 

  )
}

export default Inbox