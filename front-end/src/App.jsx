import React from "react";
import Header from "./components/Header";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Details from "./components/Details"
import Statement from "./components/Statement"
const App = () => {
  return (
    <main>
    
        <Header />
        <Details />
        <Education />
        <Skills />
        <Statement />
        
        <Projects />
        <Footer />
      
    </main>
  );
};

export default App;
