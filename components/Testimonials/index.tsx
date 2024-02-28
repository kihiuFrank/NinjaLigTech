"use client";
import Slider from "react-slick";
import React, { Component } from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
  profession: string;
  comment: string;
  imgSrc: string;
  name: string;
}

const postData: DataType[] = [
  {
    name: "Esther Muriuki",
    profession: "Delview Supermarket",
    comment:
      "Right from the start, we have loved NinjaLigTech's commitment and engagement. They came to us with the best people to try to understand our context, our business idea, an developed the first prototype with us. They were very professional and customer oriented. I think without NinjaLigTech, it probably would not have been possible to have such a successful product in such a short time.  ",
    imgSrc: "/assets/testimonial/user10.webp",
  },
  {
    name: "Nimo Barkadie",
    profession: "DLS24 Gamer",
    comment:
      "NinjaTechGaming is the best gamers community period! I have subscribed to many of their tournaments and I have won and lost some. However, the team is very dedicated and very knowledgeable on how the games work. However, it would be better if you gave the same dedication to other games as you do for DLS. Other than that, it's a pleasure being in the NTG Community. ",
    imgSrc: "/assets/testimonial/user22.png",
  },
  {
    name: "Elijah Musau",
    profession: "DLS24 Gamer",
    comment:
      "It's an enjoyable gaming community for football lovers and the newbies, good team and very friendly , it's really comfortable when playing, thanks for the hard work. If the game decides that a particular player is not gonna score, no matter how hard you try the shots always hit the post or away even with a shot of 100, it pisses me off when I lose more than 3 chances only to concede a goal at the end, pls fix this.",
    imgSrc: "/assets/testimonial/user23.png",
  },
];

// CAROUSEL SETTINGS

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      dotsClass: "slick-dots",
      infinite: true,
      slidesToShow: 3,
      // centerMode: true,
      slidesToScroll: 2,
      arrows: false,
      autoplay: false,
      speed: 500,
      autoplaySpeed: 2000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
      ],
    };

    return (
      <div className="pt-40 pb-10 sm:pb-32 lg:py-32" id="testimonial">
        <div className="mx-auto max-w-7xl sm:py-4 lg:px-8">
          <Slider {...settings}>
            {postData.map((items, i) => (
              <div key={i}>
                <div
                  className={`bg-white m-4 p-5 my-20 relative ${
                    i % 2 ? "middleDiv" : "testimonial-shadow"
                  }`}
                >
                  <div className="absolute top-[-45px]">
                    <Image
                      src={items.imgSrc}
                      alt={items.imgSrc}
                      width={100}
                      height={100}
                      className="w-30 h-30 inline-block m-auto p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                    />
                  </div>
                  <h4 className="text-base font-normal text-darkgray my-4">
                    {items.comment}
                  </h4>
                  <hr style={{ color: "#D7D5D5" }} />
                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-darkbrown pt-4 pb-2">
                        {items.name}
                      </h3>
                      <h3 className="text-sm font-normal text-lightgray pb-2">
                        {items.profession}
                      </h3>
                    </div>
                    <div className="flex">
                      <StarIcon width={20} className="text-gold" />
                      <StarIcon width={20} className="text-gold" />
                      <StarIcon width={20} className="text-gold" />
                      <StarIcon width={20} className="text-gold" />
                      <StarIcon width={20} className="text-lightgray" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}
