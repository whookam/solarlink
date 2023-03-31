import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Layout from "./pages/Layout";
import About from "./pages/AboutUs";
import Contact from "./pages/Contact";
import SolarPowerGeneration from './pages/SolarPowerGeneration';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<About />} />
          <Route path="solar-power-generation-2" element={<SolarPowerGeneration />} />
          <Route path="contact" element={<Contact />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
      
    </div>
  );
}

function Home() {
  return (
    <article>
      <h1>Harness the enerfy of the sun for your consumption</h1>
      <p>We offer a wide range of solar products at unbeatable prices. Check out all products and contact us – We do installation of all our products.</p>
      <p>You’ll find details info of our Solar-Hot-Water, Solar-Electric and Pool heating products.</p>
      <p>Get a quote now and be energy independent</p>
      <h2 class="offer">WE NOW OFFER A LEASE OPTION ON SOLAR PV INSTALLATIONS. IF YOUR ELECTRICITY CONSUMPTION IS MORE 5,000 UNITS PER MONTH, CALL US -YOU WILL SAVE</h2>
      <p>PV INSTALLERS  CONTACT US @    chris@solar-namibia.com</p>
      <p>for great wholesale prices on all your requirements.</p>
      <p>incl. panels and  mountings,  inverters (on and offgrid ) batteries, solar cable, connectors  charge controllers and LED light bulbs and tubes. We can beat any price on Victron Energy products</p>
    </article>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}