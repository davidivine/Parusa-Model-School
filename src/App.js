import { Route, Routes } from 'react-router-dom';
import './index.css';
import Home from './Components/Routes/Home';
import Contact from './Components/Routes/Contact';
import About from './Components/Routes/About';
import Project from './Components/Routes/Project';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element = { <Home /> } />
        <Route path='/Contact' element = { <Contact /> } />
        <Route path='/About' element ={ <About />} />
        <Route path='/Project' element = { <Project />}/>
      </Routes>
    </>
  );
}

export default App;
