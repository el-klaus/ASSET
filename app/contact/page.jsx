import Link from 'next/link';
import React from 'react';
import { FaWhatsapp } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";

const ContactUs = () => {
    return (
        <div className="bg-[url('/pexelspixabay.jpg')] text-gray-800 pt-20 pb-72 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-cyan-700">Contact Us</h1>
                    <p className="text-lg mt-4 text-white">
                        Have questions or need assistance? We're here to help!
                    </p>
                </div>

                {/* Contact Details & Form */}
                <div className="max-w-2xl mx-auto">
                    {/* Contact Form */}
                    <div className="bg-transparent shadow-cyan-700  shadow-lg p-6 rounded-lg">
                        <h2 className="text-2xl font-semibold text-white mb-4">Send Us a Message</h2>
                        <div className="text-lg flex font-semibold items-center gap-4 text-white mb-4">
                        <AiOutlineMail
                        className='text-2xl'
                        />
                        <h2>assetalliancehelp@gmail.com</h2>
                        </div>
                        <div className="text-lg flex font-semibold gap-4  text-white mb-4">
                        <FaWhatsapp 
                        className='text-2xl'
                        />
                        <h2 className="text-lg font-semibold text-white mb-4">+1 781 532 5548</h2>
                        </div>


                    </div>
                </div>

               
                <div className="mt-12 text-center">
                    <h2 className="text-3xl font-bold text-cyan-700 mb-4">We'd Love to Hear from You</h2>
                    <p className="text-lg mb-6 text-white">
                        Whether you have a question or feedback, we're just a click or call away.
                    </p>
                    <Link href={"/faq"} className="px-6 py-3 bg-cyan-700 text-white font-semibold rounded-lg hover:bg-cyan-800 transition">
                        Visit FAQs
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
