import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import { Admin, Home, Login, Signup } from "./Pages";
import { Cart, Footer, Header } from "./components";
import { Route, Routes } from "react-router-dom";
import { calculateCartTotal, fetchFoodData, fetchUserCartData } from "./utils/functions";

import { AnimatePresence } from "framer-motion";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { useStateValue } from "./context/StateProvider";

function App() {
  const [{ showCart, user, foodItems, cartItems, adminMode }, dispatch] = useStateValue();


  useEffect(() => {
    fetchFoodData(dispatch);
    user && fetchUserCartData(user, dispatch);
  }, []);

  useEffect(() => {
    foodItems && cartItems.length > 0 && calculateCartTotal(cartItems, foodItems, dispatch) 
  }, [cartItems, foodItems, dispatch]);
  return (
    <AnimatePresence exitBeforeEnter>
      <ToastContainer />
      <div className="w-screen h-auto min-h-[100vh] flex flex-col bg-primary">
        {
          showCart && <Cart />
        }
       {
          !adminMode && <Header />
       }
        <main className={`${!adminMode && 'mt-16 md:mt-16 px-3 md:px-8 md:py-6 py-4'} w-full h-auto`} onClick={() => {}}>
          {/* Routes */}
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>

          {
            !adminMode && <Footer />
          }
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;
