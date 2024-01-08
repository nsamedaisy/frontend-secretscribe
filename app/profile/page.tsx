"use client"
import Link from "next/link";

import {
  FaArrowRight,
  FaFacebookSquare,
  FaRegCopy,
  FaWhatsapp,
} from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { CurrentUserGuard } from "../_services/ui";
import { IUser } from "../_services/utils";
import { useRouter } from "next/navigation";

interface Props {
  currentUser: IUser;
}

const userProfile = ({ currentUser }: Props) => {

  const router = useRouter()


  return (
    <div className="bg-gradient-to-tr from-green to-cream text-white min-h-screen bg-gradie flex items-center justify-center">
      <div className="w-[30%] sm:w-[35%] h-[45%] py-10 rounded shadow-2xl px-9 bg-gradient-to-tr from-cream to-green items-center justify-center flex flex-col">
        <h1 className="text-5xl font-extrabold font-mono mb-4 items-center first-letter:capitalize">
          {currentUser?.name}'s Profile ❤️
        </h1>
        {/* <Link href="" className="flex items-center py-6 font-bold">
          share this link and get your response <FaRegCopy className="ml-3" />
        </Link> */}

        <p className="w-[90%] font-serif font-semibold">
          What is it that you want others to talk about without revealing themselves? (e.g Politics 👌, social life ❤️).
          Write a topic of concern and generate your profile link, share ❤️ to get a response from user(s) ❤️. Go to
          "View Messages" to check out the responses. 👌
        </p>

        <section className="flex flex-col space-y-6 mt-8 text-white font-extrabold font-lobster mb-5">

          <p className="border-b-2 my-2 w-[20vw]"></p>

          <Link
            href="/view-message"
            className="flex rounded-md justify-center bg-gradient-to-tr from-green to-cream items-center w-[20vw] border-2 border-green py-2 pl-4"
          >
            View Messages <FaArrowRight className="ml-3" />
          </Link>

          <p className="border-b-2 my-3 w-[20vw]"></p>

          <button
            className="flex rounded-md justify-center bg-watGreen py-2 pl-4"
          // onClick={}
          >
            <FaWhatsapp className="w-6 h-6 mr-3" /> Share on WhatsApp
          </button>

          {/* <a href="/create-bucket" className="flex rounded-md justify-center bg-watGreen py-2 pl-4">
            <AiTwotoneMail className="w-6 h-6 mr-3 " /> Create a bucket
          </a> */}

          <button className="flex rounded-md justify-center bg-blue-950 py-2 pl-4">
            <FaFacebookSquare className="w-6 h-6 mr-3" /> Share on Facebook
          </button>
        </section>
        <p className="border-b-4 my-3 w-[20vw]"></p>

        <button className="flex rounded-md my-6 justify-center bg-gradient-to-tr from-green to-cream w-[20vw] border-2 border-green py-2 pl-4">
          Settings
          <FiSettings className="w-5 h-5 ml-3" />
        </button>
      </div>
    </div>
  );
};

export default CurrentUserGuard(userProfile);
