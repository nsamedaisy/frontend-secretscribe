"use client"
import Link from "next/link";

import {
  FaArrowRight,
  FaEnvelope,
  FaFacebookSquare,
  FaRegCopy,
  FaWhatsapp,
} from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { CurrentUserGuard } from "../_services/ui";
import { IUser } from "../_services/utils";

interface Props {
  currentUser: IUser;
}

const userProfile = ({ currentUser }: Props) => {

  return (
    <div className="bg-gradient-to-tr from-green to-cream text-white min-h-screen bg-gradie flex items-center justify-center">
      <div className="w-[30%] sm:w-[30%] h-[45%] py-10 rounded shadow-2xl px-9 bg-gradient-to-tr from-cream to-green items-center flex flex-col">
        <h1 className="text-5xl font-extrabold font-sans items-center">
          {currentUser?.name}'s Profile
        </h1>
        <Link href="" className="flex items-center py-6 font-bold">
          share this link and get your response <FaRegCopy className="ml-3" />
        </Link>

        <p className="font-semibold w-[20vw]">
          Share your profile link ❤️ to get responses from your friend ❤️. Go to
          "View Messages" to check out the responses. 👌
        </p>

        <section className="flex flex-col space-y-6 mt-8 text-white font-extrabold font-lobster mb-5">
          <Link
            href="/viewMessage"
            className="flex rounded-md justify-center bg-gradient-to-tr from-green to-cream items-center w-[20vw] border-2 border-green py-2 pl-4"
          >
            View Messages <FaArrowRight className="ml-3" />
          </Link>

          <button className="flex rounded-md justify-center bg-red-700 py-2 pl-4">
            <FaEnvelope className="w-6 h-6 mr-3" /> Share On Mail
          </button>

          <button className="flex rounded-md justify-center bg-watGreen py-2 pl-4">
            <FaWhatsapp className="w-6 h-6 mr-3 " /> Share on WhatsApp
          </button>

          <button className="flex rounded-md justify-center bg-blue-950 py-2 pl-4">
            <FaFacebookSquare className="w-6 h-6 mr-3" /> Share on Facebook
          </button>
        </section>
        <p className="border-b-4 my-6 w-[20vw]"></p>

        <button className="flex rounded-md my-6 justify-center bg-gradient-to-tr from-green to-cream w-[20vw] border-2 border-green py-2 pl-4">
          Settings
          <FiSettings className="w-5 h-5 ml-3" />
        </button>
      </div>
    </div>
  );
};

export default CurrentUserGuard(userProfile);
