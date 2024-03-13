import React from "react";
import Games from "@/components/Games/index";
import Disclaimer from "../legal/page";
import Link from "next/link";
import Image from "next/image";
import GamingBanner from "@/components/GamingBanner";
const page = () => {
  return (
    <div id="home-section">
      <GamingBanner />

      <Games />

      <div className="bg-paleblue">
        <div className="mx-auto max-w-7xl pb-12 pt-8 lg:pt-0  px-6 ">
          <div className="grid grid-cols-1 lg:grid-cols-12 space-x-1">
            <div className="col-span-6 flex flex-col justify-evenly">
              <h1 className="text-midnightblue text-lg lg:text-2xl font-semibold ">
                Tournaments.
              </h1>
              <h2 className="text-charcoal text-xs lg:text-sm font-normal text-start lg:text-start opacity-75 pt-2 lg:pt-0 ">
                We hold <span className="font-bold">Free Tournaments</span> and{" "}
                <span className="font-bold ">
                  Subscription Based-tournaments
                </span>
                . The subscription tournaments have cash Prizes while in the
                free tournaments, gamers compete with each other for fun.
                <br />
                <br />
                In the{" "}
                <span className="font-bold ">
                  Subscription Based-tournaments
                </span>
                , the tournaments are divided into;
                <ul>
                  <li>Legendary Division (95+ Squads)</li>
                  <li>Elite Division (90s Squads)</li>
                  <li>Pro Division (80s Squads)</li>
                  <li>Amateur Division (70s Squads)</li>
                  <li>Beginner Division (60s Squads)</li>
                </ul>
                <br />
                The subscription Fee for all tournaments is,
                <span className="font-bold "> Ksh: 100</span>
              </h2>

              <h1 className="text-midnightblue pt-2 lg:pt-0 text-lg lg:text-xl font-semibold ">
                Prizes.
              </h1>
              <h2 className="text-charcoal text-xs lg:text-sm font-normal text-start opacity-75 pt-2 lg:pt-0">
                Cash prizes are determined by the NinjaTech Gaming team
                depending on the number of subscribers in a tournament.
                <br /> <br />
                If you subscribe for a tournament and you don&apos;t win any
                Prizes we give you a{" "}
                <span className="font-bold "> 50% cash-back. </span>
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
