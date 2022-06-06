import React from "react";
import Logo from "../../img/logo.png";
import Avatar from "../../img/avatar.png";
import { MdShoppingBasket } from "react-icons/md";
const Header = () => {
  return (
    <header className="w-screen fixed z-50  p-6 px-16">
      {/* Tablet and Desktop */}
      <div className="hidden md:flex w-full justify-between itesm-center">
        <div className="flex items-center gap-2">
          <img src={Logo} alt="Logo" className="w-8 object-cover" />
          <p className="text-headingColor text-xl font-bold">Bentilzone</p>
        </div>

        {/* navigation */}
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <li className="text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out">
              Home
            </li>
            <li className="text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out">
              Menu
            </li>
            <li className="text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out">
              Services
            </li>
            <li className="text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out">
              About Us
            </li>
            <li className="text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out">
              Contact Us
            </li>
          </ul>

          <div className="relative flex items-center justify-center text-textColor">
            <MdShoppingBasket className="text-2xl cursor-pointer" />
            <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
              <p className="text-sm text-white font-semibold">0</p>
            </div>
          </div>
        </div>

        {/* User */}
       <div className=" flex items-center gap-3 border px-3 py-1 rounded-lg cursor-pointer">
       <img src={Avatar} className = 'w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-2xl' alt="user-profile" />
       <p className="text-headingColor">qbentil</p>
       </div>
      </div>

      {/* Mobile */}
      <div className="flex md:hidden w-full bg-blue-400 p-5"></div>
    </header>
  );
};

export default Header;
