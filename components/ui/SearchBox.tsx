import React from "react";
import { FaCalendarWeek, FaMap, FaUserGroup } from "react-icons/fa6";

const SearchBox = () => {
  return (
    <div
      className="w-[95%] sm:w-[80%] bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
    items-center justify-center gap-8 mt-4 sm:mt-12 rounded-lg p-8 "
    >
      <SearchItem
        Icon={FaMap}
        title="Location"
        placeText="Where are you going?"
        inType="text"
      />
      <SearchItem Icon={FaCalendarWeek} title="Start Date" inType="date" />
      <SearchItem Icon={FaCalendarWeek} title="End Date" inType="date" />
      <SearchItem Icon={FaUserGroup} title="Guest" txt="1 Guest 1 Room" />
    </div>
  );
};

export default SearchBox;

type SearchItemProp = {
  Icon: React.ElementType;
  title?: string;
  placeText?: string;
  inType?: string;
  txt?: string;
};

function SearchItem({ Icon, inType, title, placeText, txt }: SearchItemProp) {
  return (
    <div className="flex items-center space-x-6 text-gray-900">
      <Icon className="w-6 h-6 text-blue-600" />
      <div>
        <p className="text-lg font-medium mb-1">{title}</p>
        {inType ? (
          <input
            type={inType}
            placeholder={placeText}
            className="placeholder:text-gray-500"
          />
        ) : (
          <p>{txt}</p>
        )}
      </div>
    </div>
  );
}
