import { FaSearch } from "react-icons/fa";
import { FoodItem } from "../../../../types";
import { useStateValue } from "../../../context/StateProvider";
import { SingleFoodItem } from "../../FoodItem";

const Menu = () => {
    const [{ foodItems }, dispatch] = useStateValue();
  return (
    <div className="w-full flex flex-col justify-center">
      {/* search bar */}
      <div className="w-full flex justify-center p-2 bg-white mb-4 rounded-lg">
        <input
          className="w-full p-2 outline-none rounded-lg "
          type="text"
          placeholder="Search food"
        />
        {/* search button */}
        <button className="flex items-center justify-center gap-3 text-orange-700 font-bold py-2 px-4 rounded-lg">
          <FaSearch />
        </button>
      </div>
      <div className="w-full flex items-center justify-center gap-3 overflow-x-hidden flex-wrap">
        {
            foodItems.map((item: FoodItem) => (
                <SingleFoodItem key={item.id} item={item} col admin />
            ))
        }
      </div>
    </div>
  );
};

export default Menu;
