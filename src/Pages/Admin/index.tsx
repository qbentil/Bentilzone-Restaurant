import AddFood  from "../../components/Admin/AddFood";
import Home from "../Home";
import { useStateValue } from "../../context/StateProvider";
import Dashboard from "./Dashboard";

const Admin = () => {
  const [{user}] = useStateValue()
  return (
     <>
     {user && user?.email==="bentilshadrack72@gmail.com" ? <Dashboard /> : <Home />}
     </>
  );
};

export default Admin;
