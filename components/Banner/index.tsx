"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Banner = () => {
  const router = useRouter();

  const handleContact = () => {
    router.push("/contact");
  };

  const handleGaming = () => {
    router.push("/gaming");
  };

  return (
    <div id="home-section" className="bg-lightkblue  ">
      <div className="mx-auto max-w-7xl sm:pb-24 pt-8 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 space-x-1">
          <div className="col-span-6 flex flex-col justify-evenly">
            <div className="flex gap-2 mx-auto lg:mx-0">
              <Image
                src="/assets/banner/check.svg"
                alt="check-image"
                width={20}
                height={20}
              />
              <h3 className="text-kellygreen text-sm font-semibold text-center lg:text-start">
                Get 30% off on first deal
              </h3>
            </div>
            <h1 className="text-midnightblue text-2xl lg:text-4xl font-semibold text-center lg:text-start lh-120 pt-5 lg:pt-0">
              World-Class Digital Solutions <br />
              On-Time & In-Budget
            </h1>
            <h2 className="text-charcoal text-lg font-normal text-center lg:text-start opacity-75 pt-5 lg:pt-8">
              Being a top Mobile app and Web development company, we help
              Startups, Mid-Size, and Enterprise businesses to get their digital
              products done the right way on time, in budget.
            </h2>

            <div className="flex items-center justify-center pt-8 lg:pt-4 pb-8 lg:pb-4 ">
              <button
                onClick={handleContact}
                className="p-3 lg:p-5 bg-transparent hover:bg-ultramarine duration-150 ease-in-out shadow-2xl rounded-full text-gray-500 hover:text-white "
              >
                GET A QUOTE IN 24 HOURS
              </button>
            </div>

            <div className="relative flex py-5 items-center">
              <div className="flex-grow border-t border-gray-400"></div>
              <span className="flex-shrink mx-4 text-gray-400">Or</span>
              <div className="flex-grow border-t border-gray-400"></div>
            </div>

            <h3 className="text-charcoal text-lg font-normal text-center lg:text-start opacity-75 pt-0 lg:pt-0">
              Join NinjaTech Gaming (NTG), the leading gamers platform in Africa
              for online competitive games and compete for cash prizes.
            </h3>

            <div className="flex items-center justify-center pt-8 lg:pt-4 pb-8 lg:pb-4 ">
              <button
                onClick={handleGaming}
                className="p-3 lg:p-5 bg-transparent hover:bg-ultramarine duration-150 ease-in-out shadow-2xl rounded-full text-gray-500 hover:text-white "
              >
                JOIN OUR GAMERS COMMUNITY
              </button>
            </div>

            <div className="flex items-center justify-between grid-cols-3 pt-16 lg:pt-8">
              <div className="flex  ">
                <Image
                  src="/assets/banner/check-circle.svg"
                  alt="check-image"
                  width={30}
                  height={30}
                  className="smallImage"
                />
                <p className="text-[11px] sm:text-lg font-normal text-black">
                  Hire Developers
                </p>
              </div>
              <div className="flex ">
                <Image
                  src="/assets/banner/check-circle.svg"
                  alt="check-image"
                  width={30}
                  height={30}
                  className="smallImage"
                />
                <p className="text-[11px] sm:text-lg font-normal text-black">
                  Gaming Tournaments
                </p>
              </div>
              <div className="flex ">
                <Image
                  src="/assets/banner/check-circle.svg"
                  alt="check-image"
                  width={30}
                  height={30}
                  className="smallImage"
                />
                <p className="text-[11px] sm:text-lg font-normal text-black">
                  Community
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-6 p-4 sm:p-10 flex justify-center">
            <Image
              priority
              src="/assets/banner/mahila.png"
              alt="nothing"
              width={1000}
              height={805}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
