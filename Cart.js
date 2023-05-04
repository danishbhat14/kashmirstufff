import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "./CartSlice";
import { data } from "./Constants";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <h1 className="font-bold text-3xl"> Cart Items - {cartItems.length}</h1>
      {cartItems.length > 0 ? (
        <div className="flex flex-wrap">
          {cartItems.map((item) => {
            const product = data.find((product) => product.id === item.id);
            return (
              <div
                className=" w-96   shadow-lg  p-4 m-4  xl:mx-14 md:mx-3
                lg:mx-6 border-slate-500 hover:scale-110 hover:z-10 transition-all duration-500 ease-in-out"
                key={item.id}
              >
                <img
                  alt="imag"
                  className=" rounded-md h-56 w-screen "
                  src={product.image}
                />
                <h2 className="font-bold font-serif text-gray-500">
                  {product.name}
                </h2>
                <hr />
                <h2 className="text-red-600">{product.price_per_kg}</h2>
                <h2 className="font-serif text-green-500">Quantity: {item.quantity}</h2>
              </div>
            );
          })}
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
      <div className="flex justify-between">
        <button className="bg-green-100 p-2 m-5" onClick={() => handleClearCart()}>
          Clear Cart
        </button>
        <Link to="/Form">
          <button className="bg-blue-500 p-2 m-5 text-white">
            Checkout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
