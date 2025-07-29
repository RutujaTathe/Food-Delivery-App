import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../Utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API_URL + resId);

    const json = await data.json();
    console.log("menudata", json);

    setResInfo(json.data);
  };
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
            {item?.card?.info?.name}-{"Rs"} . {item?.card?.info?.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
