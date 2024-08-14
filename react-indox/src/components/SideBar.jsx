import React from 'react'
import { Link } from 'react-router-dom'

function SideBar() {
    
  return (
    <div class="dark:bg-[#101113] bg-white fixed top-0 start-0 bottom-0 z-50 w-[56px]  border-e  border-gray-100 dark:border-[#343A40] " role="dialog" tabindex="-1" aria-label="Mini Sidebar">
      <div class="flex flex-col items-center justify-between">
        <div class="py-[24px] px-[8px]">
           <img src='/src/assets/reachInboxLogo.svg' className=''></img>
        </div>
        <div className=' flex flex-col  items-center py-[48px] gap-[25px]'>
            <Link to="/home">
             <div class="w-[32px] h-[32px] items-center inline-flex justify-center hover:rounded-md dark:hover:bg-[#2F3030] hover:bg-gray-100">    
          <img src="/src/assets/home.svg" className='w-[20px] h-[20px]'></img>
        </div></Link>
   
        <div class="w-[32px] h-[32px] items-center  inline-flex justify-center hover:rounded-md dark:hover:bg-[#2F3030] hover:bg-gray-100">
          <img src="/src/assets/search.svg"  className='w-[20px] h-[20px]'></img>
        </div>
    
    
   
        <div class="w-[32px] h-[32px] items-center  inline-flex justify-center hover:rounded-md dark:hover:bg-[#2F3030] hover:bg-gray-100">
          <img src="/src/assets/email.svg"  className='w-[20px] h-[20px]'></img>
        </div>
        
   
        <div class="w-[32px] h-[32px] items-center  inline-flex justify-center hover:rounded-md dark:hover:bg-[#2F3030] hover:bg-gray-100">
          <img src="/src/assets/message.svg"  className='w-[20px] h-[20px]'></img>
        </div>
        
   
        <div class="w-[32px] h-[32px] items-center  inline-flex justify-center hover:rounded-md dark:hover:bg-[#2F3030] hover:bg-gray-100">
          <img src="/src/assets/viewlist.svg" className='w-[20px] h-[20px]' ></img>
        </div>
        <Link to="/inbox">
        <div class="relative w-[32px] h-[32px] items-center inline-flex justify-center hover:rounded-md dark:hover:bg-[#2F3030] hover:bg-gray-100">
          <img src="/src/assets/inbox.svg" className='w-[24px] h-[24px]'></img>
          <div class="absolute inline-flex items-center justify-center w-4 h-4 text-xs font-semibold text-white bg-red-500 rounded-full -top-1.5 -end-1.5">2</div>
        </div>
        </Link>


        <div class="w-[32px] h-[32px] items-center  inline-flex justify-center hover:rounded-md dark:hover:bg-[#2F3030] hover:bg-gray-100">
          <img src="/src/assets/graph.svg" className='w-[20px] h-[20px]' ></img>
        </div>

        
        
        
        

        </div>
        <div className='py-1 px-3 m-2.5 bg-blue-500 rounded-full absolute bottom-0'>P</div>
    </div>
    </div>
  )
}

export default SideBar