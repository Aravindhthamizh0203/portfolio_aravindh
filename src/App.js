import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home';
import Contect from './pages/Contact/Contect';
import Project from './pages/Project/Project';
import Skill from './pages/Skill/Skill';
import About from './pages/About/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Topbar from './pages/Topbar/Topbar';

function App() {
  return (
    <div>
      <BrowserRouter><header><Topbar /></header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/skill' element={<Skill />} />
          <Route path='/project' element={<Project />} />
          <Route path='/contect' element={<Contect />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
