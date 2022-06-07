// import React from 'react'
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";
const Navigations = ({direction}: {direction?:string}) => {
  return (
    <div className="flex items-center gap-8">
      <motion.ul 
      initial={{opacity: 0, x:200}}
      animate={{opacity: 1, x:0}}
      exit={{opacity: 0, x:200}}
      className={`flex items-center gap-8 ${direction && direction}`}>
        <li className="md:text-sm lg:text-md text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out">
          Home
        </li>
        <li className="md:text-sm lg:text-md text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out">
          Menu
        </li>
        <li className="md:text-sm lg:text-md text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out">
          Services
        </li>
        <li className="md:text-sm lg:text-md text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out">
          About Us
        </li>
        <li className="md:text-sm lg:text-md text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out">
          Contact Us
        </li>
      </motion.ul>

      <motion.div
        whileTap={{ scale: 0.9 }}
        // initial={{opacity: 0, x:200}}
        // animate={{opacity: 1, x:0}}
        // exit={{opacity: 0, x:200}}
        className="relative flex items-center justify-center text-textColor"
      >
        <MdShoppingBasket className="text-2xl cursor-pointer" />
        <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
          <p className="text-sm text-white font-semibold">0</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Navigations;
