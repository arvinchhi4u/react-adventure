import { useEffect, useState } from "react";
import { RES_API } from "./constants";

const useRestaurant = () => {

  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_API);
    const json = await data.json();
    setListOfRestaurants(json?.data?.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(json?.data?.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  return [listOfRestaurants, filteredRestaurants];
};

export default useRestaurant;