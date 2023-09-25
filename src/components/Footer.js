import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaTiktok } from 'react-icons/fa';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Forex2 from '../components/Myimages/bot.png';



const backgroundImageStyle = {
  backgroundImage: `url(${Forex2.src})`, 
  backgroundSize: 'cover', 
  backgroundPosition: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.7)', 
};

function Footer() {
  return (
    <footer className=" text-white z-50 -mt-4 w-full h-full" style={backgroundImageStyle}>

      <div className="bg-gray-600 flex lg:flex-row lg:items-center lg:justify-between flex-col">

            <div className="py-2 lg:mx-12 flex lg:flex-row flex-col items-center">

              <div className="flex flex-row">
                  <div className="mx-4">
                    <FaEnvelope size={40} className="icon text-blue-600" />
                  </div>
                  <div>
                    <h1 className="text-sm font-semibold text-white">JOIN OUR NEWSLETTER</h1>
                    <p className="text-xs text-white">Get The Lates Deals, Updates $ More</p>
                  </div>
                </div>

              <div className="flex items-center justify-center lg:p-2  py-5 lg:mx-5">
                <form className="border-none hover:border-none flex">
                  <input className="bg-gray-400 p-1 focus:outline-none"
                  type="text"
                  placeholder="Enter your Email"  />
                  <button type="submit" className="h-9 px-3 bg-blue-900 text-xs font-semibold">Join Now</button>
                </form>
              </div>

            </div>


            <div className="flex lg:py-10 md:mt-0 lg:mx-12 py-2 justify-center -mt-5">
      
      
      <div className="icon-wrapper px-2">
        <a
          href="https://instagram.com/finestburu?igshid=NzZlODBkYWE4Ng=="
          className="icon-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="icon-circle bg-gradient-to-r from-pink-600 to-purple-600 border-white rounded-full">
            <FaInstagram size={25} className="icon p-1" />
          </div>
        </a>
      </div>
      <div className="icon-wrapper px-2">
        <a
          href="https://www.tiktok.com/@finestburu?_t=8fzCRJKYlBF&_r=1"
          className="icon-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="icon-circle bg-black border-white rounded-full">
           <FaTiktok size={25} className="icon p-1 text-white" />
         </div>
        </a>
      </div>
    </div>

      </div>


      <div>
        
        <div className="text-center mt-2 p-3">
          <p className="text-gray-300 text-sm">&copy; 2023 Finestburu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
