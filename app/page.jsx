import Image from 'next/image';
import React from 'react'
import { SiBitcoin } from "react-icons/si";
import { FaCircleCheck } from "react-icons/fa6";
import Link from 'next/link';
import { FaPlayCircle } from "react-icons/fa";
import { HiOutlineCash } from "react-icons/hi";
import { BsActivity } from "react-icons/bs"
import { RiUser2Fill } from "react-icons/ri";



const page = () => {
  

  return (
    <main className=' m-h-dvh'>
      <section className="bg-[url('/pexelspixabay.jpg')] bg-cover py-40 ">
        <div className='flex flex-col  gap-10 px-4 md:p-20 lg:p-48 '>
          <p className='text-white font-serif font-semibold text-xl'> Increase Your Assets</p>
          <h1 className='md:text-6xl text-5xl text-cyan-600 font-serif font-black'>Investment for a Thriving Future and More</h1>
          <span className='text-white text-lg font-extralight'>Investing in a thriving future goes beyond financial growth; it 
            includes sustainable practices, innovative technologies, and community well-being. By focusing on renewable energy, 
            education, and healthcare, we can create a resilient economy that benefits everyone.</span>
          <Link href={'/auth/signin'} className='bg-cyan-700 text-white p-3 uppercase w-fit '>get started</Link>
        </div>
      </section>
      <section className='lg:pb-14 pb-24  '>
        <div className='grid lg:grid-cols-3 lg:px-14 px-4 py-24 gap-5 '>
          <div className='flex flex-col items-center  gap-3'>
            <HiOutlineCash className='text-5xl' />
            <h2 className='text-2xl font-serif font-semibold'>Wealth Management</h2>
            <span className='text-lg'>Wealth management is an all-encompassing service dedicated to overseeing an individual’s
              or family’s financial assets with the aim of growing and safeguarding wealth over time. This includes a variety of 
              financial services and solutions, such as investment management, financial planning, tax services, estate planning, and
              retirement planning. Wealth managers collaborate closely with clients to grasp their specific financial aspirations, risk
              tolerance, and time frame, devising tailored strategies to meet their goals. By adopting a holistic approach, wealth 
              management seeks to provide clients with peace of mind and financial security, enabling them to enjoy life and pursue their
              passions.</span>
          </div>
          
          <div className='flex flex-col items-center  gap-3'>
            <SiBitcoin className='text-5xl' />
            <h2 className='text-2xl font-serif font-semibold'>Invest Management</h2>
            <span className='text-lg'>Investment management encompasses the professional handling of securities and assets to achieve 
              defined investor objectives. This process involves evaluating and choosing a range of investment options to create a 
              diversified portfolio. Achieving success in this field necessitates a grasp of market trends, economic indicators, and 
              financial principles, as well as effective risk assessment and ongoing portfolio monitoring. Strategies such as asset 
              allocation, diversification, and rebalancing are employed to enhance returns and reduce risk, ultimately aiding clients 
              in reaching their financial goals.</span>
          </div>

          <div className='flex flex-col items-center  gap-3'>
            <BsActivity className='text-5xl' />
            <h2 className='text-2xl font-serif font-semibold'> Sales & Trading</h2>
            <span className='text-lg'>Sales and trading is a dynamic finance sector focused on buying and selling financial instruments 
              like stocks, bonds, currencies, and commodities. <br />
              Key points include: <br /> <br />
              Sales teams build client relationships, understand needs, and provide customized products, linking clients to market insights. <br /> <br />
              Traders execute buy and sell orders using advanced algorithms and strategies, staying informed on market conditions and economic indicators. <br /><br />
              Success requires strong analytical skills, effective communication, and quick decision-making under pressure, offering exciting challenges and opportunities in a competitive landscape.</span>
          </div>
        </div>

        <div className='grid lg:grid-cols-2 grid-cols-1 lg:py-16 px-5 lg:px-14 gap-10 '>
          <div className='flex flex-col justify-center relative'>
              <Image
              src={'/pexelsroshnichenk.jpg'}
              alt='logo'
              width={500}
              height={500}
              className='w-full'
              />  
              <div className='border py-6 p-3 bg-slate-300'>
                <h2 className='text-2xl font-serif font-bold text-cyan-700'>James P. Morrison</h2>
                <p className='text-lg font-medium'>Chairman and CEO</p>
              </div>
              <FaPlayCircle
               className='absolute border p-1 lg:p-2 bg-white rounded-full right-[-1rem] text-cyan-700 lg:text-8xl text-7xl' />
          </div>

          <div className='space-y-10 lg:pl-14 pt-8'>
            <p className='font-serif text-lg text-cyan-700'>Welcome to ASSET ALLIANCE</p>
            <h1 className='font-bold text-2xl font-serif capitalize pb-3 '>We Aim To Be The Best Invest Manager In The World</h1>
            <span className='text-lg'>Our mission is driven by a commitment to excellence, innovation, and integrity. We believe in fostering 
              strong relationships with our clients by understanding their unique needs and providing tailored investment solutions that align 
              with their goals. Through continuous learning and adaptation to market changes, we strive to deliver superior performance and 
              create lasting value. Our team of seasoned professionals is dedicated to guiding our clients on their financial journeys with 
              transparency and trust, ensuring peace of mind at every step. Together, we aim to build a brighter financial future for all.</span>
           
            <div className='grid  md:grid-cols-2 gap-2 pb-8'>
              <div className='flex gap-2 items-center'>
                  <FaCircleCheck className='text-cyan-700' />
                  <p className='capitalize text-lg'>professional team</p>
              </div>
              <div className='flex gap-2 items-center'>
                  <FaCircleCheck className='text-cyan-700' />
                  <p className='capitalize text-lg'>Have been certified</p>
              </div>
              <div className='flex gap-2 items-center'>
                  <FaCircleCheck className='text-cyan-700' />
                  <p className='capitalize text-lg'>trustworthy</p>
              </div>
              <div className='flex gap-2 items-center'>
                  <FaCircleCheck className='text-cyan-700' />
                  <p className='capitalize text-lg'>high integrity</p>
              </div>
              <div className='flex gap-2 items-center'>
                  <FaCircleCheck className='text-cyan-700' />
                  <p className='capitalize text-lg'>provide the best service</p>
              </div>
              <div className='flex gap-2 items-center'>
                  <FaCircleCheck className='text-cyan-700' />
                  <p className='capitalize text-lg'>global reach of business</p>
              </div>
              <div className='flex gap-2 items-center'>
                  <FaCircleCheck className='text-cyan-700' />
                  <p className='capitalize text-lg'>quality of our research</p>
              </div>
              <div className='flex gap-2 items-center'>
                  <FaCircleCheck className='text-cyan-700' />
                  <p className='capitalize text-lg'>breadth of our capabilities</p>
              </div>

            </div>
            <Link className='border bg-cyan-700 text-white font-serif font-semibold p-3' href={'/about'}>About us </Link>
          </div>
        </div>

      </section>
      <section className='bg-slate-200 lg:px-28 py-28 px-4 '>
      <div className='space-y-8'>
        <h1 className='capitalize font-serif text-center text-4xl'> trusted over +1200 clients in the World </h1>
        <div className='grid grid-cols-3 md:grid-cols-5 gap-8'>
        <Image
          src={'/construct-Logo.webp'}
          alt='logo'
          width={2000}
          height={2000}
          className=''
          /> 
           <Image
          src={'/morex-logo.webp'}
          alt='logo'
          width={2000}
          height={2000}
          className=''
          /> 
          <Image
          src={'/garreth-Logo.webp'}
          alt='logo'
          width={2000}
          height={2000}
          className=''
          /> 
         
          <Image
          src={'/square-mediafirst-Logo.webp'}
          alt='logo'
          width={2000}
          height={2000}
          className=''
          /> 
          <Image
          src={'/marine-Logo.webp'}
          alt='logo'
          width={2000}
          height={2000}
          className=''
          /> 
        </div>
      </div>

      </section>
      <section className='md:pb-32 py-16 lg:px-14 px-4 '>
          <div className='grid lg:grid-cols-2 grid-cols-1  gap-6'>
            <div className='flex flex-col gap-5 lg:pb-2 '>
              <p className='font-serif text-lg text-cyan-700'>Our Expertise</p>
              <h1 className='font-bold text-2xl font-serif capitalize '>why invest with ASSET ALLIANCE?</h1>
              <span className='text-lg'> Investing with Asset Alliance can offer several advantages that make it an 
                attractive choice for investors. Firstly, Asset Alliance has a strong reputation for providing personalized 
                investment strategies tailored to meet the unique needs and goals of each client. Their team of experienced 
                financial advisors works closely with investors to ensure that their portfolios are diversified and aligned 
                with their risk tolerance and long-term objectives. <br /><br />
                Additionally, Asset Alliance is known for its commitment to transparency and integrity. They prioritize 
                clear communication and provide regular updates on investment performance, ensuring that clients are always 
                informed and confident in their investment decisions. <br /> <br />
                Furthermore, Asset Alliance leverages cutting-edge technology and market research to identify promising 
                investment opportunities and manage risk effectively. This proactive approach helps maximize returns while 
                safeguarding clients' assets in various market conditions. <br /> <br />
                Lastly, the firm's comprehensive range of services, including wealth management, retirement planning, and 
                tax optimization, allows clients to benefit from a holistic approach to financial success. By choosing 
                Asset Alliance, investors gain a trusted partner dedicated to helping them achieve their financial 
                aspirations.</span>
            </div>

            <div className=' lg:pl-96'>
            <Link href={'/contact'} className='hover:opacity-55 bg-cyan-700 text-white font-serif font-semibold p-3'>Contact Us </Link>
            </div>
          </div>

          <div className='flex max-lg:flex-col  pt-6 gap-7'>
           <div className='grid md:grid-cols-2 gap-7 '>

              <div className='lg:pt-24'>
                    <Image
                      src={'/pexelsrdne.jpg'}
                      alt='trusted investor'
                      width={1000}
                      height={2000}
                      className='h-80 w-full'
                    />  
                  <div className='bg-cyan-800 p-5 '>
                    <h2 className='text-xl capitalize font-semibold  text-white font-serif'>Trusted by Investor</h2>
                    <span className='text-lg  text-white'>For startups and entrepreneurs, this forward-thinking company has earned a 
                      reputation for achieving outstanding results and nurturing solid relationships. With a strong dedication to 
                      transparency and excellence, they have emerged as a trusted leader in the industry.</span> <br /> <br />
                    <Link href={'/about'} className='text-gray-800 hover:text-black'>Learn More </Link>
                  </div>

                </div>

                <div className='lg:pt-14'>
                    <Image
                      src={'/pexelnvoitkevich.jpg'}
                      alt='logo'
                      width={1000}
                      height={1000}
                      className='h-80 w-full'
                    />  
                  <div className='bg-cyan-800 p-5'>
                    <h2 className='text-xl capitalize  text-white font-semibold font-serif'>Invest with confidence</h2>
                    <span className='text-lg  text-white'> By exploring a diverse range of opportunities that align with your financial goals. 
                      Whether you're new to investing or a seasoned expert, it's important to stay informed about market trends and seek advice 
                      when needed. Consider diversifying your portfolio to spread risk and maximize potential returns. Remember, patience and a 
                      well-thought-out strategy are key to navigating the ever-changing financial landscape. With careful planning and informed 
                      decisions, you can build a secure future and achieve your investment objectives.</span> <br />
                    <Link href={'/about'} className='text-gray-800 hover:text-black'>Learn More </Link>
                  </div>
                    
                </div>
            </div> 
            
            <div>
                <Image
                  src={'/istockphot.webp'}
                  alt='logo'
                  width={1000}
                  height={1000}
                  className='h-80 w-full'
                />  
              <div className='bg-cyan-800 p-5'>
                <h2 className='text-xl capitalize  text-white font-semibold font-serif'>secure platform</h2>
                <span className='text-lg  text-white'>In today’s digital age, protecting user data is vital. Utilizing advanced encryption, 
                  strong security protocols, two-factor authentication, and regular audits helps safeguard sensitive information from threats. 
                  A secure platform fosters user trust, enabling focus on tasks without concerns about data safety.</span> <br /> <br />
                <Link href={'/about'} className=' text-gray-800 hover:text-black'>Learn More </Link>
              </div>
                
            </div>
          </div>

          <div className='grid lg:grid-cols-2 gap-10 py-24'>
            <div className='space-y-7  '>
              <div>
                <h2 className='border bg-cyan-700 font-serif font-semibold p-3 text-white text-xl '>First-class investment solutions</h2>
                <p className='text-lg p-4'>Customized financial strategies are vital in today's market. Our expert team provides personalized plans to 
                  maximize returns and manage risks while using advanced technology and market analysis. Whether planning for retirement, education 
                  savings, or wealth growth, our comprehensive approach offers the expertise needed for financial success..</p>
              </div>
              <div>
                <h2 className='border bg-cyan-700 font-serif font-semibold p-3 text-white text-xl'>Building the idea of the future</h2>
                <p className='text-lg p-4'>Investing in sustainable technologies and renewable energy is essential for promoting a healthier planet. By fostering 
                  collaboration among governments, businesses, and communities, we can drive innovation and build a resilient future for generations ahead.</p>
              </div>
              <div>
                <h2 className='border bg-cyan-700 font-serif font-semibold p-3 text-white text-xl'>Investment-plan consulting</h2>
                <p className='text-lg p-4'>Financial consulting offers valuable insights for individuals and businesses to optimize strategies. Expert advisors 
                  help with market trends, risk management, and asset allocation, focusing on wealth growth and capital preservation. A tailored investment plan 
                  empowers clients to navigate financial complexities and achieve their goals effectively.</p>
              </div>
            </div>
            <div className='flex flex-col items-center  lg:text-right gap-8'>
              <div className='flex flex-col gap-5 lg:pb-2 '>
                <p className='font-serif text-lg  text-cyan-700 capitalize'>how we work</p>
                <h1 className='font-bold text-4xl font-serif capitalize '>leading the best invest Management team</h1>
                <p className='text-lg'> in the industry, we were committed to delivering exceptional results for our clients. Our team, composed of seasoned 
                  professionals with a wealth of experience and expertise, thrived on innovation and strategic thinking. We believed in building strong, 
                  lasting relationships with our clients, understanding their unique needs, and tailoring solutions to help them achieve their financial 
                  goals. With a focus on transparency and integrity, we navigated the complex world of investments with confidence and precision, always 
                  striving to exceed expectations and deliver value at every opportunity.</p>
              </div>           
              <Link href={'/about'} className='border uppercase bg-cyan-700 text-white p-3 w-fit'>learn more </Link>
            </div>        
          </div>
      </section>
      <section className='py-14 px-4'>
        <div>
          <div className='flex flex-col gap-5 lg:pb-2  text-center lg:px-72'>
            <p className='font-serif text-xl font-semibold text-cyan-700 capitalize'>our team</p>
            <h1 className='font-bold text-4xl font-serif capitalize '>meet our expert team</h1>
            <p className='text-lg'>Each member brings a wealth of knowledge and a unique set of skills to the table, ensuring that our clients receive the 
              highest quality service and innovative solutions tailored to their needs. <br /><br />
              Our team is composed of industry leaders who are passionate about their work and committed to excellence. With backgrounds spanning a diverse 
              range of fields, from technology and engineering to creative design and strategic planning, they collaborate seamlessly to drive success and 
              inspire confidence. <br /><br /> 
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 pt-11'>
            <div className='relative group '>
              <Image
                  src={'/pexelsroshnichenk.jpg'}
                  alt='logo'
                  width={500}
                  height={500}
                  className='w-full'
                 />
                <div className='border py-6 p-3 bg-slate-300 absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-70  transition-all duration-300'>
                  <h2 className='text-2xl font-serif font-bold text-cyan-700'>James P. Morrison</h2>
                  <p className='text-lg font-medium'>Chairman and CEO</p>
                </div>
                 
            </div>

            <div className='relative group'>
              <Image
                  src={'/pexelsnvoitkevich.jpg'}
                  alt='logo'
                  width={500}
                  height={500}
                  className='w-full'
                 />
                 <div className='border py-6 p-3 bg-slate-300 absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-70  transition-all duration-300'>
                  <h2 className='text-2xl font-serif font-bold text-cyan-700'>James P. Morrison</h2>
                  <p className='text-lg font-medium'>Chairman and CEO</p>
                </div>
            </div>

            <div className='relative group'>
              <Image
                  src={'/pexe.jpg'}
                  alt='logo'
                  width={500}
                  height={500}
                  className='w-full'
                 />
                 <div className='border py-6 p-3 bg-slate-300 absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-70  transition-all duration-300'>
                  <h2 className='text-2xl font-serif font-bold text-cyan-700'>James P. Morrison</h2>
                  <p className='text-lg font-medium'>Chairman and CEO</p>
                </div>
            </div>


          </div>

        </div>
      </section>
      <section className='px-4 py-14'>
        <div>
          <div className='flex flex-col gap-5 lg:pb-2  text-center lg:px-60'>
            <p className='font-serif text-xl font-semibold text-cyan-700 capitalize'>price</p>
            <h1 className='font-bold text-4xl font-serif capitalize '>affordable investment plan</h1>
            <p className='text-lg pb-28'>Engage with our robust platform that leverages both expertly trained bots, adept at strategic
              trading decisions for optimal buying and selling, and seasoned professionals within our company. Invest with confidence as we skillfully manage your funds, generating profits directly into your wallet.</p>
          </div>
          <div className='flex max-lg:flex-col gap-9 px-4 lg:justify-between lg:px-32'>
            <div className='flex flex-col gap-5 items-center justify-center text-center lg:w-[30%]'>
              <div className='border-2 bg-black flex items-center justify-center shadow-md shadow-cyan-700 p-4 w-32 h-32 rounded-full'>
              <RiUser2Fill
              className='text-6xl text-cyan-700'
              />
              </div>
              <h2 className='text-xl capitalize font-medium'>Create Account</h2>             
            </div>
            <div className='flex flex-col gap-5 items-center justify-center text-center lg:w-[30%]'>
              <div className='border-2 bg-black flex items-center justify-center shadow-md shadow-cyan-700 p-4 w-32 h-32 rounded-full'>
              <RiUser2Fill
              className='text-6xl text-cyan-700'
              />
              </div>
              <h2 className='text-xl capitalize font-medium'>invest in our various plans, referral programs</h2>             
            </div>
            <div className='flex flex-col gap-5 items-center justify-center text-center lg:w-[30%]'>
              <div className='border-2 bg-black flex items-center justify-center shadow-md shadow-cyan-700 p-4 w-32 h-32 rounded-full'>
              <RiUser2Fill
              className='text-6xl text-cyan-700'
              />
              </div>
              <h2 className='text-xl capitalize font-medium'>get profit deposit/ withdraw into your crypto wallets </h2>             
            </div>
          </div>
         
        </div>
      </section>
      <section className='pt-20 pb-72 px-4 lg-px-40 bg-slate-200'>
        <div className='flex flex-col gap-7 items-center  '>
          <div className='flex flex-col gap-5 lg:pb-2  text-center '>
            <h1 className='font-bold text-4xl font-serif capitalize '>dont hesitate to invest now, we will give you the best!</h1>
          </div>
            <Link href={'/dashboard'} className='hover:opacity-55 bg-cyan-700 text-white font-serif font-semibold p-3 w-fit'>INVEST </Link>
         
        </div>
      </section>
    </main>
  )
}
export default page
