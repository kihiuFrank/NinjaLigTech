import Image from "next/image";

const Banner = () => {
  return (
    <div id="home-section" className="bg-lightkblue pt-20 ">
      <div className="mx-auto max-w-7xl pt-20 sm:pb-24 px-6">
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
            <h1 className="text-midnightblue text-4xl sm:text-5xl font-semibold text-center lg:text-start lh-120 pt-5 lg:pt-0">
              Taking care of all your engineering needs.
            </h1>
            <h2 className="text-charcoal text-lg font-normal text-center lg:text-start opacity-75 pt-5 lg:pt-0">
              Hire the best Software Developers and consultants ready to build
              solutions for your business.
            </h2>

            <div className="relative flex py-5 items-center">
              <div className="flex-grow border-t border-gray-400"></div>
              <span className="flex-shrink mx-4 text-gray-400">Or</span>
              <div className="flex-grow border-t border-gray-400"></div>
            </div>

            <h3 className="text-charcoal text-lg font-normal text-center lg:text-start opacity-75 pt-0 lg:pt-0">
              Join our gaming community and compete for cash prizes. For more
              info, join our{" "}
              <a
                className="text-kellygreen text-md font-semibold text-center lg:text-start"
                href="https://chat.whatsapp.com/FQhWtNuwHll2bcSvO1ciJL"
              >
                Whatsapp Community.
              </a>
            </h3>

            <div className="relative text-white focus-within:text-white flex flex-row-reverse input-shadow rounded-full pt-16 lg:pt-8">
              <input
                type="Email address"
                name="q"
                className="py-6 lg:py-8 text-lg w-full text-black opacity-75 rounded-full pl-8 focus:outline-none focus:text-black"
                placeholder="search..."
                autoComplete="off"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pt-16 lg:pt-8">
                <button
                  type="submit"
                  className="p-3 lg:p-5 focus:outline-none focus:shadow-outline bg-ultramarine hover:bg-midnightblue duration-150 ease-in-out rounded-full"
                >
                  <Image
                    src={"/assets/banner/search.svg"}
                    alt="inputicon"
                    width={30}
                    height={30}
                  />
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between gap-4 pt-16 lg:pt-8">
              <div className="flex gap-1 ">
                <Image
                  src="/assets/banner/check-circle.svg"
                  alt="check-image"
                  width={30}
                  height={30}
                  className="smallImage"
                />
                <p className="text-sm sm:text-lg font-normal text-black">
                  Hire Developers
                </p>
              </div>
              <div className="flex gap-1 ">
                <Image
                  src="/assets/banner/check-circle.svg"
                  alt="check-image"
                  width={30}
                  height={30}
                  className="smallImage"
                />
                <p className="text-sm sm:text-lg font-normal text-black">
                  Subscribe for Gaming Tournaments
                </p>
              </div>
              <div className="flex gap-1">
                <Image
                  src="/assets/banner/check-circle.svg"
                  alt="check-image"
                  width={30}
                  height={30}
                  className="smallImage"
                />
                <p className="text-sm sm:text-lg font-normal text-black">
                  Join Ninja Community
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-6 flex justify-center">
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
