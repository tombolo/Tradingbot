import Baca1 from '../components/Myimages/finest.png';
import Baca2 from '../components/Myimages/robot.jpg';
import Image from 'next/image';
import Link from 'next/link';


function Banaca() {
  return (

    <div className="md:mt-6">
       
    <div className="md:relative flex md:flex-row md:justify-evenly flex-col mt-20 md:mt-2 bg-white md:bg-transparent">

     

      {/*BANACA 1 */}

        <div className="bg-transparent md:bg-white md:w-1/2 md:h-56 p-3 m-1 rounded-md flex flex-row justify-between opacity-100 md:shadow-md md:border-2 border-gray-400">
            <div className="p-2">
                <h1>NEW ARRIVALS</h1>
                <h1 className="font-bold text-lg md:text-xl py-2">Deriv Killer 1.0</h1>
                <p className="text-lg md:text-xl font-semibold py-2 mb-2 md:mb-5 -mt-4">KSH 10,000</p>
                <Link href="/product/4">
                  <a className="bg-blue-900 text-white rounded-full p-2 text-sm mt-6">
                    Shop Now
                  </a>
                </Link>
            </div>

            <div style={{ width: '180px', height: '180px' }} className="mt-1">
              <Image src={Baca2} className="w-full h-full rounded-md" />
            </div>
          </div>


         {/*BANACA 2 */}

        <div className="bg-transparent md:bg-white md:w-1/2 md:h-56 p-3 m-1 -mt-6 md:mt-1 rounded-md flex flex-row justify-between opacity-100 md:shadow-md md:border-2 border-gray-400">

        <div className="rounded-md" style={{ width: '180px', height: '178px' }}>
  <Image src={Baca1} className="w-full h-full rounded-md" />

  {/* Add a media query to reduce size on small screens */}
  <style jsx>{`
    @media (max-width: 768px) { /* Adjust the max-width as needed */
      .rounded-md img {
        width: 170px;
        height: 170px;
      }
    }
  `}</style>
</div>

            <div className="flex flex-col p-2">
                <h1>HOT SALES</h1>
                <p className="md:text-xl text-lg font-bold py-2">Deriv Killer 2.0</p>
                <p className="md:text-xl text-lg font-semibold -mt-2">KSH 15,000</p>
                <Link href="/product/3">
                  <a className="bg-blue-900 text-white rounded-full p-2 text-sm mt-1 md:mt-6 flex items-center justify-center">
                    Shop Now
                  </a>
                </Link>
            </div>

        </div>


    </div>
    </div>
  );
}

export default Banaca;
