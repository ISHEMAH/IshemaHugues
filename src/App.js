
import './App.css';
import './Navbar.js';
import Navbar from './Navbar.js';
import Home from './Home.js';
import Projects from './Projects.js';
import Contact from './Contact';
import About from './About';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;

