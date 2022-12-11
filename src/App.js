import "./App.css";
import { useState } from "react";
import Expertise from "./components/Expertise/Expertise";
import Footer from "./components/Footer/Footer";
import "./hamburgers.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./components/Main/Main";
import LocalNavbar from "./components/LocalNavbar/LocalNavbar";

function App() {
  const [scrollGoal, setScrollGoal] = useState("");
  function updateScrollPath(path) {
    setScrollGoal(path);
  }

  return (
    <div>
      <Router>
        <LocalNavbar scrollHandler={updateScrollPath} />
        <div className="CentralContent">
          <Routes>
            <Route path="/" element={<Main scrollGoal={scrollGoal} />} />
            <Route path="expertise" element={<Expertise />} />
          </Routes>
        </div>
        <div
          style={{
            width: "100%",
            justifyContent: "center",
            display: "flex",
            backgroundColor: "#212129",
          }}
        >
          <div
            className="element"
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              alignItems: "center",
            }}
          >
            <Footer />
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
