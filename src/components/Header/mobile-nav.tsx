// import React from 'react'

import { MdOutlineRestaurantMenu, MdShoppingBasket } from "react-icons/md";

import { Link } from "react-router-dom";
import { Logo } from "../Assets";
import { motion } from "framer-motion";
import { useStateValue } from "../../context/StateProvider";

const MobileNav = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: any;
}) => {
  const [{showCart}, dispatch] = useStateValue();
  const handleToggleCart = () => {
    dispatch({
      type: "TOGGLE_CART",
      showCart: !showCart
    }); 
  }
  return (
    <div className="flex flex-col bg-cardOverlay backdrop-blur-sm items-start justify-start gap-16 w-screen h-screen  overflow-y-hidden  z-50 overflow-hidden ">
      <motion.div className="flex items-center justify-between w-screen h-24  px-10">
        <motion.div
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 200 }}
          className="relative flex items-center justify-center text-textColor"
          onClick={handleToggleCart}
        >
          <MdShoppingBasket className="text-4xl cursor-pointer" />
          <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-cartNumBg flex items-center justify-center">
            <p className="text-sm text-white font-semibold">0</p>
          </div>
        </motion.div>
        <motion.div
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 200 }}
          className="relative flex items-center justify-center text-textColor"
          onClick={() => setIsOpen(!isOpen)}
        >
          <MdOutlineRestaurantMenu className="text-headingColor text-4xl" />
        </motion.div>
      </motion.div>
      <div
        className={`flex items-center justify-center w-full  h-72 gap-10 flex-col`}
      >
        <p className="text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out px-10">
          Menu
        </p>
        <p className="text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out px-10">
          Services
        </p>
        <p className="text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out px-10">
          About
        </p>
        <p className="text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out px-10">
          Contact
        </p>
      </div>

      <Link to={'/'} onClick = {() => setIsOpen(!isOpen)} className="flex items-center  justify-center w-full">
        <motion.div
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          className="flex items-center gap-2 cursor-pointer"
          
        >
          <img src={Logo} alt="Logo" className="w-16 object-cover" />
          <p className="text-headingColor text-3xl font-bold">Bentilzone</p>
        </motion.div>
      </Link>
    </div>
  );
};

export default MobileNav;
