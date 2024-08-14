import React,{useEffect,useState } from 'react'
import { useNavigate,useLocation } from 'react-router-dom';
import axios from "axios";
import { Link } from 'react-router-dom';
import { FaSun, FaMoon} from 'react-icons/fa';
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
import SideBar from './SideBar';
import TopBar from './TopBar';


function Home() {
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get("token");
    const [data,setData] = useState(null)
    

   
    useEffect(() => {
    
      if (token) {
        localStorage.setItem("token", `Bearer ${token}`);
       }
    }, [token]);
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
     
    //     } catch (error) {
    //       console.error("Error fetching data:", error);
    //     }
    //   }, 1000);
    
    //   // Cleanup function to clear the interval when the component unmounts
    //   return () => clearInterval(interval);
  
    // },[])
  
  return (
    <div className=' gap-[50px] bg-white dark:bg-black flex justify-center items-center p-[125px] flex-col'>
      <img src="/src/assets/nomessage.svg"></img>
      <div className='gap-[25px] flex flex-col items-center'>
        <h1 className='font-bold text-black dark:text-white text-[24px]'>It’s the beginning of a legendary sales pipeline</h1>
       <p className='font-medium text-[#9e9e9e] w-64 text-center'>When you have inbound E-mails you’ll see them here</p>
      </div>
    </div> 
  
  )
}

export default Home