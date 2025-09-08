import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Nav from "./components/Nav";

export default function App() {
  return (
    <div className="min-h-screen">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/betingelser" element={<Terms />} />
          <Route path="/privatliv" element={<Privacy />} />
        </Routes>
      </Router>
    </div>
  );
}
