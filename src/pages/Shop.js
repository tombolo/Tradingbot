import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductFeed from "../components/ProductFeed";
import { MyShop } from '../components/MyShop';
import Banner2 from '../components/Myimages/banner2.jpg';
import Image from 'next/image';


function Shop() {
  return (
    <div className="mt-16">

        <Header />

        <div className="relative group w-1000 h-500 -mt-28">
            <Image src={Banner2} className="w-full h-full inset-0 bg-black opacity-70" alt="Banner" />
            <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <h1 className="lg:text-4xl text-2xl mt-48 shadow-lg font-bold">SHOP</h1>
            </div>
            <div className="absolute inset-0 opacity-40 group-opacity-10 transition-opacity duration-300"></div>
        </div>


        <div className="md:-mt-72 -mt-20">

        <ProductFeed products={MyShop} />

        </div>

        <Footer />
      
    </div>
  )
}

export default Shop
