import React from "react";
import { useStateValue } from "../../context/StateProvider";
import { motion } from "framer-motion";
import { addToCart } from "../../utils/functions";
import { MdAddShoppingCart, MdDeleteForever } from "react-icons/md";
import { BiEditAlt } from "react-icons/bi";
const Action = ({ id, admin }: { id: number; admin?: boolean }) => {
  const [{ cartItems, foodItems, user }, dispatch] = useStateValue();
  return (
    <div className="flex flex-col gap-2">
      {admin ? (
        <>
          <motion.div
            whileTap={{ scale: 1.1 }}
            whileHover={{ scale: 1.2 }}
            className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-green-600 flex items-center justify-center cursor-pointer"
            // onClick={() => addToCart(cartItems, foodItems, user, id, dispatch)}
            title="Edit"
          >
            <BiEditAlt className="text-white md:text-xl" />
          </motion.div>
          <motion.div
            whileTap={{ scale: 1.1 }}
            whileHover={{ scale: 1.2 }}
            className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-red-600 flex items-center justify-center cursor-pointer"
            // onClick={() => addToCart(cartItems, foodItems, user, id, dispatch)}
            title="Delete"
          >
            <MdDeleteForever className="text-white md:text-xl" />
          </motion.div>
        </>
      ) : (
        <motion.div
          whileTap={{ scale: 1.1 }}
          whileHover={{ scale: 1.2 }}
          className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-red-600 flex items-center justify-center cursor-pointer"
          onClick={() => addToCart(cartItems, foodItems, user, id, dispatch)}
          title="Add to cart"
        >
          <MdAddShoppingCart className="text-white md:text-xl" />
        </motion.div>
      )}
    </div>
  );
};

export default Action;
