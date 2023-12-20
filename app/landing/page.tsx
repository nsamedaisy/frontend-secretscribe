import Link from "next/link";
import React from "react";

const LandingPage = () => {
  return (
    <div className="bg-green text-cream min-h-screen">
      <div className="h-[95vh]">
        <header className="py-5 flex justify-between items-center px-20 shadow-[rgba(0,0,15,0.5)_10px_5px_4px_0px]">
          <h1 className="text-5xl font-extrabold font-marker">SecretScribe</h1>
          <nav className="font-mono">
            <ul className="flex justify-center space-x-8">
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
                  href="/getstarted"
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
        </header>
        <section>
          <img
            src="/ss.png"
            alt="cartoon phone"
            className="mt-10 h-[55vh] mx-auto"
          />
          <div>
            <p className="text-center mt-16 text-3xl font-poppins">Anonymously</p>
            <p className="mt-6 text-8xl font-extrabold font-marker text-cream text-center">
              Share Thoughts, and Confessions In Secrets.
            </p>
          </div>
        </section>
      </div>

     
      <section className="py-20 px-60 bg-cream text-gray-800">
     

        <h2 className="text-5xl font-extrabold font-abril pb-20 leading-relaxed">
       SecretScribe is an interactive anonymous messaging app. Create your Profile Link and Send it to all your contacts to check what do your friends think about you. SecretScribe is free!
        </h2>
        <div className="flex items-center">
          <div className="mr- mr-40">
        <ul className="text-xl font-mono leading-relaxed w-[35vw]">
          <li className="mb-4">
            Express yourself freely without revealing your identity, Discover and connect with anonymous messages from others.
          </li>
          <li className="mb-4">Explore different categories and topics, Join a community where secrets are shared and understood</li>
        </ul>
        <button className="hover:bg-green hover:text-cream py-2 mt-6 text-green px-8 font-mono text-lg border-2 border-green">
          Get Started
        </button>
        </div>
        <img src="/faceoff.png" alt="face Off" className="w-96 h-96 w-"/>
        </div>
      </section>

      <section className="py-16 text-center border-b">
            <p className="text-3xl font-extrabold mb-4 animate-slide-in-right">
              Type your message anonymously, Choose a category for your message,
              Submit your message and let others discover it.
            </p>
      </section>

      <footer className="py-4 text-center">
        <p className="text-white">
          &copy; 2023 Secretscribe. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
