import RestaurantCard from "./RestaurantCard";
import React, { useEffect, useState } from "react";
import resList from "../Utils/MockData";
import Shimmer from "./Shimmer";
import ChooseMenu from "./ChooseMenu";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import OfflineGame from "./OfflineGame";
let resObj = resList;

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [listOfMenu, setListOfMenu] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    chooseMenu();
  }, []);

  const fetchData = async () => {
    // const data = await fetch(
    //   "https://api.allorigins.win/raw?url=" +
    //     encodeURIComponent(
    //       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5511264&lng=73.94406459999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    //     )
    // );
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5511264&lng=73.94406459999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    //for displying title
    let title1 = json?.data?.cards[0].card.card.header.title;

    resObj =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    console.log("modify Resobj object after api call", resObj);
    setListOfRestaurant(resObj);
    setFilteredRestaurant(resObj);
    setTitle(title1);
  };
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <OfflineGame />;
  }
  const chooseMenu = async () => {
    const data = await fetch(
      "https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5511264&lng=73.94406459999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    resObj = json?.cards.card[0].card.imageGridCards.info;

    setListOfMenu(resObj);
  };
  //conditional rendering

  return listOfRestaurant.length == 0 ? (
    <div className="shimmer-container">
      {Array(15)
        .fill()
        .map((_, index) => (
          <Shimmer key={index} />
        ))}
    </div>
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              //filter by restraunt cards and update the UI
              //serachText
              console.log("searchText", searchText);
              const filteredRestaurant = listOfRestaurant.filter((res) => {
                return res.info.name
                  ?.toLowerCase()
                  .includes(searchText.toLowerCase());
              });

              console.log("filtered restaurant", filteredRestaurant);
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="toprated"
          onClick={() => {
            const FilteredList = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4
            );

            console.log("filterList", FilteredList);

            setFilteredRestaurant(FilteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      {/* <h2 className="title">{title}</h2> */}
      <div className="choose-menu">
        {listOfMenu.map((restaurant) => (
          <ChooseMenu key={restaurant.id} resData={restaurant} />
        ))}
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
