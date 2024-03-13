import React from "react";

const Privacy = () => {
  return (
    <div className="bg-lightkblue">
      <div id="LegalDisclaimer" className="mx-auto max-w-7xl pb-12 pt-4  px-6 ">
        <div className="flex flex-col items-center p-4 lg:p-8 ">
          <h1 className="text-midnightblue pt-12 lg:pt-20 text-2xl lg:text-4xl  font-semibold mb-5 sm:mb-0 tracking-widest">
            PRIVACY POLICY
          </h1>
          <p className="text-charcoal text-xs lg:text-sm font-normal text-start lg:text-start opacity-75 pt-4 pb-2 lg:pb-4">
            We care about you and your privacy all the time.
          </p>
        </div>
        <div className=" space-x-1">
          <div className="col-span-6 flex flex-col justify-evenly">
            <h3 className="text-charcoal text-xs lg:text-sm font-normal text-start lg:text-start opacity-75 pt-2 pb-2 lg:pb-4">
              Online privacy is very important matter for Ninjalig Technologies
              and that&apos;s why we are committed to keeping safe all our
              users&apos; (registered and unregistered) information, who are
              visiting and logging in our website.
              <br />
              <br />
              Along with providing cutting-edge web, mobile, MERN, SaaS, MVP,
              IoT, BlockChain, etc., services to our registered users, it&apos;s
              our duty to honor and maintain the privacy of our kind visitors.
              Hence, we came up with this privacy policy to ensure our visitors
              of our practices and guarantee them a safe and secure visit
              through our website
              <br />
              <br />
              Ninjalig Technologies would also like to clarify that our site
              provides links to other websites with their own privacy policies
              and we, under no circumstances, take responsibilities for the
              safety provided by these websites. Ninjalig Technologies requests
              all our visitors to kindly go through our privacy policies
              thorough and also through all the other sites where you provide
              your personal information that can give out your identity.
              <br />
              <br />
              We would like you to understand that when you give your personal
              information to us, we will consider that you have read and agreed
              to our privacy policies and you comply it. If you do not wish to
              comply by our policies, then please do not avoid using our site.
              <br />
              <br />
              We request some personal identifiable information from our
              Ninjalig Technologies&apos; registered site users when they
              register through contact page, give their feedbacks on our blogs,
              or reach us through Chat Support. These provided information will
              be considered as Ninjalig Technologies&apos; property and keeping
              in mind the terms of our privacy policies, we will share,
              disclose, or distribute these details to third-parties.
            </h3>

            <h2 className="text-midnightblue text-sm lg:text-md lg:text-lg font-semibold pt-2 lg:pt-4 ">
              The information we seek from our visitors are as follows:
            </h2>
            <h3 className="text-charcoal text-xs lg:text-sm font-normal text-start lg:text-start opacity-75 pt-2 pb-2 lg:pb-4">
              <ul className="list-disc list-inside pl-[revert] p-3 ">
                <li className="p-1"> Your Name</li>
                <li className="p-1">Your Country</li>
                <li className="p-1">Your Email Address</li>
                <li className="p-1">Your Phone Number</li>
                <li className="p-1">
                  Other information that you wish to share
                </li>
              </ul>
              Ninjalig Technologies would also like to clarify that our site
              visitors are not required register to our site if they do not
              require any of our services.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
