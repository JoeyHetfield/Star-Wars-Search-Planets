import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import FetchAPi from '../services/FetchApi';
import FilterName from './FilterName';
import FilterNumbers from './FilterNumbers';

function Table() {
  const { planets, filter, column,
    compare, value, filteredPlanets, setFilteredPlanets } = useContext(StarWarsContext);

  useEffect(() => {
    if (planets.length > 0) {
      setFilteredPlanets(
        filter
          ? planets.filter((planet) => planet.name.toLowerCase()
            .includes(filter.toLowerCase()))
          : planets,
      );
    }
  }, [filter, planets, setFilteredPlanets]);

  const handleClick = () => {
    let filteredData = [...planets];
    if (column && compare && value) {
      const newValue = Number(value);
      if (compare === 'maior que') {
        filteredData = filteredData.filter((planet) => planet[column] > newValue);
      } else if (compare === 'menor que') {
        filteredData = filteredData.filter((planet) => planet[column] < newValue);
      } else if (compare === 'igual a') {
        filteredData = filteredData
          .filter((planet) => Number(planet[column]) === newValue);
      }
    }
    setFilteredPlanets(filteredData);
  };

  return (
    <>
      <FetchAPi />
      <FilterName />
      <FilterNumbers onClick={ handleClick } />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>Url</th>
          </tr>
        </thead>
        <tbody>
          {filteredPlanets.map((planet) => (
            <tr key={ planet.name }>
              <td>
                {' '}
                { planet.name }
                {' '}
              </td>
              <td>
                { planet.rotation_period }
                {' '}
              </td>
              <td>
                { planet.orbital_period }
                {' '}
              </td>
              <td>
                { planet.diameter }
                {' '}
              </td>
              <td>
                {' '}
                { planet.climate }
              </td>
              <td>
                { planet.gravity }
                {' '}
              </td>
              <td>
                { planet.terrain }
                {' '}
              </td>
              <td>
                { planet.surface_water }
                {' '}
              </td>
              <td>
                { planet.population }
                {' '}
              </td>
              <td>
                { planet.films }
                {' '}
              </td>
              <td>
                { planet.created }
                {' '}
              </td>
              <td>
                { planet.edited }
                {' '}
              </td>
              <td>
                { planet.url }
                {' '}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Table;
