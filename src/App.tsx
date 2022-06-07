import "./App.css";
import { Header, Home, Login, Signup } from "./components";
import { Route, Routes } from "react-router-dom";
import {AnimatePresence} from "framer-motion";
function App() {
  return (
    <AnimatePresence exitBeforeEnter>
      <div className="w-screen h-auto flex flex-col bg-primary">
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
