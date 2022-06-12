import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../Assets";
import {
  BsGithub,
  BsLinkedin,
  BsTwitter,
  BsInstagram,
  BsFacebook,
  BsDribbble,
} from "react-icons/bs";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <footer className="p-4 bg-primary sm:p-6 w-full">
      <div className="flex justify-center items-center">
        <div className="mb-3 md:mb-0">
          <Link to="/" className="flex gap-8 items-center">
            <motion.img
              whileHover={{ rotate: [0, -10, 10, -10, 0] }}
              src={Logo}
              className="w-12 md:w-36 object-contain"
              alt="Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-headingColor">
              Bentilzone
            </span>
          </Link>
        </div>
      </div>
      <hr className="my-2 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="flex flex-col items-center justify-center md:flex-row md:justify-between">
        <span className="text-sm text-gray-500 text-center dark:text-gray-400">
          © 2022 Bentilzone™. All Rights Reserved.
        </span>
        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
          <motion.a
            whileTap={{ scale: 1.1 }}
            target={"_blank"}
            rel="noreferrer"
            href="https://qbentil.com"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          >
            <BsDribbble />
          </motion.a>
          <motion.a
            whileTap={{ scale: 1.1 }}
            target={"_blank"}
            rel="noreferrer"
            href="https://github.com/qbentil"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          >
            <BsGithub />
          </motion.a>
          <motion.a
            whileTap={{ scale: 1.1 }}
            target={"_blank"}
            rel="noreferrer"
            href="https://linkedin.com/in/shadrack-bentil-410422199"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          >
            <BsLinkedin />
          </motion.a>
          <motion.a
            whileTap={{ scale: 1.1 }}
            target={"_blank"}
            rel="noreferrer"
            href="https://twitter.com/themanbentil"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          >
            <BsTwitter />
          </motion.a>
          <motion.a
            whileTap={{ scale: 1.1 }}
            target={"_blank"}
            rel="noreferrer"
            href="https://instagram.com/qbentil"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          >
            <BsInstagram />
          </motion.a>
          <motion.a
            whileTap={{ scale: 1.1 }}
            target={"_blank"}
            rel="noreferrer"
            href="https://facebook.com/qbentil"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          >
            <BsFacebook />
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
