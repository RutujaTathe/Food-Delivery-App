import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../Utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, totalRatingsString } =
    resInfo?.cards?.[2]?.card?.card?.info;

  const item =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
      ?.card?.itemCards;
  console.log("itemcards", item);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{cuisines.join(",")}</h3>
      <h4>{costForTwoMessage}</h4>
      <h4>{totalRatingsString}</h4>

      <h2>Menu</h2>
      <ul>
        {item.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name}-{"Rs"} .{" "}
            {item?.card?.info?.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
