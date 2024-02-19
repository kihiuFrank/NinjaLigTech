import Image from "next/image";
import { TableDataType } from "@/types/LeaderBoardTypes";
import { parseName } from "@/utils/parseName";

const UserCard = ({ data, index }: { data: TableDataType; index: number }) => {
  return (
    <tr>
      <td className="p-5 border-b border-gray-200 bg-darkwhite lg:hidden">
        <p className="font-mainfont text-lg font-medium text-darkgrey text-center">
          {index + 4}
        </p>
      </td>
      <td className="border-b border-gray-200 bg-darkwhite">
        <p className="items-center font-codefont text-xl font-semibold text-primarydark text-center lg:px-3 lg:py-4 lg:text-lg md:text-base">
          # {data.beginnerTrophies}
        </p>

        <p className="items-center font-codefont text-xl font-semibold text-primarydark text-center lg:px-3 lg:py-4 lg:text-lg md:text-base">
          # {data.amateurTrophies}
        </p>

        <p className="items-center font-codefont text-xl font-semibold text-primarydark text-center lg:px-3 lg:py-4 lg:text-lg md:text-base">
          # {data.proTrophies}
        </p>

        <p className="items-center font-codefont text-xl font-semibold text-primarydark text-center lg:px-3 lg:py-4 lg:text-lg md:text-base">
          # {data.eliteTrophies}
        </p>

        <p className="items-center font-codefont text-xl font-semibold text-primarydark text-center lg:px-3 lg:py-4 lg:text-lg md:text-base">
          # {data.legendaryTrophies}
        </p>
      </td>
      <td className="p-5 border-b border-gray-200 bg-darkwhite w-1/2 lg:px-3 lg:py-4">
        <div className="flex items-center">
          <div className="flex-shrink-0 w-12 h-12 mr-5 lg:hidden">
            <Image
              className="w-full h-full rounded-full"
              src={data.avatar_url}
              alt={data.team_name}
              height={60}
              width={60}
            />
          </div>
          <div>
            <p className="font-codefont text-xl font-medium text-lightblack tracking-wide capitalize lg:text-lg md:text-base">
              {parseName(data.full_name) || (
                <span className="text-lightgrey">Name not found...</span>
              )}
            </p>
            <p className="font-curlfont text-base font-semibold text-darkgrey lg:hidden">
              {data.game || (
                <span className="text-warningoff">Game not found...</span>
              )}
            </p>
          </div>
        </div>
      </td>
      <td className="p-5 border-b border-gray-200 bg-darkwhite lg:hidden">
       
          {data.team_name}
       
      </td>

      <td className="p-5 border-b border-gray-200 bg-darkwhite text-center lg:px-3 lg:py-4 xs:hidden">
        <span className="font-codefont text-xl font-medium text-lightblack lg:text-base">
          {data.earnings}
        </span>
      </td>
    </tr>
  );
};

export default UserCard;
