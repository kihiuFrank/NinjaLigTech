"use client";
import Slider from "react-slick";
import React, { Component } from "react";
import Link from "next/link";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";

// CAROUSEL DATA

interface DataType {
  heading: string;
  heading2: string;
  imgSrc: string;
  name: string;
  gamers: number;
  divisions: number;
  price: number;
  rating: number;
  purchaseBol: string;
  purchaseBol2: string;
}

const postData: DataType[] = [
  {
    heading: "DREAM LEAGUE SOCCER",
    heading2: "DLS24",
    name: "",
    imgSrc: "/assets/gaming/dls24.png",
    gamers: 150,
    divisions: 5,
    price: 100,
    rating: 4.7,
    purchaseBol: "Subscription ",
    purchaseBol2: "Fee",
  },
  {
    heading: "CALL OF DUTY",
    heading2: "MOBILE",
    name: "",
    imgSrc: "/assets/gaming/cod.png",
    gamers: 150,
    divisions: 0,
    price: 100,
    rating: 4.7,
    purchaseBol: "Subscription ",
    purchaseBol2: "Fee",
  },
  {
    heading: "EA SPORTS SOCCER",
    heading2: "FC MOBILE",
    name: "",
    imgSrc: "/assets/gaming/fcMobile.png",
    gamers: 150,
    divisions: 5,
    price: 100,
    rating: 4.7,
    purchaseBol: "Subscription ",
    purchaseBol2: "Fee",
  },
  {
    heading: "eFOOTBALL 2024",
    heading2: "KONAMI",
    name: "",
    imgSrc: "/assets/gaming/efootball.png",
    gamers: 150,
    divisions: 5,
    price: 100,
    rating: 4.7,
    purchaseBol: "Subscription ",
    purchaseBol2: "Fee",
  },
  {
    heading: "PUBG",
    heading2: "MOBILE",
    name: "",
    imgSrc: "/assets/gaming/pubg.png",
    gamers: 150,
    divisions: 0,
    price: 100,
    rating: 4.7,
    purchaseBol: "Subscription ",
    purchaseBol2: "Fee",
  },
];

// CAROUSEL SETTINGS

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      // centerMode: true,
      slidesToScroll: 2,
      arrows: false,
      autoplay: false,
      speed: 500,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1200,
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
      <div id="games" className="bg-gray-blue">
        <div className="mx-auto max-w-7xl sm:py-8 px-4 lg:px-8 ">
          <div className="sm:flex justify-between items-center">
            <h3 className="text-midnightblue text-lg lg:text-2xl pt-8 lg:pt-0 lg:text-55xl font-semibold mb-5 sm:mb-0">
              Popular Games.
            </h3>
            <Link
              href={"#games"}
              className="text-Blueviolet text-sm font-medium space-links"
            >
              Explore games&nbsp;&gt;&nbsp;
            </Link>
          </div>

          <Slider {...settings}>
            {postData.map((items, i) => (
              <div key={i}>
                <div className="bg-white m-3 px-3 pt-3 pb-12 my-20 shadow-courses rounded-2xl">
                  <div className="relative rounded-3xl">
                    <Image
                      src={items.imgSrc}
                      alt="game"
                      width={389}
                      height={262}
                      className="m-auto rounded-2xl clipPath"
                    />
                    <div className="absolute right-5 -bottom-2 bg-ultramarine rounded-full p-2">
                      <h3 className="text-white uppercase text-center text-xs font-medium">
                        {items.purchaseBol} <br /> {items.purchaseBol2}
                      </h3>
                    </div>
                  </div>

                  <div className="px-3">
                    <h4 className="text-sm lg:text-base font-bold pt-6 text-black">
                      {items.heading}
                    </h4>
                    <h4 className="text-sm lg:text-base font-bold pt-1 text-black">
                      {items.heading2}
                    </h4>

                    <div>
                      <h3 className="text-base font-normal pt-6 opacity-75">
                        {items.name}
                      </h3>
                    </div>

                    <div className="flex justify-between items-center py-6">
                      <div className="flex gap-4">
                        <h3 className="text-red text-22xl font-medium">
                          {items.rating}
                        </h3>
                        <div className="flex">
                          <StarIcon className="h-5 w-5 text-gold" />
                          <StarIcon className="h-5 w-5 text-gold" />
                          <StarIcon className="h-5 w-5 text-gold" />
                          <StarIcon className="h-5 w-5 text-gold" />
                          <StarIcon className="h-5 w-5 text-gold" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-sm lg:text-base font-medium">
                          Ksh: {items.price}
                        </h3>
                      </div>
                    </div>

                    <hr style={{ color: "#C4C4C4" }} />

                    <div className="flex justify-between pt-6">
                      <div className="flex gap-4">
                        <Image
                          src={"/assets/courses/book-open.svg"}
                          alt="users"
                          width={24}
                          height={24}
                          className="inline-block m-auto"
                        />
                        <h3 className="text-base font-medium text-black opacity-75">
                          {items.divisions} divisions
                        </h3>
                      </div>
                      <div className="flex gap-4">
                        <Image
                          src={"/assets/courses/users.svg"}
                          alt="users"
                          width={24}
                          height={24}
                          className="inline-block m-auto"
                        />
                        <h3 className="text-base font-medium text-black opacity-75">
                          {items.gamers}+ gamers
                        </h3>
                      </div>
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
