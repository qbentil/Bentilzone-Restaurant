import { BiRefresh } from "react-icons/bi";
import { MdLogin, MdOutlineKeyboardBackspace } from "react-icons/md";
import { motion } from "framer-motion";
import { MdShoppingBasket } from "react-icons/md";
import { useStateValue } from "../../context/StateProvider";
import { emptyCart, hideCart } from "../../utils/functions";
import { Link } from "react-router-dom";
const CartHeader = () => {
  const [{  user, cartItems, foodItems }, dispatch] = useStateValue();

  return (
    <div className="w-full flex items-center bg-white justify-between px-4 py-2 cursor-pointer">
      <motion.div whileTap={{ scale: 0.8 }} onClick={() => hideCart(dispatch)}>
        <MdOutlineKeyboardBackspace className="text-textColor text-2xl " />
      </motion.div>

      <div className="flex items-center justify-center gap-2">
        Cart
        <MdShoppingBasket className="text-xl cursor-pointer text-cartNumBg" />
      </div>

      {user ? (
        <motion.p
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 0.9 }}
          onClick={() => emptyCart(cartItems, foodItems, dispatch)}
          className="flex items-center justify-center gap-2 p-1 px-2 my-2 bg-cardOverlay rounded-md hover:shadow-sm text-textColor text-base"
        >
          clear <BiRefresh className="text-cartNumBg" />
        </motion.p>
      ) : (
        <Link to={`/login`} onClick={() => hideCart(dispatch)}>
          <motion.p
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 0.9 }}
            className="flex items-center justify-center gap-2 p-1 px-2 my-2 bg-cardOverlay rounded-md hover:shadow-sm text-textColor text-base"
          >
            <MdLogin className="text-cartNumBg" /> Login to cart
          </motion.p>
        </Link>
      )}
    </div>
  );
};

export default CartHeader;
