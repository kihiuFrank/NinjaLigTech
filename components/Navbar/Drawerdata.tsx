import React from "react";
import Link from "next/link";
import SignInDialog from "./SignInDialog";
import LogOutDialog from "./userDialog";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import UserDialog from "./userDialog";

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: "Home", href: "/", current: true },
  { name: "Mentor", href: "#mentor", current: false },
  { name: "Group", href: "/home", current: false },
  { name: "Testimonial", href: "#testimonial", current: false },
  { name: "Games", href: "#games", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Data = () => {
  // Use the Logout method from the AuthContext
  const { logOut } = useAuth();
  const router = useRouter();

  const handleLogOut = async (e: any) => {
    e.preventDefault();
    try {
      await logOut();
    } catch (error: any) {
      console.log(error.message);
    }
    console.log("User Logged Out!");
  };

  const handleLogIn = async (e: any) => {
    e.preventDefault();
    try {
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
    }
    console.log("Redirected to login page");
  };

  const { user } = useAuth();

  return (
    <div className="rounded-md max-w-sm w-full mx-auto">
      <div className="flex-1 space-y-4 py-1">
        <div className="sm:block">
          <div className="space-y-1 px-5 pt-2 pb-3">
            {user.uid != null ? (
              <>
                <button
                  className="flex items-center text-md  my-8 font-medium text-gray-900 rounded-full hover:text-blue-600 dark:hover:text-blue-500 md:me-0 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-white"
                  type="button"
                >
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="w-16 h-16 me-2 rounded-full"
                    src={user.photoURL}
                    alt="user photo"
                  />
                  {user.displayName}
                </button>
              </>
            ) : (
              <></>
            )}

            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current
                    ? "text-black hover:opacity-100"
                    : "hover:text-black hover:opacity-100",
                  "py-1 text-lg font-normal opacity-75 block"
                )}
                aria-current={item.current ? "page" : undefined}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-4"></div>

            {/* AUTHENTICATION DIALOG */}

            {user.uid != null ? (
              <button
                onClick={handleLogOut}
                className="bg-semiblueviolet w-full hover:bg-Blueviolet hover:text-white text-Blueviolet font-medium my-2 py-2 px-4 rounded"
              >
                Log Out
              </button>
            ) : (
              <button
                onClick={handleLogIn}
                className="bg-semiblueviolet w-full hover:bg-Blueviolet hover:text-white text-Blueviolet font-medium my-2 py-2 px-4 rounded"
              >
                Log In / Sign Up
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;
