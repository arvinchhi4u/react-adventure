import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data}) => {
  const { itemCards } = data;

  const [showItems, setShowItems] = useState(false);
  const [toggleArrow, setToggleArrow] = useState("🔽");


  const handleCLick = () => {
    setShowItems(!showItems);
    setToggleArrow(showItems ? "🔽" : "🔼");
  };

  return (
    <div className="my-8 mx-auto w-8/12 shadow-md">
      {/* accordion header */}
      <div className="flex justify-between p-4 bg-gray-100 cursor-pointer" onClick={handleCLick}>
        <span className="font-bold text-lg">{data.title} ({itemCards.length})</span>
        <span>{toggleArrow}</span>
      </div>

      {/* accordion body */}
      {showItems && <ItemList items={itemCards} />}

    </div>
  );
};

export default RestaurantCategory;
