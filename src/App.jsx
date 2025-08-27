// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import Checkout from "./pages/Checkout";

function UnderConstruction() {
  return <h1>Siden er snart klar igen</h1>;
}
export default function App() {
  return (
    <div className="min-h-screen bg-grid-neon-soft text-white">
      {/* overlay fjernet for at undgå dobbelt-linjer */}
      <Router>
        <Routes>
          <Route path="/" element={<UnderConstruction />} />

          {/* <Route path="/checkout" element={<Checkout />} /> */}
        </Routes>
      </Router>
    </div>
  );
}
