import './App.css';
import Pro from './components/Pro';
import Exotic from './components/Exotic';
import Other from './components/Other';
import Veg from './components/Veg';
import About from './components/About';
import Fruit from './components/Fruit';
import Contact from './components/Contact';
import React from 'react';
import Log1 from './components/Log1';
import Home from './components/Home';
import Reg1 from './components/Reg1';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createContext } from 'react';
export const Context=createContext(null);
function App() {
  return (
    <div className="App">
       <Context.Provider value={"STORE"}>
      <BrowserRouter>
        <Routes>
          {/* Set the default route to the Login page */}
          <Route path="/" element={<Reg1 />} />
          <Route path="/registration" element={<Reg1 />} />
          <Route path="/pro1" element={<Log1 />} />
          
          <Route path="/h" element={<Home />} />
          <Route path="/pro" element={<Pro />} />
          <Route path="/con" element={<Contact />} />
          <Route path="/ab" element={<About />} />
          <Route path="/f" element={<Fruit />} />
          <Route path="/v" element={<Veg/>} />
          <Route path="/e" element={<Exotic/>} />
          <Route path="/o" element={<Other/>} />


        </Routes>
      </BrowserRouter>
      </Context.Provider>
    </div>
  );
}
export default App;