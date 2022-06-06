import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { MdAdd, MdLogout, MdShoppingBasket } from "react-icons/md";
import {RiArrowDropDownLine} from 'react-icons/ri'

import Avatar from "../../img/avatar.png";
import { Link } from "react-router-dom";
import Logo from "../../img/logo.png";
// import React, { useState } from "react";
import { app } from "../../firebase.config";
import { motion } from "framer-motion";
import { useStateValue } from "../../context/StateProvider";

const Header = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const [{ user }, dispatch] = useStateValue();
  const login = async () => {
    console.log("loginnnnn fired");
    // return
    if (!user) {
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: "SET_USER",
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    }
  };
  const logout = async () => {
    if (user) {
      await firebaseAuth.signOut();
      dispatch({
        type: "SET_USER",
        user: null,
      });
      localStorage.setItem("user", "undefined");
    } else {
      console.log("You are not logged in");
    }
  };

  return (
    <header className="w-screen fixed z-50  p-6 px-16">
      {/* Tablet and Desktop */}
      <div className="hidden md:flex w-full justify-between itesm-center">
        <Link to={"/"}>
          <motion.div
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-2 cursor-pointer"
          >
            <img src={Logo} alt="Logo" className="w-8 object-cover" />
            <p className="text-headingColor text-xl font-bold">Bentilzone</p>
          </motion.div>
        </Link>

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

          <motion.div
            whileTap={{ scale: 0.9 }}
            className="relative flex items-center justify-center text-textColor"
          >
            <MdShoppingBasket className="text-2xl cursor-pointer" />
            <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
              <p className="text-sm text-white font-semibold">0</p>
            </div>
          </motion.div>
        </div>

        {/* User */}

        {user ? (
          <div
            className={`group flex items-center gap-3 border px-3 py-1 rounded-lg`}
          >
            <motion.div
              whileTap={{ scale: 0.9 }}
              className=" flex items-center justify-center"
            >
              <img
                src={user?.photoURL? user.photoURL : Avatar}
                className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-2xl rounded-full cursor-pointer"
                alt="user-profile"
              />
              <p className="text-headingColor cursor-pointer flex items-center justify-center gap-2">
                {user?.displayName} <RiArrowDropDownLine />
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate = {{opacity: 1, scale: 1}}
              exit = {{opacity: 0, scale: 0.6}}
              className="hidden group-hover:flex w-54  bg-gray-50 rounded-lg shadow-xl  flex-col absolute right-16 top-[4.5rem]"
            >
              <p className="cursor-pointer px-10 py-2 flex items-center gap-3 hover:bg-slate-100 transition-all duration-100 ease-in-out text-base text-textColor">
                New Item
                <MdAdd />
              </p>
              <p
                className="cursor-pointer px-10 py-2 flex items-center gap-3 hover:bg-slate-100 transition-all duration-100 ease-in-out text-base text-textColor"
                onClick={logout}
              >
                Logout
                <MdLogout />
              </p>
            </motion.div>
          </div>
        ) : (
          <motion.div
            className={` flex items-center gap-3 border border-orange-500 px-3 py-1 rounded-lg`}
            whileTap={{ scale: 0.6 }}
            onClick={login}
          >
            <img
              src={Avatar}
              className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-2xl rounded-full cursor-pointer"
              alt="user-profile"
            />
            <p className="text-headingColor cursor-pointer">
              {"Login / SignUp"}
            </p>
          </motion.div>
        )}
      </div>

      {/* Mobile */}
      <div className="flex md:hidden w-full bg-blue-400 p-5"></div>
    </header>
  );
};

export default Header;
