"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Newsletter = () => {
  const router = useRouter();

  const handleContact = () => {
    router.push("/contact");
  };
  return (
    <>
      {/* <div className="mx-auto max-w-2xl md:max-w-7xl sm:rounded-3xl testimonialbg"> */}
      <div className="mx-auto max-w-2xl md:max-w-7xl sm:rounded-3xl">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 md:grid-cols-12 xl:gap-x-8">
          <div className="col-span-12 bg-imagee">
            <div className="mb-10 mt-24 lg:mx-64 lg:my-24">
              <h3 className="text-4xl md:text-55xl text-center font-semibold text-white mb-3">
                Reach Us.
              </h3>
              <h3 className="text-base font-normal opacity-75 text-white text-center mb-8">
                Hit the button below and Contact Us for <br /> Free Consultation
              </h3>

              <div className="flex items-center justify-center pt-8 lg:pt-4 pb-8 lg:pb-4 ">
                <button
                  onClick={handleContact}
                  className="flex gap-2 p-3  bg-ultramarine hover:bg-gunmetalgray duration-150 ease-in-out shadow-2xl rounded-full text-gray-200 hover:text-white "
                >
                  GET FREE CONSULTATION
                  <Image
                    src={"/assets/newsletter/send.svg"}
                    alt="send-icon"
                    width={30}
                    height={30}
                    className="w-6 h-6"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
