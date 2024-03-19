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
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
    return () => {};
  }, [theme]);
  return (
    <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home theme={theme} setTheme={setTheme} />}
          />
          <Route path="*" element={<></>} />
        </Routes>
    </BrowserRouter>
  );
}
