"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { BiSolidRightArrowCircle } from "react-icons/bi";
import { FaReact, FaAndroid, FaApple, FaJava } from "react-icons/fa";
import { IoLogoJavascript, IoLogoIonic } from "react-icons/io";
import {
  SiSolidity,
  SiTailwindcss,
  SiBlockchaindotcom,
  SiFirebase,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const Projects = () => {
  const router = useRouter();

  const handleContact = () => {
    router.push("/contact");
  };

  const handleGaming = () => {
    router.push("/gaming");
  };

  return (
    <div id="home-section" className="bg-lightkblue  ">
      <div
        style={{
          backgroundImage: `url(/assets/services/bg04.png)`,
          height: "500px",
        }}
        className="bg-gray-500 bg-blend-multiply overflow-hidden  bg-cover bg-no-repeat p-6 lg:p-12 text-center flex items-center "
      >
        <div className=" mx-auto max-w-7xl   pt-4 lg:pt-8 px-0 lg:px-6 ">
          <div className=" flex flex-col justify-evenly ">
            <h1 className="text-white text-lg lg:text-2xl font-semibold ">
              Our Work
            </h1>
            <p className="text-gray-200 text-sm lg:text-lg font-curlfont tracking-wide text-start lg:text-start opacity-75 pt-8 lg:pt-12 px-2 md:px-32  ">
              Read about some of our best success stories where we transformed
              our clients&apos; ideas into a scalable and user-friendly product
              by beating all the challenges with our exceptional efforts
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white" id="pr-1">
        <div className="mx-auto max-w-7xl pb-12 pt-8 lg:pt-0 px-6  ">
          <div className="grid grid-cols-1 lg:grid-cols-12 space-x-1">
            <div className="col-span-6 flex flex-col justify-evenly">
              <div className="flex flex-shrink-0 items-center gap-2">
                <Image
                  width={100}
                  height={100}
                  className="h-10 w-10"
                  src={"/assets/projects/saveakidFavicon.ico"}
                  alt="design-logo"
                />
                <h1 className="text-midnightblue text-lg lg:text-2xl font-semibold ">
                  SaveAKid
                </h1>
              </div>

              <p className="text-charcoal text-sm lg:text-base font-curlfont tracking-wide text-start lg:text-start opacity-75 pt-2 lg:pt-2 ">
                SaveAKid is a donations platform aiming to provide support for
                children and young people each year by creating a space where
                charity organizations and children homes are connected with
                donors from all over the world.
              </p>

              <div className="flex flex-col justify-center p-4 gap-4">
                <p className="flex justify-center">Technology Stack</p>
                <div className="flex justify-center p-1 gap-4">
                  <div className="text-Blueviolet   hover:text-semiblueviolet">
                    <SiSolidity />
                  </div>
                  <div className="text-Blueviolet  hover:text-semiblueviolet">
                    <SiFirebase />
                  </div>
                  <div className="text-Blueviolet   hover:text-semiblueviolet">
                    <TbBrandNextjs />
                  </div>
                  <div className="text-Blueviolet   hover:text-semiblueviolet">
                    <FaReact />
                  </div>
                  <div className="text-Blueviolet  hover:text-semiblueviolet">
                    <IoLogoJavascript />
                  </div>
                  <div className="text-Blueviolet  hover:text-semiblueviolet">
                    <SiTailwindcss />
                  </div>
                  <div className="text-Blueviolet  hover:text-semiblueviolet">
                    <SiBlockchaindotcom />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-6 p-4 sm:p-10 flex justify-center ">
              <img
                className="rounded-lg "
                src="/assets/projects/projects01.png"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-paleblue " id="pr-2">
        <div className="mx-auto max-w-7xl pb-12 pt-8 lg:pt-0 px-6  ">
          <div className="grid grid-cols-1 lg:grid-cols-12 space-x-1">
            <div className="col-span-6 flex flex-col justify-evenly">
              <div className=" block lg:hidden ">
                <div className="flex flex-shrink-0 items-center gap-2">
                  <Image
                    width={100}
                    height={100}
                    className="h-10 w-10"
                    src={"/assets/projects/crowdFunding.svg"}
                    alt="design-logo"
                  />
                  <h1 className="text-midnightblue text-lg lg:text-2xl font-semibold ">
                    Crowdfunding Platform
                  </h1>
                </div>
              </div>
              <div className="col-span-6 p-4 sm:p-10 flex justify-center ">
                <img
                  className="rounded-lg "
                  src="/assets/projects/projects02.png"
                />
              </div>
            </div>

            <div className="col-span-6 p-4  flex flex-col justify-evenly  ">
              <div className=" hidden lg:block ">
                <div className="flex flex-shrink-0 items-center gap-2">
                  <Image
                    width={100}
                    height={100}
                    className="h-10 w-10"
                    src={"/assets/projects/crowdFunding.svg"}
                    alt="design-logo"
                  />
                  <h1 className="text-midnightblue text-lg lg:text-2xl font-semibold ">
                    Crowdfunding Platform
                  </h1>
                </div>
              </div>
              <p className="text-charcoal text-sm lg:text-base font-curlfont tracking-wide text-start lg:text-start opacity-75 pt-2 lg:pt-2 ">
                This is a Decentralized application (DAPP) that demonstrates an
                application for people to get funding for their projects or
                humanity use cases. Back-end parts (solidity) are located in
                web3 folder. Front-end parts are located in client folder. We
                used Thirdweb and Hardhat to create and deploy the dApp on
                Sepolia testnet. Thirdweb is a tool for creating, deploying, and
                managing dApps on the Ethereum blockchain and hardhat is a
                development environment for Ethereum smart contract development.
              </p>
              <div className="flex flex-col justify-center p-4 gap-4">
                <p className="flex justify-center">Technology Stack</p>
                <div className="flex justify-center p-1 gap-4">
                  <div className="text-Blueviolet  hover:text-semiblueviolet">
                    <SiBlockchaindotcom />
                  </div>
                  <div className="text-Blueviolet   hover:text-semiblueviolet">
                    <SiSolidity />
                  </div>
                  <div className="text-Blueviolet   hover:text-semiblueviolet">
                    <FaReact />
                  </div>
                  <div className="text-Blueviolet   hover:text-semiblueviolet">
                    <TbBrandNextjs />
                  </div>
                  <div className="text-Blueviolet  hover:text-semiblueviolet">
                    <IoLogoJavascript />
                  </div>
                  <div className="text-Blueviolet  hover:text-semiblueviolet">
                    <SiTailwindcss />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-blue" id="pr-1">
        <div className="mx-auto max-w-7xl pb-12 pt-8 lg:pt-0 px-6  ">
          <div className="grid grid-cols-1 lg:grid-cols-12 space-x-1">
            <div className="col-span-6 flex flex-col justify-evenly">
              <div className="flex flex-shrink-0 items-center gap-2">
                <Image
                  width={100}
                  height={100}
                  className="h-10 w-10"
                  src={"/assets/projects/ceo.ico"}
                  alt="design-logo"
                />
                <h1 className="text-midnightblue text-lg lg:text-2xl font-semibold ">
                  Kihiu&apos;s Profile
                </h1>
              </div>

              <p className="text-charcoal text-sm lg:text-base font-curlfont tracking-wide text-start lg:text-start opacity-75 pt-2 lg:pt-2 ">
                SaveAKid is a donations platform aiming to provide support for
                children and young people each year by creating a space where
                charity organizations and children homes are connected with
                donors from all over the world.
              </p>

              <div className="flex flex-col justify-center p-4 gap-4">
                <p className="flex justify-center">Technology Stack</p>
                <div className="flex justify-center p-1 gap-4">
                  <div className="text-Blueviolet   hover:text-semiblueviolet">
                    <TbBrandNextjs />
                  </div>
                  <div className="text-Blueviolet   hover:text-semiblueviolet">
                    <FaReact />
                  </div>
                  <div className="text-Blueviolet  hover:text-semiblueviolet">
                    <IoLogoJavascript />
                  </div>
                  <div className="text-Blueviolet  hover:text-semiblueviolet">
                    <SiTailwindcss />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-6 p-4 sm:p-10 flex justify-center ">
              <img
                className="rounded-lg "
                src="/assets/projects/projects03.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
