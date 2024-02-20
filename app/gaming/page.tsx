import React from "react";
import Games from "@/components/Games/index";
import Disclaimer from "../legal/page";
import Link from "next/link";
import Image from "next/image";

interface socialLinks {
  imgSrc: string;
  link: string;
  width: number;
}

const socialLinks: socialLinks[] = [
  {
    imgSrc: "/assets/socials/facebook.svg",
    link: "https://www.facebook.com/profile.php?id=61555054053442&mibextid=9R9pXO",
    width: 20,
  },
  {
    imgSrc: "/assets/socials/insta.svg",
    link: "https://www.instagram.com/ninjatech_gaming?igsh=c3oxaWw4ZjZsdTNr&utm_source=qr",
    width: 20,
  },
  {
    imgSrc: "/assets/socials/twitter.svg",
    link: "https://twitter.com/GamingNinjaTech",
    width: 20,
  },
  {
    imgSrc: "/assets/socials/whatsapp.svg",
    link: "https://chat.whatsapp.com/FQhWtNuwHll2bcSvO1ciJL",
    width: 20,
  },
  {
    imgSrc: "/assets/socials/youtube.svg",
    link: "https://www.youtube.com/channel/UCI5i7-nvkeaxfNWVM1-zA1g",
    width: 20,
  },
  {
    imgSrc: "/assets/socials/tiktok.svg",
    link: "https://www.tiktok.com/@ninjatech_gaming?_t=8j1l0I1xMc1&_r=1",
    width: 20,
  },
];
const page = () => {
  return (
    <div id="home-section">
      <div className="bg-lightkblue">
        <div className="mx-auto max-w-7xl pb-12  pt-8 lg:pt-14  px-6 ">
          <div className="grid grid-cols-1 lg:grid-cols-12 space-x-1">
            <div className="col-span-6  flex justify-center">
              <img
                src="/assets/gaming/ninjatechgaming/NinjatechGamingVerticalGradient.svg"
                alt="nothing"
                className=" w-2/3 md:w-1/2 lg:w-3/4  h-auto"
              />
            </div>

            <div className="col-span-6 flex flex-col justify-evenly">
              <h1 className="text-midnightblue text-2xl sm:text-4xl font-semibold text-start lg:text-start lh-120 pt-5 lg:pt-0">
                Reimagining the way people Game.
              </h1>
              <h2 className="text-charcoal text-xs lg:text-sm font-normal text-start lg:text-start opacity-75 pt-4 lg:pt-2">
                NinjaTech Gaming (NTG) is the leading platform for online
                competitive games where we provide excellent support and
                competitive environments for all our players. We are home to
                300+ gamers and over 7 gaming groups, each dedicated to bring
                together gamers with the same interests.
              </h2>

              <h3 className="text-charcoal text-xs lg:text-sm font-normal text-start lg:text-start opacity-75 pt-5 lg:pt-0">
                Our base is predominantly made up of competitive gamers and we
                pride ourselves on giving them the most competitive tournaments
                and matches as well as the best support in the industry.
                <br /> <br />
                At NTG, we hope to see you make a name for yourself in all our
                tournaments the way so many competitive players have! We
                prioritize community before company, company before team and
                team before individuals.
              </h3>

              <div className="text-charcoal text-lg font-normal flex justify-center lg:text-start opacity-90 pt-5 lg:pt-0 ">
                <div className="flex gap-2 md:gap-8 lg:gap-8">
                  {socialLinks.map((items, i) => (
                    <Link href={items.link} key={i}>
                      <div className="bg-white  h-6 lg:h-12  w-6 lg:w-12 shadow-xl text-base rounded-full flex items-center justify-center footer-icons hover:bg-semiblueviolet">
                        <Image
                          src={items.imgSrc}
                          alt={items.imgSrc}
                          width={items.width}
                          height={2}
                          className="sepiaa"
                        />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <Games />
      </div>

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
