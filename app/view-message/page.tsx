"use client"

import Link from "next/link";
import axios from 'axios';
import { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { API_URL } from "../_components/constant";
import { CurrentUserGuard } from "../_services/ui";
import { IBucket, IMessage, IUser } from "../_services/utils";
import { useRouter } from "next/navigation";

interface Props {
  currentUser: IUser;
}

function viewSecretMessage({ currentUser }: Props) {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [buckets, setBuckets] = useState<IBucket[]>([]);
  const router = useRouter()

  useEffect(() => {
    // Fetching messages
    const fetchMessages = async () => {
      try {
        const response = await axios.get(API_URL + '/message');
        const { messages } = response.data;
        setMessages(messages);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMessages();
  }, [])

  // Fetching buckets 
  useEffect(() => {
    const fetchUserBuckets = async () => {
      try {
        const response = await axios.get(API_URL + '/bucket/user/' + currentUser._id);
        const { buckets } = response.data;
        if (buckets && buckets.length > 0) setBuckets(buckets);
        console.log({ buckets });

      } catch (error) {
        console.error(error);
      }
    };
    fetchUserBuckets()
  }, [])

  return (
    <div className="bg-gradient-to-tr from-green to-cream text-white min-h-screen flex items-center justify-center">
      <div className="w-[30%] sm:w-[30%] h-full py-10 rounded shadow-2xl px-9 bg-gradient-to-tr from-cream to-green items-center flex flex-col">
        <h1 className="text-4xl mb-4 font-extrabold text-cream items-center">
          My SecretScribe 😅{" "}
        </h1>

        <div className="relative inline-flex w-full items-center justify-center rounded-md bg-transparent px-3 py-2 text-2xl font-serif text-cream font-extrabold mb-3">
          Select Your Topic of Interest 👇 and Exploit
        </div>

        <div className="w-[80%] overflow-hidden">
          <ul className="h-[16rem] sm:h-[20rem] overflow-y-auto scrollbar-none  focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
            {buckets.length > 0 ? (
              buckets.map((bucket) => (
                <li key={bucket._id} className="bg-transparent font-bold shadow-2xl shadow-cream text-green px-4 my-2 py-2">
                  <Link href={`/view-message/${bucket._id}`}>{bucket.title}</Link>
                </li>
              ))
            ) : (
              <li className="flex justify-center items-center h-[16rem] sm:h-[20rem]">
                <span className="text-red-600 font-semibold text-[2rem]">Sorry Your Created Topic(s) Has Expired</span>
              </li>
            )}
          </ul>
        </div>

        <p className="border-b-4 border-cream w-[20vw] mt-10"></p>

        <Link
          href="/profile"
          className="flex rounded-xl my-6 justify-center items-center bg-gradient-to-tr from-green to-cream w-[20vw] border-2 border-green py-2 pl-4"
        >
          Go back
          <FaArrowLeft className="ml-3" />
        </Link>
      </div>
    </div>
  );
};

export default CurrentUserGuard(viewSecretMessage);

