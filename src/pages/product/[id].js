import { useRouter } from 'next/router';
import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addToBasket, removeFromBasket, setBasket } from "../../slices/basketSlice";
import { MyShop } from '../../components/MyShop';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FixedFooter from '../../components/FixedFooter';
import ProductFeed from '../../components/ProductFeed';
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";



const MAX_RATING = 5;
const MIN_RATING = 1;

const Product = () => {

  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState({});

  const dispatch = useDispatch();
  const basket = useSelector(state => state.basket.items);
  

  const [hasPrime] = useState(Math.random() < 0.5);
  const [isInBasket, setIsInBasket] = useState(false);

  useEffect(() => {
    const itemInBasket = basket.find(item => item.id === product.id);
    setIsInBasket(!!itemInBasket);
  }, [basket, product]);

  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedBasketItems = localStorage.getItem("basketItems");
      const storedBasket = storedBasketItems ? JSON.parse(storedBasketItems) : [];
      dispatch(setBasket(storedBasket));
    }
  }, [dispatch]);


  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );

  useEffect(() => {
    const loadedProd = MyShop.find((prod) => prod.id === Number(id));
    if (loadedProd) {
      setProduct(loadedProd);
    }
  }, [id]);




  const addItemToBasket = (productId) => {
    const productToAdd = {
      id: product.id,
      title: product.title,
      price: product.price,
      description: product.description,
      category: product.category,
      image: product.image,
      hasPrime: product.hasPrime,
    };
  
      const storedBasketItems = localStorage.getItem("basketItems");
      const storedBasket = storedBasketItems ? JSON.parse(storedBasketItems) : [];
      const updatedBasket = [...storedBasket, productToAdd];
      localStorage.setItem("basketItems", JSON.stringify(updatedBasket));
    
  
    dispatch(addToBasket(productToAdd));
    setIsInBasket(true);
  };


  const removeItemFromBasket = (productId) => {
    dispatch(removeFromBasket(product));
  
    const storedBasketItems = localStorage.getItem("basketItems");
    const storedBasket = storedBasketItems ? JSON.parse(storedBasketItems) : [];
    const updatedBasket = storedBasket.filter(item => item.id !== productId);
    localStorage.setItem("basketItems", JSON.stringify(updatedBasket));
  
    setIsInBasket(false);
  };
  
  

  if (!id || !product || Object.keys(product).length === 0) {
    return <p>Loading...</p>;
  }


  return (
    <div>
      <Header />

    <div className="lg:flex lg:flex-row lg:mt-36 mt-32">
      {/*Product Part*/}
                <div className="relative m-2 bg-white z-20 p-2 rounded-md shadow-lg md:w-1/2 border-yellow-900 mx-4">
                            <p className="absolute top-2 right-2 text-gray-400 text-xs z-50">{product.category}</p>

                                  <div className="relative overflow-hidden top-1 flex items-center justify-center rounded-md md:flex md:justify-start ">
                                  <Image src={product.image} height={170} width={200} objectfit="contain" className="rounded-md" />
                                  </div>
                            <h1 className="font-bold text-blue-900 text-xs md:text-sm mt-3">{product.title}</h1>
                  
                            <p className="my-1 md:text-sm text-xs transition duration-300 rounded-md">{product.description}</p>

                          <div className="flex flex-row items-center">

                            <div>
                                <div className="flex">
                                  {Array(rating)
                                    .fill()
                                    .map((_, i) => (
                                      <StarIcon key={i} className="h-4 w-4 text-yellow-500" />
                                    ))}
                                    </div>
                                  <p className="text-xs sm:text-sm">KSH{product.price}</p>
                                </div>

                                <div>
                                <button
                                    onClick={() => (isInBasket ? removeItemFromBasket(product.id) : addItemToBasket(product.id))}
                                    className={`flex-grow-0 flex-shrink-0 w-auto sm:w-auto rounded-md transition duration-200 m-5 text-xs md:text-sm px-1 py-1 md:px-4 md:py-3 ${
                                      isInBasket ? 'bg-gray-600 text-white hover:bg-gray-400' : 'bg-blue-900 text-white hover:bg-blue-600'
                                    }`}
                                  >
                                    {isInBasket ? 'Remove from Basket' : 'Add to Basket'}
                                  </button>

                                  </div>

                                

                        </div>

                </div>



     {/*Description Part*/}
      <div className="relative m-2 bg-white border-yellow-900 p-2 rounded shadow-lg transition lg:w-full">
          <div className="flex flex-row justify-between items-center">
            <p className="text-xs md:text-sm font-bold">Shipping to</p>
            <select className="text-xs md:text-sm bg-transparent border-none focus:outline-none">
              <option value="Nairobi">Nairobi</option>
              <option value="Mombasa">Mombasa</option>
              <option value="Kisumu">Kisumu</option>
              {/* Add more options for different parts of the country */}
            </select>
          </div>

          <div className="relative m-2 border-b-2 border-yellow-900">
            <h1 className="text-xs md:text-sm font-bold text-blue-900 py-2">Fullfilled By Finestburu</h1>
            <p className="text-xs md:text-sm">The product has been examined by finestburu</p>
            <p className="text-xs md:text-sm font-semibold text-blue-900 py-2">Free Mentorship for amount over KSH 20,000</p>
          </div>


          <div className="relative m-2 border-b-2 border-yellow-900">
            <h1 className="text-xs md:text-sm font-semibold text-blue-900 py-2">Return policy</h1>
            <p className="text-xs md:text-sm py-2">Easy Return, Quick Refund</p>
          </div>


          <div className="relative m-2 border-b-2 border-yellow-900">
            <h1 className="text-xs md:text-sm font-semibold text-blue-900 py-2">Shopping Security</h1>

            <div className="flex justify-between items-center px-2 mb-2">
              <div className="flex-col text-xs">
                  <p className="list-item md:text-sm">Safe Payments</p>
                  <p className="list-item md:text-sm">Secure Privacy</p>
              </div>

              <div className="flex flex-col text-xs">
                  <p className="list-item md:text-sm">Secure Logistics</p>
                  <p className="list-item md:text-sm">Purchase Protection</p>
              </div>

            </div>

          </div>


          <div className="my-3 border-b-2 mt-5 border-gray-300">
          <div className="mb-5 flex flex-row justify-between items-center">
            <p className="text-xs font-bold md:text-sm">Customer reviews</p>
            <select className="text-xs md:text-sm bg-transparent border-none focus:outline-none">
              <option value="Nairobi, Umoja">View All</option>
            </select>
          </div>
         </div>


      </div>


      




      </div>





  <div>
    <h1 className="text-xs font-bold mx-6 mb-1">Also From Store</h1>
  <ProductFeed products={MyShop} />
</div>



    <Footer />
   
    </div>
  );
};

export default Product;
