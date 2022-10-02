// import logo from './logo.svg';
import './App.scss';
import About from './components/About/About';

// Importing components 
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Works from './components/Works/Works';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Works />
    </>
  );
}

export default App;
