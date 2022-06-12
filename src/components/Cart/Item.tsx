import { BiMinus, BiPlus } from "react-icons/bi";

import { MdDelete } from "react-icons/md";
import { motion } from "framer-motion";
import { cartItem } from "../../../types";
import { deleteCartItem, getFoodyById, updateCartItemQty } from "../../utils/functions";
import { useStateValue } from "../../context/StateProvider";

const CartItem = ({ item }: { item: cartItem }) => {
  const [{ foodItems, cartItems }, dispatch] = useStateValue();
  const { id, fid, qty } = item;
  const foodItem = getFoodyById(foodItems, fid);

  return (
    <div className="w-full p-1 px-2 rounded-lg bg-cartItem hover:shadow-md flex items-center justify-between gap-2 cursor-pointer ">
      <div className=" flex items-center  gap-2">
        <img
          src={foodItem?.imageURL}
          alt=""
          className="w-20 h-20 max-w-[60px] rounded-full object-contain"
        />

        <div className="flex flex-col gap-0 ">
          <p className="text-base text-gray-50">{foodItem?.title}</p>
          <p className="text-sm block text-gray-300 font-semibold">
            <span className="text-xs text-red-600">₵</span> {foodItem?.price}
          </p>
        </div>
      </div>

      <div className="group flex items-center gap-2  cursor-pointer">
        <motion.div
          className=""
          whileTap={{ scale: 0.75 }}
          onClick={qty > 1 ? () => updateCartItemQty(cartItems, item, dispatch, -1) : () => {}}
        >
          <BiMinus className="text-gray-50" />
        </motion.div>
        <p className="text-sm text-gray-50 w-5 h-5 rounded-sm bg-cartBg flex items-center justify-center cursor-default">
          {qty}
        </p>
        <motion.div
          className=""
          whileTap={{ scale: 0.75 }}
          onClick={() => updateCartItemQty(cartItems, item, dispatch, 1)}
        >
          <BiPlus className="text-gray-50" />
        </motion.div>
      </div>

      <motion.div
        whileTap={{ scale: 0.75 }}
        className="text-sm text-gray-50 w-6 h-6 rounded-lg bg-cartNumBg flex items-center justify-center"
        onClick={() => deleteCartItem(cartItems, item, dispatch)}
      >
        <MdDelete />
      </motion.div>
    </div>
  );
};

export default CartItem;
