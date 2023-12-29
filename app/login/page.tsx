"use client"
import React, { useState } from "react";
import Link from "next/link";

import { FaApple, FaEnvelope, FaFacebookF, FaTimes } from "react-icons/fa";
import axios from "axios";
import { API_URL } from "../_components/constant";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await axios.post(API_URL + "/auth/login", {
        email,
        password
      });
      console.log(response.data);
      // Handle successful login, e.g., store token or redirect to authenticated page
    } catch (error) {
      console.error(error);
      // Handle login error, e.g., show error message
    }
  };


  return (
    <div className="bg-gradient-to-tr from-green to-cream text-black min-h-screen bg-gradie flex items-center justify-center">
      <div className="w-[25%] sm:w-[25%] h-[45%] bg- py-10 shadow-2xl px-9 bg-gradient-to-tr from-cream to-green">
        <header className="flex justify-between pb-6 items-center">
          <button className="text-xl"><FaTimes /></button>
          <Link
            className="text-lg font-bold text-cream hover:underline"
            href="/register"
          >
            Sign Up
          </Link>
        </header>

        <div className="flex items-center justify-center leading-tight">
          <img src="/sslogo.png" alt="SecretScribe Logo" className="bg-black w-10 h-10" />
          <h1 className="text-3xl font-thin font-marker">ecretScribe</h1>
        </div>

        <h1 className="py-6 text-5xl font-marker items-center justify-center flex font-bold">Welcome back</h1>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-6 w-[60%] ml-[20%] mt-8 text-white font-extrabold font-lobster mb-5">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-3 border-2 border-cream py-3 bg-transparent text-white focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-3 border-2 border-cream py-3 bg-transparent text-white focus:outline-none"
          />
          <button type="submit">Login</button>
        </form>

        <section className="flex flex-col space-y-6 w-[60%] ml-[20%] mt-8 text-white font-extrabold font-lobster mb-5">
          <button className="flex items-center border-2 border-green py-2 pl-4"><img src="/google.png" alt="Google logo" className="w-8 h-8 mr-3" /> Sign In with Google</button>
          <button className="flex items-center border-2 border-green py-2 pl-4"><FaApple className="w-6 h-6 mr-3 text-blue-700" /> Sign In with Apple</button>
          <button className="flex items-center border-2 border-green py-2 pl-4"><FaEnvelope className="w-5 h-5 mr-3 text-red-700" /> Sign In with Mail</button>
          <button className="flex items-center border-2 border-green py-2 pl-4"><FaFacebookF className="w-5 h-5 mr-3 text-yellow-700" /> Sign In with Facebook</button>
        </section>
        <p className="mb-10 items-center text-sm justify-center flex font-serif">Educators: Register as an individual</p>
      </div>
    </div>
  );
};

export default Login;
// style={{background: 'url("/stars.png")'}}