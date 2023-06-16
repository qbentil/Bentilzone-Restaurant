
import { FiUsers } from "react-icons/fi"
import { motion } from "framer-motion";
import { IconType } from "react-icons/lib";

interface CardProps {
  title: string,
  Icon: IconType,
  count: number
}

const Card = ({title, Icon, count}: CardProps) => {
  return (
    <motion.div
      // whileHover={{ scale: 1.2 }}
      className="bg-gray-50 min-h-[9rem] p-10 rounded-lg shadow-sm">
      {/* Catgory card */}
      <div className="w-full h-full flex items-center justify-between gap-x-10">
        <motion.p
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}
          className="w-[50%]  flex items-center justify-center rounded-lg text-orange-500"
        >
          <Icon className="cursor-pointer w-full h-full" />
        </motion.p>
        <div className="w-[50%] flex items-end justify-center flex-col gap-y-5 px-4">
          <p className="text-4xl font-bold text-orange-500">{count}</p>
          <p className="text-textColor">{title} </p>
        </div>
      </div>
    </motion.div>
  )
}

export default Card