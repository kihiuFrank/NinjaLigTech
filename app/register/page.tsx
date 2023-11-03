"use client";
import React, { useState } from "react";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/navigation";
import { useAuth } from "../../context/AuthContext";
import { RegistrationType } from "../../types/AuthTypes";
import { FiChevronLeft } from "react-icons/fi";
import NextLink from "next/link";

const page = () => {
  const [data, setData] = useState<RegistrationType>({
    email: "",
    password: "",
  });

  // Use the signUp method from the AuthContext
  const { signUp } = useAuth();
  const router = useRouter();

  const handleRegistration = async (e: any) => {
    e.preventDefault();
    try {
      await signUp(data.email, data.password);
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
    }
    console.log(data);
  };

  // Destructure data from the data object
  const { ...allData } = data;

  // Disable submit button until all fields are filled in
  const canSubmit = [...Object.values(allData)].every(Boolean);

  return (
    <>
      {/* mx-auto max-w-2xl md:max-w-7xl sm:rounded-3xl */}
      <div className="mx-auto max-w-2xl md:max-w-7xl sm:rounded-3xl w-full transform overflow-hidden rounded-2xl bg-white p-6 text-left align-center shadow-xl transition-all">
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-md space-y-8">
            <div>
              <img
                className="mx-auto h-12 w-auto"
                src="/assets/logo/logo.png"
                alt="Your Company"
              />
              <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                Register your account
              </h2>
            </div>
            <form
              className="mt-8 space-y-6"
              onSubmit={handleRegistration}
              action="#"
              method="POST"
            >
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="-space-y-px rounded-md shadow-sm">
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-grey500 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Email address"
                    pattern="[a-z0-9._+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    onChange={(e: any) => {
                      setData({
                        ...data,
                        email: e.target.value,
                      });
                    }}
                  />
                  <span className="mt-1 hidden text-sm text-red-400">
                    Please enter a valid email address.{" "}
                  </span>
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-grey500 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Password"
                    pattern=".{8,}"
                    onChange={(e: any) => {
                      setData({
                        ...data,
                        password: e.target.value,
                      });
                    }}
                  />
                  <span className="mt-1 hidden text-sm text-red-400">
                    Password must be at least 8 characters.{" "}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Remember me
                  </label>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={!canSubmit}
                  className="group relative flex w-full justify-center rounded-md border border-transparent bg-Blueviolet py-2 px-4 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <LockClosedIcon
                      className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                      aria-hidden="true"
                    />
                  </span>
                  Register Now
                </button>
              </div>

              <div className="text-md flex items-center justify-center text-center font-medium text-gray-500 dark:text-gray-300">
                <NextLink
                  href="/"
                  className="flex w-32 items-center justify-between text-gray-500 hover:text-gray-800 hover:underline dark:text-gray-200 dark:hover:text-white"
                >
                  <FiChevronLeft className="text-xl" /> Login Instead
                </NextLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
