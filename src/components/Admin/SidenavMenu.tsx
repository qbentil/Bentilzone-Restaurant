import { AiFillDashboard } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import {
  MdAddModerator,
  MdOutlineFavoriteBorder,
  MdRestaurantMenu,
} from "react-icons/md";
import { motion } from "framer-motion";
import { FaCogs } from "react-icons/fa";
import AddFood from "./AddFood";
import Dashboard from "./Dashboard";
import Users from "./Users";

const SidenavMenu = ({
  activePage,
  setActivePage,
  setPageContent,
}: {
  activePage: string;
  setActivePage: any;
  setPageContent: any;
}) => (
  <motion.nav
    initial={{ opacity: 0, x: 200 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 200 }}
    className="space-y-2 w-full "
  >
    <NavItem
      activePage={activePage}
      svgIcon={<AiFillDashboard />}
      title="Dashboard"
      setActivePage={setActivePage}
      setPageContent={setPageContent}
      pageContent={<Dashboard />}
    />
    <NavItem
      activePage={activePage}
      svgIcon={<MdAddModerator />}
      title="Add Food"
      setActivePage={setActivePage}
      setPageContent={setPageContent}
      pageContent={<AddFood />}
    />
    <NavItem
      activePage={activePage}
      svgIcon={<MdRestaurantMenu />}
      title="Menu"
      setActivePage={setActivePage}
      setPageContent={setPageContent}
      pageContent={
        <div className="w-full flex tems-center justify-center">Menu</div>
      }
    />
    <NavItem
      activePage={activePage}
      svgIcon={<MdOutlineFavoriteBorder />}
      title="Orders"
      setActivePage={setActivePage}
      setPageContent={setPageContent}
      pageContent={
        <div className="w-full flex tems-center justify-center">Orders</div>
      }
    />
    <NavItem
      activePage={activePage}
      svgIcon={<FiUsers />}
      title="Users"
      setActivePage={setActivePage}
      setPageContent={setPageContent}
      pageContent={<Users />}
    />
    <NavItem
      activePage={activePage}
      svgIcon={<FaCogs />}
      title="Settings"
      setActivePage={setActivePage}
      setPageContent={setPageContent}
      pageContent={
        <div className="w-full flex tems-center justify-center">Settings</div>
      }
    />
  </motion.nav>
);

const NavItem = ({
  activePage,
  svgIcon,
  title,
  setActivePage,
  setPageContent,
  pageContent,
}: {
  activePage: string;
  setActivePage: any;
  svgIcon: any;
  title: string;
  setPageContent: any;
  pageContent: JSX.Element;
}) => {
  const handleClick = () => {
    setActivePage(title);
    setPageContent(pageContent);
  };
  return (
    <motion.div
      whileTap={{ scale: 1.1 }}
      onClick={handleClick}
      className={`flex items-center no-underline text-orange-50 hover:text-orange-100 p-3 rounded-md cursor-pointer hover:bg-orange-700 ${
        activePage === title ? "bg-orange-700" : ""
      }`}
    >
      <p className="font-bold text-xl">{svgIcon}</p>
      <div className="font-bold pl-3">{title}</div>
    </motion.div>
  );
};
export default SidenavMenu;
