import { TableDataType } from "@/types/LeaderBoardTypes";
import TableHeader from "./TableHeader";
import UserCard from "./UserCard";
import TopCard from "./TopCard";

const postData: TableDataType[] = [
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

const Table = () => {
  return (
    <div className="mx-auto max-w-7xl sm:py-8 px-4 lg:px-8    sm:px-2">
      <div className="shadow-[0_0_2px_rgba(50,69,107,0.4)] rounded-lg overflow-hidden">
        <table className="w-full table-auto">
          <TableHeader />

          <tbody>
            {postData.map((item, i) => (
              <UserCard key={item.team_name} data={item} index={i} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
