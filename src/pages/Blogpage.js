import Header from "../components/Header";
import Footer from "../components/Footer";
import Blog1 from '../components/Myimages/blog1.jpg';
import Blog2 from '../components/Myimages/blog2.jpg';
import Blog3 from '../components/Myimages/blog3.jpg';
import Blog4 from '../components/Myimages/blog4.jpg';
import Blog5 from '../components/Myimages/blog5.jpg';
import Blog6 from '../components/Myimages/blog6.jpg';
import Banner2 from '../components/Myimages/banner2.jpg';
import Image from 'next/image';
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { selectItems, selectTotal, setBasket } from "../slices/basketSlice";
import { useSession } from "next-auth/react";
import { useRouter } from 'next/router';

function Blogpage() {


const dispatch = useDispatch();
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const { data: session } = useSession();
  const router = useRouter();


useEffect(() => {
  const storedBasketItems = localStorage.getItem("basketItems");
  const storedBasket = storedBasketItems ? JSON.parse(storedBasketItems) : [];
  dispatch(setBasket(storedBasket));
}, [dispatch]);

useEffect(() => {
  localStorage.setItem("basketItems", JSON.stringify(items));
}, [items]);


  return (
    <div>
        <Header />


        <div className="relative group w-1000 h-500 mt-16 md:mt-0">
            <Image src={Banner2} className="w-full h-full inset-0 opacity-70" alt="Banner" />
            <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
    
            </div>
            <div className="absolute inset-0 transition-opacity duration-300"></div>
        </div>

        

        <div className="-mt-20 md:-mt-96 flex md:flex-row flex-col items-center justify-evenly">

                    <div className="border-2 border-gray-100 m-3 w-80 bg-white z-30">

                        <div className="relative group">
                        <Image src={Blog1} className="w-full h-full" alt="Banner" />
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                        </div>

                            <div className="mb-3 m-2">
                            <h1 className="text-sm font-bold m-2">IS BINARY OPTIONS TRADING SAFE?</h1>
                            <p className="text-xs line-clamp-4 m-2">Binary options have attracted traders of all experience levels—from beginners to professionals—who are in a quest for diversifying their investments. This type of trading has grown to a respected and credible practice over the years. Despite this, one of the concerns of many, especially when it comes to where they put their money, is the question: is binary options trading safe?

In this article, we’ll be shedding light on the answer to this often-asked question about binary options trading to help you make an informed decision. We’ll also provide some guidelines for choosing the best platform for binary options trading and discuss factors that impact trading risk.</p>
                            </div>
                    </div>




                    <div className="border-2 border-gray-100 m-3 w-80 bg-white z-30">

                        <div className="relative group">
                        <Image src={Blog2} className="w-full h-full" alt="Banner" />
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                        </div>

                            <div className="mb-3 m-2">
                            <h1 className="text-sm font-bold m-2">LEARN HOW TO TRADE BINARY OPTIONS</h1>
                            <p className="text-xs line-clamp-4 m-2">There are now hundreds of brokerages offering thousands of new traders an opportunity to profit with binary options. The simplicity of binary options trading enables new and seasoned traders to partake in the market without much hassle. However, new traders often have difficulty learning about financial instruments. Moreover, a scarcity of comprehensive guides on the subject makes gathering accurate information a challenge in and of itself.</p>
                            </div>
                    </div>


                    <div className="border-2 border-gray-100 m-3 w-80 bg-white z-30">

                        <div className="relative group">
                        <Image src={Blog3} className="w-full h-full" alt="Banner" />
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                        </div>

                            <div className="mb-3 m-2">
                            <h1 className="text-sm font-bold m-2">POPULAR BINARY OTIONS BROKERS</h1>
                            <p className="text-xs line-clamp-4 m-2">Ever since the US Securities and Exchange Commission approved binary options in 2008, numerous traders have been interested in expanding their investments and exploring binary options trading. And since there’s an expanding list of available brokers today, it’s challenging to narrow down your choices to find the one that suits your preferences. With that, we’ve gathered the popular brokers to help you jumpstart your search.

To help you, we provide the lowdown on the top 15 popular binary options brokers of 2023 that you can consider for trading. Hopefully, the list will let you find the best broker for your investment needs and expectations, and start successfully trading on your own.</p>
                            </div>
                    </div>


                </div>

                 {/*second row */}

                <div className=" mt-2 flex md:flex-row flex-col items-center justify-evenly">


              

                    <div className="border-2 border-gray-100 m-3 w-80">

                        <div className="relative group">
                        <Image src={Blog4} className="w-full h-full" alt="Banner" />
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                        </div>

                            <div className="mb-3 m-2">
                            <h1 className="text-sm font-bold m-2">Money Management</h1>
                            <p className="text-xs line-clamp-4 m-2">An effective binary options management strategy while trading online is very crucial to generate long-term sustainable returns. It necessitates a trader to emphasize the amount of money they invest on the items they select to trade.

To make a money management strategy, it is not essential to predict the market movement, but you must rely on solid statistical data to save your money from going down. If you feel confused about planning a money management strategy on your own, we can help you out. </p>
                            </div>
                    </div>


                    <div className="border-2 border-gray-100 m-3 w-80">

                        <div className="relative group">
                        <Image src={Blog5} className="w-full h-full" alt="Banner" />
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                        </div>

                            <div className="mb-3 m-2">
                            <h1 className="text-sm font-bold m-2">THE 9 BEST BINARY OPTIONS 2023</h1>
                            <p className="text-xs line-clamp-4 m-2">Concerns about the quality of drinking water are not unfounded, as municipal water suppliers face various challenges in ensuring the safety 
                            of public water sources. Despite their best efforts, contaminants can find their way into aquifers and springs, and even after undergoing treatment, aging infrastructure can introduce 
                            further contamination. In South Africa, for instance, there are over 60,000 chemicals in use, but only 91 contaminants are regulated under the Safe Drinking Water Act. This means that many 
                            potential pollutants may not be effectively monitored or controlled. To maintain the quality of tap water in the country over the next decade, an estimated R4,154 billion is projected to be necessary.</p>
                            </div>
                    </div>

                    <div className="border-2 border-gray-100 m-3 w-80">

                        <div className="relative group">
                        <Image src={Blog6} className="w-full h-full" alt="Banner" />
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                        </div>

                            <div className="mb-3 m-2">
                            <h1 className="text-sm font-bold m-2">Is emerging Europe finally clamping down on binary options scams? </h1>
                            <p className="text-xs line-clamp-4 m-2">Binary options are a financial product through which investors can adopt a ‘yes or no’ position on a specific market outcome,” explains Michael Harris, a market analyst at invezz.com. “In this way, they’re similar to betting on whether or not you think a given event will happen.”

Essentially, when an investor buys a binary option they are actually betting on the movement of the underlying security. These securities are most often company stocks, but can also be commodities or currency exchange rate pairs.</p>
                            </div>
                    </div>

        </div>


        <Footer />
      
    </div>
  );
}

export default Blogpage
