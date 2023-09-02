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

  return (
    <div>
      <Header />
      <div className="sm:mt-36 mt-28">
            <div className="bg-white p-2">

                <div className="flex flex-row">
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




                    <div className="bg-gray-300 rounded-md lg:w-1/2 mb-3 p-1 flex flex-row justify-between">
                    <h2 className="text-xs font-bold ml-5 text-blue-900 my-2">DERIV ACCOUNT MANAGEMENT</h2>
                    <button className=" bg-white rounded-sm px-2 text-sm hover:bg-blue-900 hover:text-white">Apply</button>
                    </div>



                    <div className="bg-gray-300 rounded-md lg:w-1/2 mb-5 p-1 flex flex-row justify-between">
                    <h2 className="text-xs font-bold ml-5 text-blue-900 my-2">PHYSICAL BINARY CLASSES</h2>
                    <button className=" bg-white rounded-sm px-2 text-sm hover:bg-blue-900 hover:text-white">Apply</button>
                    </div>

                    <div className="bg-gray-300 rounded-md lg:w-1/2 mb-5 p-1 flex flex-row justify-between">
                    <h2 className="text-xs font-bold ml-5 text-blue-900 my-2">ONLINE BINARY CLASSES</h2>
                    <button className=" bg-white rounded-sm px-2 text-sm hover:bg-blue-900 hover:text-white">Apply</button>
                    </div>
            </div>


      </div>
      
      <Footer />
    </div>
  );
}

export default classes;
