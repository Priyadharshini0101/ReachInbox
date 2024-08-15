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
import { BsLightningChargeFill } from "react-icons/bs";
import {
  FaCaretDown,
  FaEye,
  FaImage,
  FaRegSmile,
  FaUserMinus,
} from "react-icons/fa";
import { IoMdCode } from "react-icons/io";
import { IoLinkSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { TbSquareLetterA } from "react-icons/tb";




function MailBox({currentMail}) {
    
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


useEffect(() => {
    const handleKeyPress = (event) => {
        console.log(modalIsOpen)
        if(modalIsOpen === false){
      if (event.key === "d" || event.key === "D") {
        openDeleteModal(true)
        // console.log("Pressed D");
      }
    }
    if(modalIsOpenDelete === false){

          if (event.key === "r" || event.key === "R") {
        openModal(true)
        // console.log("Pressed R");
            }  }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [event]);

  return (
    
    <div className='flex flex-col w-full  '   >
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
                  <MenuItem>       
                
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
  
    <Modal
        isOpen={modalIsOpenDelete}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeDeleteModal}
        // customStyles={customStyles}
        className={`w-[300px] h-[150px] p-2.5 absolute top-[40%] left-[40%] border-[1.5px] border-stone-800  bg-stone-500 ${useLocation().pathname === "/add-post" ? `top-[30%]` :``  }`}>
   <div className='flex flex-col  '>
      {/* <button onClick={closeModal} className=''>close</button></div> */}
        <div className='text-center m-[10px] text-[18px]'>Do you really want to logout?</div>
          <div className='flex justify-center'>
          <button   className='m-[24px] w-[72px] h-[36px] hover:bg-stone-50 border-stone-800 bg-stone-200 border-[1.5px] shadow-xl'>YES</button>
          <button onClick={() => closeDeleteModal()}  className='m-[24px] w-[72px] h-[36px] hover:bg-stone-50 border-stone-800 bg-stone-200 border-[1.5px] shadow-xl' >NO</button>
          </div>
          </div>
      </Modal>
   
    </div>
    :<div></div>}
    
<div className='p-[24px]'>  
<button className="bg-gradient-to-r from-[#4B63DD] to-[#0524BFFC]  text-white font-semibold cursor-pointer rounded-md h-[40px] w-[136px] flex justify-center items-center gap-[10px]" onClick={() => openModal()}><img src="/src/assets/reply.svg"></img><p className='text-[14px] text-white font-semibold'>Reply</p></button>  
</div>

<div key={currentMail.threadId} className={` absolute bottom-[25px]  w-[50%] z-50 ${!modalIsOpen ? `hidden`:``}`}>
      <div className="bg-[#141517] rounded-lg border border-[#41464B]">
        <div className="flex justify-between items-center px-4 bg-[#23272C] rounded-t-lg py-2 border-b border-[#41464B]">
          <div className="pl-4 text-sm">Reply</div>
          <div onClick={() =>closeModal()}>
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
            value={currentMail.fromEmail}
            // onChange={handleInputChange}
          />
        </div>

        <div className="flex text-sm py-2 border-b border-[#41464B] pl-8">
          <div className="text-[#BAB9BD] w-[64px]">From :</div>
          <input
            className="bg-transparent w-full mx-4"
            placeholder="Your Email"
            name="from"
            value={currentMail.fromName}
            // onChange={handleInputChange}
          />
        </div>

        <div className="flex text-sm py-2 border-b border-[#41464B] pl-8">
          <div className="text-[#BAB9BD] w-[64px]">Subject :</div>
          <input
            className="bg-transparent w-full mx-4"
            placeholder="Subject"
            name="subject"
            value={''}
            // onChange={handleInputChange}
          />
        </div>

        <div className="flex text-sm border-b border-[#41464B] px-4 py-4  h-2/3">
          <textarea
            className="bg-transparent ml-4 w-full h-[250px]"
            placeholder="Message Body"
            name="body"
            value={''}
            // onChange={handleTextAreaChange}
          />
        </div>

        <div className="flex space-x-8 items-center my-2 mx-4">
          <div
            className="bg-gradient-to-r from-[#4B63DD] to-[#0524BFFC] px-4 py-2 rounded-md flex items-center cursor-pointer"
            // onClick={handleSendReply}
          >
            Send <FaCaretDown className="ml-4" />
          </div>
          <div className="flex items-center text-[#ADADAD]">
            <BsLightningChargeFill className="mr-3" />
            Variables
          </div>
          <div className="flex items-center text-[#ADADAD]">
            <FaEye className="mr-3" />
            Preview Email
          </div>
          <div className="flex space-x-4 text-xl text-[#ADADAD]">
            <div>
              <TbSquareLetterA />
            </div>
            <div>
              <IoLinkSharp />
            </div>
            <div>
              <FaImage />
            </div>
            <div>
              <FaRegSmile />
            </div>
            <div>
              <FaUserMinus />
            </div>
            <div>
              <IoMdCode />
            </div>
          </div>
        </div>
      </div>
    </div>
    
    
    </div>
  )
}

export default MailBox

  