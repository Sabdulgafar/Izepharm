import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import {Login} from './pages/Login'
import { Home  } from './pages/Home';
import { About } from './pages/About';

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route exact path="/about" element={<About />} />
            </Routes>
        </Router>
    </div>
  );
}
// const Route= ()=>{
//   return(
//     <Routes/>
//   )
// }

export default App;
