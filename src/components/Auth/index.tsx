import "react-toastify/dist/ReactToastify.css";

import { Cheff, Cheff1 } from "../Assets";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithPopup,
} from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

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
        className="flex items-center w-36 h-10 bg-white justify-center rounded text-headingColor px-5 cursor-pointer hover:shadow-sm"
        // onClick={() => AUTH({ provider: GITHUB_PROVIDER })}
      >
        <img
          alt="github"
          className="w-5 mr-1"
          src="https://demos.creative-tim.com/notus-js/assets/img/github.svg "
        />
        <span>Github</span>
      </motion.p>
      <motion.p
              whileHover={{ scale: 1.1 }}
        className="flex items-center w-36 h-10 bg-white justify-center rounded text-headingColor px-5 cursor-pointer hover:shadow-sm"
        onClick={() => AUTH({ provider: GOOGLE_PROVIDER })}
      >
        <img
          alt="google"
          className="w-5 mr-1"
          src="https://demos.creative-tim.com/notus-js/assets/img/google.svg"
        />
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
    )
}

export default ProviderAuth;
