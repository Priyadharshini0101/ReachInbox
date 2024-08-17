import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux'
function Activity({step,img,detail}) {
    const [mail,setMail] = useState("/src/assets/mail.svg")
    const theme = useSelector((state) => state.themes.mode)
    useEffect(() =>{
      console.log(theme)
      if(theme === "dark"){
      setMail("/src/assets/mail.svg")
      }else{
        setMail("/src/assets/mail_dark.svg")
      }
    },[theme])
      
  return (
    <div className='flex gap-[25px] px-[8px]'>
    <img src={mail}></img>
    <div className='flex flex-col gap-[10px]'>
      <h1 className='font-semibold text-[13px] text-black dark:text-white'>{'Step ' + step + ': Email'}</h1>
      <p className='text-[10px] text-[#b9b9b9] flex gap-[5px]'><img src={img}></img>{detail}</p>
    </div>
    </div>
  )
}

export default Activity