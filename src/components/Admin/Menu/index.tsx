import { FaSearch } from "react-icons/fa";
import { FoodItem } from "../../../../types";
import { SingleFoodItem } from "../../FoodItem";
import React, { useState } from "react";
import { useStateValue } from "../../../context/StateProvider";

const Menu = () => {
    const [{ foodItems }, dispatch] = useStateValue();
    const [query, setQuery] = useState("");
    const [filteredFoodItems, setFilteredFoodItems] = useState<FoodItem[]>(foodItems);
    
    const filterFood = (e:React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.value === "") {
            setFilteredFoodItems(foodItems);
        }else{
          const filteredFoodItems = foodItems.filter((foodItem:FoodItem) => foodItem.title.toLowerCase().includes(e.target.value.toLowerCase()));
          setFilteredFoodItems(filteredFoodItems);
        }
    }
  return (
    <div className="w-full flex flex-col justify-center">
      {/* search bar */}
      <div className="w-full flex justify-center p-2 bg-white mb-4 rounded-lg">
        <input
          className="w-full p-2 outline-none rounded-lg "
          type="text"
          placeholder="Search food"
          value={query}
          onChange={(e) => filterFood(e)}
        />
        {/* search button */}
        <button className="flex items-center justify-center gap-3 text-orange-700 font-bold py-2 px-4 rounded-lg">
          <FaSearch />
        </button>
      </div>
      <div className="w-full flex items-center justify-center gap-3 overflow-x-hidden flex-wrap">
        {
            filteredFoodItems.map((item: FoodItem) => (
                <SingleFoodItem key={item.id} item={item} col admin />
            ))
        }
      </div>
    </div>
  );
};

export default Menu;
