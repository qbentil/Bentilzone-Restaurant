import { MdDeleteForever, MdEmail } from "react-icons/md";
import { GiShieldDisabled } from "react-icons/gi";
import { Logo } from "../../Assets";
import { FcGoogle } from "react-icons/fc";
import {motion} from "framer-motion";
const User = () => {
  return (
    <div className="max-w-sm h-auto rounded-lg border border-orange-50 bg-orange-600">
    <div className="flex flex-col gap-1 items-center pb-10">
      <motion.img
        whileHover= {{scale:1.1}}
        className="mb-3 w-24 h-24 rounded-full shadow-lg cursor-pointer"
        src={Logo}
        alt="Bonnie"
      />
      <div className="flex flex-col items-center justify-center">
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          Bonnie Green
        </h5>
        <span className="text-sm text-gray-300 ">Visual Designer</span>
      </div>
      <motion.div whileTap={{scale:1.1}} className="gap-2 text-orange-600 text-sm p-1 px-3 bg-primary shadow-lg rounded-lg flex items-center justify-center mt-2 -mb-2">
        <MdEmail     /> <span>Provider</span>
      </motion.div>
      <div className="flex mt-4 space-x-3 lg:mt-6">
        <p
          className="inline-flex items-center py-2 px-4 text-xl font-medium text-center text-white shadow-lg rounded-lg bg-red-600 hover:bg-red-700 cursor-pointer"
          title="Delete"
        >
          <MdDeleteForever />
        </p>
        <p
          className="inline-flex items-center py-2 px-4 text-xl font-medium text-center text-gray-900 shadow-lg bg-primary hover:bg-white rounded-lg cursor-pointer  "
          title="Disable"
        >
          <GiShieldDisabled />
        </p>
      </div>
    </div>
  </div>
  )
}

export default User