const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th className="px-4 py-5 border-b-2 border-gray-200  text-center text-sm lg:text-lg font-semibold uppercase tracking-wider  hidden md:table-cell  ">
          Rank
        </th>
        <th className="px-4 py-5 border-b-2 border-gray-200  text-left text-sm lg:text-lg font-semibold uppercase tracking-wider ">
          Participant&apos;s Info
        </th>
        <th className="px-4 py-5 border-b-2 border-gray-200  text-left text-sm lg:text-lg font-semibold uppercase tracking-wider hidden md:table-cell ">
          Team Name
        </th>
        <th className="px-4 py-5 border-b-2 border-gray-200  text-center text-sm lg:text-lg font-semibold uppercase tracking-wider ">
          Earnings
        </th>
        <th className="px-4 py-5 border-b-2 border-gray-200  text-left text-sm lg:text-lg font-semibold uppercase tracking-wider hidden md:table-cell">
          Trophies
        </th>
      </tr>
    </thead>
  );
};

export default TableHeader;
