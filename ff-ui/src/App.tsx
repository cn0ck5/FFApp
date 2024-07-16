import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PlayerTable from './Componenets/Table';
import AddManager from './Componenets/AddManager';

function App() {
  return (
    <BrowserRouter> 
    <Routes> 

      <Route path="/" element = {<PlayerTable />} />
      <Route path="/admin" element = {<AddManager />} />

    </Routes>

    </BrowserRouter>
    // <div className="App">
    //   <PlayerTable />
    //   <AddManager />
    // </div>
  );
}

export default App;
