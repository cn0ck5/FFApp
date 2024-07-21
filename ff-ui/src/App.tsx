import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PlayerTable from './Componenets/Table';
import Admin from './Componenets/AdminPage';
import ManagerNav from './Componenets/AdminComponents/AdminNav';

function App() {
  return (
    <BrowserRouter> 
    <Routes> 

      <Route path="/" element = {<PlayerTable />} />
      <Route path="/admin" element = {<ManagerNav />} />
      {/* <Route path="/admin" element = {<Admin />} />
      <Route path="/admin" element = {<Admin />} />
      <Route path="/admin" element = {<Admin />} /> */}

    </Routes>

    </BrowserRouter>
    // <div className="App">
    //   <PlayerTable />
    //   <AddManager />
    // </div>
  );
}

export default App;
