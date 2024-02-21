"use client";
import ContactForm from "@/components/Contacts/ContactForm";
import React from "react";

const page = () => {
  return (
    <div className="bg-frankBlue">
      <div className="mx-auto max-w-7xl pb-12  pt-8 lg:pt-14 px-6 ">
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-4">
          <div className="">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
              Contact Us
            </h2>
            <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
              Got a technical issue? Want to send feedback about a beta feature?
              Need details about our Business plan? Let us know.
            </p>
          </div>

          <div className="p-8">
            <div className="bg-white rounded-2xl ">
              <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-2xl lg:text-4xl text-start tracking-tight font-semibold text-gray-900 dark:text-white">
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
