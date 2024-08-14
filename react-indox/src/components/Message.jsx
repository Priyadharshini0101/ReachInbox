import React,{useState,useEffect} from 'react'
import parse from 'html-react-parser'

function Message({email,text,date,openMail}) {
    // console.log(email,message)
    
const [currentDate, setCurrentDate] = useState(null);

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November',   
'December'];

const formatDate = (date) => {
  const day = date.getDate().toString().padStart(2,   
'0');
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
};

useEffect(() => {
    setCurrentDate(formatDate(new Date(date)));
}, []);

  return (
    <div className='m-4' onClick={openMail}>  
    <hr className="  border-[#323440]"></hr> 
    <div className='flex flex-col px-[8px] py-[12px] gap-[8px]'>
        <div className='flex justify-between'>
        <h1 className='text-[14px] font-medium text-white'>{email}</h1>
        <p className='text-[12px] text-gray-500'>{currentDate ? currentDate.slice(0,6):''}</p>
        </div>
        <p className='text-[12px] text-[#E1E0E0]'>{parse(text.slice(0,35))}</p>
        <div className='flex gap-[25px] py-[5px]'>
        <button className='text-[#57E0A6] font-semibold text-[10px] px-[8px] py-[3px] bg-[#2D3833] rounded-lg'>
            
            <div class=" inline-flex mr-[5px] items-center justify-center w-2 h-2 bg-[#57E0A6] rounded-full "></div>
          Interested</button>
          <button className='text-white font-semibold text-[10px] px-[8px] py-[3px] bg-[#2D3833] rounded-lg'>
            
            <img class=" inline-flex mr-[5px] items-center justify-center w-[12px] h-[12px]" src="/src/assets/message.svg"></img>
            Campaign Name</button>
          </div>
        </div>
    </div>
  )
}

export default Message