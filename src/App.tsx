import "./App.css";

import { Header, Home, Login, Signup } from "./components";
import { Route, Routes } from "react-router-dom";

import {AnimatePresence} from "framer-motion";

function App() {
  return (
    <AnimatePresence exitBeforeEnter>
      <div className="w-screen h-auto min-h-[100vh] flex flex-col bg-primary">
        <Header />
        <main className="mt-16 md:mt-16 px-3 md:px-8 md:py-6 py-4 w-full h-auto">
          {/* Routes */}
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Signup />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;
