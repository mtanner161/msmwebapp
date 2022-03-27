import { Route, Routes } from "react-router";
import "./App.css";
import Github from "./componants/Github";
import Home from "./componants/Home";
import Navbar from "./componants/Navbar";
import Run from "./componants/pages/RunModel";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/msmwebapp" element={<Home />} />
        <Route path="Two%20Degree" element={<Run />} />
        <Route path="Github" element={<Github />} />
      </Routes>
    </div>
  );
}

export default App;
