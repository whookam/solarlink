import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Layout from "./pages/Layout";
import About from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Home from './pages/Home';
import SolarPowerSystems from "./pages/SolarPowerSystems";
import SolarPowerGeneration from './pages/SolarPowerGeneration';
import SolarPVPanels from './pages/SolarPVPanels';
import SolarInverter from "./pages/SolarInverter";
import GridTieInverters from "./pages/GridTieInverters";
import HybridInverters from "./pages/HybridInverters";
import SolarPVMountings from "./pages/SolarPVMountings";
import SolarChargeControllers from "./pages/SolarChargeControllers";
import SolarBatteries from "./pages/SolarBatteries";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/solar-power-generation-2" element={<SolarPowerGeneration />} />
          <Route path="/on-grid-off-grid-and-hybrid-solar-power-systems" element={<SolarPowerSystems />} />
          <Route path="/solar-pv-panels" element={<SolarPVPanels />} />
          <Route path="/solar-inverter" element={<SolarInverter />} />
          <Route path="/grid-tie-inverters" element={<GridTieInverters />} />
          <Route path="/hybrid-inverters" element={<HybridInverters />} />
          <Route path="/solar-pv-mountings" element={<SolarPVMountings />} />
          <Route path="/solar-charge-controllers" element={<SolarChargeControllers />} />
          <Route path="/solar-batteries" element={<SolarBatteries />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
      
    </div>
  );
}

function NoMatch() {
  return (
    <article>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/solarlink">Go to the home page</Link>
      </p>
    </article>
  );
}