import AddFood  from "../../components/Admin/AddFood";
import Dashboard from "./Dashboard";
import Home from "../Home";
import { useStateValue } from "../../context/StateProvider";
import { isAdmin } from "../../utils/functions";

const Admin = () => {
  const [{user}] = useStateValue()
  return (
     <>
     {isAdmin(user) ? <Dashboard /> : <Home />}
     </>
  );
};

export default Admin;
