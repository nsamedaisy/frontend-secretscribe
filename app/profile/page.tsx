import React from "react";
import Link from "next/link";

import {
  FaArrowRight,
  FaEnvelope,
  FaFacebookSquare,
  FaRegCopy,
  FaWhatsapp,
} from "react-icons/fa";
import { FiSettings } from "react-icons/fi"

const userProfile = () => {
  return (
    <div className="bg-gradient-to-tr from-green to-cream text-white min-h-screen bg-gradie flex items-center justify-center">
      
      <div className="w-[25%] sm:w-[25%] h-[45%] bg- py-10 shadow-2xl px-9 bg-gradient-to-tr from-cream to-green items-center flex flex-col">
          <h1 className="text-5xl font-extrabold font-sans items-center">Daisy's Profile</h1>
          <Link href="" className="flex items-center py-6 font-bold">
            share this link and get your response <FaRegCopy className="ml-3"/>
          </Link>

          <p className="font-semibold">
            Share your profile link ❤️ to get responses from your friend ❤️. Go to
            "View Messages" to check out the responses. 👌
          </p>

        <section className="flex flex-col space-y-6 mt-8 text-white font-extrabold font-lobster mb-5">
          <button className="flex justify-center w-[20vw] border-2 border-green py-2 pl-4">
            View Messages <FaArrowRight />
          </button>

          <button className="flex justify-center  border-2 border-green py-2 pl-4">
            <FaEnvelope className="w-6 h-6 mr-3 text-blue-700" /> Share On Mail
          </button>

          <button className="flex justify-center border-2 border-green py-2 pl-4">
            <FaWhatsapp className="w-6 h-6 mr-3 text-green" /> Share on WhatsApp
          </button>

          <button className="flex justify-center border-2 border-green py-2 pl-4">
            <FaFacebookSquare className="w-5 h-5 mr-3 text-yellow-700" /> Share on Facebook
          </button>

        </section>
        <p className="border-b border border-green py-6 w-[20vw]"></p>

        <button className="flex justify-center w-[20vw] border-2 border-green py-2 pl-4">
            Settings<FiSettings className="w-5 h-5 mr-3 text-yellow-700" />
          </button>
      </div>
    </div>
  );
};

export default userProfile;
