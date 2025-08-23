import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex ,dummy}) => {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      {/* {header} */}
      <div className="w-6/12 bg-grey-200 shadow-lg p-4 m-auto my-6 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold">
            {data.title}({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {showItems && <ItemList items={data.itemCards} dummy={dummy}/>}{" "}
      </div>
      {/* Accordian Body */}
    </div>
  );
};

export default RestaurantCategory;
