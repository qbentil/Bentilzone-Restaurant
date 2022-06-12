import { BiRefresh } from "react-icons/bi";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { motion } from "framer-motion";
import { MdShoppingBasket } from "react-icons/md";
import { useStateValue } from "../../context/StateProvider";
const CartHeader = () => {
  const [{ showCart }, dispatch] = useStateValue();
  const handleToggleCart = () => {
    dispatch({
      type: "TOGGLE_CART",
      showCart: !showCart,
    });
  };
  return (
    <div className="w-full flex items-center bg-white justify-between px-4 py-2 cursor-pointer">
      <motion.div whileTap={{ scale: 0.8 }} onClick={() => handleToggleCart()}>
        <MdOutlineKeyboardBackspace className="text-textColor text-2xl " />
      </motion.div>

      <div className="flex items-center justify-center gap-2">
        Basket
        <MdShoppingBasket className="text-xl cursor-pointer text-cartNumBg" />
      </div>

      <motion.p
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 0.9 }}
        className="flex items-center justify-center gap-2 p-1 px-2 my-2 bg-cardOverlay rounded-md hover:shadow-sm text-textColor text-base"
      >
        clear <BiRefresh className="text-cartNumBg" />
      </motion.p>
    </div>
  );
};

export default CartHeader;
