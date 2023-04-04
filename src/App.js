import React from 'react';
import Fade from 'react-reveal/Fade';
import Navbar from "./Components/Navbar/Navbar";
import HeroSection from "./Components/HeroSection/HeroSection";
import About from "./Components/about/about";
import Portfolio from "./Pages/portfolio/portfolio";
import Blog from "./Pages/Blog/blog";
import Experience from "./Pages/Experience/experience";
import Footer from "./Components/Footer/Footer";
import Carousel from "./Components/carousel/carousel";
import Education from "./Pages/Education/education";
import Services from "./Pages/services/services";
import './App.css'
function App() {
  return (
    
    <div>
      
      <Navbar />
      <HeroSection />
      <Fade big>
      <About />

      </Fade>
      <Fade left>
      <Portfolio/>
      </Fade>
      <Fade Right>
      <Services /> 
      </Fade>
      <Fade bottom>
<Blog />   
</Fade>
<Fade big>
      <Experience />
      <Education/>
</Fade>
      <Footer />
    
    </div>

  );
}

export default App;