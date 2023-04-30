import React from "react";
import Navbar from "./components/Navbar";
import Inicio from "./components/Inicio";
import Laboral from "./components/Laboral";
import Civil from "./components/Civil";
import Penal from "./components/Penal";
import Contacto from "./components/Contacto";
import "./App.css"



function App() {
  return (
  <>
  <Navbar />
  
  <div id="container" className="flex flex-col space-y-[25%] mx-[auto] font-opti-times-roman mt-[68px] max-w-[300px]">
    <section id="inicio">
      <Inicio />
    </section>
    <section id="laboral">
      <Laboral />
    </section>
    <section id="civil">
      <Civil />
    </section>
    <section id="penal">
      <Penal />
    </section>
    <section id="contacto">
      <Contacto />
    </section>
  </div>
  </>
  );
  }
  export default App;
