"use client";

import React, { useState, useRef } from "react";

import emailjs from "@emailjs/browser";
import { useRouter } from "next/navigation";
import Spinner from "@/components/Spinner/Spinner";

import {
  PhoneInput,
  defaultCountries,
  parseCountry,
} from "react-international-phone";
import "react-international-phone/style.css";
import { PhoneNumberUtil } from "google-libphonenumber";

const phoneUtil = PhoneNumberUtil.getInstance();

const isPhoneValid = (phone) => {
  try {
    return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone));
  } catch (error) {
    return false;
  }
};
// const countries = defaultCountries.filter((country) => {
//   const { iso2 } = parseCountry(country);
//   return ["us", "ua", "gb"].includes(iso2);
// });

const ContactForm = () => {
  const router = useRouter();
  const form = useRef();

  const [phone, setPhone] = useState("");
  const isValid = isPhoneValid(phone);
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    setIsLoading(true);
    e.preventDefault(); // prevents the page from reloading when you hit “Send”

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          // show the user a success message

          alert("Form submitted successfully.");

          console.log("form submitted successfully", result.text);

          router.push("/");
          setIsLoading(false);
        },
        (error) => {
          // show the user an error
          error("Error while submitting form, please try again");

          console.log("form submission failure", error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="space-y-8">
      {isLoading && <Spinner />}
      <div className="grid grid-cols-2 gap-4  w-full">
        <div className="col-span-1">
          <input
            type="text"
            id="first_name"
            name="first_name"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder="First name"
            required
          />
        </div>

        <div className="col-span-1">
          <input
            type="text"
            id="last_name"
            name="last_name"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder="Last name"
            required
          />
        </div>
      </div>

      <div className="relative">
        <input
          type="email"
          id="email"
          name="email"
          className="pl-10 pr-4 py-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
          placeholder=" Your email"
          required
        />
        <div
          className="absolute inset-y-0 left-0 pl-3  
      flex items-center  opacity-70
      pointer-events-none"
        >
          <img
            src="/assets/socials/email.svg"
            alt="email"
            width={20}
            height={20}
          />
        </div>
      </div>

      <div className="">
        <div className="border-blue">
          <PhoneInput
            id="contact"
            name="contact"
            defaultCountry="ke"
            value={phone}
            onChange={(phone) => setPhone(phone)}
            //countries={countries}
            inputProps={{
              required: true,
              autoFocus: true,
              className:
                "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-1.9  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light",
            }}
          />
        </div>
        {!isValid && (
          <div className="text-xs" style={{ color: "red" }}>
            Enter a valid phone no!
          </div>
        )}
      </div>

      <div className="sm:col-span-2">
        <textarea
          id="message"
          name="message"
          rows={6}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="How can we help?"
          required
        ></textarea>
      </div>

      <div className="flex flex-col items-center text-center text-xs">
        {!isValid ? (
          <button
            disabled
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-full bg-semiblueviolet     w-full  focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:focus:ring-primary-800"
          >
            Send message
          </button>
        ) : (
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-full bg-Blueviolet  w-full hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Send message
          </button>
        )}

        <p className="opacity-80 pt-2 px-14">
          By contacting us, you agree to our
          <span className="font-semibold"> Terms of service</span> and{" "}
          <span className="font-semibold"> Privacy Policy</span>
        </p>
      </div>
    </form>
  );
};

export default ContactForm;
