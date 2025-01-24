"use client"
import { MdAddIcCall } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { TbHours24 } from "react-icons/tb";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import Image from 'next/image';
import Link from 'next/link';
import { BsFillSendPlusFill } from "react-icons/bs";
import { MdOutlineCopyright } from "react-icons/md";
import { FaSquareWhatsapp } from "react-icons/fa6";

const Footer = () => {

  return (
    <main className=''>
      <section className='bg-cyan-100 w-full  relative '>
        <div className='bg-cyan-700 absolute w-[92%] top-[-15rem] md:top-[-6rem] lg:top-[-3.5rem] lg:left-[2rem] md:left-[2rem] left-[1rem] grid lg:grid-cols-4 md:grid-cols-2 gap-3 justify-center  lg:items-center'>
          <div className='flex items-center gap-4 p-7' >
            <MdAddIcCall
            className='text-white text-4xl'
            />
            <div className='flex flex-col'>
              <span className='text-lg text-white font-serif font-semibold capitalize'>Call Us</span>
              <span className='text-base text-gray-300'>+234 8173724625</span>
            </div>
          </div>
          <div className='flex items-center gap-4 p-5' >
            <AiOutlineMail
            className='text-white text-4xl'
            />
            <div className='flex flex-col'>
              <span className='text-lg text-white font-serif font-semibold capitalize'>Email Us</span>
              <span className='text-base text-gray-300'>okafor_nicholas@yahoo.com</span>
            </div>
          </div>
          <div className='flex items-center gap-4 p-5' >
            <IoLocationOutline 
            className='text-white text-4xl'
            />
            <div className='flex flex-col'>
              <span className='text-lg text-white font-serif font-semibold capitalize'>Location</span>
              <span className='text-base text-gray-300'>Nepa Road,</span>
            </div>
          </div>
          <div className='flex items-center gap-4 p-5' >
            <TbHours24 
            className='text-white text-4xl'
            />
            <div className='flex flex-col'>
              <span className='text-lg text-white font-serif font-semibold capitalize'>work Hour</span>
              <span className='text-base text-gray-300'>9:00 am - 10:00pm</span>
            </div>
          </div>
        </div>

        <div className='grid lg:grid-cols-4 md:grid-cols-2  lg:pt-24 lg:px-52 px-4 pt-56 gap-9 md:pl-8'>
          <div className=' flex flex-col gap-4'>
            <div className='flex'>
            <Image
              src={'/'}
              alt='logo'
              width={500}
              height={500}
              className='w-1 rounded-lg'
            />
              <h1 className='font-bold font-serif uppercase text-2xl text-cyan-700'>quickCent</h1>
            </div>
            <span>Lorem ipsum  Repellendus eaque necessitatibus blanditiis. Fugiat, deleniti. Sunt rem incidunt dolor perferendis omnis? Odit, reprehenderit ipsam. Quam, tempore nostrum molaspernatur odit nisi excepturi vitae eum magni voluptatum a.</span>
            <div className='flex  gap-3 '>
              <div className=" p-2 bg-cyan-700 hover:bg-white hover:text-cyan-700 text-white">
                <FaFacebook
                className='text-2xl '
                />
              </div>
              <div className=" p-2 bg-cyan-700 hover:bg-white hover:text-cyan-700 text-white">
                <FaInstagram 
                className='text-2xl'
                />
              </div>
              <div className=" p-2 bg-cyan-700 hover:bg-white hover:text-cyan-700 text-white">
                <FaSquareXTwitter 
                className='text-2xl'
                />
              </div>
              <div className=" p-2 bg-cyan-700 hover:bg-white hover:text-cyan-700 text-white">
                <FaSquareWhatsapp 
                className='text-2xl'
                />
              </div>


            </div>
          </div>

          <div className=' flex flex-col gap-6 md:pl-8 lg:px-6'>
            <h1 className='text-2xl font-serif font-semibold uppercase text-gray-700'>Quick Links</h1>
            <div className='text-gray-700 font-serif font-base text-base flex flex-col gap-3'>
              <Link href={'/'}>Home</Link>
              <Link href={'/about'}>About</Link>
              <Link href={'/plans'}>Plans</Link>
              <Link href={'/pages'}>Pages</Link>
              <Link href={'/contact'}>Contact Us</Link>
            </div>
          </div>

          <div className=' flex flex-col gap-4 lg:px-6'>
            <h1 className='text-2xl font-serif font-semibold uppercase text-gray-700'>Useful Links</h1>
            <div className='text-gray-700 font-serif font-base text-base flex flex-col gap-3'>
              <Link href={'/privacy'}>Privacy Policy</Link>
              <Link href={'/terms'}>Terms and Conditions</Link>
              <Link href={'/disclaimer'}>Disclaimer</Link>
              <Link href={'/contact'}>Support</Link>
              <Link href={'/faq'}>FAQ</Link>
            </div>
          </div>


          <div className=' flex flex-col gap-4 md:pl-8 lg:px-6'>
            <h1 className='text-2xl font-serif font-semibold uppercase text-gray-700'>Useful Links</h1>
            <div className='text-gray-700 font-serif font-base text-base flex flex-col gap-1'>
              <span>Lorem ipsum nostrum molaspernatur odit nisi excepturi vitae eum magni voluptatum a.</span>
            </div>
            <div className="flex max-lg:flex-col gap-2 w-fit lg:bg-white group">
              <input type="text" placeholder='Your Email Address' className="outline-none p-2"/>
              <button className="hover:bg-transparent p-2 bg-cyan-700 flex justify-center "><BsFillSendPlusFill className="text-xl text-white group-hover:text-cyan-700 "/></button>

            </div>
              
          </div>

          
          

        </div>

        <div className="py-10 text-center max-lg:px-8 max-lg:flex flex-col justify-between text-sm text-gray-500 capitalize">
          

          <p>finance & investment wordPress theme by jegtheme</p>
          <span className="max-lg:flex flex-col gap-1 items-center">copyright 
          <MdOutlineCopyright />
            investmoon 2015. All right reserved
          </span>
        </div>

      </section>
      
    </main>
  )
}

export default Footer
