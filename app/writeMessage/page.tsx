'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MdSend } from "react-icons/md";

const WriteSecretMessage = () => {
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [showCreateLink, setShowCreateLink] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (success) {
      timer = setTimeout(() => {
        setShowCreateLink(true);
      }, 4000);
    }
    return () => clearTimeout(timer);
  }, [success]);

  const sendMessage = () => {
    if (message.trim() === "") {
      return;
    }
    setSuccess(true);
  };

  const handleCancel = () => {
    setSuccess(false);
    setShowCreateLink(false);
  };

  return (
    <div className="bg-gradient-to-tr from-green to-cream text-white min-h-screen bg-gradie flex items-center justify-center">
      <div className="w-[25%] sm:w-[25%] h-[45%] py-10 rounded shadow-2xl px-9 bg-gradient-to-t from-cream to-green">
        {success && !showCreateLink && (
          <p className="text-5xl font-extrabold text-lime-100 mb-4 flex justify-center items-center">
            Message sent successfully 🎉
          </p>
        )}

        {!success && (
          <h1 className="text-4xl font-extrabold font-sans items-center mb-10">
            😅 Say Something...
          </h1>
        )}

        {/* {success && (
          <div>
            <p className="text-green">Sending message...</p>
            {!showCreateLink && (
              <button
                className="text-red-500 underline mt-2"
                onClick={handleCancel}
              >
                Cancel
              </button>
            )}
          </div>
        )} */}

        {!success && (
          <div className="">
            <p className="text-sm">
              What is that you always want to tell me{" "}
              <span className="text-red-700">*</span>
            </p>
            <fieldset className="border-none">
              <textarea
                className="w-full h-40 px-3 py-2 bg-transparent text-white resize-none focus:outline-none"
                placeholder="Write your secret message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </fieldset>
          </div>
        )}

        <p className="mt-6 font-mono text-sm">254 characters remaining</p>
        <hr className="mt-2 border-b-2 w-[20vw]" />

        {!success && (
          <button
            className="flex rounded-md my-6 justify-center items-center bg-gradient-to-tr from-green to-cream w-[20vw] border-2 border-green py-2 pl-4"
            onClick={sendMessage}
          >
            Send Message
            <MdSend className="ml-3" />
          </button>
        )}

        {success && showCreateLink && (
          <div>
            <p className="text-green text-xl mt-5">
              Click here 👇🏿 to create your own secret message link!
            </p>
            <Link
              href="/register"
              className="flex rounded-md my-6 justify-center items-center bg-gradient-to-tr from-green to-cream w-[20vw] border-2 border-green py-2pl-4"
            >
              🔏 Create Link
            </Link>
          </div>
        )}

        {!success && (
          <p className="text-green">
            Say what do you think about daisyb3ll3 or Leave a feedback for
            daisyb3ll3 anonymously using the form above.. 🥰 Thank You!! 😍😊
          </p>
        )}
      </div>
    </div>
  );
};

export default WriteSecretMessage;