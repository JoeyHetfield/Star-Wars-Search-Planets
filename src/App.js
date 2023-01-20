import React, { useState } from 'react';
import './App.css';
import StarWarsContext from './context/StarWarsContext';
import Table from './components/Table';

function App() {
  const [planets, setPlanets] = useState([]);
  return (
    <StarWarsContext.Provider value={ { planets, setPlanets } }>
      <Table />
    </StarWarsContext.Provider>
  );
}

export default App;
