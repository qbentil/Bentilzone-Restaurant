import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { Header } from "./components";
import {  Admin, Home, Login, Signup } from "./Pages";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import {AnimatePresence} from "framer-motion";

function App() {
  return (
    <AnimatePresence exitBeforeEnter>
      <ToastContainer />
      <div className="w-screen h-auto min-h-[100vh] flex flex-col bg-primary">
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
