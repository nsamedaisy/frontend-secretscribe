import Link from 'next/link';
import React from 'react';

const LandingPage = () => {
  return (
    <div className="bg-green text-cream min-h-screen">
         <header className="py-20 text-center">
        <h1 className="text-4xl font-bold font-courier-prime">Secretscribe</h1>
        <nav className="mt-4">
          <ul className="flex justify-center space-x-8">
            <li>
              <Link href="/">
                <a className="text-lg font-medium text-cream hover:text-white">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/getstarted">
                <a className="text-lg font-medium text-cream hover:text-white">Get Started</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a className="text-lg font-medium text-cream hover:text-white">Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <section className="bg-cream text-black py-16">
        <h2 className="text-3xl text-center font-bold mb-8">How It Works</h2>
        <div className="flex flex-col items-center">
        <p className="text-lg mt-4">Anonymously share your thoughts, confessions, and secrets.</p>

          <p className="text-lg mb-4">1. Type your message anonymously.</p>
          <p className="text-lg mb-4">2. Choose a category for your message.</p>
          <p className="text-lg mb-4">3. Submit your message and let others discover it.</p>
        </div>
      </section>

      <section className="py-16">
        <h2 className="text-3xl text-center font-bold mb-8">Why Choose Secretscribe?</h2>
        <ul className="text-lg">
          <li className="mb-4">Express yourself freely without revealing your identity.</li>
          <li className="mb-4">Discover and connect with anonymous messages from others.</li>
          <li className="mb-4">Explore different categories and topics.</li>
          <li className="mb-4">Join a community where secrets are shared and understood.</li>
        </ul>
      </section>

      <section className="bg-cream text-black py-16 text-center">
        <h2 className="text-3xl text-center font-bold mb-8">Start Sharing Anonymously Now</h2>
        <button className="bg-green hover:bg-green-600 text-cream py-3 px-6 rounded-lg font-bold text-lg">Get Started</button>
      </section>

      <footer className="bg-green-600 py-4 text-center">
        <p className="text-white">&copy; 2023 Secretscribe. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;