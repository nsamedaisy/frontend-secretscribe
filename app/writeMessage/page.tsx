import React from "react";
import Link from "next/link";

import { MdSend } from "react-icons/md";

const writeSecretMessage = () => {
  return (
    <div className="bg-gradient-to-tr from-green to-cream text-white min-h-screen bg-gradie flex items-center justify-center">
      <div className="w-[25%] sm:w-[25%] h-[45%] py-10 rounded shadow-2xl px-9 bg-gradient-to-tr from-cream to-green">
        <h1 className="text-4xl font-extrabold font-sans items-center mb-10">
          😅 Say Something...
        </h1>

        {/* Write secret message */}
        <div className="">
          <p className="text-sm">What is that you always want to tell me*</p>
          <fieldset className="border-none">
            <textarea
              className="w-full h-40 px-3 py-2 bg-transparent text-white resize-none focus:outline-none"
              placeholder="Write your secret message..."
            ></textarea>
          </fieldset>
        </div>

        <p className="mt-6 font-mono text-sm">254 characters remaining</p>
        <hr className="mt-2 border-b-2 w-[20vw]" />

        <Link
          href="/profile"
          className="flex rounded-md my-6 justify-center items-center bg-gradient-to-tr from-green to-cream w-[20vw] border-2 border-green py-2 pl-4"
        >
          Send Message
          <MdSend className="ml-3" />
        </Link>

        <p>
          Say what do you think about daisyb3ll3 or Leave a feedback for
          daisyb3ll3 anonymously using the form above.. 🥰 Thank You!! 😍😊
        </p>
      </div>
    </div>
  );
};

export default writeSecretMessage;
