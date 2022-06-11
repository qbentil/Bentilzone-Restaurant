import { BiMinus, BiPlus } from "react-icons/bi";

import { MdDelete } from "react-icons/md";
import { Strawberry } from "../Assets";
import { motion } from "framer-motion";

const CartItem = () => {
  return (
    <div className="w-full p-1 px-2 rounded-lg bg-cartItem hover:shadow-md flex items-center justify-between gap-2 cursor-pointer ">
      <div className=" flex items-center  gap-2">
        <img
          src={Strawberry}
          alt=""
          className="w-20 h-20 max-w-[60px] rounded-full object-contain"
        />

        <div className="flex flex-col gap-0 ">
          <p className="text-base text-gray-50">Classic Pork Fried Rice</p>
          <p className="text-sm block text-gray-300 font-semibold">
            <span className="text-xs text-red-600">₵</span> {22.25}
          </p>
        </div>
      </div>

      <div className="group flex items-center gap-2  cursor-pointer">
        <motion.div className="" whileTap={{ scale: 0.75 }}>
          <BiMinus className="text-gray-50" />
        </motion.div>
        <p className="text-sm text-gray-50 w-5 h-5 rounded-sm bg-cartBg flex items-center justify-center cursor-default">
          1
        </p>
        <motion.div className="" whileTap={{ scale: 0.75 }}>
          <BiPlus className="text-gray-50" />
        </motion.div>
      </div>

      <motion.div whileTap={{ scale: 0.75 }} className="text-sm text-gray-50 w-6 h-6 rounded-lg bg-cartNumBg flex items-center justify-center">
        <MdDelete />
      </motion.div>
    </div>
  );
};

export default CartItem;
