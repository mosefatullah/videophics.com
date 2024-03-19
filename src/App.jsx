import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/* Components */
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Navbar from "./pages/components/Navbar";
import Footer from "./pages/components/Footer";

export default function App() {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") || "light"
  );

  React.useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      document.documentElement.style.setProperty(
        "--bg-secondary-1",
        "rgb(167 139 250)"
      );
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      document.documentElement.style.setProperty("--bg-secondary-1", "#5c42bd");
    }
    return () => {};
  }, [theme]);

  const Layout = ({ children }) => {
    React.useEffect(() => {
      window.scrollTo(0, 0);
    }, [children]);

    return (
      <main>
        <Navbar theme={theme} setTheme={setTheme} />
        <div
          className="bg-violet-50 dark:bg-slate-900 min-h-screen"
          role="main"
        >
          {children}
        </div>
        <Footer />
      </main>
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/about-us"
          element={
            <Layout>
              <AboutUs />
            </Layout>
          }
        />
        <Route path="*" element={<></>} />
      </Routes>
    </BrowserRouter>
  );
}
