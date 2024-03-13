import { BrowserRouter, Routes, Route } from "react-router-dom";

/* Components */
import Home from "./pages/Home";

export default function App() {
 return (
  <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<Home />} />
    <Route path="/blog" element={<Home />} />
    <Route path="*" element={<></>} />
   </Routes>
  </BrowserRouter>
 );
}
