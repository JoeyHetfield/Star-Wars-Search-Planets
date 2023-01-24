import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function SortFilters() {
  const { filteredPlanets, newCompare, setNewCompare, setFilteredPlanets,
    newColumn, setNewColumn } = useContext(StarWarsContext);

  function handleChange(event) {
    const { value } = event.target;
    setNewColumn(value);
  }

  function handleCompare(event) {
    const { value } = event.target;
    setNewCompare(value);
  }

  function orderr(a, b) {
    const magicNumber = -1;
    if (Number.isNaN(Number(a[newColumn])) && !Number.isNaN(Number(b[newColumn]))) {
      return 1;
    }
    if (!Number.isNaN(Number(a[newColumn])) && Number.isNaN(Number(b[newColumn]))) {
      return magicNumber;
    }
    if (Number.isNaN(Number(a[newColumn])) && Number.isNaN(Number(b[newColumn]))) {
      return 0;
    }
    return newCompare === 'ASC'
      ? a[newColumn] - b[newColumn] : b[newColumn] - a[newColumn];
  }

  const handleClicked = () => {
    setFilteredPlanets([...filteredPlanets.sort(orderr)]);
  };

  return (
    <div>
      <label htmlFor="column-sort">
        Ordernar:
        <select
          data-testid="column-sort"
          onChange={ handleChange }
        >
          <option value="population">Population</option>
          <option value="orbital_period">Orbital Period</option>
          <option value="diameter">Diameter</option>
          <option value="rotation_period">Rotation Period</option>
          <option value="surface_water">Surface Water</option>
        </select>
      </label>
      <label htmlFor="column-sort-input-asc">
        <input
          type="radio"
          data-testid="column-sort-input-asc"
          value="ASC"
          name="compare-radio"
          onChange={ handleCompare }
        />
        Ascendente
      </label>
      <label htmlFor="column-sort-input-desc">
        <input
          type="radio"
          name="compare-radio"
          data-testid="column-sort-input-desc"
          value="DESC"
          onChange={ handleCompare }

        />
        Descendente
      </label>
      <button
        data-testid="column-sort-button"
        onClick={ handleClicked }
      >
        Ordenar
      </button>
    </div>
  );
}

export default SortFilters;
