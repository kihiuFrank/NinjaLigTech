"use client";
import { useAuth } from "@/context/AuthContext";
import React from "react";

const DropDownMenu = () => {
  // Use the Logout method from the AuthContext
  const { logOut, user } = useAuth();

  const handleLogOut = async (e: any) => {
    e.preventDefault();
    try {
      await logOut();
      console.log(user);
    } catch (error: any) {
      console.log(error.message);
    }
    console.log("User Logged Out!");
  };
  return (
    <div className="flex items-center justify-center pt-80">
      {/* Dropdown menu  */}
      <div
        id="dropdownAvatar"
        className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
      >
        <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
          <div>{user.displayName}</div>
          <div className="font-medium truncate">{user.email}</div>
        </div>
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownUserAvatarButton"
        >
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Settings
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Profile
            </a>
          </li>
        </ul>
        <div className="py-2">
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            onClick={handleLogOut}
          >
            Sign out
          </a>
        </div>
      </div>
    </div>
  );
};

export default DropDownMenu;
