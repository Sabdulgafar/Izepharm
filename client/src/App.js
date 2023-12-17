import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
// import Navbar from './components/Navbar';
import {Login} from './pages/Login'
import { Home  } from './pages/Home';
import { About } from './pages/About';
import {AdminDB} from './pages/AdminDB';
import {UserDB} from './pages/UserDB';
import { Stock } from './pages/stock';

function App() {
  return (
    <div className="app">
      <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route exact path="/about" element={<About />} />
                <Route path="/admindb" element={<AdminDB />} />
                <Route path="/userdb" element={<UserDB />} />
                <Route path="/stocks" element={<Stock />} />
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
