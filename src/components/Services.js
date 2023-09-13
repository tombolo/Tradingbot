import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Kioko5 from './Myimages/clients.png';
import Forex1 from './Myimages/forex.gif';
import Banner5 from '../components/Myimages/banner5.jpg';

const backgroundImageStyle = {
  backgroundImage: `url(${Banner5.src})`, // Set the background image to banner5.jpg
  backgroundSize: 'cover', // You can adjust these properties as needed
  backgroundPosition: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.1)', 
};



function Services() {
  useEffect(() => {
    AOS.init();
  }, []);

  

  return (
    <div className="relative -mt-2 bg-white">


      <div className="md:mt-0 mt-0 bg-transparent p-5 flex md:flex-row flex-col justify-between items-center">

        <div className="md:w-3/6 w-full">
          <h1 className="md:text-2xl text-lg text-black font-bold">We are your Gateway to Forex Success</h1>
          <h2 className="md:text-lg text-sm text-gray-700 font-semibold">Trusted source for top-tier Forex trading insights, strategies, and resources. We are committed to helping you achieve your financial goals through the exciting world of Forex trading.</h2>
        </div>

        <div className=" bg-white md:w-2/6 w-full rounded-md mt-5">
          <div className="h-64 w-64 md:ml-16">
            <Image src={Forex1} loading="lazy" className="w-full h-full object-cover" alt="Banner" />
          </div>
        </div>

    

      </div>
    </div>
  );
}

export default Services;
