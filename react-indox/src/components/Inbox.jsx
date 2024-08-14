import React,{lazy, useEffect,useState} from 'react'
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
import { CiSearch } from "react-icons/ci";
import Message from './Message';
import axios from 'axios';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Details from './Details';
import Activity from './Activity';
import LeftSection from './LeftSection';
import RightSection from './RightSection';

function Inbox() {
  const [data, setData] = useState([])
  const navigate = useNavigate()
    // useEffect(() =>{
    //   const interval = setInterval(async () => {
    //     try {
    //       const token = localStorage.getItem("token");
    //       const res = await axios.get(
    //         "https://hiring.reachinbox.xyz/api/v1/onebox/list",
    //         {
    //           headers: {
    //             Authorization: token,
    //           },
    //         }
    //       );
    //       setData(res.data.data);
    //            } catch (error) {
    //       console.error("Error fetching data:", error);
    //     }
    //   }, 1000);
    
    //   // Cleanup function to clear the interval when the component unmounts
    //   return () => clearInterval(interval);
  
    // },[])
  
    // console.log(data)
     
  return (
    <div className='flex justify-between'> 
    <LeftSection></LeftSection>
    <div className='flex'>
      <div className='flex flex-col '>
     <h1>Priya</h1>
     <p>Priya@gmail.com</p>
     </div>
    </div>
    <RightSection></RightSection>
    </div>
  
 

  )
}

export default Inbox