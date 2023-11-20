import React from 'react';
import Home from './Home';
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";  
import Navbar from './Navbar';
import Loading from './Loading';
function App() {

  


  return (
    <Router>
          <Navbar/>
        <Routes>
        <Route exact path="/" element={<Home />} />
        </Routes>
    </Router>
  )
}

export default App
