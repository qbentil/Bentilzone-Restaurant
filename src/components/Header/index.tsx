import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import Avatar from "../../img/avatar.png";
import { Link } from "react-router-dom";
import MobileNav from "./mobile-nav";
import Navigations from "./Navigations";
import { RiArrowDropDownLine } from "react-icons/ri";
import { app } from "../../firebase.config";
import { motion } from "framer-motion";
import { useStateValue } from "../../context/StateProvider";
import { useState } from "react";
import DropDown from "./DropDown";
import LoginAction from "./LoginAction";
import { Logo } from "../Assets";

const Header = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const [{ user }, dispatch] = useStateValue();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenMobileNav, setIsOpenMobileNav] = useState(false);
  const login = async () => {
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

  return isOpenMobileNav ? (
    <MobileNav isOpen={isOpenMobileNav} setIsOpen={setIsOpenMobileNav} />
  ) : (
    <header className="w-screen fixed z-50   md:p-6 md:px-16">
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
        <Navigations />

        {/* User */}

        {user ? (
          <div className={`group flex items-center gap-3 px-3 py-1 rounded-lg`}>
            <motion.div
              whileTap={{ scale: 0.9 }}
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
          <LoginAction action={login} text={'Login'} />
        )}
      </div>

      {/* Mobile */}
      <motion.div
        className="flex md:hidden w-full p-5 items-center justify-between"
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 200 }}
      >
        <motion.div
          whileTap={{ scale: 0.9 }}
          className=" flex items-center justify-center"
          onClick={() => setIsOpenMobileNav(!isOpenMobileNav)}
        >
          <HiOutlineMenuAlt2 className="text-headingColor text-4xl" />
        </motion.div>
        <Link to={"/"}>
          <motion.div
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-2 cursor-pointer"
          >
            <img src={Logo} alt="Logo" className="w-8 object-cover" />
            <p className="text-headingColor text-xl font-bold">Bentilzone</p>
          </motion.div>
        </Link>

        {user ? (
          <div
            className={`flex items-center gap-3 border px-3 py-1 rounded-lg relative`}
          >
            <motion.div
              whileTap={{ scale: 0.9 }}
              className="group flex items-center justify-center"
            >
              <img
                src={user?.photoURL ? user.photoURL : Avatar}
                className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-2xl rounded-full cursor-pointer"
                alt="user-profile"
                onClick={() => setIsOpen(!isOpen)}
              />
              {isOpen && <DropDown user={user} action={logout} />}
            </motion.div>
          </div>
        ) : (
          <LoginAction action={login} mobile />
        )}
      </motion.div>
    </header>
  );
};

export default Header;
