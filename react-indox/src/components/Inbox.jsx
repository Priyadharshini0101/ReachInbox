import React,{useEffect,useState} from 'react'
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
import { CiSearch } from "react-icons/ci";
import Message from './Message';
import axios from 'axios';

function Inbox() {
  const [data, setData] = useState([])
    useEffect(() =>{
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
    
      // Cleanup function to clear the interval when the component unmounts
      return () => clearInterval(interval);
  
    },[])
  
    console.log(data)
     
  return (
    <div className='flex justify-between'>    <div className='ml-[56px] w-72 h-screen border-e p-2.5 dark:border-[#343A40]  flex flex-col  dark:bg-black bg-white'> 
        <div className='justify-between flex  p-[10px] '>
    <h1 className='text-[#4285F4] font-bold text-[20px] gap-[4px]  inline-flex items-center '>All Inbox(s)<MdOutlineKeyboardArrowDown className="font-medium mt-1" /></h1>
    <button className="bg-[#25262b] w-[32px] h-[32px] border-[1px] p-[8px] border-gray-900 rounded-md " ><img src="/src/assets/refresh.svg" className=''></img></button>
        </div>
        <div className='flex px-[10px] text-[14px]  gap-[5px] items-center'>
          <h1 className='font-bold text-white'>25/25</h1>
          <p className='text-[#7f7f7f]'>Inboxes selected</p>
        </div>
        <div className="p-2.5">
        <div className="relative">
          <input
            placeholder=" Search"
            className="w-full dark:bg-[#23272C] bg-[#F4F6F8] rounded-md p-1 pl-8 border dark:border-[#FFFFFF1A] border-[#DFE3E8]"
          />
          <CiSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        </div>
        </div>
        <div className='flex justify-between px-2.5 '>
          <div>
            
          <div class=" inline-flex mr-[5px] items-center justify-center w-6 h-6 text-xs font-semibold text-white bg-[#222426] text-[#5C7CFA] rounded-full ">26</div>
        <h1 className='text-[#e6e6e6] text-[14px] font-semibold inline-flex items-center'>New Replies</h1></div>
    <h1 className='text-[#e6e6e6] font-semibold text-[14px] gap-[16px]  inline-flex items-center '>Newest<MdOutlineKeyboardArrowDown className="w-[18px] h-[18px]" /></h1>
   
    </div>
    <div>
    {data ? data.map((message) =>(
      <Message key={message.id} email={message.fromEmail} text={message.subject} date={message.sentAt}></Message>
  )):<div></div>} 
  </div>
    </div>
    <div className='w-72 h-screen border-l py-[25px] px-2.5 dark:border-[#343A40] gap-[25px] flex flex-col dark:bg-black bg-white'>
    <div className='bg-[#23272C] p-[8px] text-white text-[14px] font-semibold rounded-lg'>Lead Details</div>
    <div className='flex flex-col gap-[20px] px-[12px] py-[8px] '>
         <div className='flex justify-between'>
      <h1 className='text-[12px] text-white'>Name</h1>
      <p className='text-[#B9B9B9] text-[14px]'></p>
    </div>
    <div className='flex justify-between'>
      <h1 className='text-[12px] text-white'>Contact No</h1>
      <p className='text-[#B9B9B9] text-[14px]'>+54-9062827869</p>
    </div>
    <div className='flex justify-between'>
      <h1 className='text-[12px] text-white'>Email ID</h1>
      <p className='text-[#B9B9B9] text-[14px]'></p>
    </div>
    <div className='flex justify-between'>
      <h1 className='text-[12px] text-white'>Linkedin</h1>
      <p className='text-[#B9B9B9] text-[14px]'>linkedin.com/in/</p>
    </div>
    
    <div className='flex justify-between'>
      <h1 className='text-[12px] text-white'>Company Name</h1>
      <p className='text-[#B9B9B9] text-[14px]'>Reachinbox</p>
    </div>
    </div>
    <div className='bg-[#23272C] p-[8px] text-white text-[14px] font-semibold rounded-lg'>Activities</div>
    <div className='flex flex-col gap-[20px] px-[12px] py-[8px] '>
    
    </div>
    </div>
    </div>
  
 

  )
}

export default Inbox