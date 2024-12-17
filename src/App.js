import React, { useEffect } from 'react';
import Header from './components/Header';
import Heroslider from './components/Heroslider';
import About from './components/About';
import Cardsinternational from './components/Cards international';
import Cardsnational from './components/Cards national';
import Content from './components/Content';
import Offers from './components/Offers';
import Tripplannercards from './components/Tripplannercards ';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Backtotopbutton from "./components/Backtotopbutton";
import './App.css';
import Aos from 'aos';
import "aos/dist/aos.css";


function App() {
  useEffect(() => { 
   Aos.init();
}, [])
  return (
    <>
      <div>
            {/* Dummy content for scrolling */}
            {Array(100)
              .map((text, index) => (
                <span key={index}>
                  {text}
                  <br />
                </span>
              ))}
        <Backtotopbutton />
      </div>

      <Header />
      <Heroslider />
      <backtotopbutton />
      <About />
      <Cardsinternational />
      <Cardsnational />
      <Content />
      <Offers />
      <Tripplannercards />
      <Blog />
      <Footer />
    </>

  );
}

export default App;
