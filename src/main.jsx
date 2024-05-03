import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createTheme, MantineProvider } from "@mantine/core";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MantineProvider>
      <App />
    </MantineProvider>
  </React.StrictMode>
);
