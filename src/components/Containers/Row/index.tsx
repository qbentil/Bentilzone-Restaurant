import { motion } from "framer-motion";
import {  useLayoutEffect, useRef } from "react";

import { SingleFoodItem } from "..";
import { FoodItem } from "../../../../types";
import {Loader2} from "../../Loader";


const RowContainer = ({scrollOffset, flag, items }: {scrollOffset:number, flag: boolean; items: FoodItem[] }) => {
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
      className={`w-full my-12 flex items-center justify-center min-h-[200px] gap-4 bg-containerbg ${
        flag ? "overflow-x-scroll scrollbar-hidden scroll-smooth" : "overflow-x-hidden flex-wrap"
      }`}
    >
      {items && items.map((item: FoodItem) => (
        <SingleFoodItem item = {item} />
      ))}
      {
        !items && (<Loader2 />)
      }
    </motion.div>
  );
};

export default RowContainer;
