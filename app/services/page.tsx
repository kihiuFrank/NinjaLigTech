"use client";
import React from "react";
import ComingSoon from "../../components/ComingSoon/ComingSoon";

import Games from "@/components/Games/index";
import Disclaimer from "../nlg-legal-disclaimer/page";
import Link from "next/link";
import Image from "next/image";
import Mentor from "@/components/Mentor";
import { BiSolidRightArrowCircle } from "react-icons/bi";
import { FaReact, FaAndroid, FaApple, FaJava } from "react-icons/fa";
import { IoLogoJavascript, IoLogoIonic } from "react-icons/io";
import { SiFlutter, SiFirebase } from "react-icons/si";

const page = () => {
  return (
    <div id="home-section">
      <div
        style={{
          backgroundImage: `url(/assets/services/bg02.png)`,
          height: "500px",
        }}
        className="bg-gray-500 bg-blend-multiply overflow-hidden  bg-cover bg-no-repeat p-6 lg:p-12 text-center flex items-center "
      >
        <div className=" mx-auto max-w-7xl   pt-4 lg:pt-8 px-0 lg:px-6 ">
          <div className=" flex flex-col justify-evenly ">
            <h1 className="text-white text-lg lg:text-2xl font-semibold ">
              You Envision, We Deliver
            </h1>
            <p className="text-gray-200 text-sm lg:text-lg font-curlfont tracking-wide text-start lg:text-start opacity-75 pt-8 lg:pt-12 px-2 md:px-32  ">
              NinjaLig Technologies is an evolving family of experienced,
              dedicated, determined, and skilled resources who strives to see
              you and your product grow and achieve new heights.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white" id="sv-1">
        <div className="mx-auto max-w-7xl pb-12 pt-8 lg:pt-0 px-6  ">
          <div className="grid grid-cols-1 lg:grid-cols-12 space-x-1">
            <div className="col-span-6 flex flex-col justify-evenly">
              <h1 className="text-midnightblue text-lg lg:text-2xl font-semibold ">
                Our Custom Mobile App Development Services
              </h1>
              <p className="text-charcoal text-sm lg:text-base font-curlfont tracking-wide text-start lg:text-start opacity-75 pt-2 lg:pt-2 ">
                There are so many ways to build mobile apps in the market, and
                we happen to be experts in some of the best technologies to
                craft custom, efficient, and engaging mobile applications. We
                use high-end, latest technologies for building attractive,
                user-friendly, and widely accepted iOS and Android mobile
                applications. We have served B2B, B2E, B2C mobile app
                requirements of our clients from various industries. Our experts
                carry out the process of creating applications, from the design
                to clickable prototypes, that will help understand the needs of
                the market and its potential users. Then, our development team
                build robust, secure, scalable mobile solutions, and connected
                web platforms.
              </p>

              <div className="flex justify-center p-4 gap-4">
                <div className="text-Blueviolet   hover:text-semiblueviolet">
                  <FaAndroid />
                </div>
                <div className="text-Blueviolet  hover:text-semiblueviolet">
                  <SiFirebase />
                </div>
                <div className="text-Blueviolet  hover:text-semiblueviolet">
                  <FaApple />
                </div>
                <div className="text-Blueviolet  hover:text-semiblueviolet">
                  <FaJava />
                </div>
                <div className="text-Blueviolet   hover:text-semiblueviolet">
                  <FaReact />
                </div>
                <div className="text-Blueviolet  hover:text-semiblueviolet">
                  <IoLogoJavascript />
                </div>
                <div className="text-Blueviolet   hover:text-semiblueviolet">
                  <SiFlutter />
                </div>
                <div className="text-Blueviolet   hover:text-semiblueviolet">
                  <IoLogoIonic />
                </div>
              </div>
            </div>

            <div className="col-span-6 p-4 sm:p-10 flex justify-center ">
              <img className="rounded-lg " src="/assets/services/img01.png" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-paleblue " id="sv-2">
        <div className="mx-auto max-w-7xl pb-12 pt-8 lg:pt-0 px-6  ">
          <div className="grid grid-cols-1 lg:grid-cols-12 space-x-1">
            <div className="col-span-6 flex flex-col justify-evenly">
              <h1 className=" block lg:hidden text-midnightblue text-lg lg:text-2xl font-semibold">
                Our Web App Development Services
              </h1>
              <div className="col-span-6 p-4 sm:p-10 flex justify-center ">
                <img className="rounded-lg " src="/assets/services/img02.png" />
              </div>
            </div>

            <div className="col-span-6 p-4  flex flex-col justify-evenly  ">
              <h1 className="hidden lg:block text-midnightblue text-lg lg:text-2xl font-semibold ">
                Our Web App Development Services
              </h1>
              <p className="text-charcoal text-sm lg:text-base font-curlfont tracking-wide text-start lg:text-start opacity-75 pt-2 lg:pt-2 ">
                We take pride in our ability to deliver the best and
                cost-effective custom web design and development solutions. We
                create unique websites, web applications, admin panels, web
                tools, etc., for global businesses, from start-ups to big
                business giants. We turned their ideas into reality. We have the
                capability to provide solutions like UI/UX designs, Frontend,
                and Backend of Web Applications, Enterprise Software, CMS Sites,
                E-commerce platforms, etc. We build elegant, secure, and
                scalable web solutions that achieve actual business goals and
                leave a long-lasting impression on customers.
              </p>
              <div className="flex justify-center p-4 gap-4">
                <div className="text-Blueviolet   hover:text-semiblueviolet">
                  <FaAndroid />
                </div>
                <div className="text-Blueviolet  hover:text-semiblueviolet">
                  <SiFirebase />
                </div>
                <div className="text-Blueviolet  hover:text-semiblueviolet">
                  <FaApple />
                </div>
                <div className="text-Blueviolet  hover:text-semiblueviolet">
                  <FaJava />
                </div>
                <div className="text-Blueviolet   hover:text-semiblueviolet">
                  <FaReact />
                </div>
                <div className="text-Blueviolet  hover:text-semiblueviolet">
                  <IoLogoJavascript />
                </div>
                <div className="text-Blueviolet   hover:text-semiblueviolet">
                  <SiFlutter />
                </div>
                <div className="text-Blueviolet   hover:text-semiblueviolet">
                  <IoLogoIonic />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-blue " id="sv-3">
        <div className="mx-auto max-w-7xl pb-12 pt-8 lg:pt-0 px-6  ">
          <div className="grid grid-cols-1 lg:grid-cols-12 space-x-1">
            <div className="col-span-6 flex flex-col justify-evenly">
              <h1 className="text-midnightblue text-lg lg:text-2xl font-semibold ">
                Our MERN Stack Development Services
              </h1>
              <p className="text-charcoal text-sm lg:text-base font-curlfont tracking-wide text-start lg:text-start opacity-75 pt-2 lg:pt-2 ">
                We call ourselves as MERN Stack experts and using MERN stack, we
                have developed some of the most complex, challenging, and custom
                web applications with multiple features. We have great knowledge
                and experience in using technologies that fall under MERN stack
                which are MongoDB, ExpressJS, React.js, and Node.js. We cater to
                our clients&apos; business-specific requirements using our best
                MERN stack resources and build them solutions that will upscale
                their businesses.
              </p>

              <div className="flex justify-center p-4 gap-4">
                <div className="text-Blueviolet   hover:text-semiblueviolet">
                  <FaAndroid />
                </div>
                <div className="text-Blueviolet  hover:text-semiblueviolet">
                  <SiFirebase />
                </div>
                <div className="text-Blueviolet  hover:text-semiblueviolet">
                  <FaApple />
                </div>
                <div className="text-Blueviolet  hover:text-semiblueviolet">
                  <FaJava />
                </div>
                <div className="text-Blueviolet   hover:text-semiblueviolet">
                  <FaReact />
                </div>
                <div className="text-Blueviolet  hover:text-semiblueviolet">
                  <IoLogoJavascript />
                </div>
                <div className="text-Blueviolet   hover:text-semiblueviolet">
                  <SiFlutter />
                </div>
                <div className="text-Blueviolet   hover:text-semiblueviolet">
                  <IoLogoIonic />
                </div>
              </div>
            </div>

            <div className="col-span-6 p-4 sm:p-10 flex justify-center ">
              <img className="rounded-lg " src="/assets/services/img03.png" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white " id="sv-4">
        <div className="mx-auto max-w-7xl pb-12 pt-8 lg:pt-0 px-6  ">
          <div className="grid grid-cols-1 lg:grid-cols-12 space-x-1">
            <div className="col-span-6 flex flex-col justify-evenly">
              <h1 className=" block lg:hidden text-midnightblue text-lg lg:text-2xl font-semibold">
                Our SaaS Development Services
              </h1>
              <div className="col-span-6 p-4 sm:p-10 flex justify-center ">
                <img className="rounded-lg " src="/assets/services/img04.png" />
              </div>
            </div>

            <div className="col-span-6 p-4  flex flex-col justify-evenly  ">
              <h1 className="hidden lg:block text-midnightblue text-lg lg:text-2xl font-semibold ">
                Our SaaS Development Services
              </h1>
              <p className="text-charcoal text-sm lg:text-base font-curlfont tracking-wide text-start lg:text-start opacity-75 pt-2 lg:pt-2 ">
                Groovy has transformed startups and their cloud journeys by
                developing them highly scalable and secure solutions that can
                operate at high speed and efficiency. We have the ability to
                offer the best and fitting SAAS Development solutions including
                integrations and customizations as per the business-specific
                requirements. We have offered and developed several
                cost-effective SaaS-based solutions in our journey of more than
                5 years for businesses from various industrial domains and
                helped them transform their activities to whole another level.
              </p>
              <div className="flex justify-center p-4 gap-4">
                <div className="text-Blueviolet   hover:text-semiblueviolet">
                  <FaAndroid />
                </div>
                <div className="text-Blueviolet  hover:text-semiblueviolet">
                  <SiFirebase />
                </div>
                <div className="text-Blueviolet  hover:text-semiblueviolet">
                  <FaApple />
                </div>
                <div className="text-Blueviolet  hover:text-semiblueviolet">
                  <FaJava />
                </div>
                <div className="text-Blueviolet   hover:text-semiblueviolet">
                  <FaReact />
                </div>
                <div className="text-Blueviolet  hover:text-semiblueviolet">
                  <IoLogoJavascript />
                </div>
                <div className="text-Blueviolet   hover:text-semiblueviolet">
                  <SiFlutter />
                </div>
                <div className="text-Blueviolet   hover:text-semiblueviolet">
                  <IoLogoIonic />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-paleblue " id="sv-5">
        <div className="mx-auto max-w-7xl pb-12 pt-8 lg:pt-0 px-6  ">
          <div className="grid grid-cols-1 lg:grid-cols-12 space-x-1">
            <div className="col-span-6 flex flex-col justify-evenly">
              <h1 className="text-midnightblue text-lg lg:text-2xl font-semibold ">
                Our MVP Development Services
              </h1>
              <p className="text-charcoal text-sm lg:text-base font-curlfont tracking-wide text-start lg:text-start opacity-75 pt-2 lg:pt-2 ">
                On using us to develop your Minimum Viable Product (MVP), we
                make sure that you have all the right information, suggestions,
                alternate solutions for building a product that&apos;s
                accurately right for your customers and their needs. We start
                with analyzing ideas, make a plan, design a prototype, and then
                build a product that is scalable, easily customizable, and
                customer-centric. Our goal is to build a product with right
                amount of efforts and to achieve maximum validation and
                appreciation from the market. We also have a SEO, SMM, and
                marketing team that does wonders while launching products,
                post-lunch product and features marketing using the most
                effective and best-in-market approaches.
              </p>

              <div className="flex justify-center p-4 gap-4">
                <div className="text-Blueviolet   hover:text-semiblueviolet">
                  <FaAndroid />
                </div>
                <div className="text-Blueviolet  hover:text-semiblueviolet">
                  <SiFirebase />
                </div>
                <div className="text-Blueviolet  hover:text-semiblueviolet">
                  <FaApple />
                </div>
                <div className="text-Blueviolet  hover:text-semiblueviolet">
                  <FaJava />
                </div>
                <div className="text-Blueviolet   hover:text-semiblueviolet">
                  <FaReact />
                </div>
                <div className="text-Blueviolet  hover:text-semiblueviolet">
                  <IoLogoJavascript />
                </div>
                <div className="text-Blueviolet   hover:text-semiblueviolet">
                  <SiFlutter />
                </div>
                <div className="text-Blueviolet   hover:text-semiblueviolet">
                  <IoLogoIonic />
                </div>
              </div>
            </div>

            <div className="col-span-6 p-4 sm:p-10 flex justify-center ">
              <img className="rounded-lg " src="/assets/services/img05.png" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-blue " id="sv-6">
        <div className="mx-auto max-w-7xl pb-12 pt-8 lg:pt-0 px-6  ">
          <div className="grid grid-cols-1 lg:grid-cols-12 space-x-1">
            <div className="col-span-6 flex flex-col justify-evenly">
              <h1 className=" block lg:hidden text-midnightblue text-lg lg:text-2xl font-semibold">
                Our Browser Extension Development Services
              </h1>
              <div className="col-span-6 p-4 sm:p-10 flex justify-center ">
                <img className="rounded-lg " src="/assets/services/img06.png" />
              </div>
            </div>

            <div className="col-span-6 p-4  flex flex-col justify-evenly  ">
              <h1 className="hidden lg:block text-midnightblue text-lg lg:text-2xl font-semibold ">
                Our Browser Extension Development Services
              </h1>
              <p className="text-charcoal text-sm lg:text-base font-curlfont tracking-wide text-start lg:text-start opacity-75 pt-2 lg:pt-2 ">
                With the help of the extensions, a new revolution has come up in
                the manner in which a browser connects with the users. They can
                be built using technologies that are often used in building
                websites or web applications like JavaScript, HTML, CSS, etc.
                The only difference in building Chrome extensions is that they
                are way quicker, secure, and better. At Groovy, we have
                resources with good experience and expertise in developing
                custom Chrome extensions to help clients from all kind of
                industries, whether it is a start up or an enterprise, with
                different aspects of their day-to-day life. You are welcome at
                Groovy to select, assess, and hire the best and experienced
                resource(s) to build you an elegant, user-frienldy, and
                efficient Chrome Extensions for you and your customers.
              </p>
              <div className="flex justify-center p-4 gap-4">
                <div className="text-Blueviolet   hover:text-semiblueviolet">
                  <FaAndroid />
                </div>
                <div className="text-Blueviolet  hover:text-semiblueviolet">
                  <SiFirebase />
                </div>
                <div className="text-Blueviolet  hover:text-semiblueviolet">
                  <FaApple />
                </div>
                <div className="text-Blueviolet  hover:text-semiblueviolet">
                  <FaJava />
                </div>
                <div className="text-Blueviolet   hover:text-semiblueviolet">
                  <FaReact />
                </div>
                <div className="text-Blueviolet  hover:text-semiblueviolet">
                  <IoLogoJavascript />
                </div>
                <div className="text-Blueviolet   hover:text-semiblueviolet">
                  <SiFlutter />
                </div>
                <div className="text-Blueviolet   hover:text-semiblueviolet">
                  <IoLogoIonic />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white " id="sv-7">
        <div className="mx-auto max-w-7xl pb-12 pt-8 lg:pt-0 px-6  ">
          <div className="grid grid-cols-1 lg:grid-cols-12 space-x-1">
            <div className="col-span-6 flex flex-col justify-evenly">
              <h1 className="text-midnightblue text-lg lg:text-2xl font-semibold ">
                Our Desktop Application Development Services
              </h1>
              <p className="text-charcoal text-sm lg:text-base font-curlfont tracking-wide text-start lg:text-start opacity-75 pt-2 lg:pt-2 ">
                We use Electron JS that allows us to create Desktop applications
                with GUIs using web technologies We use Electron js to develop
                cross platform applications which are compatible with Mac,
                Windows, and Linux platforms.
              </p>

              <div className="flex justify-center p-4 gap-4">
                <div className="text-Blueviolet   hover:text-semiblueviolet">
                  <FaAndroid />
                </div>
                <div className="text-Blueviolet  hover:text-semiblueviolet">
                  <SiFirebase />
                </div>
                <div className="text-Blueviolet  hover:text-semiblueviolet">
                  <FaApple />
                </div>
                <div className="text-Blueviolet  hover:text-semiblueviolet">
                  <FaJava />
                </div>
                <div className="text-Blueviolet   hover:text-semiblueviolet">
                  <FaReact />
                </div>
                <div className="text-Blueviolet  hover:text-semiblueviolet">
                  <IoLogoJavascript />
                </div>
                <div className="text-Blueviolet   hover:text-semiblueviolet">
                  <SiFlutter />
                </div>
                <div className="text-Blueviolet   hover:text-semiblueviolet">
                  <IoLogoIonic />
                </div>
              </div>
            </div>

            <div className="col-span-6 p-4 sm:p-10 flex justify-center ">
              <img className="rounded-lg " src="/assets/services/img07.png" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-paleblue " id="sv-8">
        <div className="mx-auto max-w-7xl pb-12 pt-8 lg:pt-0 px-6  ">
          <div className="grid grid-cols-1 lg:grid-cols-12 space-x-1">
            <div className="col-span-6 flex flex-col justify-evenly">
              <h1 className=" block lg:hidden text-midnightblue text-lg lg:text-2xl font-semibold">
                Our Chatbot Development Services
              </h1>
              <div className="col-span-6 p-4 sm:p-10 flex justify-center ">
                <img className="rounded-lg " src="/assets/services/img08.png" />
              </div>
            </div>

            <div className="col-span-6 p-4  flex flex-col justify-evenly  ">
              <h1 className="hidden lg:block text-midnightblue text-lg lg:text-2xl font-semibold ">
                Our Chatbot Development Services
              </h1>
              <p className="text-charcoal text-sm lg:text-base font-curlfont tracking-wide text-start lg:text-start opacity-75 pt-2 lg:pt-2 ">
                We all have been interacting with bots in our daily life and we
                know how much it can be helpful in tasks from personal support
                to leads generation, sales, etc. Also, interacting with bots
                saves a lot of time and we can expect immediate feedback for our
                queries. By developing bots, we can proudly say that we are
                contributing in the revolution of streamlining interactions of
                businesses with customers. We deliver excellent bot development
                services that can be implemented by industries from various
                domains like information and technology, e-commerce, customer
                support, entertainment, or healthcare. We build bots that can
                manage crucial tasks, automate processes at low maintenance
                costs, and integrate with your existing tools & systems
                seamlessly. We have developed several Telegram and Skype Bots
                using PHP / Node JS. Let us share our short experience about
                some of them for quick glance. - We have successfully developed
                a Telegram bot that is used for parsing jobs from a platform,
                filtering them, and sending very best jobs to the users via
                Telegram. - Another bot that we developed is about a Leave
                Management System for a company&apos;s internal use. There were
                so many requests from the employees to streamline and simplify
                the leave requesting process and ‘Voila!’, we developed a bot
                for them so that they can easily apply for leave through
                Telegram and Skype.
              </p>
              <div className="flex justify-center p-4 gap-4">
                <div className="text-Blueviolet   hover:text-semiblueviolet">
                  <FaAndroid />
                </div>
                <div className="text-Blueviolet  hover:text-semiblueviolet">
                  <SiFirebase />
                </div>
                <div className="text-Blueviolet  hover:text-semiblueviolet">
                  <FaApple />
                </div>
                <div className="text-Blueviolet  hover:text-semiblueviolet">
                  <FaJava />
                </div>
                <div className="text-Blueviolet   hover:text-semiblueviolet">
                  <FaReact />
                </div>
                <div className="text-Blueviolet  hover:text-semiblueviolet">
                  <IoLogoJavascript />
                </div>
                <div className="text-Blueviolet   hover:text-semiblueviolet">
                  <SiFlutter />
                </div>
                <div className="text-Blueviolet   hover:text-semiblueviolet">
                  <IoLogoIonic />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-blue " id="sv-9">
        <div className="mx-auto max-w-7xl pb-12 pt-8 lg:pt-0 px-6  ">
          <div className="grid grid-cols-1 lg:grid-cols-12 space-x-1">
            <div className="col-span-6 flex flex-col justify-evenly">
              <h1 className="text-midnightblue text-lg lg:text-2xl font-semibold ">
                Our Software Development Services
              </h1>
              <p className="text-charcoal text-sm lg:text-base font-curlfont tracking-wide text-start lg:text-start opacity-75 pt-2 lg:pt-2 ">
                Developing custom software can be costly and time-consuming, but
                with the help of our team of experts, we can develop the custom
                and complex software from scratch in the minimum possible time.
                Furthermore, we use a Modern technology stack to reduce the
                development time and ensure the quality and security standards
                of the project. We have deep expertise in Custom Software
                Development, Automation Software Development, Management
                Software Development, Enterprise Software Development, Providing
                Offshore development services, Cross-Platform Software and
                Maintenance & support services.
              </p>

              <div className="flex justify-center p-4 gap-4">
                <div className="text-Blueviolet   hover:text-semiblueviolet">
                  <FaAndroid />
                </div>
                <div className="text-Blueviolet  hover:text-semiblueviolet">
                  <SiFirebase />
                </div>
                <div className="text-Blueviolet  hover:text-semiblueviolet">
                  <FaApple />
                </div>
                <div className="text-Blueviolet  hover:text-semiblueviolet">
                  <FaJava />
                </div>
                <div className="text-Blueviolet   hover:text-semiblueviolet">
                  <FaReact />
                </div>
                <div className="text-Blueviolet  hover:text-semiblueviolet">
                  <IoLogoJavascript />
                </div>
                <div className="text-Blueviolet   hover:text-semiblueviolet">
                  <SiFlutter />
                </div>
                <div className="text-Blueviolet   hover:text-semiblueviolet">
                  <IoLogoIonic />
                </div>
              </div>
            </div>

            <div className="col-span-6 p-4 sm:p-10 flex justify-center ">
              <img className="rounded-lg " src="/assets/services/img07.png" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white " id="sv-10">
        <div className="mx-auto max-w-7xl pb-12 pt-8 lg:pt-0 px-6  ">
          <div className="grid grid-cols-1 lg:grid-cols-12 space-x-1">
            <div className="col-span-6 flex flex-col justify-evenly">
              <h1 className=" block lg:hidden text-midnightblue text-lg lg:text-2xl font-semibold">
                MEAN Stack Development Services
              </h1>
              <div className="col-span-6 p-4 sm:p-10 flex justify-center ">
                <img className="rounded-lg " src="/assets/services/img03.png" />
              </div>
            </div>

            <div className="col-span-6 p-4  flex flex-col justify-evenly  ">
              <h1 className="hidden lg:block text-midnightblue text-lg lg:text-2xl font-semibold ">
                MEAN Stack Development Services
              </h1>
              <p className="text-charcoal text-sm lg:text-base font-curlfont tracking-wide text-start lg:text-start opacity-75 pt-2 lg:pt-2 ">
                Our MEAN Stack expertise let us develop and deliver high quality
                and complex MEAN stack solutions. We are proud to provide the
                most complex, challenging, and custom web applications solutions
                using MEAN Stack on-time and in-budget. We have great knowledge
                and experience using technologies that fall under the MEAN
                stack: MongoDB, ExpressJS, Angular.js, and Node.js. We cater to
                our clients&apos; business-specific requirements using our best
                MEAN stack resources and build the solutions that will upscale
                their businesses.
              </p>
              <div className="flex justify-center p-4 gap-4">
                <div className="text-Blueviolet   hover:text-semiblueviolet">
                  <FaAndroid />
                </div>
                <div className="text-Blueviolet  hover:text-semiblueviolet">
                  <SiFirebase />
                </div>
                <div className="text-Blueviolet  hover:text-semiblueviolet">
                  <FaApple />
                </div>
                <div className="text-Blueviolet  hover:text-semiblueviolet">
                  <FaJava />
                </div>
                <div className="text-Blueviolet   hover:text-semiblueviolet">
                  <FaReact />
                </div>
                <div className="text-Blueviolet  hover:text-semiblueviolet">
                  <IoLogoJavascript />
                </div>
                <div className="text-Blueviolet   hover:text-semiblueviolet">
                  <SiFlutter />
                </div>
                <div className="text-Blueviolet   hover:text-semiblueviolet">
                  <IoLogoIonic />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-paleblue " id="sv-11">
        <div className="mx-auto max-w-7xl pb-12 pt-8 lg:pt-0 px-6  ">
          <div className="grid grid-cols-1 lg:grid-cols-12 space-x-1">
            <div className="col-span-6 flex flex-col justify-evenly">
              <h1 className="text-midnightblue text-lg lg:text-2xl font-semibold ">
                Our Cross Platform Mobile App Development
              </h1>
              <p className="text-charcoal text-sm lg:text-base font-curlfont tracking-wide text-start lg:text-start opacity-75 pt-2 lg:pt-2 ">
                Our experts have served B2B, B2E, B2C industries with high-end,
                latest technologies and different cross-platform mobile app
                development services to build robust, secure, and scalable
                mobile solutions and connected web platforms.
              </p>

              <div className="flex justify-center p-4 gap-4">
                <div className="text-Blueviolet   hover:text-semiblueviolet">
                  <FaAndroid />
                </div>
                <div className="text-Blueviolet  hover:text-semiblueviolet">
                  <SiFirebase />
                </div>
                <div className="text-Blueviolet  hover:text-semiblueviolet">
                  <FaApple />
                </div>
                <div className="text-Blueviolet  hover:text-semiblueviolet">
                  <FaJava />
                </div>
                <div className="text-Blueviolet   hover:text-semiblueviolet">
                  <FaReact />
                </div>
                <div className="text-Blueviolet  hover:text-semiblueviolet">
                  <IoLogoJavascript />
                </div>
                <div className="text-Blueviolet   hover:text-semiblueviolet">
                  <SiFlutter />
                </div>
                <div className="text-Blueviolet   hover:text-semiblueviolet">
                  <IoLogoIonic />
                </div>
              </div>
            </div>

            <div className="col-span-6 p-4 sm:p-10 flex justify-center ">
              <img className="rounded-lg " src="/assets/services/img10.png" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-blue " id="sv-12">
        <div className="mx-auto max-w-7xl pb-12 pt-8 lg:pt-0 px-6  ">
          <div className="grid grid-cols-1 lg:grid-cols-12 space-x-1">
            <div className="col-span-6 flex flex-col justify-evenly">
              <h1 className=" block lg:hidden text-midnightblue text-lg lg:text-2xl font-semibold">
                Industry-leading PWA Development Services
              </h1>
              <div className="col-span-6 p-4 sm:p-10 flex justify-center ">
                <img className="rounded-lg " src="/assets/services/img11.png" />
              </div>
            </div>

            <div className="col-span-6 p-4  flex flex-col justify-evenly  ">
              <h1 className="hidden lg:block text-midnightblue text-lg lg:text-2xl font-semibold ">
                Industry-leading PWA Development Services
              </h1>
              <p className="text-charcoal text-sm lg:text-base font-curlfont tracking-wide text-start lg:text-start opacity-75 pt-2 lg:pt-2 ">
                We are leading in Progressive Web App Development Services, as
                we adapted PWA Development in the early stage. PWAs help test a
                minimum viable product by allowing for a rapid and often less
                expensive development scope.
              </p>
              <div className="flex justify-center p-4 gap-4">
                <div className="text-Blueviolet   hover:text-semiblueviolet">
                  <FaAndroid />
                </div>
                <div className="text-Blueviolet  hover:text-semiblueviolet">
                  <SiFirebase />
                </div>
                <div className="text-Blueviolet  hover:text-semiblueviolet">
                  <FaApple />
                </div>
                <div className="text-Blueviolet  hover:text-semiblueviolet">
                  <FaJava />
                </div>
                <div className="text-Blueviolet   hover:text-semiblueviolet">
                  <FaReact />
                </div>
                <div className="text-Blueviolet  hover:text-semiblueviolet">
                  <IoLogoJavascript />
                </div>
                <div className="text-Blueviolet   hover:text-semiblueviolet">
                  <SiFlutter />
                </div>
                <div className="text-Blueviolet   hover:text-semiblueviolet">
                  <IoLogoIonic />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white " id="sv-13">
        <div className="mx-auto max-w-7xl pb-12 pt-8 lg:pt-0 px-6  ">
          <div className="grid grid-cols-1 lg:grid-cols-12 space-x-1">
            <div className="col-span-6 flex flex-col justify-evenly">
              <h1 className="text-midnightblue text-lg lg:text-2xl font-semibold ">
                Our Android Mobile App Development Services
              </h1>
              <p className="text-charcoal text-sm lg:text-base font-curlfont tracking-wide text-start lg:text-start opacity-75 pt-2 lg:pt-2 ">
                We are specializes in Android app development for startups,
                small businesses to enterprises. Our Android app developers have
                more than six years of expertise in creating bespoke, stable,
                fully responsive, and futuristic mobile apps for many Android
                devices.
              </p>

              <div className="flex justify-center p-4 gap-4">
                <div className="text-Blueviolet   hover:text-semiblueviolet">
                  <FaAndroid />
                </div>
                <div className="text-Blueviolet  hover:text-semiblueviolet">
                  <SiFirebase />
                </div>
                <div className="text-Blueviolet  hover:text-semiblueviolet">
                  <FaApple />
                </div>
                <div className="text-Blueviolet  hover:text-semiblueviolet">
                  <FaJava />
                </div>
                <div className="text-Blueviolet   hover:text-semiblueviolet">
                  <FaReact />
                </div>
                <div className="text-Blueviolet  hover:text-semiblueviolet">
                  <IoLogoJavascript />
                </div>
                <div className="text-Blueviolet   hover:text-semiblueviolet">
                  <SiFlutter />
                </div>
                <div className="text-Blueviolet   hover:text-semiblueviolet">
                  <IoLogoIonic />
                </div>
              </div>
            </div>

            <div className="col-span-6 p-4 sm:p-10 flex justify-center ">
              <img className="rounded-lg " src="/assets/services/img12.png" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-paleblue " id="sv-14">
        <div className="mx-auto max-w-7xl pb-12 pt-8 lg:pt-0 px-6  ">
          <div className="grid grid-cols-1 lg:grid-cols-12 space-x-1">
            <div className="col-span-6 flex flex-col justify-evenly">
              <h1 className=" block lg:hidden text-midnightblue text-lg lg:text-2xl font-semibold">
                Our iOS Mobile App Development Services
              </h1>
              <div className="col-span-6 p-4 sm:p-10 flex justify-center ">
                <img className="rounded-lg " src="/assets/services/img13.png" />
              </div>
            </div>

            <div className="col-span-6 p-4  flex flex-col justify-evenly  ">
              <h1 className="hidden lg:block text-midnightblue text-lg lg:text-2xl font-semibold ">
                Our iOS Mobile App Development Services
              </h1>
              <p className="text-charcoal text-sm lg:text-base font-curlfont tracking-wide text-start lg:text-start opacity-75 pt-2 lg:pt-2 ">
                We are the ideal place for you to develop and publish your iOS
                app using cutting-edge technologies. As India&apos;s leading ios
                app development company, we provide feature-packed iOS apps for
                startups and businesses. Contact us immediately to discuss your
                business needs and receive some custom-made iOS app solutions.
              </p>
              <div className="flex justify-center p-4 gap-4">
                <div className="text-Blueviolet   hover:text-semiblueviolet">
                  <FaAndroid />
                </div>
                <div className="text-Blueviolet  hover:text-semiblueviolet">
                  <SiFirebase />
                </div>
                <div className="text-Blueviolet  hover:text-semiblueviolet">
                  <FaApple />
                </div>
                <div className="text-Blueviolet  hover:text-semiblueviolet">
                  <FaJava />
                </div>
                <div className="text-Blueviolet   hover:text-semiblueviolet">
                  <FaReact />
                </div>
                <div className="text-Blueviolet  hover:text-semiblueviolet">
                  <IoLogoJavascript />
                </div>
                <div className="text-Blueviolet   hover:text-semiblueviolet">
                  <SiFlutter />
                </div>
                <div className="text-Blueviolet   hover:text-semiblueviolet">
                  <IoLogoIonic />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-blue " id="sv-15">
        <div className="mx-auto max-w-7xl pb-12 pt-8 lg:pt-0 px-6  ">
          <div className="grid grid-cols-1 lg:grid-cols-12 space-x-1">
            <div className="col-span-6 flex flex-col justify-evenly">
              <h1 className="text-midnightblue text-lg lg:text-2xl font-semibold ">
                Our Flutter Mobile App Development Services
              </h1>
              <p className="text-charcoal text-sm lg:text-base font-curlfont tracking-wide text-start lg:text-start opacity-75 pt-2 lg:pt-2 ">
                Groovy web is the ideal choice to seek if you want to start your
                project with an industry-leading Flutter app development
                company. We work with our clients from the start to the
                conclusion. With our best-in-class flutter app development
                services, we provide scalable, faster-to-develop apps and a
                wonderful native experience.
              </p>

              <div className="flex justify-center p-4 gap-4">
                <div className="text-Blueviolet   hover:text-semiblueviolet">
                  <FaAndroid />
                </div>
                <div className="text-Blueviolet  hover:text-semiblueviolet">
                  <SiFirebase />
                </div>
                <div className="text-Blueviolet  hover:text-semiblueviolet">
                  <FaApple />
                </div>
                <div className="text-Blueviolet  hover:text-semiblueviolet">
                  <FaJava />
                </div>
                <div className="text-Blueviolet   hover:text-semiblueviolet">
                  <FaReact />
                </div>
                <div className="text-Blueviolet  hover:text-semiblueviolet">
                  <IoLogoJavascript />
                </div>
                <div className="text-Blueviolet   hover:text-semiblueviolet">
                  <SiFlutter />
                </div>
                <div className="text-Blueviolet   hover:text-semiblueviolet">
                  <IoLogoIonic />
                </div>
              </div>
            </div>

            <div className="col-span-6 p-4 sm:p-10 flex justify-center ">
              <img className="rounded-lg " src="/assets/services/img14.png" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white " id="sv-16">
        <div className="mx-auto max-w-7xl pb-12 pt-8 lg:pt-0 px-6  ">
          <div className="grid grid-cols-1 lg:grid-cols-12 space-x-1">
            <div className="col-span-6 flex flex-col justify-evenly">
              <h1 className=" block lg:hidden text-midnightblue text-lg lg:text-2xl font-semibold">
                Our Ionic Mobile App Development Services
              </h1>
              <div className="col-span-6 p-4 sm:p-10 flex justify-center ">
                <img className="rounded-lg " src="/assets/services/img15.png" />
              </div>
            </div>

            <div className="col-span-6 p-4  flex flex-col justify-evenly  ">
              <h1 className="hidden lg:block text-midnightblue text-lg lg:text-2xl font-semibold ">
                Our Ionic Mobile App Development Services
              </h1>
              <p className="text-charcoal text-sm lg:text-base font-curlfont tracking-wide text-start lg:text-start opacity-75 pt-2 lg:pt-2 ">
                We are a Top Ionic App Development Company in the industry that
                will not settle for anything less than the best. With our Ionic
                App Development Services, We simplify it for end-users by
                creating mobile apps with platform-specific functionality, a
                native-like aesthetic, and high code reusability.
              </p>
              <div className="flex justify-center p-4 gap-4">
                <div className="text-Blueviolet   hover:text-semiblueviolet">
                  <FaAndroid />
                </div>
                <div className="text-Blueviolet  hover:text-semiblueviolet">
                  <SiFirebase />
                </div>
                <div className="text-Blueviolet  hover:text-semiblueviolet">
                  <FaApple />
                </div>
                <div className="text-Blueviolet  hover:text-semiblueviolet">
                  <FaJava />
                </div>
                <div className="text-Blueviolet   hover:text-semiblueviolet">
                  <FaReact />
                </div>
                <div className="text-Blueviolet  hover:text-semiblueviolet">
                  <IoLogoJavascript />
                </div>
                <div className="text-Blueviolet   hover:text-semiblueviolet">
                  <SiFlutter />
                </div>
                <div className="text-Blueviolet   hover:text-semiblueviolet">
                  <IoLogoIonic />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-paleblue " id="sv-17">
        <div className="mx-auto max-w-7xl pb-12 pt-8 lg:pt-0 px-6  ">
          <div className="grid grid-cols-1 lg:grid-cols-12 space-x-1">
            <div className="col-span-6 flex flex-col justify-evenly">
              <h1 className="text-midnightblue text-lg lg:text-2xl font-semibold ">
                Headless Marketplace Development Services
              </h1>
              <p className="text-charcoal text-sm lg:text-base font-curlfont tracking-wide text-start lg:text-start opacity-75 pt-2 lg:pt-2 ">
                Develop a unique online marketplace with our marketplace
                development service that stands out and provides significant
                value. Our team of skilled professionals is ready to assist you
                in creating a platform that encourages meaningful interactions
                and achieves successful outcomes.
              </p>

              <div className="flex justify-center p-4 gap-4">
                <div className="text-Blueviolet   hover:text-semiblueviolet">
                  <FaAndroid />
                </div>
                <div className="text-Blueviolet  hover:text-semiblueviolet">
                  <SiFirebase />
                </div>
                <div className="text-Blueviolet  hover:text-semiblueviolet">
                  <FaApple />
                </div>
                <div className="text-Blueviolet  hover:text-semiblueviolet">
                  <FaJava />
                </div>
                <div className="text-Blueviolet   hover:text-semiblueviolet">
                  <FaReact />
                </div>
                <div className="text-Blueviolet  hover:text-semiblueviolet">
                  <IoLogoJavascript />
                </div>
                <div className="text-Blueviolet   hover:text-semiblueviolet">
                  <SiFlutter />
                </div>
                <div className="text-Blueviolet   hover:text-semiblueviolet">
                  <IoLogoIonic />
                </div>
              </div>
            </div>

            <div className="col-span-6 p-4 sm:p-10 flex justify-center ">
              <img className="rounded-lg " src="/assets/services/img17.png" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-blue " id="sv-18">
        <div className="mx-auto max-w-7xl pb-12 pt-8 lg:pt-0 px-6  ">
          <div className="grid grid-cols-1 lg:grid-cols-12 space-x-1">
            <div className="col-span-6 flex flex-col justify-evenly">
              <h1 className=" block lg:hidden text-midnightblue text-lg lg:text-2xl font-semibold">
                Fintech App Development
              </h1>
              <div className="col-span-6 p-4 sm:p-10 flex justify-center ">
                <img className="rounded-lg " src="/assets/services/img18.png" />
              </div>
            </div>

            <div className="col-span-6 p-4  flex flex-col justify-evenly  ">
              <h1 className="hidden lg:block text-midnightblue text-lg lg:text-2xl font-semibold ">
                Fintech App Development
              </h1>
              <p className="text-charcoal text-sm lg:text-base font-curlfont tracking-wide text-start lg:text-start opacity-75 pt-2 lg:pt-2 ">
                We are a top-rated custom fintech software development to design
                & develop your robust, secure, and scalable fintech mobile app.
                Hire fintech developers to build modern, intuitive, and
                customer-centric software across diverse platforms.
              </p>
              <div className="flex justify-center p-4 gap-4">
                <div className="text-Blueviolet   hover:text-semiblueviolet">
                  <FaAndroid />
                </div>
                <div className="text-Blueviolet  hover:text-semiblueviolet">
                  <SiFirebase />
                </div>
                <div className="text-Blueviolet  hover:text-semiblueviolet">
                  <FaApple />
                </div>
                <div className="text-Blueviolet  hover:text-semiblueviolet">
                  <FaJava />
                </div>
                <div className="text-Blueviolet   hover:text-semiblueviolet">
                  <FaReact />
                </div>
                <div className="text-Blueviolet  hover:text-semiblueviolet">
                  <IoLogoJavascript />
                </div>
                <div className="text-Blueviolet   hover:text-semiblueviolet">
                  <SiFlutter />
                </div>
                <div className="text-Blueviolet   hover:text-semiblueviolet">
                  <IoLogoIonic />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white " id="sv-19">
        <div className="mx-auto max-w-7xl pb-12 pt-8 lg:pt-4 px-6  ">
          <div className=" flex flex-col items-center justify-evenly">
            <h2 className="text-Blueviolet text-sm lg:text-base font-semibold">
              Our Process
            </h2>
            <h1 className="text-midnightblue text-lg lg:text-2xl font-semibold ">
              See what our projects have to go through..!
            </h1>
            <div className="col-span-6 p-4 sm:p-10 flex justify-center ">
              <img className="rounded-lg " src="/assets/services/diagram.svg" />
            </div>

            <div className="py-3 px-5 text-sm font-medium text-center text-white rounded-full bg-Blueviolet w-fill lg:w-1/4 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
              <Link href={"/contact"}>Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
