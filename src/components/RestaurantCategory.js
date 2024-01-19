import ItemList from "./ItemList";

const RestaurantCategory = ({data, showItems, setShowIndex}) => {
  const { itemCards } = data;

  const toggleArrow = showItems ? "🔼" : "🔽";

  const handleCLick = () => {
    setShowIndex();
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
