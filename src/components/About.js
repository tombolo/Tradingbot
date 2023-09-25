import { LocationMarkerIcon, PhoneIcon, MailIcon } from '@heroicons/react/solid';
import Banner2 from '../components/Myimages/banner2.jpg';
import Image from 'next/image';
import Blog3 from '../components/Myimages/blog3.jpg';
import Banner5 from '../components/Myimages/banner5.jpg';



const backgroundImageStyle = {
  backgroundImage: `url(${Banner5.src})`, // Set the background image to banner5.jpg
  backgroundSize: 'cover', // You can adjust these properties as needed
  backgroundPosition: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.1)', 
};


function About() {
  return (
    <div className="w-full h-full" style={backgroundImageStyle}>
      
     
    <div className="flex flex-col lg:mx-2 rounded-md -mt-3 lg:flex-row lg:items-center lg:justify-evenly flex-grow">

        <div  
           className=" m-2 border-gray-200 lg:w-1/4 lg:justify-center lg:border-b-0">
            <h1 className="flex lg:justify-center text-sm md:text-lg font-bold text-white p-1">About Us</h1>
            <p className=" flex lg:justify-center text-xs md:text-sm p-1 lg:items-center text-white">At Trade with FinestBuru, we're dedicated to revolutionizing binary trading. With a team of seasoned experts and cutting-edge technology, we aim to empower traders of all levels with transparent, efficient, and user-friendly trading solutions. Our mission is to provide a safe and secure platform, fostering financial growth and education.</p>
        </div>

        

        <div className="m-2 lg:w-1/4 lg:border-b-0 md:hidden mt-3">
          <div className="relative group rounded-md">
            <Image src={Blog3} className="w-full h-full rounded-md" alt="Banner" />
            <div className="absolute inset-0 rounded-md">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white opacity-10 rounded-md"></div>
              <a href="https://deriv.com/" className="absolute bottom-0 left-0 right-0 py-3 px-4 flex items-center justify-center bg-gradient-to-t from-white via-white to-transparent rounded-b-md transition-transform duration-300 transform group-hover:translate-x-2">
                <p className="text-blue-700 text-xs font-semibold animate-slide-horizontal">Read More</p>
                <svg
                  className="animate-slide-horizontal w-6 h-6 ml-2 text-blue-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>








        <div className="m-2 border-b-2 border-gray-200 lg:w-1/4 lg:border-b-0 -mt-2 md:mt-0">
            <h1 className=" font-bold text-white p-1 flex lg:justify-center text-sm md:text-lg">Our Location & Contact Details</h1>
            <div className=" flex lg:justify-center flex-row p-1">
                <div className="bg-blue-300 rounded-full">
                   <LocationMarkerIcon className="h-6 w-6 text-red-500 p-1" />
                </div>
                <p className="md:text-sm text-xs mx-2 text-white">Visit us Today in Kilimani</p>
            </div>

            <div className="flex flex-row p-1 lg:justify-center">
                <div className="bg-blue-300 rounded-full">
                    <PhoneIcon className="h-6 w-6 text-yellow-700 p-1" />
                </div> 
                <p className="md:text-sm mx-2 text-xs text-white">Phone: +254724381835</p>
            </div>

            <div className="flex lg:justify-center flex-row p-1">
                <div className="bg-blue-300 rounded-full">
                    <MailIcon className="h-6 w-6 text-indigo-700 p-1" />
                </div>
                <p className="md:text-sm text-xs mx-2 text-white">finestburu1@gmail.com</p>
            </div>
        </div>

        <div className="m-2 border-b-2 border-gray-200 lg:w-1/4 lg:border-b-0">
        <h1 className="font-bold text-white p-1 flex lg:justify-center text-sm text-xs">Business Hours</h1>

                    <div className="flex flex-row items-center justify-between p-1 lg:flex-col lg:justify-center">

                        <div>
                            <p className="text-xs md:text-sm p-1 font-bold text-white">Monday - Friday</p>
                            <p className="text-xs md:text-sm p-1 text-white">7:00 AM to 6:00 PM</p>
                        </div>
                        <div>
                            <p className="text-xs md:text-sm p-1 font-bold text-white">Saturday - Sunday</p>
                            <p className="text-xs md:text-sm p-1 text-white">8:00 AM to 4:00 PM</p>
                        </div>

                    </div>

        </div>

    </div>
    

    </div>
  )
}

export default About