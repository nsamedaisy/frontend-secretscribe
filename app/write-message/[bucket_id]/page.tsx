"use client";

import Link from "next/link";
import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import { CurrentUserGuard } from "@/app/_services/ui";
import { MdSend } from "react-icons/md";
import { API_URL } from "../../_components/constant";
import { useParams } from "next/navigation";
import { IBucket, IUser } from "@/app/_services/utils";
// import RedirectPopup from "@/app/_components/popup";

interface Props {
  currentUser: IUser;
}
const Page = ({ currentUser }: Props) => {
  // export default function page({ currentUser }: Props) {
  const [content, setContent] = useState("");
  const [bucket, setBucket] = useState<IBucket | null>(null);
  const [successMessage, SetSuccessMessage] = useState(false);
  // const [isPopupOpen, setIsPopupOpen] = useState(false);
  const params = useParams<{ bucket_id: string }>();

  const [showCreateLink, setShowCreateLink] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (successMessage) {
      timer = setTimeout(() => {
        setShowCreateLink(true);
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [successMessage]);

  const handleContentChange = (e: any) => {
    setContent(e.target.value);
  };

  const sendMessage = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post(API_URL + "/message", {
        content,
        bucket_id: params.bucket_id,
      });
      const { message } = response.data;
      // console.log(message)
      SetSuccessMessage(true);
      // Do something with the retrieved message
    } catch (error) {
      console.error("Error:", error);
    }
    // Open the popup
    // setIsPopupOpen(true);

    setContent("");
  };

  const handleClose = () => {
    SetSuccessMessage(false);
    setShowCreateLink(false);
  };

  useEffect(() => {
    const fetchBucket = async () => {
      try {
        const { data } = await axios.get<IBucket>(
          API_URL + "/bucket/" + params.bucket_id
        );
        console.log(data);
        setBucket(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBucket();
  }, []);

  return (
    <div className="bg-gradient-to-tr from-green to-cream text-white min-h-screen bg-gradie flex items-center justify-center">
      <div className="w-[25%] sm:w-[25%] h-[45%] py-10 rounded shadow-2xl px-9 bg-gradient-to-t from-cream to-green">
        {/* success message  */}
        {successMessage && (
          <p className="text-5xl font-extrabold font-mono text-lime-100 mb-4 flex justify-center items-center">
            Message sent successfully 🎉🎉🎉
          </p>
        )}

        {!successMessage && (
          <h1 className="text-2xl font-extrabold font-marker items-center justify-center mb-6 flex">
            Topic: {bucket ? `${bucket.title}` : ""} 😅
          </h1>
        )}

        {/* Write secret message */}
        {!successMessage && (
          <form onSubmit={sendMessage}>
            <div className="">
              <p className="text-sm">
                What is that you always want to say in secret{" "}
                <span className="text-red-700">*</span>
              </p>
              <fieldset className="border-none">
                <textarea
                  className="w-full h-40 px-3 py-2 bg-transparent text-white resize-none focus:outline-none"
                  placeholder="Write your secret message..."
                  value={content}
                  onChange={handleContentChange}
                ></textarea>
              </fieldset>
            </div>

            <p className="mt-6 font-mono text-sm">254 characters remaining</p>
            <hr className="mt-2 border-b-2 w-[20vw]" />

            <button
              // href="/profile"
              className="flex rounded-md my-6 justify-center items-center bg-gradient-to-tr from-green to-cream w-[20vw] border-2 border-green py-2 pl-4"
            >
              Send Message
              <MdSend className="ml-3" />
            </button>
          </form>
        )}

        {!successMessage && (
          <p className="text-green">
            Please leave a feedback on the topic of concern for {" "}
            <span className="font-bold text-yellow-600 text-xl">{currentUser?.name}</span>{" "}
            anonymously using the form above.. 🥰 Thank You!! 😍😊
          </p>
        )}
        {/* after confirmation the user should be chance to create their own link  */}
        {successMessage && showCreateLink && (
          <div className="flex flex-col">
            <p className="text-lime-100 text-xl font-mono font-extrabold my-6">
              Click here 👇🏿 to create your own secret message link!
            </p>
            <Link
              href="/register"
              className="flex rounded-md my-6 justify-center items-center bg-gradient-to-tr from-green to-cream w-[20vw] border-2 border-green py-2 text-lg font-bold text-lime-100"
            >
              🔏 Create Link
            </Link>
            <Link
              href="/"
              className="text-red-500 mt-2 flex rounded-md my-6 justify-center items-center w-[20vw] border-2 border-red-600 text-lg font-bold"
              onClick={handleClose}
            >
              Cancel
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CurrentUserGuard(Page);
