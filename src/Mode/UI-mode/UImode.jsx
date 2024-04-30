import React from "react";
import "./UImode.css";
import { Navbar } from "./components/components";
import { About, Archives, Home, Projects } from "./Pages/Pages";

const UImode = () => {
  return (
    <div className="uiMode">
      <header>
        <Navbar />
      </header>
      <main>
        <Home />
        <Projects />
        {/* <About /> */}
        <Archives />
      </main>
    </div>
  );
};

export default UImode;
