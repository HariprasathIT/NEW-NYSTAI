// import './App.css'
// import Navbar from './components/common/Navbar'
// import Home from './pages/HomePage/Home'

// function App() {

//   return (
//     <>
//       <Navbar />
//       <div className="">
//         <Home />
//       </div>
//     </>
//   )
// }

// export default App



import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import './App.css';
import Navbar from './components/common/Navbar';
import Home from './pages/HomePage/Home';
import NystaiFooter from "./components/common/Footer";
import Productpage from "./pages/ProductPage/Products";
import Protectplan from "./pages/ProtectplanPage/protectplan";
import Service from "./pages/ServicePage/service";
import Support from "./pages/SupportPage/Support";
import Smarthome from "./pages/AllsolutionsPage/Smarthome";
import Industrial from "./pages/AllsolutionsPage/Industry";
import Education from "./pages/AllsolutionsPage/Education";
import Worship from "./pages/AllsolutionsPage/Worship";
import Vms from "./pages/AllsolutionsPage/Vms";
import Hospital from "./pages/AllsolutionsPage/Hospital";

// IMPORT CATEGORY PAGE

gsap.registerPlugin(ScrollTrigger);

function App() {

  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.5,
      smooth: true,
      lerp: 0.1,
      normalizeWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      ScrollTrigger.update();
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    lenis.on("scroll", (e) => {
      window.dispatchEvent(new CustomEvent("lenis-scroll", { detail: e }));
    });

    return () => lenis.destroy();
  }, []);

  return (
    <Router>
      <Navbar />

      <Routes>
        {/* HOME PAGE */}
        <Route path="/" element={<Home />} />
        <Route path="/protect" element={<Protectplan />} />
        <Route path="/service" element={<Service />} />
        <Route path="/support" element={<Support />} />

        {/* Solutions */}
        <Route path="/solutions/smarthome" element={<Smarthome />} />
        <Route path="/solutions/industrial" element={<Industrial />} />
        <Route path="/solutions/education" element={<Education />} />
        <Route path="/solutions/worship" element={<Worship />} />
        <Route path="/solutions/vms" element={<Vms />} />
        <Route path="/solutions/hospital" element={<Hospital />} />

        {/* CATEGORY PAGE */}
        <Route path="/category/:id" element={<Productpage />} />
      </Routes>

      <NystaiFooter />
    </Router>
  );
}

export default App;
