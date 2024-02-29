"use client";
import ContactForm from "@/components/Contacts/ContactForm";
import React from "react";

const page = () => {
  return (
    <div className="bg-frankBlue">
      <div className="mx-auto max-w-7xl pb-12  pt-8 lg:pt-14 px-6 ">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-4">
          <div className=" flex flex-col justify-evenly">
            <div className="w-2/3">
              <h2 className="mb-4 text-2xl lg:text-4xl font-curlfont text-start text-gray-900 dark:text-white">
                Contact Us
              </h2>
              <p className=" text-sm lg:text-base font-light text-start text-gray-500 dark:text-gray-400 ">
                Email, call or complete the form to learn how NinjaLig
                Technologies can solve your business problems.
              </p>

              <p className="text-sm lg:text-base pt-4 lg:pt-8 font-light text-start text-gray-500 dark:text-gray-400">
                <a href="mailto:franklinekihiu@gmail.com" target="_blank">
                  info@ninjaligtech.com
                </a>
              </p>

              <p className="text-sm lg:text-base pt-4 lg:pt-8 font-light text-start text-gray-500 dark:text-gray-400">
                <a href="tel:+254726101804">+254-726-101-804</a>
              </p>
            </div>

            <div className="w-full grid grid-cols-3 gap-2 ">
              <div className="hidden lg:block">
                <h1 className="text-black text-base lg:text-lg font-curlfont">
                  {" "}
                  Customer Support
                </h1>
                <p className="pt-2 lg:pt-4 text-darkgray text-sm lg:text-base font-curlfont text-start  ">
                  Our support team is available around the clock to address any
                  concerns or queries you may have.
                </p>
              </div>

              <div className="hidden lg:block">
                <h1 className="text-black text-base lg:text-lg font-curlfont">
                  {" "}
                  Feedback & Suggestions
                </h1>
                <p className="pt-2 lg:pt-4 text-darkgray text-sm lg:text-base font-curlfont text-start  ">
                  We value your feedback and are continuously working to improve
                  NinjaLig Technologies. Your input is crucial shaping our
                  future and therefore highly appreciated.
                </p>
              </div>

              <div className="hidden lg:block">
                <h1 className="text-black text-base lg:text-lg font-curlfont">
                  {" "}
                  Media Inquiries
                </h1>
                <p className="pt-2 lg:pt-4 text-darkgray text-sm lg:text-base font-curlfont text-start  ">
                  For media-related questions or press Inquiries, please contact
                  us at{" "}
                  <a href="mailto:franklinekihiu@gmail.com" target="_blank">
                    media@ninjaligtech.com
                  </a>{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="p-2 lg:p-8">
            <div className="bg-white rounded-2xl ">
              <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-2xl lg:text-4xl text-start tracking-tight font-curlfont text-gray-900 dark:text-white">
                  Get in Touch
                </h2>
                <p className="mb-8 lg:mb-14  text-sm lg:text-base text-start text-gray-500 dark:text-gray-400 tracking-tight ">
                  You can reach us anytime
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
