import { useLayoutEffect, useRef } from "react";

import { FoodItem } from "../../../../types";
import Loader from "../../Loader";
import { SingleFoodItem } from "..";
import { motion } from "framer-motion";

const RowContainer = ({scrollOffset, flag, items, className }: {scrollOffset:number, flag: boolean; items: FoodItem[], className?:string }) => {
  const rowContainerRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    console.log(scrollOffset)
    if(null !== rowContainerRef.current){
      rowContainerRef.current.scrollLeft += scrollOffset
    }
  }, [scrollOffset]);
  return (
    <motion.div
      ref = {rowContainerRef}
      id = "scrollContainer"
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
      className={`${className} w-full my-12 flex items-center ${!items && "justify-center"}  min-h-[200px] gap-4  px-2 ${
        flag ? "overflow-x-scroll scrollbar-hidden scroll-smooth" : "overflow-x-hidden flex-wrap"
      }`}
    >
      {items && items.map((item: FoodItem) => (
        <SingleFoodItem key={item.id} item = {item} />
      ))}
      {
        !items && (<Loader progress = {"Fetching fruits...."} />)
      }
    </motion.div>
  );
};

export default RowContainer;
