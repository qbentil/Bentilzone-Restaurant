import { motion } from "framer-motion";
import { MdAdd, MdLogout } from "react-icons/md";

const DropDown = ({user, action}: {user:any, action:any}) => {
  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.6 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.6 }}
    className="hidden group-hover:flex w-54  bg-gray-50 rounded-lg shadow-xl  flex-col absolute right-0 top-16"
  >
    <p className="px-10 py-2 flex items-center gap-3 bg-slate-100 transition-all duration-100 ease-in-out text-base text-headingColor">
      {user?.displayName}
    </p>
    <p className="cursor-pointer px-10 py-2 flex items-center gap-3 hover:bg-slate-100 transition-all duration-100 ease-in-out text-base text-textColor">
      Dashboard
      <MdAdd />
    </p>
    <p
      className="cursor-pointer px-10 py-2 flex items-center gap-3 hover:bg-slate-100 transition-all duration-100 ease-in-out text-base text-textColor"
      onClick={action}
    >
      Logout
      <MdLogout />
    </p>
  </motion.div>
  )
}

export default DropDown