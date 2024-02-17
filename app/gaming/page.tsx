import React from "react";
import Games from "@/components/Games/index";
import Disclaimer from "../legal/page";

const page = () => {
  return (
    <div id="home-section">
      <div className="bg-lightkblue">
        <div className="mx-auto max-w-7xl pb-12    px-6 ">
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
                NinjaTech Gaming is home to 300+ gamers and over 7 gaming
                groups, each dedicated to bring together gamers with the same
                interests.
              </h2>

              <h3 className="text-charcoal text-lg font-normal text-center lg:text-start opacity-75 pt-5 lg:pt-0">
                We consider our impact on the gaming world, strive to respect
                everyone&apos;s best interests, and communicate authentically.
                We prioritize community before company, company before team and
                team before individuals.
              </h3>

              <div className="text-charcoal text-lg font-normal text-center lg:text-start opacity-75 pt-5 lg:pt-0 ">
                <a
                  href="https://chat.whatsapp.com/FQhWtNuwHll2bcSvO1ciJL"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-md"
                >
                  Join Our Whatsapp Community.
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <Games />
      </div>

      <div className="bg-paleblue">
        <div className="mx-auto max-w-7xl pb-12 pt-8   px-6 ">
          <div className="grid grid-cols-1 lg:grid-cols-12 space-x-1">
            <div className="col-span-6 flex flex-col justify-evenly">
              <h1 className="text-midnightblue text-4xl lg:text-55xl font-semibold mb-5 sm:mb-0">
                Tournaments.
              </h1>
              <h2 className="text-charcoal text-md font-normal text-center lg:text-start opacity-75 pt-05 lg:pt-0">
                NinjaTech Gaming is the leading platform for online competitive
                games where we provide excellent support and competitive
                environments for all our players.
                <br /> <br />
                Our base is predominantly made up of competitive gamers and we
                pride ourselves on giving them the most competitive tournaments
                and matches as well as the best support in the industry.
                <br /> <br />
                Here at NTG, we hope to see you make a name for yourself in all
                our tournaments the way so many competitive players have!
              </h2>
            </div>

            <div className="col-span-6 p-4 sm:p-10 flex justify-center ">
              <img
                className="rounded-lg w-3/4"
                src="/assets/gaming/ninjatechgaming/poster.png"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <Disclaimer />
      </div>
    </div>
  );
};

export default page;
