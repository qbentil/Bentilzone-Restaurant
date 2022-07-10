
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { motion } from "framer-motion";
import { RiSecurePaymentLine } from "react-icons/ri";
import { BsShieldLock } from "react-icons/bs";

const Header = ({action}: {action:any}) => {

  return (
    <div className="w-full flex items-center bg-white justify-between px-4 py-6 cursor-pointer">
      <motion.div whileTap={{ scale: 0.8 }} onClick={() => action(false)}>
        <MdOutlineKeyboardBackspace className="text-textColor text-2xl " />
      </motion.div>

      <div className="flex items-center justify-center gap-2" title = "Secured Area">
        <BsShieldLock className="text-xl cursor-pointer text-cartNumBg" />
        <RiSecurePaymentLine className="text-xl cursor-pointer text-cartNumBg" />
      </div>
    </div>
  );
};

export default Header;
