import React from "react";
import ReactDOM from "react-dom/client";
import ReactLenis from "@studio-freight/react-lenis";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ReactLenis root>
      <App />
    </ReactLenis>
  </React.StrictMode>
);
