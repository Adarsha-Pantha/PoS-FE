import Image from 'next/image'
import React from 'react'
import logo from './logo.svg'
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";



const Navbar = () => {
  return (
    <div className='flex justify-between px-8 bg-slate-500 h-16'>
      <div className='flex items-center'> 
        <h1 className='text-3xl font-bold text-slate-200 '>Dashboard</h1>
      </div>
      <div className='flex items-center gap-6'>
        <span><MdOutlineMail className='text-3xl text-slate-200'/></span>
        <span><IoMdNotificationsOutline  className='text-3xl text-slate-200'/></span>
        <Image className='border-solid border-2 border-slate-200 bg-yellow-500 rounded-full' src={logo} height={40} width={41.8} alt="logo"/>
      </div>  
    </div>
  )
}

export default Navbar