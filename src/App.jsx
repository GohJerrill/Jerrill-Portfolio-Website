import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Works from "./components/Works";
import Certifcations from "./components/Certifcations";
import Contact from "./components/Contact";
import { StarsCanvas } from "./components/canvas";
import Footer from "./components/Footer";



function App() {


  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          {/* Navbar */}
          <Navbar/>
          {/* Hero */}
          <Hero/>
        </div>
        <About/>
        {/* Tech Stack and Certs */}
        <TechStack/>
        {/* Projects  */}
        <Works/>
        {/* Certifications  */}
        <Certifcations/>
        <div className="relative z-0 overflow-hidden !mt-10">
          {/* Contact Me  */}
          <Contact/>
          {/* Star Canvas */}
          <StarsCanvas/>
        </div>

        {/* Footer */}
        <Footer/>

      </div>
    </BrowserRouter>
  )
}

export default App
