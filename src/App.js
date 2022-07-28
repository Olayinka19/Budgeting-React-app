
import './App.css';
import React from 'react';
import { useSpring, animated } from 'react-spring'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Edit from "./Pages/Edit";
import Error from "./Pages/Error";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";
import NavBar from "./Components/NavBar";
import Transition from './Components/Transition';
import Animation from './Components/Animation';


function App() {
  return (
    <div className="App">
        <Router>
      <NavBar/>
    <div className="App">
      <Routes>
      <Route path="/" element={<Home />} />
            <Route path="/transactions" element={<Index />} />
            <Route path="/transactions/new" element={<New />} />
            <Route path="/transactions/:index" element={<Show />} />
            <Route path="/transactions/:index/edit" element={<Edit />} />
            <Route path="*" element={<Error />} />
      </Routes>
    </div>
    </Router>
   
    </div>
  );
}

export default App;
