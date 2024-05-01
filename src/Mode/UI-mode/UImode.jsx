import React from "react";
import "./UImode.css";
import { Navbar } from "./components/components";
import {
  About,
  Archives,
  Contact,
  Experience,
  Home,
  Projects,
} from "./Pages/Pages";

const UImode = () => {
  return (
    <div className="uiMode">
      <header>
        <Navbar />
      </header>
      <main>
        <Home />
        {/* <Experience /> */}
        <Projects />
        {/* <About /> */}
        <Archives />
        <Contact />
      </main>
    </div>
  );
};

export default UImode;
