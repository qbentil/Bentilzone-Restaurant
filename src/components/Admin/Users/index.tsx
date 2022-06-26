import { useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { useStateValue } from "../../../context/StateProvider";
import User from "./user";


const Users = () => {
  const [{ users }, dispatch] = useStateValue();
  useEffect(() => {
    console.log(users)
  }, [users])
  return (
    <div className="w-full justify-center flex flex-col">
      {/* search bar */}
      <div className="w-full flex justify-center p-2 bg-white mb-4 rounded-lg">
        <input
          className="w-full p-2 outline-none rounded-lg "
          type="text"
          placeholder="Search user"
        />
        {/* search button */}
        <button className="flex items-center justify-center gap-3 text-orange-700 font-bold py-2 px-4 rounded-lg">
          <FaSearch />
        </button>
      </div>

      {/* dasboard statistics and counts */}
      <div className="w-full grid grid-cols-3 gap-1">
        <User />
        <User />
        <User />
      </div>
    </div>
  );
};

export default Users;


