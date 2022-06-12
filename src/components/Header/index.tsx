import { Avatar, Logo } from "../Assets";
import { Link, useNavigate } from "react-router-dom";

import DropDown from "./DropDown";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import LoginAction from "./LoginAction";
import MobileNav from "./mobile-nav";
import Navigations from "./Navigations";
import { RiArrowDropDownLine } from "react-icons/ri";
import { app } from "../../firebase.config";
import { getAuth } from "firebase/auth";
import { motion } from "framer-motion";
import { useState } from "react";
import { useStateValue } from "../../context/StateProvider";
import { toast } from "react-toastify";
const Header = () => {
  const navigate = useNavigate();
  const firebaseAuth = getAuth(app);
  const [{ user }, dispatch] = useStateValue();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenMobileNav, setIsOpenMobileNav] = useState(false);
  const logout = async () => {
    if (user) {
      await firebaseAuth.signOut()
      dispatch({
        type: "SET_USER",
        user: null,
      });
      dispatch({
        type: "SET_CARTITEMS",
        cartItems: [],
      });
      localStorage.setItem("user", "undefined");
      navigate("/");
      toast.success("Logout successful, Come back soon🥰", { autoClose: 2000 });
    } else {
      console.log("You are not logged in");
    }
  };

  return (
    <header className="w-screen fixed z-50 bg-cardOverlay backdrop-blur-md md:p-3 md:px-4 lg:p-6 lg:px-16">
      {/* Tablet and Desktop */}
      <div className="hidden md:flex w-full justify-between itesm-center">
        <Link to={"/"}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex items-center gap-2 cursor-pointer"
          >
            <img src={Logo} alt="Logo" className="md:w-6 lg:w-8 object-cover" />
            <p className="text-headingColor md:text-lg lg:text-xl font-bold">
              Bentilzone
            </p>
          </motion.div>
        </Link>

        {/* navigation */}
        <Navigations />

        {/* User */}

        {user ? (
          <div className={`group flex items-center gap-3 px-3 py-1 rounded-lg`}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className=" flex items-center justify-center"
            >
              <img
                src={user.photoURL || Avatar}
                className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-2xl rounded-full cursor-pointer"
                alt="profile"
              />
              <p className="text-headingColor cursor-pointer flex items-center justify-center gap-2">
                <RiArrowDropDownLine />
              </p>
            </motion.div>
            <DropDown user={user} action={logout} />
          </div>
        ) : (
          <LoginAction text={"Login"} />
        )}
      </div>

      {/* Mobile */}
      <motion.div
        className="flex md:hidden w-full p-0 items-center justify-between"
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 200 }}
      >
        {isOpenMobileNav ? (
          <MobileNav isOpen={isOpenMobileNav} setIsOpen={setIsOpenMobileNav} />
        ) : (
          <div className="p-5 flex items-center justify-between w-full">
            <motion.div
              whileTap={{ scale: 0.9 }}
              className=" flex items-center justify-center"
              onClick={() => setIsOpenMobileNav(!isOpenMobileNav)}
            >
              <HiOutlineMenuAlt2 className="text-headingColor text-4xl" />
            </motion.div>
            <Link to={"/"}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex items-center gap-2 cursor-pointer"
              >
                <img src={Logo} alt="Logo" className="w-8 object-cover" />
                <p className="text-headingColor text-xl font-bold">
                  Bentilzone
                </p>
              </motion.div>
            </Link>
            {user ? (
              <div
                className={`flex items-center gap-3 px-3 py-1 rounded-lg relative`}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="group flex items-center justify-center"
                >
                  <img
                    src={user?.photoURL ? user.photoURL : Avatar}
                    className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-2xl rounded-full cursor-pointer"
                    alt="user-profile"
                    onClick={() => setIsOpen(!isOpen)}
                  />
                  <p className="text-headingColor cursor-pointer flex items-center justify-center gap-2">
                    <RiArrowDropDownLine />
                  </p>
                  {isOpen && <DropDown user={user} action={logout} />}
                </motion.div>
              </div>
            ) : (
              <LoginAction mobile />
            )}
          </div>
        )}
      </motion.div>
    </header>
  );
};

export default Header;
