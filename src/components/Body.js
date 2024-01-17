import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { RES_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurant from "../utils/useRestaurant";

const Body = () => {
  const [listOfRestaurants, filteredRestaurants] = useRestaurant();
  const [searchText, setSerachText] = useState("");
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) return <h1>Looks like you're offline!! Please check your internet connection!</h1>;

  // Conditional Rendering
  return !listOfRestaurants || listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSerachText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filteredList = listOfRestaurants.filter((res) =>
                res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating >= 4.5
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
