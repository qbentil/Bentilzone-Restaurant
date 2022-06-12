import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { Cart, Header } from "./components";
import { Admin, Home, Login, Signup } from "./Pages";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AnimatePresence } from "framer-motion";
import { useStateValue } from "./context/StateProvider";
import { useEffect } from "react";
import { fetchFoodData, fetchUserCartData } from "./utils/functions";
function App() {
  const [{ showCart, user }, dispatch] = useStateValue();


  useEffect(() => {
    fetchFoodData(dispatch);
    user && fetchUserCartData(user, dispatch);
  }, []);
  return (
    <AnimatePresence exitBeforeEnter>
      <ToastContainer />
      <div className="w-screen h-auto min-h-[100vh] flex flex-col bg-primary">
        {
          showCart && <Cart />
        }
        <Header />
        <main className="mt-16 md:mt-16 px-3 md:px-8 md:py-6 py-4 w-full h-auto">
          {/* Routes */}
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;
