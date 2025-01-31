import React from 'react'
import { auth, } from '@/auth';
import { redirect } from 'next/navigation';

const ProfileGrid = async() => {
     const session = await auth();
    
        if (!session) {
            redirect("/auth/signin")
        }
  return (
    <main>
        <div className='shadow-lg rounded-lg  p-2 m-2 flex flex-col justify-between'>
                <h1 className='font-semibold lg:text-xl md:text-lg text-end text-cyan-700'>
                    Hello! {session?.user?.name}
                </h1>
                
                <p className='text-xs md:text-sm  text-end text-gray-800'>
                     {session?.user?.email}
                </p>
            </div>      
    </main>
  )
}

export default ProfileGrid
