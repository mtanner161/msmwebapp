import { Route, Routes } from "react-router";
import "./App.css";
import Github from "./componants/pages/Github";
import Home from "./componants/Home";
import Navbar from "./componants/Navbar";
import Run from "./componants/pages/RunModel";
import About from "./componants/pages/About";
import Model from "./componants/pages/Model";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Two%20Degree" element={<Run />} />
        <Route path="Model" element={<Model />} />
        <Route path="Github" element={<Github />} />
        <Route path="About" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
