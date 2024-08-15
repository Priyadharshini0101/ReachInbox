import React,{lazy, useEffect,useState} from 'react'
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
import { CiSearch } from "react-icons/ci";
import Message from './Message';
import axios from 'axios';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Details from './Details';
import Activity from './Activity';
import { useDispatch, useSelector } from 'react-redux';
import { addMail } from '../app/mailSlice';

function LeftSection() {
    
  const [data, setData] = useState([])
  const navigate = useNavigate()
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
    
    const reload = async () => {
    const token = localStorage.getItem("token");
  const res = await axios.get("https://hiring.reachinbox.xyz/api/v1/onebox/reset", {
      headers: {
        Authorization: token,
      },
    });

    console.log(res);
  }
  
    
  return (
    <div className=' w-[35%] h-[90vh] border-e p-2.5 dark:border-[#343A40]  flex flex-col  dark:bg-black bg-white'> 
    <div className='justify-between flex  p-[10px] '>
<h1 className='text-[#4285F4] font-bold text-[20px] gap-[4px]  inline-flex items-center '>All Inbox(s)<MdOutlineKeyboardArrowDown className="font-medium mt-1 cursor-pointer" /></h1>
<button className="bg-[#25262b] w-[32px] h-[32px] border-[1px] p-[8px] border-gray-900 rounded-md" onClick={() => reload()}><img src="/src/assets/refresh.svg" className=''></img></button>
    </div>
    <div className='flex px-[10px] text-[14px]  gap-[5px] items-center'>
      <h1 className='font-bold text-white'>{data.length}/25</h1>
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
        
      <div class=" inline-flex mr-[5px] items-center justify-center w-6 h-6 text-xs font-semibold bg-[#222426] text-[#5C7CFA] rounded-full ">{data.length}</div>
    <h1 className='text-[#e6e6e6] text-[14px] font-semibold inline-flex items-center'>New Replies</h1></div>
<h1 className='text-[#e6e6e6] font-semibold text-[14px] gap-[16px]  inline-flex items-center '>Newest<MdOutlineKeyboardArrowDown className="w-[18px] h-[18px] cursor-pointer" /></h1>

</div>
<div>
{data ? data.map((message) =>(
  <Message message={message} id={message.threadId} key={message.id} email={message.fromEmail} text={message.subject} date={message.sentAt}></Message>
)):<div></div>} 
<div className='px-[12px]'>

<hr className="  border-[#323440]"></hr> 

</div>
</div>

</div>
  )
}

export default LeftSection