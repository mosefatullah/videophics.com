import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/* Components */
import Home from "./pages/Home";

export default function App() {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") || "light"
  );

  React.useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      document.documentElement.style.setProperty("--bg-secondary-1", "rgb(167 139 250)");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      document.documentElement.style.setProperty("--bg-secondary-1", "#5c42bd");
    }
    return () => {};
  }, [theme]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home theme={theme} setTheme={setTheme} />} />
        <Route path="*" element={<></>} />
      </Routes>
    </BrowserRouter>
  );
}
