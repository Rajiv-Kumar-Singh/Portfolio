// import logo from './logo.svg';
import './App.scss';

// Importing components 
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Works from './components/Works/Works';
import About from './components/About/About';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Works />
      <About />
    </>
  );
}

export default App;
