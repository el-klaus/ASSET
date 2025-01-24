import Link from 'next/link';
import React from 'react';

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
                    <div className="bg-white shadow-md p-6 rounded-lg">
                        <h2 className="text-2xl font-semibold text-cyan-700 mb-4">Send Us a Message</h2>
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block font-medium mb-2">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Enter your name"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-700 focus:outline-none"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block font-medium mb-2">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-700 focus:outline-none"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block font-medium mb-2">
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    placeholder="Write your message here..."
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-cyan-700 focus:ring-2 focus:outline-none"
                                    rows="5"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-cyan-700 text-white font-semibold py-2 rounded-lg hover:bg-cyan-800 transition"
                            >
                                Send Message
                            </button>
                        </form>
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
