import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Kioko5 from './Myimages/clients.png';
import final1 from './Myimages/final1.jpg';


function Banner() {
  useEffect(() => {
    AOS.init();
  }, []);

  // Define client reviews data
  const clientReviews = [
    {
      id: 1,
      name: 'Mercy Kimani',
      profileImage: 'final1.jpg',
      message: 'Ive been using a binary deriv trading bot for a few months now, and I couldnt be happier with the results. The bot has consistently generated profits for me, and its done so with minimal effort on my part. Its like having a skilled trader working for me 24/7. I highly recommend it to anyone looking to automate their trading and increase their chances of success.',
    },
    {
      id: 2,
      name: 'Samuel Mutua',
      profileImage: 'final1.jpg',
      message: 'As a busy professional, I dont always have the time to closely monitor the financial markets. Thats where the binary deriv trading bot comes in. Its been a game-changer for me. Its not only user-friendly but also highly effective. Ive seen significant gains in my portfolio since I started using it. ',
    },
    {
      id: 3,
      name: 'Alice Johnson',
      profileImage: 'final1.jpg',
      message: 'Ive been skeptical about trading bots for a long time, but after trying out this binary deriv trading bot, my skepticism has turned into amazement. This bot is incredibly versatile and allows you to customize your trading strategy to your liking. Its adaptive and uses sophisticated algorithms to analyze the market, making it a powerful tool for generating profits. ',
    },
  ];

  return (
    <div className="relative -mt-2">


      <div className="mt-2 bg-blue-600 p-5 flex md:flex-row flex-col justify-between items-center">

        <div className="">
          <h1 className="text-white text-xl md:ml-20 ml-11 mb-5 font-semibold italic">What our clients say</h1>
          <div className="h-64 w-64 md:ml-16">
            <Image src={Kioko5} loading="lazy" className="w-full h-full object-cover" alt="Banner" />
          </div>
        </div>

      

      <div className="md:w-1/2 bg-black h-64 rounded-md">
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          interval={3000}
        >
          {clientReviews.map((review) => (
            <div key={review.id}>
              <div className="flex justify-center items-center h-64 flex-col">
              <div className="mr-5">
                    <div>
                      <Image
                        src={final1}
                        loading="lazy"
                        className="w-16 h-16 rounded-full object-cover"
                        alt={`${review.name}'s profile`}
                        width={64} 
                        height={64} 
                      />
                    </div>
                </div>

                <div>
                  <h2 className="text-lg text-white font-semibold">{review.name}</h2>
                </div>

                <div>
                  <p className="text-white text-sm">{review.message}</p>
                </div>


              </div>


            </div>
          ))}
        </Carousel>
      </div>



      </div>
    </div>
  );
}

export default Banner;


