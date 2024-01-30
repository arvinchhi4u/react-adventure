import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import RestaurantCard, { withTopRatedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurant from "../utils/useRestaurant";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [
    listOfRestaurants,
    setListOfRestaurants,
    filteredRestaurants,
    setFilteredRestaurants,
  ] = useRestaurant();
  const [searchText, setSerachText] = useState("");
  const onlineStatus = useOnlineStatus();

  const { loggedInUser, setUserName } = useContext(UserContext);

  const RestaurantCardTopRated = withTopRatedLabel(RestaurantCard);

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you're offline!! Please check your internet connection!
      </h1>
    );

  // Conditional Rendering
  return !listOfRestaurants || listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="m-4 p-4">
          <input
            data-testid="searchInput"
            type="text"
            className="search-box border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSerachText(e.target.value);
            }}
          />
          <button
            className="m-4 py-2 px-4 bg-green-100 rounded-md"
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
        <div className="m-4 p-4">
          <button
            className="my-4 py-2 px-4 bg-gray-100 rounded-md"
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
        <div className="m-4 p-4">
          <div className="my-4 py-2">
            <span className="inline-block px-2 font-bold">Username</span>
            <input
              type="text"
              className="border border-solid border-black"
              value={loggedInUser}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        {filteredRestaurants.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            {restaurant.info.avgRating >= 4.5 ? (
              <RestaurantCardTopRated resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
