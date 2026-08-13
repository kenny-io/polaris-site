import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Flagpole from "./pages/Flagpole";
import Drift from "./pages/Drift";

/**
 * Route table for the Polaris Labs marketing site.
 * All page copy lives inline in src/pages/*.tsx.
 */
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/flagpole" element={<Flagpole />} />
      <Route path="/drift" element={<Drift />} />
    </Routes>
  );
}
