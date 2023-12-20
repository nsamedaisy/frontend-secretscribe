import React from "react";
import Link from "next/link";

// import { FiMenu } from 'react-icons/fi';
import { FaApple, FaEnvelope, FaFacebook,  } from "react-icons/fa";

const Login = () => {
  return (
    <div className="text-black">
      <div>
        <header>
          <button>Cancel</button>
          <Link
            className="text-lg font-medium text-cream hover:text-white hover:underline"
            href="/"
          >
            Sign Up
          </Link>
        </header>
        <div className="flex items-center">
        <img src="/sslogo.png" alt="SecretScribe Logo" className="hidden md:block w-16 h-16 lg:block" />
            <h1 className="hidden sm:block text-5xl font-extrabold font-marker">ecretScribe</h1>
        </div>
        <h1>Welcome back</h1>
        <section>
          <button><img src="/google.png" alt="Google logo" className="" /> Sign In with Google</button>
          <button><FaApple className="" /> Sign In with Apple</button>
          <button><FaEnvelope className="" /> Sign In with Mail</button>
          <button><FaFacebook className="" /> Sign In with Facebook</button>
        </section>
      </div>
    </div>
  );
};

export default Login;
