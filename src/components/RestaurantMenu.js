import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5511264&lng=73.94406459999999&restaurantId=74379&catalog_qa=undefined&submitAction=ENTER"
    );

    const json = await data.json();
    console.log("menudata", json);

    setResInfo(json.data);
  };
  const name = resInfo?.cards?.[2]?.card?.card?.info?.name;
  const cuisines = resInfo?.cards?.[2]?.card?.card?.info?.cuisines;
  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{cuisines.join(",")}</h3>

      <h2>Menu</h2>
      <ul>
        <li>Biryani</li>
        <li>Burger</li>
        <li>Diet Coke</li>
      </ul>
    </div>
  );
};
export default RestaurantMenu;
