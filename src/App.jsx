import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import Checkout from "./pages/Checkout"; // hvis du har den

export default function App() {
  return (
    // Baggrund: lys accent-grid + animationslag
    <div className="min-h-screen text-white bg-neo-green">
      {/* Animationslag (kan duplikere for mere punch) */}
      <div className="neo-cones pointer-events-none" />
      <div className="neo-grid-sweep pointer-events-none" />
      <div className="neo-twinkle pointer-events-none" />

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/checkout" element={<Checkout />} /> */}
        </Routes>
      </Router>
    </div>
  );
}
