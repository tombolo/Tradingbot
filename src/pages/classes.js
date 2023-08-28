import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { selectItems, selectTotal, setBasket } from "../slices/basketSlice";

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

      <div className="mt-36">
        <h2>Enroll for classes</h2>

      </div>
      
      <Footer />
    </div>
  );
}

export default classes;
