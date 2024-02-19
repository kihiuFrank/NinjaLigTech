import Table from "@/components/Games/LeaderBoard/Table";
import TopCard from "@/components/Games/LeaderBoard/TopCard";
import { TableDataType } from "@/types/LeaderBoardTypes";
import React from "react";

const winnersData: TableDataType[] = [
  {
    avatar_url:
      "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
    team_name: "Man City",
    full_name: "Frankline Kihiu",
    earnings: 2500,
    beginnerTrophies: 0,
    amateurTrophies: 0,
    proTrophies: 0,
    eliteTrophies: 7,
    legendaryTrophies: 0,
    game: "DLS24",
  },
  {
    avatar_url:
      "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
    team_name: "Man City",
    full_name: "Frankline Kihiu",
    earnings: 2500,
    beginnerTrophies: 0,
    amateurTrophies: 0,
    proTrophies: 0,
    eliteTrophies: 7,
    legendaryTrophies: 0,
    game: "DLS24",
  },
  {
    avatar_url:
      "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
    team_name: "Man City",
    full_name: "Frankline Kihiu",
    earnings: 2500,
    beginnerTrophies: 0,
    amateurTrophies: 0,
    proTrophies: 0,
    eliteTrophies: 7,
    legendaryTrophies: 0,
    game: "DLS24",
  },
];

const page = () => {
  return (
    <div id="leader-board">
      <div className="bg-gray-blue">
        <div className="mx-auto max-w-7xl pb-12 pt-8 lg:pt-14  px-6 ">
          <div className="  flex justify-center items-center flex-col text-center lg:mx-8 sm:mx-2">
            <h2 className="text-2xl sm:text-4xl  my-1.5 pt-0 px-2 pb-2 font-['Blanka'] text-[2rem] font-bold  tracking-[4px] rounded-lg bg-[rgba(255,255,255,0.8)] shadow-[0_0_4px_rgba(50,69,107,0.2)] md:text-[1rem]">
              NinjaTech Gaming Winners Leaderboard
            </h2>
            <p className="my-4 font-codefont text-2xl font-medium opacity-70 tracking-wide">
              Check your rank here!
            </p>
          </div>

          <div className="relative my-10 px-12 flex justify-center items-center gap-8 lg:px-8 sm:px-2 flex-col  lg:flex-row">
            {winnersData.map((item, i) => (
              <TopCard key={item.team_name} data={item} index={i} />
            ))}
          </div>
        </div>
      </div>

      <div className="bg-lightkblue">
        <Table />
      </div>
    </div>
  );
};

export default page;
