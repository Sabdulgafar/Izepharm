import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import {Login} from './pages/Login'
import { Home  } from './pages/Home';

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
            <Routes>
                {/* <Route exact path="/" element={<Home />} /> */}
                <Route exact path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
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
