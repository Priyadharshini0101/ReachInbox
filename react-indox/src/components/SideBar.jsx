import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import { useLocation} from 'react-router-dom'
import { useSelector } from 'react-redux'
function SideBar() {
  const [logo,setLogo] = useState("/src/assets/logo_dark.svg")
  const theme = useSelector((state) => state.themes.mode)
  useEffect(() =>{
    console.log(theme)
    if(theme === "dark"){
    setLogo("/src/assets/logo_white.svg")
    }else{
      setLogo("/src/assets/logo_dark.svg")
    }
  },[theme])
  return (
    <div class="dark:bg-[#101113] bg-white z-50 w-[56px]  border-e  border-gray-100 dark:border-[#343A40]">
      <div class="flex flex-col h-full items-center justify-between">
        <div class="py-[24px] px-[8px]">
<img src={logo}></img>
        </div>
        <div className=' flex flex-col  items-center  gap-[40px]'>
            <Link to="/home">
             <div class="w-[32px] h-[32px] items-center inline-flex justify-center hover:rounded-md dark:hover:bg-[#2F3030] hover:bg-gray-100">    
          <img src="/src/assets/home.svg" className='w-[20px] h-[20px]'></img>
        </div></Link>
        <Link to="/home">
        <div class="w-[32px] h-[32px] items-center  inline-flex justify-center hover:rounded-md dark:hover:bg-[#2F3030] hover:bg-gray-100">
          <img src="/src/assets/search.svg"  className='w-[20px] h-[20px]'></img>
        </div>
        </Link>
    
        <Link to="/home">
        <div class="w-[32px] h-[32px] items-center  inline-flex justify-center hover:rounded-md dark:hover:bg-[#2F3030] hover:bg-gray-100">
          <img src="/src/assets/email.svg"  className='w-[20px] h-[20px]'></img>
        </div>
        </Link>
        <Link to="/home">
   
        <div class="w-[32px] h-[32px] items-center  inline-flex justify-center hover:rounded-md dark:hover:bg-[#2F3030] hover:bg-gray-100">
          <img src="/src/assets/message.svg"  className='w-[20px] h-[20px]'></img>
        </div></Link>
        
        <Link to="/home">
        <div class="w-[32px] h-[32px] items-center  inline-flex justify-center hover:rounded-md dark:hover:bg-[#2F3030] hover:bg-gray-100">
          <img src="/src/assets/viewlist.svg" className='w-[20px] h-[20px]' ></img>
        </div></Link>
        <Link to="/inbox">
        <div class={`relative w-[32px] h-[32px] items-center inline-flex justify-center hover:rounded-md dark:hover:bg-[#2F3030]  hover:bg-gray-100 ${useLocation().pathname === '/inbox' ? `dark:bg-[#2F3030] bg-gray-100 rounded-md`:``}`}>
          <img src="/src/assets/inbox.svg" className='w-[24px] h-[24px]'></img>
          <div class="absolute inline-flex items-center justify-center w-4 h-4 text-xs font-semibold text-white bg-red-500 rounded-full -top-1.5 -end-1.5">2</div>
        </div>
        </Link>

        <Link to="/home">
        <div class="w-[32px] h-[32px] items-center  inline-flex justify-center hover:rounded-md dark:hover:bg-[#2F3030] hover:bg-gray-100">
          <img src="/src/assets/graph.svg" className='w-[20px] h-[20px]' ></img>
        </div>
        </Link>
        
        
        
        

        </div>
        <div className='py-1 px-3 m-2.5 bg-blue-500 rounded-full '>P</div>
    </div>
    </div>
  )
}

export default SideBar