"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { IoMenuOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { signOut, useSession } from 'next-auth/react';
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Navbar = () => {
  const[navbarOpen, setNavbarOpen] = useState(false);

  const { data: session } = useSession();
 // navbar home
  const navbarItem=[
    {
      label:"Home",
      link:'/'
    },
    {
      label:"About",
      link:'/about'
    },
    {
      label:"Plans",
      link:'/service'
    },
   
    {
      label:"Contact us",
      link:'/contact'
    },
  ]
  // narbar avatar
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
      setAnchorEl(null);
  };


  

  return (
    <main className=' flex items-center justify-between sticky top-0 z-50 bg-white '>
     
     <div className='lg:w-60 w-30 bg-white rounded-r-md'>
       <Image
        src={'/asset.jpg'}
        alt='logo'
        width={500}
        height={500}
        className='p-2  h-20 w-28 lg:w-full  '
        />
      </div>

      <div className={`flex items-center gap-10 max-lg:flex-col max-lg:h-dvh max-lg:fixed max-lg:top-0 max-lg:right-0 max-lg:justify-center max-lg:w-full max-lg:bg-white transition-all ${!navbarOpen ? "max-lg:translate-x-full" : ""}`}>
        {
          navbarItem.map((item, index) =>(
            <Link
            key={index}
            href={item.link}
            onClick={()=> setNavbarOpen(false)}
            className='font-serif text-lg hover:text-cyan-700 hover:shadow-2xl hover:shadow-cyan-700 capitalize font-base p-2 rounded-md  duration-400  '
            >
              {item.label}
            </Link>
          ))
        }
      </div>
      
      <div>
          {
              
            session ?
                <div>
                    <Avatar
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        className="hover:cursor-pointer"
                    >
                    <AvatarImage src={session?.user?.image} alt={session?.user?.name.slice(0, 2)} />
                    <AvatarFallback>{session?.user?.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                      >
                      <MenuItem onClick={handleClose}>
                        <Link href={'/profile'}>Profile</Link>
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <Link href={'/investment'}>History</Link>
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                      <Link href={'/service'}>invest</Link>
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <button onClick={() => { signOut({ callbackUrl: "/auth/signin" }) }}>Log Out</button>
                      </MenuItem>
                    </Menu>
                </div>
                    :
                    <div className='pr-10'>
                      <Link href={'/auth/signin'} className='lg:text-lg  hover:bg-transparent/30 p-2 px-4 rounded-lg duration-150 flex items-center lg:bg-cyan-700  '>
                            Sign In
                      </Link>
                    </div>
            }

      </div>

      <button onClick={() => { setNavbarOpen(!navbarOpen) }} className='text-3xl lg:hidden z-50'>
          {
              navbarOpen ? <IoMdClose /> : <IoMenuOutline />
          }
      </button>

      
    </main>
  )
}

export default Navbar
