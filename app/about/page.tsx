import React from "react";
import ComingSoon from "../../components/ComingSoon/ComingSoon";

import Games from "@/components/Games/index";
import Disclaimer from "../legal/page";
import Link from "next/link";
import Image from "next/image";
import Mentor from "@/components/Mentor";

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

// <div>
//   <ComingSoon />
// </div>

const page = () => {
  return (
    <div id="home-section">
      <div
        style={{
          backgroundImage: `url(/assets/about/about.jpg)`,
          height: "400px",
        }}
        className="bg-gray-500 bg-blend-multiply overflow-hidden  bg-cover bg-no-repeat p-12 text-center "
      >
        <div className=" mx-auto max-w-7xl   pt-4 lg:pt-8  px-6 ">
          <div className=" flex flex-col justify-evenly ">
            <h1 className="text-white text-lg lg:text-2xl font-semibold ">
              About Us
            </h1>
            <p className="text-gray-200 text-sm lg:text-lg font-curlfont tracking-wide text-start lg:text-start opacity-75 pt-8 lg:pt-12 px-2 md:px-32  ">
              NinjaLigTech is the partner of choice for building web-based and
              mobile app products for businesses of all sizes. Should they be
              scaled-up or developed from scratch - we will manage with it.
              <br />
              <br />
              Besides programming, our service includes user experience, graphic
              design and project management consultancies.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white ">
        <div className="mx-auto max-w-7xl pb-12 pt-8 lg:pt-0 px-6  ">
          <div className="grid grid-cols-1 lg:grid-cols-12 space-x-1">
            <div className="col-span-6 flex flex-col justify-evenly">
              <h1 className="text-midnightblue text-lg lg:text-2xl font-semibold ">
                Our Vision
              </h1>
              <p className="text-charcoal text-sm lg:text-lg font-curlfont tracking-wide text-start lg:text-start opacity-75 pt-2 lg:pt-2 ">
                Our belief in creating tangible value for our customers is what
                we think is different about NINJALIG TECHNOLOGIES. Our attention
                to detail and quality is unmatched in the industry. We're not
                just a resource provider. We value our customers' success as
                much as our own - sharing development risk, so that they can be
                bold in their adoption of new technologies.
              </p>
            </div>

            <div className="col-span-6 p-4 sm:p-10 flex justify-center ">
              <img className="rounded-lg " src="/assets/about/bg03.png" />
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <Mentor />
      </div>
    </div>
  );
};

export default page;
