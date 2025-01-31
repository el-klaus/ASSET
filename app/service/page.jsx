import React from 'react'
import Link from 'next/link';
import ProfileGrid from '../components/ProfileGrid';


const page = () => {
  return (
    <main>
      <ProfileGrid/>
      <section className='px-4 py-14 pb-56'>
          <div>
            <div className='flex flex-col gap-5 lg:pb-2  text-center lg:px-72'>
              <p className='font-serif text-xl font-semibold text-cyan-700 capitalize'>price</p>
              <h1 className='font-bold text-4xl font-serif capitalize '>affordable investment plan</h1>
              <p className='text-lg'>Engage with our robust platform that leverages both expertly trained bots, adept at strategic
              trading decisions for optimal buying and selling, and seasoned professionals within our company. Invest with
              confidence as we skillfully manage your funds, generating profits directly into your wallet.</p>
            </div>
          <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-10 py-10 lg:px-12'>
            <div  className='border  hover:bg-slate-100 duration-100 rounded-lg shadow-lg flex flex-col text-center px-6 py-11 gap-5'>
              <h2 className='text-2xl capitalize font-serif font-semibold'> starter</h2>
              <p>Total 273% Roi</p>
              <h1 className='text-2xl font-bold'>1.5%</h1>
              <span className='capitalize '>every day for 182 days</span>
              <span className='border-b-2 text-cyan-700 font-serif text-5xl'>$200 <span className='text-xl '>minimum</span></span>
              <div className='flex items-center '>
                  <div className='grid grid-cols-2 gap-10 '>
                  <p className='capitalize '>Investment </p>
                  <p className='capitalize '>$ 100.00 - $ 999.00 </p>
                  </div>
              </div>
              <div className='flex gap-2 items-center'>
                 
                  <div className='grid grid-cols-2 gap-10 '>
                  <p className='capitalize '>maximum Earning </p>
                  <p className='capitalize '>2727.27 USD</p>
                  </div>
              </div>
              <div className='flex gap-2 items-center'>
                  <div className='flex gap-10 '>
                  <p className='capitalize '>total return </p>
                  <p className='capitalize text-sm'>capital + 273%</p>
                  </div>
              </div>
              <p>compound interest available</p>
              <p>hold capital and reinvest</p>
              <Link href={'/transaction'} className='capitalize hover:opacity-55 bg-cyan-700 text-white  p-2'>invest now </Link>
            </div>
           
            <div  className='border  hover:bg-slate-100 duration-100 rounded-lg shadow-lg flex flex-col text-center px-6 py-11 gap-5'>
              <h2 className='text-2xl capitalize font-serif font-semibold'> premium</h2>
              <p >Total 367.64% Roi</p>
              <h1 className='text-2xl font-bold'>2.02%</h1>
              <span className='capitalize '>every day for 182 days</span>
              <span className='border-b-2 text-cyan-700 font-serif text-5xl'>$1000 <span className='text-xl '>minimum</span></span>
              <div className='flex gap-2 items-center'>
                
                  <div className='flex gap-10 '>
                  <p className='capitalize '>Investment </p>
                  <p className='capitalize text-sm'>$ 1000.00 - $ 4,999.00 </p>
                  </div>
              </div>
              <div className='flex gap-2 items-center'>                 
                 <div className='flex gap-10 '>
                  <p className='capitalize '>maximum Earning </p>
                  <p className='capitalize text-sm'>18378.3236 USD</p>
                  </div>
              </div>
              <div className='flex gap-2 items-center'>
                  <div className='flex gap-10 '>
                  <p className='capitalize '>total return </p>
                  <p className='capitalize text-sm'>capital + 273%</p>
                  </div>
              </div>
              <p>compound interest available</p>
              <p>hold capital and reinvest</p>
              <Link href={'/transaction'} className='capitalize hover:opacity-55 bg-cyan-700 text-white  p-2'>invest now </Link>
            </div>

            <div  className='border  hover:bg-slate-100 duration-100 rounded-lg shadow-lg flex flex-col text-center px-6 py-11 gap-5'>
              <h2 className='text-2xl capitalize font-serif font-semibold'>professional</h2>
              <p>Total 450% Roi</p>
              <h1 className='text-2xl font-bold'>2.50%</h1>
              <span className='capitalize '>every day for 182 days</span>
              <span className='border-b-2 text-cyan-700 font-serif text-3xl'>$5000 <span className='text-xl '>minimum</span></span>
              <div className='flex gap-2 items-center'>
                  <div className='flex gap-10 '>
                  <p className='capitalize '>Investment </p>
                  <p className='capitalize text-sm'>$ 5000.00 - $ 14,999.00 </p>
                  </div>
              </div>
              <div className='flex gap-2 items-center'>
                  <div className='flex gap-10 '>
                  <p className='capitalize '>maximum Earning </p>
                  <p className='capitalize text-sm'>67495.5 USD</p>
                  </div>
              </div>
              <div className='flex gap-2 items-center'>
                  <div className='flex gap-10 '>
                  <p className='capitalize '>total return </p>
                  <p className='capitalize text-sm'>capital + 450%</p>
                  </div>
              </div>
              <p>compound interest available</p>
              <p>hold capital and reinvest</p>
              <Link href={'/transaction'} className='capitalize hover:opacity-55 bg-cyan-700 text-white  p-2'>invest now </Link>
            </div>

            <div  className='border  hover:bg-slate-100 duration-100 rounded-lg shadow-lg flex flex-col text-center px-6 py-11 gap-5'>
              <h2 className='text-2xl capitalize font-serif font-semibold'>expert</h2>
              <p>Total 540% Roi</p>
              <h1 className='text-2xl font-bold'>3.00%</h1>
              <span className='capitalize '>every day for 180 days</span>
              <span className='border-b-2 text-cyan-700 font-serif text-3xl'>$15,000 <span className='text-xl '>minimum</span></span>
              <div className='flex gap-2 items-center'>
                  <div className='flex gap-10 '>
                  <p className='capitalize '>Investment </p>
                  <p className='capitalize text-sm'>$ 15,000.00 - $ 49,999.00 </p>
                  </div>
              </div>
              <div className='flex gap-2 items-center'>
                  <div className='flex gap-10 '>
                  <p className='capitalize '>maximum Earning </p>
                  <p className='capitalize text-sm'>269994.6 USD</p>
                  </div>
              </div>
              <div className='flex gap-2 items-center'>
                  <div className='flex gap-10 '>
                  <p className='capitalize '>total return </p>
                  <p className='capitalize text-sm'>capital + 540%</p>
                  </div>
              </div>
              <p>compound interest available</p>
              <p>hold capital and reinvest</p>
              <Link href={'/transaction'} className='capitalize hover:opacity-55 bg-cyan-700 text-white  p-2'>invest now </Link>
            </div>

            <div  className='border  hover:bg-slate-100 duration-100 rounded-lg shadow-lg flex flex-col text-center px-6 py-11 gap-5'>
              <h2 className='text-2xl capitalize font-serif font-semibold'>gold</h2>
              <p>Total 637% Roi</p>
              <h1 className='text-2xl font-bold'>3.50%</h1>
              <span className='capitalize '>every day for 182 days</span>
              <span className='border-b-2 text-cyan-700 font-serif text-3xl'>$50,000 <span className='text-xl '>minimum</span></span>
              <div className='flex gap-2 items-center'>
                  <div className='flex gap-10 '>
                  <p className='capitalize '>Investment </p>
                  <p className='capitalize text-sm'>$ 50,000.00 - $ 199,999.00 </p>
                  </div>
              </div>
              <div className='flex gap-2 items-center'>
                  <div className='flex gap-10 '>
                  <p className='capitalize '>maximum Earning </p>
                  <p className='capitalize text-sm'>1273993.63 USD</p>
                  </div>
              </div>
              <div className='flex gap-2 items-center'>
                  <div className='flex gap-10 '>
                  <p className='capitalize '>total return </p>
                  <p className='capitalize text-sm'>capital + 637%</p>
                  </div>
              </div>
              <p>compound interest available</p>
              <p>hold capital and reinvest</p>
              <Link href={'/transaction'} className='capitalize hover:opacity-55 bg-cyan-700 text-white  p-2'>invest now </Link>
            </div>
           
            <div  className='border  hover:bg-slate-100 duration-100 rounded-lg shadow-lg flex flex-col text-center px-6 py-11 gap-5'>
             <h2 className='text-2xl capitalize font-serif font-semibold'>ultimate</h2>
              <p>Total 819% Roi</p>
              <h1 className='text-2xl font-bold'>4.50%</h1>
              <span className='capitalize '>every day for 182 days</span>
              <span className='border-b-2 text-cyan-700 font-serif text-3xl'>$200,000 <span className='text-xl '>minimum</span></span>
              <div className='flex gap-2 items-center'>
                  <div className='flex gap-10 '>
                  <p className='capitalize '>Investment </p>
                  <p className='capitalize text-sm'>$ 200,000.00 - $ 1,000,000.00 </p>
                  </div>
              </div>
              <div className='flex gap-2 items-center'>
                  <div className='flex gap-10 '>
                  <p className='capitalize '>maximum Earning </p>
                  <p className='capitalize text-sm'>819000 USD</p>
                  </div>
              </div>
              <div className='flex gap-2 items-center'>
                  <div className='flex gap-10 '>
                  <p className='capitalize '>total return </p>
                  <p className='capitalize text-sm'>capital + 819%</p>
                  </div>
              </div>
              <p>compound interest available</p>
              <p>hold capital and reinvest</p>
              <Link href={'/transaction'} className='capitalize hover:opacity-55 bg-cyan-700 text-white  p-2'>invest now </Link>
            </div>

            <div  className='border  hover:bg-slate-100 duration-100 rounded-lg shadow-lg flex flex-col text-center px-6 py-11 gap-5'>
              <h2 className='text-2xl capitalize font-serif font-semibold'>Pension</h2>
              <p>Total 540% Roi</p>
              <h1 className='text-2xl font-bold'>3.00%</h1>
              <span className='capitalize '>every day for 180 days</span>
              <span className='border-b-2 text-cyan-700 font-serif text-3xl'>$15,000 <span className='text-xl '>minimum</span></span>
              <div className='flex gap-2 items-center'>
                  <div className='flex gap-10 '>
                  <p className='capitalize '>Investment </p>
                  <p className='capitalize text-sm'>$ 15,000.00 - $ 49,999.00 </p>
                  </div>
              </div>
              <div className='flex gap-2 items-center'>
                  <div className='flex gap-10 '>
                  <p className='capitalize '>maximum Earning </p>
                  <p className='capitalize text-sm'>269994.6 USD</p>
                  </div>
              </div>
              <div className='flex gap-2 items-center'>
                  <div className='flex gap-10 '>
                  <p className='capitalize '>total return </p>
                  <p className='capitalize text-sm'>capital + 540%</p>
                  </div>
              </div>
              <p>compound interest available</p>
              <p>hold capital and reinvest</p>
              <Link href={'/transaction'} className='capitalize hover:opacity-55 bg-cyan-700 text-white  p-2'>invest now </Link>
            </div>

            <div  className='border  hover:bg-slate-100 duration-100 rounded-lg shadow-lg flex flex-col text-center px-6 py-11 gap-5'>
              <h2 className='text-2xl capitalize font-serif font-semibold'>Real Estate</h2>
              <p>Total 637% Roi</p>
              <h1 className='text-2xl font-bold'>3.50%</h1>
              <span className='capitalize '>every day for 182 days</span>
              <span className='border-b-2 text-cyan-700 font-serif text-3xl'>$50,000 <span className='text-xl '>minimum</span></span>
              <div className='flex gap-2 items-center'>
                  <div className='flex gap-10 '>
                  <p className='capitalize '>Investment </p>
                  <p className='capitalize text-sm'>$ 50,000.00 - $ 199,999.00 </p>
                  </div>
              </div>
              <div className='flex gap-2 items-center'>
                  <div className='flex gap-10 '>
                  <p className='capitalize '>maximum Earning </p>
                  <p className='capitalize text-sm'>1273993.63 USD</p>
                  </div>
              </div>
              <div className='flex gap-2 items-center'>
                  <div className='flex gap-10 '>
                  <p className='capitalize '>total return </p>
                  <p className='capitalize text-sm'>capital + 637%</p>
                  </div>
              </div>
              <p>compound interest available</p>
              <p>hold capital and reinvest</p>
              <Link href={'/transaction'} className='capitalize hover:opacity-55 bg-cyan-700 text-white  p-2'>invest now </Link>
            </div>
           
            <div  className='border  hover:bg-slate-100 duration-100 rounded-lg shadow-lg flex flex-col text-center px-6 py-11 gap-5'>
             <h2 className='text-2xl capitalize font-serif font-semibold'>Mortgage</h2>
              <p>Total 819% Roi</p>
              <h1 className='text-2xl font-bold'>4.50%</h1>
              <span className='capitalize '>every day for 182 days</span>
              <span className='border-b-2 text-cyan-700 font-serif text-3xl'>$200,000 <span className='text-xl '>minimum</span></span>
              <div className='flex gap-2 items-center'>
                  <div className='flex gap-10 '>
                  <p className='capitalize '>Investment </p>
                  <p className='capitalize text-sm'>$ 200,000.00 - $ 1,000,000.00 </p>
                  </div>
              </div>
              <div className='flex gap-2 items-center'>
                  <div className='flex gap-10 '>
                  <p className='capitalize '>maximum Earning </p>
                  <p className='capitalize text-sm'>819000 USD</p>
                  </div>
              </div>
              <div className='flex gap-2 items-center'>
                  <div className='flex gap-10 '>
                  <p className='capitalize '>total return </p>
                  <p className='capitalize text-sm'>capital + 819%</p>
                  </div>
              </div>
              <p>compound interest available</p>
              <p>hold capital and reinvest</p>
              <Link href={'/transaction'} className='capitalize hover:opacity-55 bg-cyan-700 text-white  p-2'>invest now </Link>
            </div>


          

          </div>
        </div>
      </section>
      
    </main>
  )
}

export default page
