import {useState, useEffect} from 'react';
import './App.css';
import AddMovie from './components/addmovie';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddUser from './components/adduser';

function App() {
  return (
    <Routes>
        <Route path="/" element={<AddMovie />}></Route>
        <Route path="/adduser" element={<AddUser />}></Route>
    </Routes>
  );  }

export default App;