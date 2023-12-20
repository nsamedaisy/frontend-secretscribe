import React from "react";
import Link from "next/link";

import { FaApple, FaLockOpen } from "react-icons/fa";

const Register = () => {
  return (
    <div className="bg-gradient-to-tr from-green to-cream text-black min-h-screen bg-gradie flex items-center justify-center">
      <div className="w-[25%] sm:w-[25%] h-[45%] bg- py-10 shadow-2xl px-9 bg-gradient-to-tr from-cream to-green">
        <header className="flex justify-between pb-6 items-center">
          <button>Cancel</button>
          <Link
            className="text-lg font-bold text-cream hover:underline"
            href="/login"
          >
            Sign In
          </Link>
        </header>

        <div className="flex items-center justify-center leading-tight">
          <img
            src="/sslogo.png"
            alt="SecretScribe Logo"
            className="bg-black w-10 h-10"
          />
          <h1 className="text-3xl font-thin font-marker">ecretScribe</h1>
        </div>

        <section>
          <input></input>
        </section>

        <section className="flex flex-col space-y-6 w-[60%] ml-[20%] mt-8 text-white font-extrabold font-lobster mb-5">
          <button className="flex items-center border-2 border-green py-2 pl-4">
            <FaLockOpen className="w-5 h-5 mr-3 text-red-700" /> Sign Up
          </button>
          <button className="flex items-center border-2 border-green py-2 pl-4">
            <img src="/google.png" alt="Google logo" className="w-8 h-8 mr-3" />{" "}
            Sign In with Google
          </button>
          <button className="flex items-center border-2 border-green py-2 pl-4">
            <FaApple className="w-6 h-6 mr-3 text-blue-700" /> Sign In with
            Apple
          </button>
        </section>

        <p className="mb-10 items-center text-sm justify-center flex font-serif">
          Educators: Register as an individual
        </p>
      </div>
    </div>
  );
};

export default Register;
