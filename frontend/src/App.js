import {useState, useEffect} from 'react';
import './App.css';
import AddMovie from './components/addmovie';

function App() {
  return (
    <div className="App">
          <div className="movies">
            <AddMovie/>
          </div>
    </div>
  );  }

export default App;