"use client";
import Slider from "react-slick";
import React, { Component } from "react";
import Image from "next/image";
import Link from "next/link";

// CAROUSEL DATA

interface DataType {
  profession: string;
  name: string;
  imgSrc: string;
  linkedIn: string;
}

const postData: DataType[] = [
  {
    profession: `CEO`,
    name: "Frankline Kihiu",
    imgSrc: "/assets/mentor/ceo.jpeg",
    linkedIn: "https://www.linkedin.com/in/frankline-m-kihiu/",
  },
  {
    profession: "Gaming Director",
    name: "Paul Gitonga",
    imgSrc: "/assets/mentor/director.jpeg",
    linkedIn: "https://www.linkedin.com/in/paul-kihiu-8033482b0/",
  },
  {
    profession: "COO",
    name: "Lawrence Githinji",
    imgSrc: "/assets/mentor/coo.jpeg",
    linkedIn: "",
  },
  // {
  //   profession: "Cyber Security Expert",
  //   name: "Anita Shalie",
  //   imgSrc: "/assets/mentor/user14.png",
  //   linkedIn: "https://www.linkedin.com/in/frankline-m-kihiu/",
  // },
  // {
  //   profession: "Senior UX Designer",
  //   name: "Shoo Thar Mien",
  //   imgSrc: "/assets/mentor/user20.png",
  //   linkedIn: "https://www.linkedin.com/in/frankline-m-kihiu/",
  // },
  // {
  //   profession: "Senior UX Designer",
  //   name: "Shoo Thar Mien",
  //   imgSrc: "/assets/mentor/user13.jpeg",
  //   linkedIn: "https://www.linkedin.com/in/frankline-m-kihiu/",
  // },
];

// CAROUSEL SETTINGS

function SampleNextArrow(props: { className: any; style: any; onClick: any }) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        position: "absolute",
        alignItems: "center",
        background: "#D5EFFA",
        padding: "28px",
        borderRadius: "30px",
        border: "1px solid #1A21BC",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: { className: any; style: any; onClick: any }) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#D5EFFA",
        padding: "28px",
        borderRadius: "30px",
        border: "1px solid #1A21BC",
      }}
      onClick={onClick}
    />
  );
}

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      // centerMode: true,
      slidesToScroll: 1,
      arrows: false,
      autoplay: false,
      speed: 4000,
      nextArrow: (
        <SampleNextArrow
          className={undefined}
          style={undefined}
          onClick={undefined}
        />
      ),
      prevArrow: (
        <SamplePrevArrow
          className={undefined}
          style={undefined}
          onClick={undefined}
        />
      ),
      autoplaySpeed: 4500,
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
          breakpoint: 1000,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 530,
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
      <div className="py-10  bg-paleblue" id="team">
        <div className="mx-auto max-w-2xl lg:max-w-7xl sm:py-4 px-4 lg:px-8 relative">
          <h2 className="text-midnightblue text-lg lg:text-2xl font-semibold ">
            Meet our team.
          </h2>

          <Slider {...settings}>
            {postData.map((items, i) => (
              <div key={i}>
                <div className="m-3 py-14 md:my-10 text-center">
                  <div className="relative">
                    <Image
                      src={items.imgSrc}
                      alt="user-image"
                      width={200}
                      height={0}
                      className="w-30 h-30 inline-block m-auto p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                    />
                    <div className="absolute right-[55px] bottom-[30px] bg-white rounded-full p-4">
                      <Link href={items.linkedIn}>
                        <Image
                          src={"/assets/mentor/linkedin.svg"}
                          alt="linkedin-image"
                          width={25}
                          height={24}
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="-mt-30">
                    <h3 className="text-2xl font-semibold text-lightblack">
                      {items.name}
                    </h3>
                    <h4 className="text-lg font-normal text-lightblack pt-2 opacity-50">
                      {items.profession}
                    </h4>
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
