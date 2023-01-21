import React, { useState } from 'react';
import './App.css';
import StarWarsContext from './context/StarWarsContext';
import Table from './components/Table';

function App() {
  const [planets, setPlanets] = useState([]);
  const [filter, setFilter] = useState('');
  return (
    <StarWarsContext.Provider value={ { planets, setPlanets, filter, setFilter } }>
      <Table />
    </StarWarsContext.Provider>
  );
}

export default App;
