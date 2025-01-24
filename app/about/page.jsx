import Link from 'next/link';
import React from 'react';

const AboutUs = () => {
  return (
    <main className="bg-gray-100 text-gray-800 py-10 px-4">
      <div className="max-w-7xl mx-auto lg:pb-52 pb-72">
        <div className="text-center mb-8 ">
          <h1 className="text-4xl font-bold text-cyan-700 font-serif">About Us </h1>
          <p className="mt-4">
            ASSET ALLIANCE stands as a legally registered private venture organization based in 
            the United States and Europe bringing together a team of highly skilled financial professionals
            with an extensive background in the investment sector. With a proven track record of operating
            as a private fund for an extended period, we have recently broadened our horizons by launching
            an online platform to cater to a global audience. In our commitment to maximizing returns, we 
            diligently reinvest the funds entrusted to us by our investors. These funds find strategic placements
            in high-growth securities across the major stock markets worldwide, and we actively participate in the 
            dynamic Forex Market to optimize opportunities for our stakeholders 
          </p>
        </div>
        <div className="grid  gap-8 items-center">
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-cyan-700 mb-4 font-serif">Our Mission</h2>
            <p>
            Our overarching objective is to provide investors with a compelling opportunity to grow their 
            funds by deploying a judicious investment strategy across diverse sectors. Whether it's navigating
             the complexities of global stock markets or actively trading in the Forex Market, we strive to deliver high returns for our investors.
            </p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-cyan-700 mb-4 font-serif">Our Vision</h2>
            <p>
              By choosing ASSET ALLIANCE, you're not just investing; you're actively participating in a journey
              toward securing substantial financial gains. We invite you to join us, engage personally in our
              investment endeavors, and enjoy the benefits of a high-level income. Explore our various investment 
              plans tailored to accommodate all who aspire to become investors, with flexible and advantageous tax 
              structures. ASSET ALLIANCE is your gateway to a financially rewarding investment experience. Are you 
              ready to embark on this journey with us?
            </p>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-center text-cyan-700 mb-6 font-serif">How ASSET ALLIANCE Works</h2>
          <div className="grid gap-6">
            <div className="bg-white shadow-md p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-4"></h3>
              <p>
              Engage with our robust platform that leverages both expertly trained bots, adept at strategic
              trading decisions for optimal buying and selling, and seasoned professionals within our company. 
              Invest with confidence as we skillfully manage your funds, generating profits directly into your wallet.
              </p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-4 font-serif text-cyan-700">Secure Payments</h3>
              <p>
                We prioritize your security with robust payment systems that ensure safe and
                hassle-free transactions.
              </p>
            </div>
           
          </div>
        </div>
        <div className="mt-12 text-center">
          <h2 className="text-3xl font-bold text-cyan-700 mb-4">Join US Today</h2>
          <p className="text-lg mb-6">
            Experience the convenience of smarter investment methods!
          </p>
          <Link href={'/auth/signin'} className="px-6 py-3 bg-cyan-600 text-white font-semibold rounded-lg hover:bg-cyan-700 transition">
            Get Started
          </Link>
        </div>
      </div>
    </main>
  );
};

export default AboutUs;
