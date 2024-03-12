"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

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

const GamingBanner = () => {
  const router = useRouter();

  const handleContact = () => {
    router.push("/contact");
  };

  const handleGaming = () => {
    router.push("/gaming");
  };

  return (
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
              competitive environments for all our players. We are home to 300+
              gamers and over 7 gaming groups, each dedicated to bring together
              gamers with the same interests.
            </h2>

            <h3 className="text-charcoal text-xs lg:text-sm font-normal text-start lg:text-start opacity-75 pt-5 lg:pt-0">
              Our base is predominantly made up of competitive gamers and we
              pride ourselves on giving them the most competitive tournaments
              and matches as well as the best support in the industry.
              <br /> <br />
              At NTG, we hope to see you make a name for yourself in all our
              tournaments the way so many competitive players have! We
              prioritize community before company, company before team and team
              before individuals.
              <br /> <br />
              Join our gaming community and compete for cash prizes. For more
              info, join our{" "}
              <a
                className="text-kellygreen text-md font-semibold text-center lg:text-start"
                href="https://chat.whatsapp.com/FQhWtNuwHll2bcSvO1ciJL"
              >
                Whatsapp Community,
              </a>{" "}
              and other socials below.
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
  );
};

export default GamingBanner;
