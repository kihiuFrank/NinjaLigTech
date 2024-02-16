import React from "react";
import Games from "@/components/Games/index";
import Image from "next/image";

const page = () => {
  return (
    <div id="home-section" className=" pt-20  ">
      <div className="mx-auto max-w-7xl pb-12 pt-8   px-6 ">
        <div className="grid grid-cols-1 lg:grid-cols-12 space-x-1">
          <div className="col-span-6  flex justify-center">
            <img
              src="/assets/gaming/ninjatechgaming/NinjatechGamingVerticalGradient.svg"
              alt="nothing"
              className=" w-2/3 md:w-1/2 lg:w-3/4  h-auto"
            />
          </div>

          <div className="col-span-6 flex flex-col justify-evenly">
            <h1 className="text-midnightblue text-4xl sm:text-5xl font-semibold text-center lg:text-start lh-120 pt-5 lg:pt-0">
              Reimagining the way people Game.
            </h1>
            <h2 className="text-charcoal text-lg font-normal text-center lg:text-start opacity-75 pt-5 lg:pt-0">
              NinjaTech Gaming is home to 300+ gamers and over 7 game clans each
              dedicated to bring together gamers with the same interests.
            </h2>

            <h3 className="text-charcoal text-lg font-normal text-center lg:text-start opacity-75 pt-5 lg:pt-0">
              We consider our impact on the gaming world, strive to respect
              everyone's best interests, and communicate authentically. We
              prioritize community before company, company before team and team
              before individuals.
            </h3>

            <h4 className="text-charcoal text-lg font-normal text-center lg:text-start opacity-75 pt-5 lg:pt-0 ">
              Join our gaming community and compete for cash prizes. For more
              info, join our{" "}
              <a
                className="text-kellygreen text-md font-semibold text-center lg:text-start"
                href="https://chat.whatsapp.com/FQhWtNuwHll2bcSvO1ciJL"
              >
                Whatsapp Community.
              </a>
            </h4>
          </div>
        </div>
      </div>

      <div className="bg-lightkblue">
        <Games />
      </div>
    </div>
  );
};

export default page;
