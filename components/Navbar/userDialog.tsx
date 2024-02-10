"use client";

import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import DropDownMenu from "./DropDownMenu";

const UserDialog = () => {
  // Use the Logout method from the AuthContext
  const { user } = useAuth();
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <div className="absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto">
      <div className="hidden lg:block ">
        <button
          className="flex items-center text-sm pe-1 font-medium text-gray-900 rounded-full hover:text-blue-600 dark:hover:text-blue-500 md:me-0 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-white"
          type="button"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <span className="sr-only">Open user menu</span>
          <img
            className="w-10 h-10 me-2 rounded-full"
            src={user.photoURL}
            alt="user photo"
          />
          {user.displayName}
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

        {isDropdownVisible && <DropDownMenu />}

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

export default UserDialog;
