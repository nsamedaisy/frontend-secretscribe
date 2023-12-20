import React from "react";
import Link from "next/link";

// import { FiMenu } from 'react-icons/fi';
import { FaApple, FaEnvelope, FaFacebookF,  } from "react-icons/fa";

const Login = () => {
  return (
    <div className="bg-cream min-h-screen flex items-center justify-center">
      <div className="w-[25%] h-[45%] bg-green py-10 shadow-2xl px-9">
        <header className="flex justify-between pb-6 items-center">
          <button>Cancel</button>
          <Link
            className="text-lg font-medium text-cream hover:text-white hover:underline"
            href="/"
          >
            Sign Up
          </Link>
        </header>

        <div className="flex items-center justify-center leading-tight">
        <img src="/sslogo.png" alt="SecretScribe Logo" className="hidden md:block w-10 h-10 lg:block" />
            <h1 className="hidden sm:block text-3xl font-thin font-marker">ecretScribe</h1>
        </div>

        <h1 className="py-6 text-5xl font-marker items-center justify-center flex font-bold">Welcome back</h1>

        <section className="flex flex-col space-y-6 bg-orange-600 w-[60%] ml-[20%] mt-8">
          <button className="flex items-center"><img src="/google.png" alt="Google logo" className="w-8 h-8 mr-3" /> Sign In with Google</button>
          <button className="flex items-center"><FaApple className="w-6 h-6 mr-3" /> Sign In with Apple</button>
          <button className="flex items-center"><FaEnvelope className="w-5 h-5 mr-3" /> Sign In with Mail</button>
          <button className="flex items-center"><FaFacebookF className="w-5 h-5 mr-3" /> Sign In with Facebook</button>
        </section>

      </div>
    </div>
  );
};

export default Login;
