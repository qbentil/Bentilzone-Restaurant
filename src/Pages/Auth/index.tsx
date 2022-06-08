import "react-toastify/dist/ReactToastify.css";

import { Cheff1 } from "../../components/Assets";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";

import { app } from "../../firebase.config";
import { motion } from "framer-motion";
import { useStateValue } from "../../context/StateProvider";

const ProviderAuth = () => {
  const GOOGLE_PROVIDER = new GoogleAuthProvider();
  const GITHUB_PROVIDER = new GithubAuthProvider();
  const [{ user }, dispatch] = useStateValue();
  const firebaseAuth = getAuth(app);
  const navigate = useNavigate();

  const AUTH = async ({ provider }: { provider: any }) => {
    if (!user) {
      try {
        const {
          user: { refreshToken, providerData },
        } = await signInWithPopup(firebaseAuth, provider);
        dispatch({
          type: "SET_USER",
          user: providerData[0],
        });
        localStorage.setItem("user", JSON.stringify(providerData[0]));
        navigate("/");
      } catch (error) {
        toast.error(
          "Unnable to connect to provider.Check your internet and try again.",
          { autoClose: 15000 }
        );
      }
    }
  };
  return (
    <div className="flex items-center justify-center gap-5  text-center">
      <ToastContainer />
      <motion.p
        whileHover={{ scale: 1.1 }}
        className="flex items-center w-36 h-10 bg-white justify-center rounded text-headingColor px-5 cursor-pointer shadow-sm hover:bg-slate-100"
        // onClick={() => AUTH({ provider: GITHUB_PROVIDER })}
      >
        <BsGithub className="text-xl w-5 mr-1" />
        <span>Github</span>
      </motion.p>
      <motion.p
        whileHover={{ scale: 1.1 }}
        className="flex items-center w-36 h-10 bg-white justify-center rounded text-headingColor px-5 cursor-pointer shadow-sm hover:bg-slate-100"
        onClick={() => AUTH({ provider: GOOGLE_PROVIDER })}
      >
        <FcGoogle className="text-xl w-5 mr-1" />
        <span>Google</span>
      </motion.p>
    </div>
  );
};

export const ImageBox = () => {
  return (
    <div className="hidden md:block md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
      <img src={Cheff1} className="w-96 " alt="Phone" />
    </div>
  );
};

export default ProviderAuth;
