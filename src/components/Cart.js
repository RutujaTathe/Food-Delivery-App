import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../Utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto ">
        <button
          className="m-2 p-2 bg-black text-white rounded-md"
          onClick={handleClearCart}
        >
          clear Cart
        </button>
        {cartItems.length === 0 && (
          <div>
            <h2 className="text-xl font-bold mb-2">Your cart is empty</h2>
            <p className="text-gray-500 mb-6">
              You can go to home page to view more restaurants
            </p>
          </div>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};
export default Cart;
