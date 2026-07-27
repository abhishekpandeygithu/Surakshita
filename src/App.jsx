import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Download from "./components/Download";
import Footer from "./components/Footer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
  AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
    easing: "ease-in-out",
  });

  AOS.refresh();
}, []);
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Download />
      <Footer />
    </>
  );
}

export default App;