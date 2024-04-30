import { useState } from "react";
import "./App.css";
import UImode from "./Mode/UI-mode/UImode";
import SourceCodeMode from "./Mode/SourceCode-mode/SourceCodeMode";

function App() {
  const [codeMode, setCodeMode] = useState(false);

  const toggleMode = () => {
    setCodeMode(!codeMode);
  };

  return (
    <div className="app">
      <button onClick={toggleMode} className="mode-toggler">
        {codeMode ? "UI-Mode" : "Source Code"}
      </button>
      {codeMode ? <SourceCodeMode /> : <UImode />}
    </div>
  );
}

export default App;
