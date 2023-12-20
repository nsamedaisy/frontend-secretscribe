import React from "react";
import Link from "next/link";

// import { FiMenu } from 'react-icons/fi';
import { FaApple, FaEnvelope, FaFacebook,  } from "react-icons/fa";

const Login = () => {
  return (
    <div className="bg-cream min-h-screen flex items-center justify-center">
      <div className="w-[25%] h-[45%] bg-green py-10 shadow-2xl px-9 items-center justify-center ">
        <header className="flex justify-between pb-6 items-center">
          <button>Cancel</button>
          <Link
            className="text-lg font-medium text-cream hover:text-white hover:underline"
            href="/"
          >
            Sign Up
          </Link>
        </header>

        <div className="flex items-center justify-center">
        <img src="/sslogo.png" alt="SecretScribe Logo" className="hidden md:block w-10 h-10 lg:block" />
            <h1 className="hidden sm:block text-3xl font-extrabold font-cursive">ecretScribe</h1>
        </div>

        <h1 className="py-6 text-4xl font-marker items-center justify-center flex font-bold">Welcome back</h1>

        <section className="flex flex-col">
          <button><img src="/google.png" alt="Google logo" className="w-10 h-10" /> Sign In with Google</button>
          <button><FaApple className="" /> Sign In with Apple</button>
          <button><FaEnvelope className="" /> Sign In with Mail</button>
          <button><FaFacebook className="" /> Sign In with Facebook</button>
        </section>
        
      </div>
    </div>
  );
};

export default Login;
