import Table from "@/components/Games/LeaderBoard/Table";
import TopCard from "@/components/Games/LeaderBoard/TopCard";
import { TableDataType } from "@/types/LeaderBoardTypes";
import React from "react";

const winnersData: TableDataType[] = [
  {
    avatar_url:
      "https://i.pinimg.com/originals/27/2f/d3/272fd3978032cf79e40e257ff66354f5.jpg",
    team_name: "NURINHO - ManUtd",
    full_name: "Nimo Barkadle",
    earnings: 1500,
    beginnerTrophies: 0,
    amateurTrophies: 0,
    proTrophies: 0,
    eliteTrophies: 5,
    legendaryTrophies: 0,
    game: "DLS24",
  },

  {
    avatar_url:
      "https://img.freepik.com/free-vector/football-background-design_1176-204.jpg",
    team_name: "Cannabis Allstars",
    full_name: "Dancan Kiplangat",
    earnings: 250,
    beginnerTrophies: 0,
    amateurTrophies: 0,
    proTrophies: 1,
    eliteTrophies: 0,
    legendaryTrophies: 0,
    game: "DLS24",
  },
  {
    avatar_url:
      "https://img.freepik.com/premium-photo/close-up-football-action-scene-with-competing-soccer-players-stadium_207634-5551.jpg",
    team_name: "Oblock FC",
    full_name: "Gladwell Mwalavu",
    earnings: 150,
    beginnerTrophies: 1,
    amateurTrophies: 0,
    proTrophies: 0,
    eliteTrophies: 0,
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
            <h2 className="text-lg lg:text-2xl  my-1.5 pt-0 px-2 pb-2 font-['Blanka'] text-[2rem] font-bold  tracking-[4px] rounded-lg bg-[rgba(255,255,255,0.8)] shadow-[0_0_4px_rgba(50,69,107,0.2)] md:text-[1rem]">
              NinjaTech Gaming Winners Leaderboard
            </h2>
            <p className="my-4 font-codefont text-sm lg:text-2xl font-medium opacity-70 tracking-wide">
              Check your rank here!
            </p>
          </div>

          <div className="relative my-10  flex justify-center items-center gap-8  sm:px-2 flex-col  lg:flex-row">
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
