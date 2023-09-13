import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { signIn } from 'next-auth/react';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import logo1 from '../components/Myimages/logo1.png';
import Image from "next/image";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Spinner from '../components/Spinner';
import db from '/firebase';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/router';




const LoginPage = () => {
  const { data: session } = useSession();
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [isLoading, setIsLoading] = useState(false); 
  const [redirectToDashboard, setRedirectToDashboard] = useState(false); 


  const toggleSignUp = () => {
    setIsSigningUp((prev) => !prev);
  };
  const router = useRouter();


  useEffect(() => {
    if (redirectToDashboard) {
      // Simulate a delay of 5 seconds
      const delay = 5000;
      const timer = setTimeout(() => {
        // Navigate to the dashboard after the delay
        router.push("/");
      }, delay);

      // Clean up the timer when the component unmounts or if the user navigates away
      return () => clearTimeout(timer);
    }
  }, [redirectToDashboard]);

  const handleGoogleSignIn = async () => {
    setIsLoading(true); // Show the spinner

    try {
      // Sign in with Google
      await signIn('google', { callbackUrl: '/' });
      // Set the flag to redirect to the dashboard after the delay
      setRedirectToDashboard(true);
    } catch (error) {
      // Handle any errors here
      console.error('Google sign-in error:', error);
      setIsLoading(false); // Hide the spinner
    }
  };

  const auth = getAuth();

const handleEmailSignUp = async () => {
  setIsLoading(true);

  try {
    const email = document.querySelector('input[type="email"]').value;
    const password = document.querySelector('input[type="password"]').value;

    // Create a new user with email and password using the auth instance
    await createUserWithEmailAndPassword(auth, email, password);

    // Set the flag to redirect to the dashboard after the delay
    setRedirectToDashboard(true);
  } catch (error) {
    // Handle any errors here
    console.error('Email sign-up error:', error);
    setIsLoading(false);
  }
};


  
  return (
    <div className="md:mt-28">
        <Header />
    <div className="min-h-screen bg-gradient-to-r md:from-gray-100 md:to-gray-300 bg-white flex items-center justify-center">
        
      <div className="bg-white p-6 rounded-lg md:shadow-md w-96 text-center items-center">

      <div className=""> {/* Moved margin outside the logo */}
          <Image
            onClick={() => router.push("/")}
            src={logo1}
            width={200}
            height={76}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>

        <h1 className="text-3xl font-bold text-center mb-2">
          {isSigningUp ? 'Sign Up' : 'Sign In'}
        </h1>

        {isSigningUp && (
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <FaMapMarkerAlt className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full pl-10 pr-3 py-2 rounded-md border focus:outline-none focus:border-blue-500"
            />
          </div>
        )}

        <div className="relative mt-4">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <FaEnvelope className="text-gray-400" />
          </div>
          <input
            type="email"
            placeholder="Email"
            className="w-full pl-10 pr-3 py-2 rounded-md border focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="relative mt-4">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 5.293a1 1 0 011.414 0L10 8.586l3.293-3.293a1 1 0 111.414 1.414L11.414 10l3.293 3.293a1 1 0 11-1.414 1.414L10 11.414l-3.293 3.293a1 1 0 01-1.414-1.414L8.586 10 5.293 6.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <input
            type="password"
            placeholder="Password"
            className="w-full pl-10 pr-3 py-2 rounded-md border focus:outline-none focus:border-blue-500"
          />
        </div>

        {isSigningUp && (
          <div className="relative mt-4">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 5.293a1 1 0 011.414 0L10 8.586l3.293-3.293a1 1 0 111.414 1.414L11.414 10l3.293 3.293a1 1 0 11-1.414 1.414L10 11.414l-3.293 3.293a1 1 0 01-1.414-1.414L8.586 10 5.293 6.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full pl-10 pr-3 py-2 rounded-md border focus:outline-none focus:border-blue-500"
            />
          </div>
        )}

        <div className="mt-4">
          <button
            className={`w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition duration-300 ${
              isSigningUp ? 'hidden' : ''
            }`}
          >
            Sign In with Email
          </button>

          <button
            className={`w-full bg-blue-500 hover:bg-blue-600 text-white md:text-lg py-3 my-2 rounded-md relative ${
                isSigningUp ? 'hidden' : ''
            }`}
            onClick={handleGoogleSignIn}
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '3rem', // Adjust the height to your desired value
            }}
            >
            {isLoading ? (
                <Spinner />
            ) : (
                'Sign In with Google'
            )}
            </button>



          <button
            className={`w-full bg-blue-500 hover:bg-blue-700 text-white py-2 rounded-md transition duration-300 ${
              !isSigningUp ? 'hidden' : ''
            }`}  onClick={handleEmailSignUp}
          >
            Sign Up with Email
          </button>
        </div>

        <div className="text-center mt-4">
          {isSigningUp ? (
            <p>
              Already have an account?{' '}
              <span
                className="text-blue-500 cursor-pointer hover:underline"
                onClick={toggleSignUp}
              >
                Sign In
              </span>
            </p>
          ) : (
            <p>
              Don't have an account?{' '}
              <span
                className="text-blue-500 cursor-pointer hover:underline"
                onClick={toggleSignUp}
              >
                Sign Up
              </span>
            </p>
          )}
        </div>
      </div>
    </div>

    </div>
  );
};

export default LoginPage;
