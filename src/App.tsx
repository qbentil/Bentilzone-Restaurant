import "./App.css";

import { Header, Home, Login, Signup } from "./components";
import { Route, Routes } from "react-router-dom";

import {AnimatePresence} from "framer-motion";

function App() {
  return (
    <AnimatePresence exitBeforeEnter>
      <div className="w-screen h-auto min-h-[100vh] flex flex-col">
        <Header />
        <main className="mt-14 p-8 w-full h-auto">
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
