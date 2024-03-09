"use client";

import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import DropDownMenu from "./DropDownMenu";
import { usePathname, useRouter } from "next/navigation";

const ServicesDialog = () => {
  // Use the Logout method from the AuthContext
  const { user } = useAuth();
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    router.push("/services");
  };

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  const pathname = usePathname();

  return (
    <div className="absolute inset-y-0 right-0 flex items-center  sm:static sm:inset-auto ">
      <div
        className="hidden lg:block "
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button
          className={
            pathname == "/services"
              ? "active text-blue-700 flex items-center"
              : "flex items-center text-sm pe-1 font-medium text-gray-900 rounded-full hover:text-blue-600 dark:hover:text-blue-500 md:me-0 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-white"
          }
          type="button"
        >
          <span className="sr-only">Open user menu</span>
          Services
          <svg
            className="w-2.5 h-2.5 ms-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>

        {isDropdownVisible && (
          <div
            id="dropdownNavbar"
            className="bg-lightkblue flex items-center justify-center p-4  dropDownMenu absolute z-10  divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 w-2/3 "
          >
            <ul
              className="py-2 grid grid-cols-4 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownLargeButton"
            >
              <li>
                <a
                  href="#sv-1"
                  className="block px-4 py-2 md:hover:text-blue-700  dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Custom Mobile App Development Services
                </a>
              </li>
              <li>
                <a
                  href="#sv-2"
                  className="block px-4 py-2 md:hover:text-blue-700  dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Web App Development Services
                </a>
              </li>
              <li>
                <a
                  href="#sv-3"
                  className="block px-4 py-2 md:hover:text-blue-700  dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  MERN Stack Development Services
                </a>
              </li>

              <li>
                <a
                  href="#sv-4"
                  className="block px-4 py-2 md:hover:text-blue-700  dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  SaaS Development Services
                </a>
              </li>

              <li>
                <a
                  href="#sv-5"
                  className="block px-4 py-2 md:hover:text-blue-700  dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  MVP Development Services
                </a>
              </li>

              <li>
                <a
                  href="#sv-6"
                  className="block px-4 py-2 md:hover:text-blue-700  dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Browser Extension Development Services
                </a>
              </li>

              <li>
                <a
                  href="#sv-7"
                  className="block px-4 py-2 md:hover:text-blue-700  dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Desktop Application Development Services
                </a>
              </li>

              <li>
                <a
                  href="#sv-8"
                  className="block px-4 py-2 md:hover:text-blue-700  dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Chatbot Development Services
                </a>
              </li>

              <li>
                <a
                  href="#sv-9"
                  className="block px-4 py-2 md:hover:text-blue-700  dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Software Development Services
                </a>
              </li>

              <li>
                <a
                  href="#sv-10"
                  className="block px-4 py-2 md:hover:text-blue-700  dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  MEAN Stack Development Services
                </a>
              </li>

              <li>
                <a
                  href="#sv-11"
                  className="block px-4 py-2 md:hover:text-blue-700  dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Cross Platform Mobile App Development
                </a>
              </li>

              <li>
                <a
                  href="#sv-12"
                  className="block px-4 py-2 md:hover:text-blue-700  dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Industry-leading PWA Development Services
                </a>
              </li>

              <li>
                <a
                  href="#sv-13"
                  className="block px-4 py-2 md:hover:text-blue-700  dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Android Mobile App Development Services
                </a>
              </li>

              <li>
                <a
                  href="#sv-14"
                  className="block px-4 py-2 md:hover:text-blue-700  dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  iOS Mobile App Development Services
                </a>
              </li>

              <li>
                <a
                  href="#sv-15"
                  className="block px-4 py-2 md:hover:text-blue-700  dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Flutter Mobile App Development Services
                </a>
              </li>

              <li>
                <a
                  href="#sv-16"
                  className="block px-4 py-2 md:hover:text-blue-700  dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Ionic Mobile App Development Services
                </a>
              </li>

              <li>
                <a
                  href="#sv-17"
                  className="block px-4 py-2 md:hover:text-blue-700  dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Headless Marketplace Development Services
                </a>
              </li>

              <li>
                <a
                  href="#sv-18"
                  className="block px-4 py-2 md:hover:text-blue-700  dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Fintech App Development
                </a>
              </li>

              <li>
                <a
                  href="#sv-19"
                  className="block px-4 py-2 md:hover:text-blue-700  dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Our Process
                </a>
              </li>
            </ul>
          </div>
        )}

        {/* <div className="flex flex-wrap items-center justify-center flex-col gap-2 cursor-pointer ">
          <div className="flex flex-wrap flex-row gap-2 ">
            <img src={user.photoURL} className="w-12 h-12 rounded-full" />
            <p className=" text-base py-2  rounded-full   hover:text-Blueviolet text-[#333] font-bold">
              {user.displayName}
            </p>

            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            />
          </div>

          {/* <button
            className="text-Blueviolet text-lg font-medium  py-1 px-16  rounded-full bg-semiblueviolet hover:text-white hover:bg-Blueviolet"
            onClick={handleLogOut}
          >
            Log Out
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default ServicesDialog;
