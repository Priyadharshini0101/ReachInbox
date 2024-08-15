import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Outlet } from 'react-router-dom'
import './App.css'
import { useNavigate } from 'react-router-dom'
import SideBar from './components/SideBar'
import TopBar from './components/TopBar'

function App() {

  const navigate = useNavigate()
  const token = localStorage.getItem('token')
  console.log(token)

  useEffect(() => {
      if(token === null){
        console.log("Login")
        navigate('/login')
    }else{
      console.log("Home")
      navigate('/home')
    }
  },[]);

  return (
    <div className='flex '>
    
  {token ? <SideBar></SideBar> :<></>}
  <div className='w-full'>
  {token ? <TopBar></TopBar> :<></>}
  
      <Outlet />
      </div> 
    </div>
      
    )
}

export default App
