
import './App.css';
import './Navbar.js';
import Navbar from './Navbar.js';
import Home from './Home.js';
import Projects from './Projects.js';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Projects/>
    </div>
  );
}

export default App;

