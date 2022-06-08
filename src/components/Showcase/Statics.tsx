import React from "react";
import { motion } from "framer-motion";
import { FoodData } from "../../../types";

interface Props {
  data: FoodData[];
}

const StaticsImages: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full h-full absolute flex items-center justify-center mt-6 md:mt-0 top-6 left-0 px-32 py-4 gap-20 md:gap-4 flex-wrap ">
      {data.map((item) => (
        <div
          key={item.id}
          className="cursor-pointer min-w-[190px] drop-shadow-lg p-2 bg-cardOverlay backdrop-blur-md rounded-xl flex flex-col items-center justify-center"
        >
          <motion.img
            whileHover={{ scale: 1.1 }}
            src={item.imgSrc}
            alt="icecream"
            className="w-40 -mt-20"
          />
          <p className="text-lg font-semibold text-textColor">{item.title}</p>
          <p className="text-md text-lightGray font-semibold my-3">
            {item.desc}
          </p>
          <p className="text-sm font-semibold text-headingColor">
            <span className="text-xs text-red-600">₵</span> {item.price}
          </p>
        </div>
      ))}
    </div>
  );
};

export default StaticsImages;
