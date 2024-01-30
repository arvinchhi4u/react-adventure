import { CDN_URL } from "../utils/constants";

export const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo } =
    resData?.info; // data destructuring
  const { deliveryTime } = resData?.info.sla;

  return (
    <div data-testid="resCard" className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <div className="res-logo-container">
        <img
          src={CDN_URL + cloudinaryImageId}
          alt="Restaurant Logo"
          className="rounded-md"
        />
      </div>
      <h3 className="py-4 text-lg font-bold text-black dark:text-white">
        {name}
      </h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

// Higher Order Component (HOC)
// RestaurantCrad => RestaurantCardBestSeller

export const withTopRatedLabel = (RestaurantCard) => {
  return (props) => {
    return(
      <div className="relative">
        <label className="absolute top-0 left-0 ml-4 py-1 px-3 bg-rose-500 font-bold text-white rounded-br-2xl">Top Rated</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;

