"use client"
import React from "react";
import Link from "next/link";
import { FaApple, FaLockOpen } from "react-icons/fa";
import { RiArrowGoBackFill } from "react-icons/ri";
import { useState } from "react";
import axios from "axios";
import { API_URL } from "../_components/constant";
import { useRouter } from 'next/navigation'
import { ApiRes } from "../_services/utils";
import Loader from "../_components/loader";


const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true)

    axios.post(API_URL + "/auth/signup", {
      name,
      email,
      password,
    })
      // console.log(response.data);
      .then((resp: ApiRes) => {
        const token = resp.data.token;

        localStorage.setItem("token", token);
        router.push('/profile');
      })

      // Handle sign-up error, e.g., show error message
      .catch((err) => {
        console.error("An error occurred on the frontend", err);
        console.log({ username: name, email: email, password: password });
      })
  };


  // const handleGoogleSignin = async () => {
  //   const { data, error } = await supabase.auth.signInWithOAuth({
  //     provider: "google",
  //     options: {
  //       queryParams: {
  //         access_type: "offline",
  //         prompt: "consent",
  //       },
  //       redirectTo: urlToUse(),
  //     },
  //   });
  //   setIsLoading(true);
  // };

  const handleClick = () => {
    router.push('/')
  }


  return (
    <div className="bg-gradient-to-tr from-green to-cream text-black min-h-screen bg-gradie flex items-center justify-center">
      <div className="w-[375px] h-[45%] bg- py-10 shadow-2xl px-9 bg-gradient-to-tr from-cream to-green">
        <header className="flex justify-between pb-6 items-center">
          <button className="text-xl" onClick={handleClick}><RiArrowGoBackFill /></button>
          <Link
            className="text-lg font-bold text-cream hover:underline"
            href="/login"
          >
            Sign In
          </Link>
        </header>

        <div className="flex text-white mb-6 items-center justify-center leading-tight">
          <img
            src="/sslogo.png"
            alt="SecretScribe Logo"
            className="bg-black w-10 h-10"
          />
          <h1 className="text-3xl my-4 font-thin font-marker">ecretScribe</h1>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-6 w-[60%] ml-[20%] mt-8 text-white font-extrabold font-lobster mb-5">
          <input
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="px-3 border-2 border-cream py-2 bg-green text-white focus:outline-none"
          />
          <input
            placeholder="Email"
            type="email"
            className="px-3 border-2 border-cream py-2 bg-green text-white focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Password"
            type="password"
            className="px-3 border-2 border-cream py-2 bg-green text-white focus:outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            disabled={isLoading}
            title={isLoading ? "Signing up..." : "Sign up"} // Provide a string value for the title prop
            type="submit"
            className="flex items-center justify-center border-2 border-green py-2 text-white cursor-pointer"
          >
            {isLoading ? (
              <Loader />
            ) : (
              <>
                <FaLockOpen className="w-5 h-5 mr-3 text-red-700" /> Sign Up
              </>
            )}
          </button>
        </form>


        <section className="flex flex-col space-y-6 w-[70%] ml-[15%] mt-3 text-white font-extrabold font-lobster mb-5">
          <p className="flex justify-center items-center py-2">
            <span className="border-b flex-grow"></span>
            <span className="px-3 text-gray-500 font-bold">Or</span>
            <span className="border-b flex-grow"></span>
          </p>

  

          <button className="flex items-center border-2 border-green py-2 pl-4">
            <FaApple className="w-6 h-6 mr-3 text-blue-700" /> Sign In with
            Apple
          </button>
        </section>

        <p className="mb-6 items-center text-sm justify-center flex font-serif">
          Educators: Register as an individual
        </p>
      </div>
    </div>
  );
};

export default Register;
