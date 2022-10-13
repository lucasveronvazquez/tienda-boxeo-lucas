
import './App.css';
import React from 'react';
import {NavBar} from './components/NavBar/NavBar';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer';
import {BrowserRouter, Routes, Route,} from "react-router-dom";
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <div>
      <NavBar/>
      
        <Routes>
          <Route path='/inicio' element={<ItemListContainer/>}/>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        </Routes>
      <footer>todos los derechos reservados - compumundo hiper mega red</footer>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
