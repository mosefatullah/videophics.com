import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

/* Components */
import Navbar from "./pages/components/Navbar";
import Footer from "./pages/components/Footer";

/* Pages */
import Home from "./pages/Home";
import ServicesView from "./pages/ServicesView";
import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog";
import BlogView from "./pages/BlogView";
import ContactUs from "./pages/ContactUs";
import NotFound from "./pages/NotFound";

import Admin_Home from "./pages/admin/Home.jsx";
import Admin_Blog from "./pages/admin/Blog.jsx";
import Admin_BlogEdit from "./pages/admin/BlogEdit.jsx";

export default function App() {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") || "dark"
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
    <>
      <BrowserRouter>
        <Routes>
          {/* Website */}
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route path="/services" element={<Navigate to="/" />} />
          <Route
            path="/services/:service"
            element={
              <Layout>
                <ServicesView />
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
          <Route path="/about" element={<Navigate to="/about-us" />} />
          <Route
            path="/blog"
            element={
              <Layout>
                <Blog />
              </Layout>
            }
          />
          <Route
            path="/blog/:id"
            element={
              <Layout>
                <BlogView />
              </Layout>
            }
          />
          <Route
            path="/contact-us"
            element={
              <Layout>
                <ContactUs />
              </Layout>
            }
          />
          <Route path="/contact" element={<Navigate to="/contact-us" />} />

          {/* Admin */}
          <Route
            path="/admin"
            element={
              <Layout>
                <Admin_Home />
              </Layout>
            }
          />
          <Route
            path="/admin/myblog"
            element={
              <Layout>
                <Admin_Blog />
              </Layout>
            }
          />
          <Route
            path="/admin/myblog/edit/:id"
            element={
              <Layout>
                <Admin_BlogEdit />
              </Layout>
            }
          />

          {/* 404 */}
          <Route
            path="*"
            element={
              <Layout>
                <NotFound />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
