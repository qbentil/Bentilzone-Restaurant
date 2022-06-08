import Dashboard  from "./Dashboard";
import { useStateValue } from "../../context/StateProvider";
import Home from "../Home";

const Admin = () => {
  const [{user}] = useStateValue()
  return (
     <>
     {user && user?.email==="bentilshadrack72@gmail.com" ? <Dashboard /> : <Home />}
     </>
  );
};

export default Admin;
