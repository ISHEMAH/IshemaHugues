
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
      <a href='#Home'>
        <div className='moveup'>
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" fill="none">
            <path d="M6.20713 0L0 6.20706L1.41421 7.62136L6.20713 2.82842L11 7.62136L12.4142 6.20706L6.20713 0ZM6.20713 5.64986L0 11.857L1.41421 13.2713L6.20713 8.47836L11 13.2713L12.4142 11.857L6.20713 5.64986Z" fill="white"/>
          </svg>
        </div>
      </a>

    </div>
  );
}

export default App;

