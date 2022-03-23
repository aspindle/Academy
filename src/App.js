
import './App.css';
import { useEffect } from 'react';
import Home from './pages/Home';
import Resources from './pages/Resources';
import Blog from './pages/Blog';
import Donate from './pages/Donate';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReactGa from 'react-ga';


function App() {

  useEffect(() => {
    ReactGa.initialize('G-WC5ZWP4P3N');
    ReactGa.pageview(window.location.pathname + window.location.search)
  }, [])


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/resources" element={<Resources />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/donate" element={<Donate />}></Route>
        
      </Routes>
      <div >
      
      </div>
    </Router>
    
    
  );
}

export default App;
