import React from 'react';
import Product from './Product';
import Kioko2 from "./Myimages/kioko2.jpg";
import Kioko3 from "./Myimages/kioko3.jpg";
import Kioko4 from "./Myimages/kioko4.jpg";
import Image from "next/image";
import { FaHeadset, FaCreditCard, FaUndo, FaTags } from 'react-icons/fa';


function ProductFeed({ products }) {
  const firstRowProducts = products.slice(11, 22);
  

  return (
    <div className="flex flex-wrap w-full md:ml-2 mb-2">
      <div className="flex flex-row items-center justify-between overflow-x-auto bg-white">
        {/* First Row */}
        {firstRowProducts.map((product, index) => (
          <div className="m-1" key={product.id}>
            <Product {...product} />
          </div>
        ))}
      </div>

      <div className="flex flex-row items-center w-full mt-0">
        <div className=" w-full">
          <Image
            src={Kioko2}
            height={100}
            width={430}
          />
        </div>

        <div className="hidden md:block w-full">
          <Image
            src={Kioko3}
            height={100}
            width={420}
          />
        </div>

        <div className="hidden md:block w-full">
          <Image
            src={Kioko4}
            height={100}
            width={420}
          />
        </div>
      </div>







    </div>
  );
}

export default ProductFeed;


