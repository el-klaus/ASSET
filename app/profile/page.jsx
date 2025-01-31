"use server";
import { auth, } from '@/auth';
import { redirect } from 'next/navigation';
import React from 'react';
import ProfileGrid from '../components/ProfileGrid';

const page = async () => {
    const session = await auth();

    if (!session) {
        redirect("/auth/signin")
    }
    return (
        <main className='min-h-screen'>
            <ProfileGrid/>
            
        </main>
    )
}

export default page