import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="m-8 text-center">
      <h1 className="my-6 text-2xl font-bold">Cart</h1>
      <div className="mx-auto w-8/12 text-left">
        {cartItems.length !== 0 && (
          <div className="flex flex-row-reverse">
            <button
              className="flex-none py-2 px-4 text-sm font-medium text-white bg-gray-900 rounded-lg"
              onClick={handleClearCart}
            >
              Clear Cart
            </button>
          </div>
        )}
        {cartItems.length === 0 && (
          <h1 className="my-4 text-lg font-medium text-center">
            Your cart is empty! Please add items to the cart!
          </h1>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
