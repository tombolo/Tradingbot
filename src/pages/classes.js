import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { selectItems, selectTotal, setBasket } from "../slices/basketSlice";
import premium from '../components/Myimages/premium.jpg';
import Image from "next/image";

import Header from '../components/Header';
import Footer from '../components/Footer';

function classes() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.basket.items);
  const total = useSelector((state) => state.basket.total);
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    const storedBasketItems = localStorage.getItem('basketItems');
    const storedBasket = storedBasketItems ? JSON.parse(storedBasketItems) : [];
    dispatch(setBasket(storedBasket));
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('basketItems', JSON.stringify(items));
  }, [items]);

  const createCheckoutSession = async (classTitle) => {
    // Open WhatsApp with the products in the basket
    const productNames = items.map(item => item.title).join("%0A");
    const message = `I want to subscribe for the following classes:%0A%0A${classTitle}`;
    const whatsappLink = `https://wa.me/254724381835?text=${message}`;

    window.open(whatsappLink, "_blank");
  };

  return (
    <div>
      <Header />
      <div className="sm:mt-36 mt-28">
            <div className="bg-white p-2">

                <div className="flex flex-row items-center justify-center w-full">
                    <div>
                        <h2 className="font-bold ml-5 text-blue-700 my-2 text-lg">Monthly Premium Packages</h2>
                    </div>

                        <div className="flex-grow sm:flex-grow-0">
                            <Image
                            onClick={() => router.push("/")}
                            src={premium}
                            width={50}
                            height={45}
                            objectFit="contain"
                            className="cursor-pointer sm:hidden"
                            />
                        </div>
                 </div>




                    <div className="bg-gray-300 rounded-md lg:w-full mb-3 p-1 flex flex-col justify-center items-center">
                    <h2 className="text-xs font-bold ml-5 text-blue-900 my-2">DERIV ACCOUNT MANAGEMENT</h2>
                    <p className="p-2 text-sm font-semibold flex flex-grow items-center justify-center">Deriv account management refers to the process of overseeing and maintaining an individual's or organization's 
                      trading accounts on the Deriv platform. This includes tasks such as depositing and withdrawing funds, monitoring account balances, 
                      managing risk through position adjustments, and ensuring compliance with trading regulations.
                       Effective account management is essential for successful and responsible trading in financial markets.</p>
                    <p className="p-3 text-lg font-semibold text-blue-900">KSH 25,000</p>
                    <button className=" bg-blue-500 rounded-sm px-6 py-2 text-sm hover:bg-blue-900 hover:text-white" onClick={() => createCheckoutSession('DERIV ACCOUNT MANAGEMENT')}>Apply</button>
                    </div>



                    <div className="bg-white mt-10 border-2 border-gray-200 rounded-md lg:w-full mb-3 p-1 flex flex-col justify-center items-center">
                    <h2 className="text-xs font-bold ml-5 text-blue-900 my-2">PHYSICAL BINARY CLASSES</h2>
                    <p className="p-2 text-sm font-semibold flex flex-grow items-center justify-center">Physical binary classes in Deriv refer to a category of trading options where the outcome is determined by the actual physical occurrence of an event, such as the price of a specific asset reaching a certain level or an economic indicator hitting a predefined mark. Unlike traditional binary options that rely solely on price speculation, physical binary classes involve real-world factors, making them an interesting and potentially more predictable way to trade various financial instruments. These classes offer traders a unique opportunity to engage with market events in a tangible manner.</p>
                    <p className="p-3 text-lg font-semibold text-blue-900">KSH 20,000</p>
                    <button className=" bg-blue-500 rounded-sm px-6 py-2 text-sm hover:bg-blue-900 hover:text-white" onClick={() => createCheckoutSession('DERIV ACCOUNT MANAGEMENT')}>Apply</button>
                    </div>

                    <div className="bg-gray-300 mt-10 rounded-md lg:w-full mb-3 p-1 flex flex-col justify-center items-center">
                    <h2 className="text-xs font-bold ml-5 text-blue-900 my-2">ONLINE BINARY CLASSES</h2>
                    <p className="p-2 text-sm font-semibold flex flex-grow items-center justify-center">Online binary classes in Deriv are educational resources designed to help traders learn and understand binary options trading in a digital format. These classes are accessible over the internet and offer a convenient way for individuals to acquire knowledge about various binary trading strategies, risk management techniques, and market analysis skills. Whether you're a beginner looking to get started or an experienced trader seeking to enhance your skills, Deriv's online binary classes provide valuable insights and training to help you make informed trading decisions in the binary options market.</p>
                    <p className="p-3 text-lg font-semibold text-blue-900">KSH 15,000</p>
                    <button className=" bg-blue-500 rounded-sm px-6 py-2 text-sm hover:bg-blue-900 hover:text-white" onClick={() => createCheckoutSession('DERIV ACCOUNT MANAGEMENT')}>Apply</button>
                    </div>
            </div>


      </div>
      
      <Footer />
    </div>
  );
}

export default classes;
