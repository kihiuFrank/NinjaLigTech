"use client";
import { useRouter } from "next/navigation";

const SignIn = () => {
  // Use the Logout method from the AuthContext
  const router = useRouter();

  const handleLogIn = async (e: any) => {
    e.preventDefault();
    try {
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
    }
    console.log("Redirected to login page");
  };

  return (
    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto  sm:pr-0">
      <div className="hidden lg:block">
        <button
          className="text-Blueviolet text-lg font-medium ml-9 py-5 px-8 transition duration-150 ease-in-out rounded-full bg-semiblueviolet hover:text-white hover:bg-Blueviolet"
          onClick={handleLogIn}
        >
          Log In / Sign Up
        </button>
      </div>
    </div>
  );
};

export default SignIn;
