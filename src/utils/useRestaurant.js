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

    const gridWidgets = json?.data?.cards.filter((card) => {
      return (
        card?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget"
      );
    });

    setListOfRestaurants(
      gridWidgets[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      gridWidgets[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return [
    listOfRestaurants,
    setListOfRestaurants,
    filteredRestaurants,
    setFilteredRestaurants,
  ];
};

export default useRestaurant;
