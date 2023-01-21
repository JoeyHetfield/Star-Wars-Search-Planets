import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function FilterName() {
  const { filter, setFilter } = useContext(StarWarsContext);

  return (
    <input
      type="text"
      value={ filter }
      onChange={ (event) => setFilter(event.target.value) }
      data-testid="name-filter"
      placeholder="Filter by the planet names"
    />
  );
}

export default FilterName;
