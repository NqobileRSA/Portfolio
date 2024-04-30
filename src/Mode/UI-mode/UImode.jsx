import React from "react";
import "./UImode.css";
import { Navbar } from "./components/components";
import { Home } from "./Pages/Pages";

const UImode = () => {
  return (
    <div className="uiMode">
      <header>
        <Navbar />
      </header>
      <main>
        <Home />
      </main>
    </div>
  );
};

export default UImode;
