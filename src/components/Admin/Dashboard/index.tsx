import Card from "./Card";
import { Categories } from "../../../utils/categories"
import { useStateValue } from "../../../context/StateProvider";
import { FiGrid, FiShoppingBag, FiShoppingCart, FiUsers } from "react-icons/fi";

const Dashboard = () => {
  const [{ users, orders, foodItems }, dispatch] = useStateValue();
  const data = [
    {
      title: "Users",
      Icon: FiUsers,
      count: users?.length || 0,
    },
    {
      title: "Orders",
      Icon: FiShoppingCart,
      count: orders?.length || 0,
    },
    {
      title: "Food Items",
      Icon: FiShoppingBag,
      count: foodItems?.length || 0,
    },
    {
      title: "Categories",
      Icon: FiGrid,
      count: Categories?.length || 0,
    }
  ]
  return (
    <div className="w-full">
      <div className="grid grid-cols-3 gap-4 p-2">
        {data.map((item, index) => (<Card key={index} {...item} />))}
      </div>
    </div>
  );
};

export default Dashboard;
