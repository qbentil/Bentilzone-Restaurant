import { useStateValue } from "../../context/StateProvider";
import CartBody from "./Body";
import CarttHeader from "./Header";

const Cart = () => {
  const [{ showCart }, dispatch] = useStateValue();
  return (
    <>
      {showCart && (
        <div
          className={`w-full h-screen md:w-[350px] bg-white md:backdrop-blur-sm flex flex-col z-[101] drop-shadow-xl fixed top-0 right-0`}
        >
          <CarttHeader />
          <CartBody />
        </div>
      )}
    </>
  );
};

export default Cart;
