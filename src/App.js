// import logo from './logo.svg';
import './App.scss';

// Importing components 
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Works from './components/Works/Works';
import About from './components/About/About';

// React Router 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Intro from './components/About/RouteComponents/Intro';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<><Header /> <Hero /> <Works /> <About /></>} />
          <Route exact path="/about/intro" element={<><Intro /></>} />
          <Route exact path="/about/experience" element={<><Intro /></>} />
          <Route exact path="/about/internships" element={<><Intro /></>} />
          <Route exact path="/about/graduation" element={<><Intro /></>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
