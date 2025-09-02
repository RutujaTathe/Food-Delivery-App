import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../Utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const handleClearCart = () => {
    const dispatch = useDispatch();
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
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};
export default Cart;
