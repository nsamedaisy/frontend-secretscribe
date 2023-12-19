import Link from 'next/link';
import React from 'react';

const LandingPage = () => {
  return (
    <div className="bg-green text-cream min-h-screen">
      <div className='p-2 h-[95vh]'>
      <header className="py-5 flex justify-between items-center px-20">
        <h1 className="text-4xl font-extrabold font-marker">SecretScribe</h1>
        <nav className="font-mono">
          <ul className="flex justify-center space-x-8">
            <li>
              <Link className="text-lg font-medium text-cream hover:text-white" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link href="/getstarted" className="text-lg font-medium text-cream hover:text-white">
                Get Started
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-lg font-medium text-cream hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <section>
        {/* <h2 className="text-3xl text-center font-bold mb-8">How It Works</h2> */}
        <div className="flex flex-col items-center">

          <p className="text-lg mb-4">1. Type your message anonymously.</p>
          <p className="text-lg mb-4">2. Choose a category for your message.</p>
          <p className="text-lg mb-4">3. Submit your message and let others discover it.</p>
        </div>
        <div>
        <p className="mt-20 text-7xl font-extrabold font-marker text-cream text-center">Anonymously share your thoughts, confessions, and secrets.</p>
        </div>
      </section>

      </div>

      <section className="py-16 bg-cream text-black">
        <h2 className="text-3xl text-center font-bold mb-8">Why Choose Secretscribe?</h2>
        <ul className="text-lg">
          <li className="mb-4">Express yourself freely without revealing your identity.</li>
          <li className="mb-4">Discover and connect with anonymous messages from others.</li>
          <li className="mb-4">Explore different categories and topics.</li>
          <li className="mb-4">Join a community where secrets are shared and understood.</li>
        </ul>
      </section>

      <section className="py-16 text-center">
        <h2 className="text-3xl text-center font-bold mb-8">Start Sharing Anonymously Now</h2>
        <button className="bg-cream text-black hover:bg-white py-3 px-6 rounded-lg font-extrabold text-lg">
          Get Started
        </button>
      </section>

      <footer className="bg-green py-4 text-center">
        <p className="text-white">&copy; 2023 Secretscribe. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;