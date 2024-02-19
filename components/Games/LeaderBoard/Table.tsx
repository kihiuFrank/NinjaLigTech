import { TableDataType } from "@/types/LeaderBoardTypes";
import TableHeader from "./TableHeader";
import UserCard from "./UserCard";
import TopCard from "./TopCard";

const postData: TableDataType[] = [
  {
    avatar_url:
      "https://img.freepik.com/premium-photo/manchester-city-fc-soccer-player-dribblin-backgruond_1017595-75.jpg",
    team_name: "Man City",
    full_name: "Frankline Kihiu",
    earnings: 500,
    beginnerTrophies: 0,
    amateurTrophies: 0,
    proTrophies: 0,
    eliteTrophies: 2,
    legendaryTrophies: 0,
    game: "DLS24",
  },
  {
    avatar_url:
      "https://img.freepik.com/free-photo/red-fox-sitting-snow-looking-cute-generated-by-ai_188544-21346.jpg",
    team_name: "Thee Foxes",
    full_name: "Elijah Musau",
    earnings: 150,
    beginnerTrophies: 0,
    amateurTrophies: 0,
    proTrophies: 1,
    eliteTrophies: 0,
    legendaryTrophies: 0,
    game: "DLS24",
  },

  {
    avatar_url:
      "https://img.freepik.com/premium-photo/world-cup-trophy-soccer-stadium_692702-7336.jpg",
    team_name: "Patoh FC",
    full_name: "Samson Nyarero",
    earnings: 150,
    beginnerTrophies: 0,
    amateurTrophies: 0,
    proTrophies: 1,
    eliteTrophies: 0,
    legendaryTrophies: 0,
    game: "DLS24",
  },
  {
    avatar_url:
      "https://img.freepik.com/premium-photo/guardiola-arteta-dynamic-duo-soccer-match_983420-28589.jpg",
    team_name: "Ac Evince",
    full_name: "Paul Gitonga",
    earnings: 150,
    beginnerTrophies: 0,
    amateurTrophies: 0,
    proTrophies: 1,
    eliteTrophies: 0,
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
