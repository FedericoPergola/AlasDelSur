import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Faqs from './components/Faqs';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Testimonials from './components/Testimonials';
import Transfers from './components/Transfers';
import Vehicles from './components/Vehicles';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Transfers />
      <Vehicles />
      <Testimonials />
      <Faqs />
      <Contact />
    </div>
  );
}

export default App;
