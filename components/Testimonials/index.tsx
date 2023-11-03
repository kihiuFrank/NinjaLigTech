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
    name: "Janie Fox",
    profession: "CEO, Parkview Int.Ltd",
    comment:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
    imgSrc: "/assets/testimonial/user17.png",
  },
  {
    name: "Leslie Alexander",
    profession: "CEO, Parkview Int.Ltd",
    comment:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
    imgSrc: "/assets/testimonial/user22.png",
  },
  {
    name: "Cody Fisher",
    profession: "CEO, Parkview Int.Ltd",
    comment:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
    imgSrc: "/assets/testimonial/user10.webp",
  },
  {
    name: "Robert Fox",
    profession: "CEO, Parkview Int.Ltd",
    comment:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
    imgSrc: "/assets/testimonial/user11.wepb",
  },
  {
    name: "Leslie Alexander",
    profession: "CEO, Parkview Int.Ltd",
    comment:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
    imgSrc: "/assets/testimonial/user15.png",
  },
  {
    name: "Cody Fisher",
    profession: "CEO, Parkview Int.Ltd",
    comment:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
    imgSrc: "/assets/mentor/user23.png",
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
