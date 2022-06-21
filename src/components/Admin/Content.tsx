import { FaShopify } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useStateValue } from "../../context/StateProvider";
import { ToggleAdminMode } from "../../utils/functions";

const Content = ({ pageTitle, Element }: { pageTitle: string, Element:JSX.Element }) => {
  const [{}, dispatch] = useStateValue();
  return (
    <div className="flex flex-col w-[80%] h-screen px-2">
      <div className="flex justify-between w-full text-xl font-bold text-gray-600 border-b-2 border-orange-200 pt-6 pb-2 px-6">
        {pageTitle}

        {/* home button */}
        <Link to="/" onClick={() => ToggleAdminMode(dispatch, false)}>
          <button className=" flex items-center justify-center gap-3 text-orange-700 font-bold py-2 px-4 rounded-lg">
            <FaShopify />
            store
          </button>
        </Link>
      </div>
      <div className="flex-1 my-2 mx-6 border-8 border-gray-200 rounded-xl border-dotted overflow-y-scroll scrollbar-hidden">{Element}</div>
      
    </div>
  );
};
export default Content;