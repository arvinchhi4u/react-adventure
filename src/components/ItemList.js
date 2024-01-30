import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // Dispatch an Action
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card?.info?.id}
          className="flex m-2 p-2 border-b border-gray-200"
          data-testid="foodItems"
        >
          <div className="relative w-2/12 h-auto">
            <img
              src={CDN_URL + item.card?.info?.imageId}
              alt="Item"
              className="rounded-md"
            />
            <button
              className="absolute bottom-1 left-[25%] py-1 px-3 bg-white text-sm shadow-md"
              onClick={() => handleAddItem(item)}
            >
              Add +
            </button>
          </div>
          <div className="mx-4 w-10/12">
            <div className="flex justify-between">
              <span className="font-medium">{item.card?.info?.name}</span>
              <span className="italic">
                ₹{" "}
                {(item.card?.info?.price || item.card?.info?.defaultPrice) /
                  100}
              </span>
            </div>
            <p className="text-sm mb-2">{item.card?.info?.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
