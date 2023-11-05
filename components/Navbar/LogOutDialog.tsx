"use client";
import { useRouter } from "next/navigation";
import { useAuth } from "../../context/AuthContext";

const LogOut = () => {
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

  return (
    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto  sm:pr-0">
      <div className="hidden lg:block">
        <button
          className="text-Blueviolet text-lg font-medium ml-9 py-5 px-16 transition duration-150 ease-in-out rounded-full bg-semiblueviolet hover:text-white hover:bg-Blueviolet"
          onClick={handleLogOut}
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default LogOut;
