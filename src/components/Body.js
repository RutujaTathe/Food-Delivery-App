import RestaurantCard from "./RestaurantCard";
import React, { useEffect, useState } from "react";
import resList from "../Utils/MockData";
import Shimmer from "./Shimmer";
let resObj = resList;
console.log("resObj", resObj);

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5511264&lng=73.94406459999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    resObj =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    console.log("modify Resobj object after api call", resObj);
    setListOfRestaurant(resObj);
    setFilteredRestaurant(resObj);
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
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
