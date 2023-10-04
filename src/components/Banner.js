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
      message: 'Ive been using a binary deriv trading bot for a few months now, and I couldnt be happier with the results. The bot has consistently generated profits for me, and its done so with minimal effort on my part. Its like having a skilled trader working for me 24/7.',
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
      message: 'Ive been skeptical about trading bots for a long time, but after trying out this binary deriv trading bot, my skepticism has turned into amazement. This bot is incredibly versatile and allows you to customize your trading strategy to your liking.',
    },
    {
      id: 4,
      name: 'Johnstone Mutuku',
      profileImage: 'final1.jpg',
      message: 'Ive been using a binary deriv trading bot for a few months now, and I couldnt be happier with the results. The bot has consistently generated profits for me, and its done so with minimal effort on my part. Its like having a skilled trader working for me 24/7.',
    },
    {
      id: 5,
      name: 'Kelvin Kioko',
      profileImage: 'final1.jpg',
      message: 'As a busy professional, I dont always have the time to closely monitor the financial markets. Thats where the binary deriv trading bot comes in. Its been a game-changer for me. Its not only user-friendly but also highly effective. Ive seen significant gains in my portfolio since I started using it. ',
    },
    {
      id: 6,
      name: 'Alice Kimanzi',
      profileImage: 'final1.jpg',
      message: 'Ive been skeptical about trading bots for a long time, but after trying out this binary deriv trading bot, my skepticism has turned into amazement. This bot is incredibly versatile and allows you to customize your trading strategy to your liking.',
    },
    {
      id: 7,
      name: 'Sylvester Omondi',
      profileImage: 'final1.jpg',
      message: 'Ive been using a binary deriv trading bot for a few months now, and I couldnt be happier with the results. The bot has consistently generated profits for me, and its done so with minimal effort on my part. Its like having a skilled trader working for me 24/7.',
    },
    {
      id: 8,
      name: 'Titus Makau',
      profileImage: 'final1.jpg',
      message: 'As a busy professional, I dont always have the time to closely monitor the financial markets. Thats where the binary deriv trading bot comes in. Its been a game-changer for me. Its not only user-friendly but also highly effective. Ive seen significant gains in my portfolio since I started using it. ',
    },
    {
      id: 9,
      name: 'Thomas Nzioki',
      profileImage: 'final1.jpg',
      message: 'Ive been skeptical about trading bots for a long time, but after trying out this binary deriv trading bot, my skepticism has turned into amazement. This bot is incredibly versatile and allows you to customize your trading strategy to your liking.',
    },
    {
      id: 10,
      name: 'Benjamin Kyavoa',
      profileImage: 'final1.jpg',
      message: 'Ive been using a binary deriv trading bot for a few months now, and I couldnt be happier with the results. The bot has consistently generated profits for me, and its done so with minimal effort on my part. Its like having a skilled trader working for me 24/7.',
    },
    {
      id: 11,
      name: 'Sharon Jemimah',
      profileImage: 'final1.jpg',
      message: 'As a busy professional, I dont always have the time to closely monitor the financial markets. Thats where the binary deriv trading bot comes in. Its been a game-changer for me. Its not only user-friendly but also highly effective. Ive seen significant gains in my portfolio since I started using it. ',
    },
    {
      id: 12,
      name: 'James Kimanzi',
      profileImage: 'final1.jpg',
      message: 'Ive been skeptical about trading bots for a long time, but after trying out this binary deriv trading bot, my skepticism has turned into amazement. This bot is incredibly versatile and allows you to customize your trading strategy to your liking.',
    },
    {
      id: 13,
      name: 'Mumo Ndanu',
      profileImage: 'final1.jpg',
      message: 'Ive been using a binary deriv trading bot for a few months now, and I couldnt be happier with the results. The bot has consistently generated profits for me, and its done so with minimal effort on my part. Its like having a skilled trader working for me 24/7.',
    },
    {
      id: 14,
      name: 'Boniface Mwende',
      profileImage: 'final1.jpg',
      message: 'As a busy professional, I dont always have the time to closely monitor the financial markets. Thats where the binary deriv trading bot comes in. Its been a game-changer for me. Its not only user-friendly but also highly effective. Ive seen significant gains in my portfolio since I started using it. ',
    },
    {
      id: 15,
      name: 'Ruth Mwalali',
      profileImage: 'final1.jpg',
      message: 'Ive been skeptical about trading bots for a long time, but after trying out this binary deriv trading bot, my skepticism has turned into amazement. This bot is incredibly versatile and allows you to customize your trading strategy to your liking.',
    },
    {
      id: 16,
      name: 'Brian Nzuki',
      profileImage: 'final1.jpg',
      message: 'Ive been using a binary deriv trading bot for a few months now, and I couldnt be happier with the results. The bot has consistently generated profits for me, and its done so with minimal effort on my part. Its like having a skilled trader working for me 24/7.',
    },
    {
      id: 17,
      name: 'Martin Fahavi',
      profileImage: 'final1.jpg',
      message: 'As a busy professional, I dont always have the time to closely monitor the financial markets. Thats where the binary deriv trading bot comes in. Its been a game-changer for me. Its not only user-friendly but also highly effective. Ive seen significant gains in my portfolio since I started using it. ',
    },
    {
      id: 18,
      name: 'Kamweti Martin',
      profileImage: 'final1.jpg',
      message: 'Ive been skeptical about trading bots for a long time, but after trying out this binary deriv trading bot, my skepticism has turned into amazement. This bot is incredibly versatile and allows you to customize your trading strategy to your liking.',
    },
    {
      id: 19,
      name: 'Peter Nzuki',
      profileImage: 'final1.jpg',
      message: 'Ive been using a binary deriv trading bot for a few months now, and I couldnt be happier with the results. The bot has consistently generated profits for me, and its done so with minimal effort on my part. Its like having a skilled trader working for me 24/7.',
    },
    {
      id: 20,
      name: 'Alex Alexandro',
      profileImage: 'final1.jpg',
      message: 'As a busy professional, I dont always have the time to closely monitor the financial markets. Thats where the binary deriv trading bot comes in. Its been a game-changer for me. Its not only user-friendly but also highly effective. Ive seen significant gains in my portfolio since I started using it. ',
    },
    {
      id: 21,
      name: 'Charles Mwendwa',
      profileImage: 'final1.jpg',
      message: 'This bot has brought stability to my trading journey. It adapts to market conditions seamlessly.',
    },
    {
      id: 22,
      name: 'Evans Mukiti',
      profileImage: 'final1.jpg',
      message: 'Ive been using a binary deriv trading bot for a few months now, and I couldnt be happier with the results. The bot has consistently generated profits for me, and its done so with minimal effort on my part. Its like having a skilled trader working for me 24/7.',
    },
    {
      id: 23,
      name: 'Josphat Mwangi',
      profileImage: 'final1.jpg',
      message: 'As a busy professional, I dont always have the time to closely monitor the financial markets. Thats where the binary deriv trading bot comes in. Its been a game-changer for me. Its not only user-friendly but also highly effective. Ive seen significant gains in my portfolio since I started using it. ',
    },
    {
      id: 24,
      name: 'Daphne Maeba',
      profileImage: 'final1.jpg',
      message: 'Ive been skeptical about trading bots for a long time, but after trying out this binary deriv trading bot, my skepticism has turned into amazement. This bot is incredibly versatile and allows you to customize your trading strategy to your liking.',
    },
    {
      id: 25,
      name: 'louiz Mohammed',
      profileImage: 'final1.jpg',
      message: 'Ive been using a binary deriv trading bot for a few months now, and I couldnt be happier with the results. The bot has consistently generated profits for me, and its done so with minimal effort on my part. Its like having a skilled trader working for me 24/7.',
    },
    {
      id: 26,
      name: 'Emily mawia',
      profileImage: 'final1.jpg',
      message: 'If you want to succeed in trading, this bot is a must-have. Its user-friendly and delivers exceptional results.',
    },
    {
      id: 27,
      name: 'Mumbe Edna',
      profileImage: 'final1.jpg',
      message: 'Ive been skeptical about trading bots for a long time, but after trying out this binary deriv trading bot, my skepticism has turned into amazement. This bot is incredibly versatile and allows you to customize your trading strategy to your liking.',
    },
    {
      id: 28,
      name: 'Ebby Nyatera',
      profileImage: 'final1.jpg',
      message: 'Im thrilled with the results Ive achieved using this bot. Its a game-changer for anyone looking to thrive in trading.',
    },
    {
      id: 29,
      name: 'Esther Mawia',
      profileImage: 'final1.jpg',
      message: 'I cant imagine trading without this bot now. Its reliable, adaptable, and consistently profitable.',
    },
    {
      id: 30,
      name: 'Brian Oboga',
      profileImage: 'final1.jpg',
      message: 'Ive been skeptical about trading bots for a long time, but after trying out this binary deriv trading bot, my skepticism has turned into amazement. This bot is incredibly versatile and allows you to customize your trading strategy to your liking.',
    },
    {
      id: 31,
      name: 'Lulu Abuga',
      profileImage: 'final1.jpg',
      message: 'Ive been using a binary deriv trading bot for a few months now, and I couldnt be happier with the results. The bot has consistently generated profits for me, and its done so with minimal effort on my part. Its like having a skilled trader working for me 24/7.',
    },
    {
      id: 32,
      name: 'Diana Kioko',
      profileImage: 'final1.jpg',
      message: 'This bot has revolutionized my trading experience. Ive seen a significant increase in my returns, and its incredibly easy to use.',
    },
    {
      id: 33,
      name: 'Brenda Noni',
      profileImage: 'final1.jpg',
      message: 'If you want to stay ahead in the trading game, this bot is your secret weapon. Its reliable and delivers outstanding results.',
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

      

      <div className="md:w-1/2 w-full bg-black h-64 rounded-md md:-mt-10">
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
                    <div className="mt-2">
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


