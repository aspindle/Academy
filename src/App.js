
import './App.css';
import { useEffect } from 'react';
import Home from './pages/Home';
import Resources from './pages/Resources';
import Blog from './pages/Blog';
import Donate from './pages/Donate';
import My404 from './pages/My404';

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
        <Route path="/" element={<Home />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="*" element={<My404 />} />
      </Routes>
    </Router>
  );
}

export default App;
