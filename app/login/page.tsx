import React from "react";
import Link from "next/link";

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
      </div>
    </div>
  );
};

export default Login;
