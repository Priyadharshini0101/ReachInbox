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
import Modal  from 'react-modal'
import ReplyMail from './ReplyMail';
import DeleteMail from './DeleteMail';




function MailBox({currentMail}) {
    const draft = []
    const [modalIsOpen, setIsOpen] = useState(false);
    const [modalIsOpenDelete,setModalIsOpenDelete] = useState(false)
    // const [activeTab,setActiveTab] = useState("Home")
  
    function openModal() {
      setIsOpen(true);
    }

    function closeModal() {
      setIsOpen(false);
    }

    function openDeleteModal(){
        setModalIsOpenDelete(true);
    }
    function closeDeleteModal(){
        setModalIsOpenDelete(false)
    }
    
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
  const [selectedMail,setSelectedMail] = useState([])
  const [selected,setSelected] = useState(false)
   const [selectMove,setSelectMove] = useState(false)
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
    
} catch (error) {
    console.error("Error fetching data:", error);
}
}
fetch()

},[currentMail])
console.log(selectedMail)

useEffect(() => {
    const handleKeyPress = (event) => {
  
        if(modalIsOpen === false){
      if (event.key === "d" || event.key === "D") {
        openDeleteModal(true)
     
      }
    }
    if(modalIsOpenDelete === false){

          if (event.key === "r" || event.key === "R") {
        openModal(true)
      
            } 
     }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [event]);

  return (
    <div className='flex flex-col w-full  justify-between'>
    <div className='flex flex-col '   >
    <div  className='flex px-[24px] py-[16px] justify-between border-b  dark:border-[#343A40]' >
      <div className='flex flex-col '>
     <h1 className='text-[14px] text-white font-semibold'>{currentMail.fromName}</h1>
     <p className='text-[12px] text-gray-500'>{currentMail.fromEmail}</p>
     </div>
  <div className='flex gap-[25px]  ' >
    <Menu as="div" className=" relative  text-left">
            <MenuButton  className="flex border-[1px] rounded-md border-[#343A40] bg-[#222426]  text-[16px] sm:text-[14px]  px-[16px]  py-[6px]   text-white shadow-sm hover:bg-[#6d6d6eb3]" onMouseOut={() => setSelected(false)} onClick={() => setSelected((selected) => !selected)} >
              <div className='flex gap-[5px] items-center'>
            <div class={`inline-flex mr-[5px] items-center border-[#444234] justify-center w-3 h-3 ${currentMenu.color} rounded-full `}></div>
      <p>  {currentMenu.text}</p>
      <MdOutlineKeyboardArrowDown className={`w-[24px] h-[24px]   ${!selected ? `transition ease-out`:  `rotate-180 transition ease-in` }`}></MdOutlineKeyboardArrowDown>
      </div>
            </MenuButton>
            <MenuItems
          transition
              className={`absolute  bg-black right-0 z-10 w-52 shadow-lg ring-1 ring-inset ring-gray-300  transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in`}>
                <div className="flex  flex-col  items-left">
               {menu1.map((menu) => (
                  <MenuItem onClick={() => setCurrentMenu(menu)}>       
                
              <div className='flex gap-[10px] items-center hover:bg-gray-500 py-2 px-2.5'>
              <div class={`inline-flex mr-[5px] items-center border-[#444234] justify-center w-3 h-3 ${menu.color} rounded-full `}></div>
           <p className='text-[14px]'>   {menu.text}</p>
             
            </div>
        
            </MenuItem>
              ))}
              </div>
              </MenuItems>
             
          </Menu>
          
     <Menu as="div" className=" relative text-left">
            <MenuButton className=" flex  border-[1px] border-[#343A40] bg-[#222426] rounded-md   text-[16px] sm:text-[14px]  px-[16px]  py-[6px]   text-white shadow-sm hover:bg-[#6d6d6eb3]">
              <div className='flex gap-[5px] items-center'>
       Move
      <MdOutlineKeyboardArrowDown className={`w-[24px] h-[24px]`}></MdOutlineKeyboardArrowDown>
      </div>
            </MenuButton>
          </Menu>


          <Menu as="div" className=" relative text-left">
            <MenuButton>
           
          <button className='flex text-[18px] font-semibold justify-center w-[36px] h-[36px] border-[1px] border-[#343A40] bg-[#222426] rounded-md text-white shadow-sm '>
            ...
          </button>
            </MenuButton>
            <MenuItems
              transition
              className="absolute  bg-black right-0 z-10 w-40  shadow-lg ring-1 ring-inset ring-gray-300  transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in">
                <div className="flex  flex-col items-left">
               {menu2.map((menu) => (
                  <MenuItem onClick={() => {  if(menu.text === "Delete"){
                    openDeleteModal(true)
                  }}
                  }>       
                
              <div className='flex gap-[16px] items-center hover:bg-gray-500 py-2 px-4'>
              <img src={menu.img}></img>
        <p className='text-[12px] font-semibold text-[#D3D7DB]'>{menu.text}</p>
             
            </div>
        
            </MenuItem>
              ))}
              </div>
              </MenuItems>
             
          </Menu>




          
  
    </div>

   </div>
        {selectedMail ? selectedMail.map((message,index) => expand ? (
        
          <CustomMail  message={message}></CustomMail>
        ):(
        index == 0 ? <CustomMail message={message}></CustomMail>:""
        )):<div></div>}
        {selectedMail.length > 1?
     <div className='flex  justify-center items-center py-[12px] px-[24px]'>
    <hr className=' border-[#323440] h-[0.2px] w-[50%] '></hr>

        <button onClick={() => setExpand((expand) => !expand)} className='text-white text-[10px] font-semibold w-[150px] text-center flex items-center justify-center gap-[5px] '><img src="/src/assets/expand.svg"></img>{!expand ? `View `:`Hide `} All <p className='text-[#5C7CFA]'>{selectedMail.length - 1} </p>replies</button>
    <hr className=' border-[#323440] h-[0.2px] w-[50%]'></hr>
    </div>
    :<div></div>}
    
    <ReplyMail   currentMail={currentMail} modalIsOpen={modalIsOpen} closeModal={closeModal}></ReplyMail>
    <DeleteMail currentMail={currentMail} modalIsOpen={modalIsOpenDelete} closeModal={closeDeleteModal} ></DeleteMail>
   

</div>
<div className='p-[24px] '>  
<button className="bg-gradient-to-r from-[#4B63DD] to-[#0524BFFC]  text-white font-semibold cursor-pointer rounded-md h-[40px] w-[136px] flex justify-center items-center gap-[10px]" onClick={() => openModal()}><img src="/src/assets/reply.svg"></img><p className='text-[14px] text-white font-semibold'>Reply</p></button>  
</div>
</div>
  )
}

export default MailBox

  