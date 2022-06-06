// import React from 'react'
import { MdShoppingBasket } from "react-icons/md";
const MobileNav = () => {
  return (
    <div className="flex items-start gap-8">
      <ul 
      className={`flex items-start gap-4 flex-col`}>
        <li className="text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out px-10 flex items-center justify-center gap-3">
          Cart         <MdShoppingBasket className="text-xl cursor-pointer" />
        <div className="absolute top-16 right-10 w-4 h-4 rounded-full bg-cartNumBg flex items-center justify-center">
          <p className="text-sm text-white font-semibold">0</p>
        </div>
        </li>
        <li className="text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out px-10">
          Menu
        </li>
        <li className="text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out px-10">
          Services
        </li>
        <li className="text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out px-10">
          About
        </li>
        <li className="text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out px-10">
          Contact
        </li>
      </ul>

    </div>
  );
};

export default MobileNav;
