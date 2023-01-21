import React, { useState } from 'react';
import './App.css';
import StarWarsContext from './context/StarWarsContext';
import Table from './components/Table';

function App() {
  const [planets, setPlanets] = useState([]);
  const [filter, setFilter] = useState('');
  const [numberFiltered, setNumberFiltered] = useState([]);
  const [column, setColumn] = useState('population');
  const [compare, setCompare] = useState('maior que');
  const [value, setValue] = useState('0');
  const [filteredPlanets, setFilteredPlanets] = useState(planets);

  return (
    <StarWarsContext.Provider
      value={ { planets,
        setPlanets,
        filter,
        setFilter,
        numberFiltered,
        setNumberFiltered,
        column,
        setColumn,
        compare,
        setCompare,
        value,
        setValue,
        filteredPlanets,
        setFilteredPlanets,
      } }
    >
      <Table />
    </StarWarsContext.Provider>
  );
}

export default App;
