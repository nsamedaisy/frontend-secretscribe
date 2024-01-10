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
import { useState } from "react";
import { API_URL, FRONT_END_URL } from '../_components/constant';
import { toast } from 'sonner';
import axios from "axios";
import SettingsDropdown from "../settingDropDown/page";

interface Props {
  currentUser: IUser;
}

const userProfile = ({ currentUser }: Props) => {
  const [title, setTitle] = useState("")
  const [topicLink, setTopicLink] = useState<string>('');
  const [isDropDown, setIsDropDown] = useState(false)

  const router = useRouter()

  const toggleOpen = () => {
    setIsDropDown(!isDropDown)
  }

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

  const shareOnWhatsApp = () => {
    const message = encodeURIComponent(topicLink);
    const whatsappUrl = `https://api.whatsapp.com/send?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  const shareOnFacebook = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(topicLink)}`;
    window.open(facebookUrl, "_blank");
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    // setCurrentUser(null);
    router.push("/login");
  };


  return (
    <div className="bg-gradient-to-tr from-green to-cream text-white min-h-screen bg-gradie flex items-center justify-center">
      <div className="w-[30%] sm:w-[33%] h-[45%] py-10 rounded shadow-2xl px-9 bg-gradient-to-tr from-cream to-green items-center justify-center flex flex-col">
        <h1 className="text-5xl font-extrabold font-mono mb-4 items-center first-letter:capitalize">
          {currentUser?.name}'s Profile ❤️
        </h1>

        <p className="w-[80%] font-serif font-semibold">
          What is it that you want others to talk about without revealing themselves? (e.g Politics 👌, social life ❤️).
          Write a topic of concern and generate your profile link, share ❤️ to get a response from user(s) ❤️. Go to
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

          <div className="flex justify-between p-3 items-center w-full">
            {topicLink && (
              <p className="text-white text-sm max-w-[20%] whitespace-normal flex flex-wrap fixed ml-16">
                {topicLink}
              </p>
            )}
            <FaRegCopy onClick={copyLink} size="1.7rem" className="cursor-pointer" />
          </div>
          <button
            onClick={createBucket}
            className="flex items-center justify-center border-2 border-green bg-green py-2 p-4 rounded-md"
          >
            Generate Link
          </button>

          <p className="border-b-2 my-2 w-[20vw]"></p>

          <Link
            href="/view-message"
            className="flex rounded-md justify-center bg-cream text-green items-center w-[20vw] border-2 border-green py-2 pl-4"
          >
            View Messages <FaArrowRight className="ml-3" />
          </Link>

          <p className="border-b-2 my-3 w-[20vw]"></p>

          <button
            className="flex rounded-md justify-center bg-watGreen py-2 pl-4"
            onClick={shareOnWhatsApp}
          >
            <FaWhatsapp className="w-6 h-6 mr-3" /> Share on WhatsApp
          </button>

          <button className="flex rounded-md justify-center bg-blue-950 py-2 pl-4 
          "
            onClick={shareOnFacebook}
          >
            <FaFacebookSquare className="w-6 h-6 mr-3" /> Share on Facebook
          </button>
        </section>
        <p className="border-b-4 my-3 w-[20vw]"></p>

        <button onClick={toggleOpen} className="flex rounded-md my-6 justify-center bg-gradient-to-tr from-green to-cream w-[20vw] border-2 border-green py-2 pl-4">
          Settings
          <FiSettings className="w-5 h-5 ml-3" />
        </button>
        {isDropDown && <SettingsDropdown />}

      </div>
    </div>
  );
};

export default CurrentUserGuard(userProfile);
