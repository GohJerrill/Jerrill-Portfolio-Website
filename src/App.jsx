import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Works from "./components/Works";



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
        {/* Events Joined  */}
        <div className="relative z-0">
          {/* Contact Me  */}
          {/* Star Canvas */}
        </div>

      </div>
    </BrowserRouter>
  )
}

export default App
