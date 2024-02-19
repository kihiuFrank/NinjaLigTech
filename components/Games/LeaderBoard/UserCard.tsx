import Image from "next/image";
import { TableDataType } from "@/types/LeaderBoardTypes";
import { parseName } from "@/utils/parseName";

const UserCard = ({ data, index }: { data: TableDataType; index: number }) => {
  return (
    <tr>
      <td className="p-5 border-b border-gray-200 hidden md:table-cell  ">
        <p className="font-mainfont text-lg font-medium text-darkgrey text-center ">
          {index + 4}
        </p>
      </td>

      <td className="p-5 border-b border-gray-200  w-1/2 lg:px-3 lg:py-4 xs:hidden">
        <div className="flex items-center">
          <div className="flex-shrink-0 w-8 h-8 lg:w-14 lg:h-14 mr-5  ">
            <Image
              className="w-full h-full rounded-full"
              src={data.avatar_url}
              alt={data.team_name}
              height={60}
              width={60}
            />
          </div>
          <div>
            <p className="font-codefont text-sm lg:text-lg font-medium  tracking-wide capitalize  md:text-base">
              {parseName(data.full_name) || (
                <span className="text-lightgrey">Name not found...</span>
              )}
            </p>
            <p className="font-curlfont text-sm lg:text-lg font-semibold text-darkgrey ">
              {data.game || (
                <span className="text-warningoff">Game not found...</span>
              )}
            </p>
          </div>
        </div>
      </td>

      <td className="p-5 border-b border-gray-200  hidden md:table-cell">
        <span className="text-sm lg:text-lg">{data.team_name}</span>
      </td>

      <td className="p-5 border-b border-gray-200  text-center lg:px-3 lg:py-4 ">
        <span className="font-codefont text-sm lg:text-lg font-medium  ">
          Ksh: {data.earnings}
        </span>
      </td>

      <td className="border-b border-gray-200 hidden md:table-cell">
        <p className="items-center font-codefont text-xl  text-center  md:text-base">
          Legendary ({data.legendaryTrophies})
        </p>

        <p className="items-center font-codefont text-xl  text-center md:text-base">
          Elite ({data.eliteTrophies})
        </p>

        <p className="items-center font-codefont text-xl   text-center  md:text-base">
          Pro ({data.proTrophies})
        </p>

        <p className="items-center font-codefont text-xl   text-center  md:text-base">
          Amateur ({data.amateurTrophies})
        </p>

        <p className="items-center font-codefont text-xl   text-center  md:text-base ">
          Beginner ({data.beginnerTrophies})
        </p>
      </td>
    </tr>
  );
};

export default UserCard;
