"use client";
import { useAuth } from "../../context/AuthContext";

const ComingSoon = () => {
  const { user } = useAuth();
  return (
    <div>
      <div className="min-h-screen flex flex-col justify-center items-center bg-lightkblue">
        <img
          src={user.photoURL}
          alt="Logo"
          className="object-cover w-40 h-40 mb-8 rounded-full"
        />
        <h1 className="text-2xl sm:text-4xl font-bold mb-4">Coming Soon</h1>
        <p className="text-sm sm:text-lg mb-8 px-4 md:px-0">
          We're working hard to bring you something awesome. Stay tuned!
        </p>
        <div className="flex justify-center items-center space-x-4">
          <a
            href="/"
            className="bg-blue-500 hover:bg-blue-600 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-md"
          >
            Learn More
          </a>
          <a
            href="/contact"
            className="bg-gray-500 hover:bg-gray-600 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-md"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
