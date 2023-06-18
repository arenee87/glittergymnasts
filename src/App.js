import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import About from './About';
import Equipment from './Equipment';
import EquipmentList from './EquipmentList';
import Create from './Create';
import Footer from './Footer';




function App() {
  return (
    <div className="page-container">
    <div className="content-wrap">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<h1 className='h1'>Glitter Gymnasts</h1>}/>
          <Route path="about" element={<About />} />
          <Route path="equipment" element={ <EquipmentList /> } />
          <Route path="equipment/:id" element={ <Equipment /> } />
          <Route path="/edit/:id" element={ <EquipmentList />} />
          <Route path="/add" element={<Create />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
    <Footer />
  
    </div>
    
  );
}

export default App
