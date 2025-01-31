"use client"
import Image from 'next/image';
import React from 'react'
import { SiBitcoin } from "react-icons/si";
import { FaCircleCheck } from "react-icons/fa6";
import Link from 'next/link';
import { HiOutlineCash } from "react-icons/hi";
import { BsActivity } from "react-icons/bs"
import { RiUser2Fill } from "react-icons/ri";
import { motion } from "framer-motion";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const page = () => {
  const cardAnimation = {
      hidden: { opacity: 0, y: 50 },
      visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: i * 0.8, // Staggered delay
          duration: 0.6,
        },
      }),
    };
    const firstSection = {
      hidden: { opacity:0, x:-20 },
      visible: {opacity: 1, x: 0},
    };
    const containerVariants = {
      hidden: { opacity: 0, y: 50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          staggerChildren: 0.3,
          duration: 0.6,
        },
      },
    };
    const itemVariants = {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };
    const cards = [
      {
        icon: <HiOutlineCash className="text-5xl" />,
        title: "Wealth Management",
        description:
          "Wealth management is an all-encompassing service dedicated to overseeing an individual’s or family’s financial assets with the aim of growing and safeguarding wealth over time. This includes a variety of financial services and solutions, such as investment management, financial planning, tax services, estate planning, and retirement planning. Wealth managers collaborate closely with clients to grasp their specific financial aspirations, risk tolerance, and time frame, devising tailored strategies to meet their goals. By adopting a holistic approach, wealth management seeks to provide clients with peace of mind and financial security, enabling them to enjoy life and pursue their passions.",
      },
      {
        icon: <SiBitcoin className="text-5xl" />,
        title: "Invest Management",
        description:
          "Investment management encompasses the professional handling of securities and assets to achieve defined investor objectives. This process involves evaluating and choosing a range of investment options to create a diversified portfolio. Achieving success in this field necessitates a grasp of market trends, economic indicators, and financial principles, as well as effective risk assessment and ongoing portfolio monitoring. Strategies such as asset allocation, diversification, and rebalancing are employed to enhance returns and reduce risk, ultimately aiding clients in reaching their financial goals.",
      },
      {
        icon: <BsActivity className="text-5xl" />,
        title: "Sales & Trading",
        description: `Sales and trading is a dynamic finance sector focused on buying and selling financial instruments like stocks, bonds, currencies, and commodities. \n\n Key points include: \n\n Sales teams build client relationships, understand needs, and provide customized products, linking clients to market insights. \n\n Traders execute buy and sell orders using advanced algorithms and strategies, staying informed on market conditions and economic indicators. \n\n Success requires strong analytical skills, effective communication, and quick decision-making under pressure, offering exciting challenges and opportunities in a competitive landscape.`,
      },
    ];
  

  return (
    <main className=' m-h-dvh'>
      <section className="bg-[url('/pexelspixabay.jpg')] bg-cover pb-28 pt-20 ">
      <div className='h-[90vh] w-full bg-black/40'>
        <div className='flex flex-col  gap-10 px-4 md:p-20 lg:p-48 '>
          <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          variants={firstSection} 
          className='text-white font-serif font-semibold text-xl'> Increase Your Assets</motion.p>
          <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{duration: 0.6, delay: 0.2}}
          variants={firstSection} 
           className='md:text-6xl text-5xl text-cyan-600 font-serif font-black'>Investment for a Thriving Future and More</motion.h1>
          <motion.span 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{duration: 0.7, delay: 0.4}}
          variants={firstSection}
          className='text-white text-lg font-extralight'>Investing in a thriving future goes beyond financial growth; it 
            includes sustainable practices, innovative technologies, and community well-being. By focusing on renewable energy, 
            education, and healthcare, we can create a resilient economy that benefits everyone.</motion.span>
          
          <motion.div
           initial="hidden"
           whileInView="visible"
          viewport={{ once: true }}
           transition={{duration: 0.8, delay: 0.6}}
           variants={firstSection}
          >
          <Link href={'/auth/signin'} className='bg-cyan-700 text-white p-3 uppercase w-fit '>get started</Link>
          </motion.div>
        </div>
      </div>  
      </section>
      <section className='lg:pb-14 pb-24  '>
      <div className="grid lg:grid-cols-3 lg:px-14 px-4 py-24 gap-5">
      {cards.map((card, i) => (
        <motion.div
          key={i}
          className="flex flex-col items-center gap-6 px-4 py-4 rounded-md text-white bg-cyan-700"
          custom={i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardAnimation}
        >
          {card.icon}
          <h2 className="text-2xl font-serif font-semibold ">{card.title}</h2>
          <span className="text-lg text-justify ">{card.description}</span>
        </motion.div>
      ))}
    </div>

    <div className='grid lg:grid-cols-2 grid-cols-1 lg:py-16 px-5 lg:px-14 gap-10'>
      {/* Left Section */}
      <motion.div 
        className='flex flex-col justify-center relative'
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src={'/heavenn.jpg'}
          alt='logo'
          width={500}
          height={500}
          className='w-full'
        />
        <motion.div 
          className='border py-6 p-3 bg-slate-300'
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className='text-2xl font-serif font-bold text-cyan-700'>James P. Morrison</h2>
          <p className='text-lg font-medium'>Chairman and CEO</p>
        </motion.div>
      </motion.div>

      {/* Right Section */}
      <motion.div 
        className='space-y-10 lg:pl-14 pt-5'
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <p className='font-serif text-xl text-cyan-700'>Welcome to ASSET ALLIANCE</p>
        <h1 className='font-bold text-2xl font-serif capitalize pb-3'>We Aim To Be The Best Invest Manager In The World</h1>
        <span className='text-lg'>Our mission is driven by a commitment to excellence, innovation, and integrity. We believe in fostering 
          strong relationships with our clients by understanding their unique needs and providing tailored investment solutions that align 
          with their goals. Through continuous learning and adaptation to market changes, we strive to deliver superior performance and 
          create lasting value. Our team of seasoned professionals is dedicated to guiding our clients on their financial journeys with 
          transparency and trust, ensuring peace of mind at every step. Together, we aim to build a brighter financial future for all.</span>

        {/* Feature List */}
        <div className='grid md:grid-cols-2 gap-2 pb-8'>
          {[  
            'professional team', 
            'Have been certified', 
            'trustworthy', 
            'high integrity', 
            'provide the best service', 
            'global reach of business', 
            'quality of our research', 
            'breadth of our capabilities'
          ].map((item, index) => (
            <motion.div 
              className='flex gap-2 items-center' 
              key={index}
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <FaCircleCheck className='text-cyan-700' />
              <p className='capitalize text-lg'>{item}</p>
            </motion.div>
          ))}
        </div>

        <Link 
          className='border bg-cyan-700 text-white font-serif font-semibold p-3' 
          href={'/about'}
        >
          About us 
        </Link>
      </motion.div>
    </div>

      </section>
      <section className='bg-slate-200 lg:px-28 py-28 px-4 '>
      <div className='space-y-8'>
        <h1 className='capitalize font-serif text-center text-4xl'> trusted over +1200 clients in the World </h1>
        <div className="relative overflow-hidden">
      <div className=" gap-8 animate-marquee whitespace-nowrap">
        <div className="inline-block">
          <Image
            src={'/construct-Logo.webp'}
            alt="Construct Logo"
            width={2000}
            height={2000}
            className="w-full h-auto"
          />
        </div>
        <div className="inline-block">
          <Image
            src={'/morex-logo.webp'}
            alt="Morex Logo"
            width={2000}
            height={2000}
            className="w-full h-auto"
          />
        </div>
        <div className="inline-block">
          <Image
            src={'/garreth-Logo.webp'}
            alt="Garreth Logo"
            width={2000}
            height={2000}
            className="w-full h-auto"
          />
        </div>
        <div className="inline-block">
          <Image
            src={'/square-mediafirst-Logo.webp'}
            alt="Square Mediafirst Logo"
            width={2000}
            height={2000}
            className="w-full h-auto"
          />
        </div>
        <div className="inline-block">
          <Image
            src={'/marine-Logo.webp'}
            alt="Marine Logo"
            width={2000}
            height={2000}
            className="w-full h-auto"
          />
        </div>
        <div className="inline-block">
          <Image
            src={'/antarticaLogo.webp'}
            alt="antarticaLogo"
            width={2000}
            height={2000}
            className="w-full h-auto"
          />
        </div>
        <div className="inline-block">
          <Image
            src={'/executiveLogo.webp'}
            alt="executiveLogo"
            width={2000}
            height={2000}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
      </div>

      </section>
      <section className='md:pb-8 py-16 lg:px-14 px-4'>
      <motion.div 
        className='grid lg:grid-cols-2 grid-cols-1 gap-6'
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <div className='flex flex-col gap-5 lg:pb-2'>
          <p className='font-serif text-xl text-cyan-700'>Our Expertise</p>
          <h1 className='font-bold text-2xl font-serif capitalize'>why invest with ASSET ALLIANCE?</h1>
          <span className='text-lg lg:w-[145%]'> Investing with Asset Alliance can offer several advantages that make it an 
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

        <div className='flex lg:justify-end h-fit'>
          <Link href={'/contact'} className='hover:opacity-55 bg-cyan-700 text-white font-serif font-semibold p-3'>Contact Us </Link>
        </div>
      </motion.div>

      <motion.div 
        className='flex max-lg:flex-col pt-6 gap-7'
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <div className='grid md:grid-cols-2 gap-7'>
          <motion.div 
            className='lg:pt-24' 
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={'/pexelsrdne.jpg'}
              alt='trusted investor'
              width={1000}
              height={2000}
              className='h-80 w-full'
            />
            <div className='bg-cyan-800 p-5'>
              <h2 className='text-xl capitalize font-semibold text-white font-serif'>Trusted by Investor</h2>
              <span className='text-lg text-white'>For startups and entrepreneurs, this forward-thinking company has earned a 
                reputation for achieving outstanding results and nurturing solid relationships. With a strong dedication to 
                transparency and excellence, they have emerged as a trusted leader in the industry.</span> <br /> <br />
              <Link href={'/about'} className='text-gray-800 hover:text-black'>Learn More </Link>
            </div>
          </motion.div>

          <motion.div 
            className='lg:pt-14'
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src={'/pexelnvoitkevich.jpg'}
              alt='logo'
              width={1000}
              height={1000}
              className='h-80 w-full'
            />
            <div className='bg-cyan-800 p-5'>
              <h2 className='text-xl capitalize text-white font-semibold font-serif'>Invest with confidence</h2>
              <span className='text-lg text-white'> By exploring a diverse range of opportunities that align with your financial goals. 
                Whether you're new to investing or a seasoned expert, it's important to stay informed about market trends and seek advice 
                when needed. Consider diversifying your portfolio to spread risk and maximize potential returns. Remember, patience and a 
                well-thought-out strategy are key to navigating the ever-changing financial landscape. With careful planning and informed 
                decisions, you can build a secure future and achieve your investment objectives.</span> <br />
              <Link href={'/about'} className='text-gray-800 hover:text-black'>Learn More </Link>
            </div>
          </motion.div>
        </div>

        <motion.div 
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Image
            src={'/istockphot.webp'}
            alt='logo'
            width={1000}
            height={1000}
            className='h-80 w-full'
          />
          <div className='bg-cyan-800 p-5'>
            <h2 className='text-xl capitalize text-white font-semibold font-serif'>secure platform</h2>
            <span className='text-lg text-white'>In today’s digital age, protecting user data is vital. Utilizing advanced encryption, 
              strong security protocols, two-factor authentication, and regular audits helps safeguard sensitive information from threats. 
              A secure platform fosters user trust, enabling focus on tasks without concerns about data safety.</span> <br /> <br />
            <Link href={'/about'} className=' text-gray-800 hover:text-black'>Learn More </Link>
          </div>
        </motion.div>
      </motion.div>

      <motion.div 
        className='grid lg:grid-cols-2 gap-10 py-24'
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <div className='space-y-7'>
          {[ 
            {
              title: 'First-class investment solutions',
              content: 'Customized financial strategies are vital in today\'s market. Our expert team provides personalized plans to maximize returns and manage risks while using advanced technology and market analysis. Whether planning for retirement, education savings, or wealth growth, our comprehensive approach offers the expertise needed for financial success..'
            },
            {
              title: 'Building the idea of the future',
              content: 'Investing in sustainable technologies and renewable energy is essential for promoting a healthier planet. By fostering collaboration among governments, businesses, and communities, we can drive innovation and build a resilient future for generations ahead.'
            },
            {
              title: 'Investment-plan consulting',
              content: 'Financial consulting offers valuable insights for individuals and businesses to optimize strategies. Expert advisors help with market trends, risk management, and asset allocation, focusing on wealth growth and capital preservation. A tailored investment plan empowers clients to navigate financial complexities and achieve their goals effectively.'
            }
          ].map((item, index) => (
            <motion.div 
              key={index} 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h2 className='border bg-cyan-700 font-serif font-semibold p-3 text-white text-xl'>{item.title}</h2>
              <p className='text-lg p-4'>{item.content}</p>
            </motion.div>
          ))}
        </div>

        <div className='flex flex-col items-center lg:text-right gap-8'>
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <p className='font-serif text-xl text-cyan-700 capitalize'>how we work</p>
            <h1 className='font-bold text-4xl font-serif capitalize'>leading the best invest Management team</h1>
            <p className='text-lg'> in the industry, we were committed to delivering exceptional results for our clients. Our team, composed of seasoned 
              professionals with a wealth of experience and expertise, thrived on innovation and strategic thinking. We believed in building strong, 
              lasting relationships with our clients, understanding their unique needs, and tailoring solutions to help them achieve their financial 
              goals. With a focus on transparency and integrity, we navigated the complex world of investments with confidence and precision, always 
              striving to exceed expectations and deliver value at every opportunity.</p>
          </motion.div>
          <Link href={'/about'} className='border uppercase bg-cyan-700 text-white p-3 w-fit'>learn more </Link>
        </div>
      </motion.div>
    </section>  
    <section className='py-5 px-4'>
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className='flex flex-col gap-5 lg:pb-2 text-center lg:px-36'>
          <motion.p
            className='font-serif text-xl font-semibold text-cyan-700 capitalize'
            variants={itemVariants}
          >
            our team
          </motion.p>
          <motion.h1
            className='font-bold text-4xl font-serif capitalize'
            variants={itemVariants}
          >
            meet our expert team
          </motion.h1>
          <motion.p className='text-lg' variants={itemVariants}>
            Each member brings a wealth of knowledge and a unique set of skills to the table, ensuring that our clients receive the highest quality service
            and innovative solutions tailored to their needs. <br /> <br /> Our team is composed of industry leaders who are passionate about their work and
            committed to excellence. With backgrounds spanning a diverse range of fields, from technology and engineering to creative design and strategic
            planning, they collaborate seamlessly to drive success and inspire confidence. <br /> <br />
          </motion.p>
        </div>

        <motion.div
          className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 pt-11'
          variants={containerVariants}
        >
          {[
            {
              name: 'James P. Morrison',
              role: 'Chairman and CEO',
              image: '/pexelsroshnichenk.jpg',
            },
            {
              name: 'Helen Grey',
              role: 'Assistant',
              image: '/pexelsnvoitkevich.jpg',
            },
            {
              name: 'James Paul',
              role: 'Treader',
              image: '/pexe.jpg',
            },
          ].map((member, index) => (
            <motion.div key={index} className='relative group' variants={itemVariants}>
              <Image src={member.image} alt={member.name} width={500} height={500} className='w-full' />
              <div className='border py-6 p-3 bg-slate-300 absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-70 transition-all duration-300'>
                <h2 className='text-2xl font-serif font-bold text-cyan-700'>{member.name}</h2>
                <p className='text-lg font-medium'>{member.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
      <section className='px-4 py-14'>
        <div>
          <div className='flex flex-col gap-5 lg:pb-2  text-center lg:px-60'>
            <p className='font-serif text-xl font-semibold text-cyan-700 capitalize'>price</p>
            <h1 className='font-bold text-4xl font-serif capitalize '>affordable investment plan</h1>
            <p className='text-lg pb-10'>Engage with our robust platform that leverages both expertly trained bots, adept at strategic
              trading decisions for optimal buying and selling, and seasoned professionals within our company. Invest with confidence as we skillfully manage your funds, generating profits directly into your wallet.</p>

              <div className='pb-14'>
                          <h2 className='text-2xl font-semibold lg:text-center mb-6 text-cyan-700 shadow-lg px-5 py-7 border-b-cyan-700 border-b-4 rounded-md'>To successfully make a deposit and start investing with Asset Alliance,
                              you must have a wallet. Here’s a step-by-step guide</h2>
                        <ol className='text-xl space-y-8 list-disc px-8 text-gray-800'>
                          <li>Log into Your Account: Visit the site and securely log in.</li>
                          <li>Navigate to the Transaction Section: Find the "Deposit" or "Withdraw" section on the dashboard.</li>
                          <li>Follow Instructions and Confirm: Enter details like amount and payment method, check for accuracy, and submit your request. Await confirmation once the transaction is processed</li>
                        </ol>
                        </div>
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
      <section className='bg-white pb-72'>
        <div className='flex flex-col gap-7 items-center pt-20  px-4 lg-px-40  '>
          <div className='flex flex-col gap-5 lg:pb-2  text-center '>
            <h1 className='font-bold text-4xl font-serif capitalize '>don't hesitate to invest now, we will give you the best!</h1>
          </div>
            <Link href={'/dashboard'} className='hover:opacity-55 bg-cyan-700 text-white text-lg font-semibold p-3 w-fit'>Invest now</Link>
         
        </div>
      </section>
    </main>
  )
}
export default page
