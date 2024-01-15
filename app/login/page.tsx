"use client"
import React, { useState } from "react";
import Link from "next/link";

import { FaApple, FaTimes } from "react-icons/fa";
import axios from "axios";
import { API_URL } from "../_components/constant";
import { useRouter } from "next/navigation";
import { ApiRes } from "../_services/utils";
import Image from "next/image";
import { signIn } from "next-auth/react";



const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  let userId = ""
  let mes = "";
  const router = useRouter();

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    axios.post(API_URL + "/auth/login", {
      email,
      password
    })
      // console.log(response.data);
      .then((resp) => {
        console.log("this is the response", resp);
        localStorage.setItem("token", resp.data.token);
        router.push(`/profile`);
      })
      .catch((err) => {
        console.error("An error occured on the frontend", err);
        // Handle login error, e.g., show error message
      })

    setTimeout(() => {
      console.log("this is the message", mes);
      axios
        .post(API_URL + "currentUser", {
          email,
        })
        .then((res) => {
          localStorage.setItem("User", JSON.stringify(res.data));
          userId = res.data.id;
          router.push(`/create-bucket/${userId}`);
          console.log("here is the current user", res);
        })
        .catch((err) => console.log("Could not get current user", err))

    }, 2000);
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
            className="px-3 border-2 border-cream py-3 bg-green text-white focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-3 border-2 border-cream py-3 bg-green text-white focus:outline-none"
          />
          <button className="border border-black py-3" type="submit">Login</button>
        </form>

        <button
          onClick={() => signIn("google")}
          className="flex items-center gap-4 shadow-xl rounded-lg pl-3"
        >
          <Image src="/google.png" alt="goole_Image" height={30} width={30} />
          <span className="bg-blue-500 text-white px-4 py-3">
            Sign in with Google
          </span>
        </button>

        <p className="flex justify-center items-center py-2">
          <span className="border-b flex-grow"></span>
          <span className="px-3 text-gray-500 font-bold">Or</span>
          <span className="border-b flex-grow"></span>
        </p>


        <section className="flex flex-col space-y-6 w-[60%] ml-[20%] mt-8 text-white font-extrabold font-lobster mb-5">
          <button className="flex items-center border-2 border-green py-2 pl-4"><img src="/google.png" alt="Google logo" className="w-8 h-8 mr-3" /> Sign In with Google</button>
          <button className="flex items-center border-2 border-green py-2 pl-4"><FaApple className="w-6 h-6 mr-3 text-blue-700" /> Sign In with Apple</button>
          {/* <button className="flex items-center border-2 border-green py-2 pl-4"><FaEnvelope className="w-5 h-5 mr-3 text-red-700" /> Sign In with Mail</button>
          <button className="flex items-center border-2 border-green py-2 pl-4"><FaFacebookF className="w-5 h-5 mr-3 text-yellow-700" /> Sign In with Facebook</button> */}
        </section>
        <p className="mb-10 items-center text-sm justify-center flex font-serif">Educators: Register as an individual</p>
      </div>
    </div>
  );
};

export default Login;