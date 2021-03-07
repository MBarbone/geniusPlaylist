import "./App.css";
import React from "react";

import { NavBar } from "./Components/header/Navbar";
import CustomStepper from "./Components/Stepper";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <CustomStepper />
    </div>
  );
};

export default App;
