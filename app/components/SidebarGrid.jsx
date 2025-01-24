"use client"
import React from 'react'
import Link from 'next/link';
import { useState } from 'react';
import { IoMdCopy } from "react-icons/io";
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
          label:"Invest",
          button:'/service'
        },
        {
          label:"Referral",
          button:'/referral'
        },
        
        {
          label:"transactions",
          button:'/transaction'
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

 // const [currency, setCurrency] = useState('');
    
  
  
    // const handleCurrencyChange = (event) => {
    //     setCurrency(event.target.value);
    // };
  
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     // Handle the form submission logic here
    //     console.log('Selected currency:', currency);
    //     console.log('Entered number:', number);
    // };
  
    // const [number, setNumber] = useState('');
  
    // const handleNumberChange = (event) => {
    //     setNumber(event.target.value);
    // };
  
    // const textToCopy = "14r7FA1HxrPyjatWk1sZmgy1gQ9a2rw9vv";
  
    // const handleCopy = () => {
    //     navigator.clipboard.writeText(textToCopy)
    //         .then(() => {
    //             console.log('Text copied to clipboard!');
                
    //         })
    //         .catch(err => {
    //             console.error('Failed to copy: ', err);
    //         });
    // };


{/* <div className='flex gap-4 flex-col lg:items-end lg:px-32 px-4 lg:w-full w-[100%]  py-14 justify-center '>
        <h2 className='text-3xl font-bold text-white'>Deposit Funds </h2>
        <span className='text-lg font-medium text-white lg:text-right'>Add funds using our system's gateway. The deposited amount
            will be credited to the deposit wallet. You'll just
            make investments from this wallet.</span>

        <form className='flex bg-cyan-700 border rounded-xl flex-col p-5 gap-5' onSubmit={handleSubmit}>
        <p className='font-medium capitalize text-white'>Bitcion payment</p>
        
        <div className='flex gap-2 text-sm text-white'>
        <p>{textToCopy}</p>
        <button onClick={handleCopy} ><IoMdCopy  className='text-sm hover:text-green-600 active:text-red-800' /></button>
        
        </div>

        <select id="currency" value={currency}  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-700 focus:outline-none" onChange={handleCurrencyChange}>
            <option value="" className=''>Select a currency</option>
            <option value="USD">US Dollar (USD)</option>
            <option value="EUR">Euro (EUR)</option>
            <option value="GBP">British Pound (GBP)</option>
            <option value="JPY">Japanese Yen (JPY)</option> 
        </select>
            <input type="file" accept='image'  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-700 focus:outline-none text-black"  />
        <input  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-700 focus:outline-none text-black" placeholder='Enter amount' type="number" id="positiveNumber"
            value={number}
            onChange={handleNumberChange}
            min="100" step="any"
        />     

        <button className='bg-white p-2' type="submit">Submit</button>
        </form>
        </div> */}