import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from '../context/StarWarsContext';

function FilterNumbers({ onClick }) {
  const { setColumn, setCompare, value, setValue } = useContext(StarWarsContext);

  return (
    <div>
      <select
        data-testid="column-filter"
        onChange={ (event) => setColumn(event.target.value) }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ (event) => setCompare(event.target.value) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        data-testid="value-filter"
        type="number"
        value={ value }
        onChange={ (event) => setValue(event.target.value) }
      />
      <button data-testid="button-filter" onClick={ onClick }>
        Filtrar
      </button>
    </div>
  );
}

FilterNumbers.propTypes = {
  onClick: PropTypes.func,
};

FilterNumbers.defaultProps = {
  onClick: () => {},
};

export default FilterNumbers;
