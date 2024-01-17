"use client"
import Link from "next/link";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";

// import { useState } from "react";
// import { FiMenu } from 'react-icons/fi';

const LandingPage = () => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const handleMenuToggle = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="bg-green text-cream min-h-screen">
      <div className="h-[95vh]">
        <header className="px-4 py-4 flex justify-between items-center sm:px-8 md:px-16 lg:px-60 shadow-[rgba(0,0,0,0.5)_7px_5px_3px_0px] fixed w-full bg-green z-40">
          <div className="flex items-center">
            <img
              src="/sslogo.png"
              alt="SecretScribe Logo"
              className=" md:block w-16 h-16 lg:block bg-gray-800"
            />
            <h1 className="sm:text-2xl sm:block text-4xl font-extrabold font-marker">
              ecretScribe
            </h1>
          </div>
          <nav className="font-mono hidden sm:block">
            <ul className="flex justify-end space-x-8">
              <li>
                <Link
                  className="text-lg font-medium text-cream hover:text-white hover:underline"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/register"
                  className="text-lg font-medium text-cream hover:text-white hover:underline"
                >
                  Get Started
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-lg font-medium text-cream hover:text-white hover:underline"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <div className="lg:md:hidden ">
            <button
              aria-controls="dropdown-menu"
              aria-expanded={isOpen}
              onClick={toggleDropdown}
            ><FiMenu className="ml-5  mt-4 h-8 w-10 bg-green" /></button>
            <ul
              id="dropdown-menu"
              className={`absolute z-10 w-40 shadow px-1 rounded border  mr-6 right-0 ${isOpen ? 'block' : 'hidden'}`}
            >
              <ul className=" bg-green space-y-3">
                <li>
                  <Link
                    className="text-lg font-medium text-cream hover:text-white hover:underline"
                    href="/"
                  >
                    Home
                  </Link>
                </li>
                <p className="border-b-2 border-black"></p>

                <li>
                  <Link
                    href="/register"
                    className="text-lg font-medium text-cream hover:text-white hover:underline"
                  >
                    Get Started
                  </Link>
                </li>
                <p className="border-b-2"></p>
                <li>
                  <Link
                    href="/contact"
                    className="text-lg font-medium text-cream hover:text-white hover:underline"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </ul>
          </div>
        </header>

        <section className="pt-20 pb-20 sm:px-8 md:px-16 lg:px-60">
          <img
            src="/ss.png"
            alt="cartoon phone"
            className="mt-10 h-[55vh] mx-auto"
          />
          <div>
            <p className="text-center mt-16 text-3xl font-poppins">
              Anonymously
            </p>
            <p className="mt-6 text-7xl font-extrabold font-marker text-cream text-center">
              Share Thoughts, and Confessions In Secrets.
            </p>
          </div>
        </section>
      </div>

      <section className="py-20 px-4 sm:px-8 md:px-16 lg:px-60 bg-cream text-gray-800">
        <h2 className="text-5xl font-extrabold font-abril pb-20 leading-relaxed">
          SecretScribe is an interactive anonymous messaging app. Create your
          Profile Link and Send it to all your contacts and(or) Facebook friends to know what they think about you, a particular think or the society. SecretScribe is free!
        </h2>
        <div className="flex flex-col sm:flex-row items-center">
          <div className="mr-0 sm:mr-40">
            <ul className="text-xl font-mono leading-relaxed sm:w-[35vw]">
              <li className="mb-4">
                Express yourself freely without revealing your identity,
                Discover and connect with anonymous messages from others.
              </li>
              <li className="mb-4">
                Explore different categories and topics, Join a community where
                secrets are shared and understood
              </li>
            </ul>
            <Link
              href="/register"
              className="hover:bg-green hover:text-cream py-2 mt-10 text-green px-8 font-mono text-lg border-2 border-green"
            >
              Get Started
            </Link>
          </div>
          <img
            src="/faceoff.png"
            alt="face Off"
            className="w-44 h-44 sm:w-96 sm:h-96"
          />
        </div>
      </section>

      <section className="text-center py-14 border-b overflow-x-hidden">
        <p className="text-4xl font-marker text-white font-extrabold mb-4 animate-slide-in-right">
          Type your message anonymously, Submit your message and let others
          discover it, Choose a category for your message,.
        </p>
      </section>

      <footer className="py-6 text-center flex justify-between font-mono text-white px-4 sm:px-8 md:px-16 lg:px-60">
        <p>&copy; 2023 Secretscribe. All rights reserved.</p>
        <p>Created by D&R</p>
      </footer>
    </div>
  );
};

export default LandingPage;
