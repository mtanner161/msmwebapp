import { Route, Routes } from "react-router";
import "./App.css";
import About from "./componants/About";
import Github from "./componants/Github";
import Home from "./componants/Home";
import Navbar from "./componants/Navbar";
import Run from "./componants/Run";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/msmwebapp" element={<Home />} />
        <Route path="Run%20App" element={<Run />} />
        <Route path="About" element={<About />} />
        <Route path="Github" element={<Github />} />
      </Routes>
    </div>
  );
}

export default App;
