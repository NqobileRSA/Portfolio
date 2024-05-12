import React from "react";
import "./UImode.css";
import { Navbar } from "./components/components";
import { Archives, Contact, Home, Projects, Services } from "./Pages/Pages";

const UImode = () => {
  return (
    <div className="uiMode">
      <header>
        <Navbar />
      </header>
      <main>
        <Home />
        {/* <Services /> */}
        <Projects />
        <Archives />
        <Contact />
      </main>
    </div>
  );
};

export default UImode;
