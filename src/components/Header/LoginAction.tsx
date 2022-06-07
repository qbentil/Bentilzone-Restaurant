import { motion } from "framer-motion"
import { MdLogin } from "react-icons/md"
const LoginAction = ({text, action, mobile}:{action:any, text?:string, mobile?:boolean}) => {
  return (
    <motion.div
    className={` flex items-center gap-3 border border-slate-200 px-3 py-1 rounded-lg`}
    whileTap={{ scale: 0.8 }}
    onClick={action}
  >
    <MdLogin className={`cursor-pointer ${mobile && 'text-3xl text-headingColor'}`} />
    {text && <p className="text-headingColor cursor-pointer">{text}</p>}
  </motion.div>
  )
}

export default LoginAction