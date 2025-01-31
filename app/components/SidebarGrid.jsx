"use client"
import React from 'react'
import Link from 'next/link';
import { useState } from 'react';
import { RiMenuUnfoldFill } from "react-icons/ri";
import { RiMenuFoldFill } from "react-icons/ri";

const Sidebar = () => {
    const[navbarOpen, setNavbarOpen] = useState(false);
    const navbarItem=[
        {
          label:"Dashboard",
          button:'/dashboard'
        },
        {
          label:"plan",
          button:'/service'
        },
        
        {
          label:"Transaction",
          button:'/transaction'
        },
        {
          label:"Referral",
          button:'/referral'
        },
      
          {
            label:"support",
            button:'/contact'
          },
      ]
    
  return (
    
        
    <main className='lg:h-14'>
        <div className={` flex px-10 gap-7 h-full max-lg:flex-col items-center max-lg:fixed lg:justify-end max-lg:w-full  bg-cyan-700 transition-all ${!navbarOpen ? "max-lg:translate-y-full" : ""}`}>
        {
            navbarItem.map((item, index) =>(
            <Link
            key={index}
            href={item.button}
            onClick={()=> setNavbarOpen(false)}
            className='font-serif text-lg capitalize max-lg:pl-8 max-lg:pt-5  font-base rounded-full  duration-400 text-white  '
            >
            {item.label}
            </Link>
        ))
        }      
        </div>
        <button onClick={() => { setNavbarOpen(!navbarOpen) }} className='text-3xl text-white lg:hidden z-50 max-lg:fixed bg-cyan-700 p-2 rounded-full  '>
            {
                navbarOpen ? <RiMenuFoldFill /> : <RiMenuUnfoldFill />
            }
            </button>


    </main>
  )
}

export default Sidebar

 