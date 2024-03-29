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
import { googleLogout } from '@react-oauth/google'
import { useState } from "react";
import { API_URL, FRONT_END_URL } from "../_components/constant";
import { toast } from "sonner";
import axios from "axios";

interface Props {
  currentUser: IUser;
}

const userProfile = ({ currentUser }: Props) => {
  const [title, setTitle] = useState("")
  const [topicLink, setTopicLink] = useState<string>('');


  // const { authData, setAuthData } = useStore()
  const router = useRouter()

  const handleChange = (e: any) => {
    setTitle(e.target.value)
  }

  //generate bucket link
  const generateLink = (bucket_id: string) => {
    return `${FRONT_END_URL}/write-message/${bucket_id}`;
  }

  //copy link function
  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(topicLink);
      toast.success("copied!")
    } catch (error) {
      console.error('Failed to copy link:', error);
    }
  }

  const createBucket = async () => {

    try {
      const response = await axios.post(API_URL + '/bucket', { title, creator_id: currentUser._id });
      console.log({ response })

      const { _id } = response.data;
      const url = generateLink(_id);
      setTopicLink(url);
      // Do something with the generated link
    } catch (error) {
      console.error(error);
    }
    setTitle("")
  };



  return (
    <div className="bg-gradient-to-tr from-green to-cream text-white min-h-screen bg-gradie flex items-center justify-center">
      <div className="w-[375px] sm:w-[33%] h-[45%] py-10 rounded shadow-2xl px-9 bg-gradient-to-tr from-cream to-green items-center justify-center flex flex-col">
        <h1 className="text-2xl font-extrabold font-mono mb-4 items-center first-letter:capitalize">
          {currentUser?.name}'s Profile ❤️
        </h1>

        <p className="w-[80%] font-serif font-semibold">
          What is it that you want others to talk about without revealing themselves? (e.g Politics 👌, social life ❤️).
          Write a topic of concern(optional) and generate your profile link, share ❤️ to get a response from user(s) ❤️. Go to
          "View Messages" to check out the responses. 👌
        </p>

        <section className="flex flex-col space-y-6 mt-8 text-white font-extrabold font-lobster mb-5">

          <input
            placeholder="Your topic of interest..."
            type="text"
            value={title}
            onChange={handleChange}
            className="px-3 border rounded-md border-white py-3 bg-transparent text-white focus:outline-none placeholder:text-cream w-[100%]"
          />

          <div className="flex justify-between min-h-[30px] p-3 items-center w-full border border-white">
            {/* {topicLink && (
              <p className="text-white text-sm  whitespace-normal flex flex-wrap ml-16">
                {topicLink}
              </p>
            )} */}
            {topicLink &&
              <div className="flex w-full justify-between ">
                <p>{topicLink.slice(0, 14)}...</p>
                <FaRegCopy onClick={copyLink} size="1.7rem" className="cursor-pointer" />

              </div>


            }

          </div>
          <button
            onClick={createBucket}
            className="flex items-center justify-center border-2 border-green bg-green py-2 p-4 rounded-md"
          >
            Generate Link
          </button>

          <p className="border-b-2 my-2"></p>

          <Link
            href="/view-message"
            className="flex rounded-md justify-center bg-cream text-green items-center border-2 border-green py-2 pl-4"
          >
            View Messages <FaArrowRight className="ml-3" />
          </Link>

          <p className="border-b-2 my-3 "></p>

          <button
            className="flex rounded-md justify-center bg-watGreen py-2 pl-4"
          // onClick={}
          >
            <FaWhatsapp className="w-6 h-6 mr-3" /> Share on WhatsApp
          </button>

          <button className="flex rounded-md justify-center bg-blue-950 py-2 pl-4">
            <FaFacebookSquare className="w-6 h-6 mr-3" /> Share on Facebook
          </button>

          <p className="border-b-2 my-3 "></p>

          <button className="flex rounded-md my-6 justify-center bg-gradient-to-tr from-green to-cream border-2 border-green py-2 pl-4">
            Settings
            <FiSettings className="w-5 h-5 ml-3" />
          </button>

        </section>

        {/* <button
          className="flex rounded-md my-6 justify-center bg-gradient-to-tr from-green to-cream w-[20vw] border-2 border-green py-2 pl-4"
          onClick={() => {
            googleLogout()
            localStorage.setItem('authData', '{}')
            setAuthData({})
          }}>
          Logout
          <FiSettings className="w-5 h-5 ml-3" />
        </button> */}
      </div>
    </div>
  );
};

export default CurrentUserGuard(userProfile);
