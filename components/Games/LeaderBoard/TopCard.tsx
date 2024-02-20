import Image from "next/image";
import { TableDataType } from "@/types/LeaderBoardTypes";
import { parseName } from "@/utils/parseName";

const TopCard = ({ data, index }: { data: TableDataType; index: number }) => {
  return (
    <div className="relative m-auto p-2 w-full flex justify-center align-center flex-col bg-white border border-gray-200 rounded-3xl shadow-2xl sm:p-6 dark:bg-gray-800 dark:border-gray-700 z-[1] overflow-hidden">
      <div className="flex flex-col items-center mt-4">
        <span className=" absolute top-4 right-4 text-2xl lg:text-xl font-semibold ">
          #{index + 1}
        </span>
        <div className="w-24 h-24 lg:w-28 lg:h-28 relative rounded-full overflow-hidden shadow-2xl ">
          <Image
            src={data.avatar_url}
            alt={data.team_name}
            layout="fill"
            objectFit="cover"
            quality={100}
            className="w-full h-full user_image"
          />
        </div>
        <h1 className="my-2 mx-auto text-lg lg:text-xl font-medium  text-center tracking-[0.2px]">
          {parseName(data.full_name)}
        </h1>

        <span className="text-base lg:text-md font-medium opacity-50">
          {data.team_name}
        </span>

        <p className="my-2 mx-auto text-lg font-medium text-center italic tracking-[0.2px] lg:text-base">
          {data.game}
        </p>
      </div>

      <div className="relative flex py-5 items-center">
        <div className="flex-grow border-t border-gray-400"></div>
      </div>

      <div className="m-auto w-full flex flex-row justify-between ">
        <div>
          <h2 className="mt-2.5 mb-0 mx-auto text-lg lg:text-xl font-curlfont text-center ">
            Earnings
          </h2>
          <p className="-mt-[2px] mb-2.5 mx-auto text-base lg:text-lg font-medium  text-center ">
            Ksh: {data.earnings}
          </p>
        </div>

        {/* <div className="relative flex px-5 items-center">
          <div className="absolute right-0 top-0 hidden h-full min-h-[1em] w-px self-stretch border-t-0 bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-100 dark:opacity-100 lg:block"></div>
        </div> */}

        <div className="after:block after:bg-black after:w-[1px] after:h-40 after:mx-auto after:my-2"></div>

        <div>
          <h2 className="mt-2.5 mb-0 mx-auto text-lg lg:text-xl font-curlfont  text-center ">
            Trophies
          </h2>
          <p className="-mt-[2px] mb-2.5 mx-auto text-sm font-curlfont  text-center ">
            Legendary ({data.legendaryTrophies})
          </p>
          <p className="-mt-[2px] mb-2.5 mx-auto text-sm font-curlfont  text-center ">
            Elite ({data.eliteTrophies})
          </p>
          <p className="-mt-[2px] mb-2.5 mx-auto text-sm  font-curlfont  text-center ">
            Pro ({data.proTrophies})
          </p>
          <p className="-mt-[2px] mb-2.5 mx-auto text-sm font-curlfont text-center ">
            Amateur ({data.amateurTrophies})
          </p>
          <p className="-mt-[2px] mb-2.5 mx-auto text-sm font-curlfont  text-center ">
            Beginner ({data.beginnerTrophies})
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopCard;
