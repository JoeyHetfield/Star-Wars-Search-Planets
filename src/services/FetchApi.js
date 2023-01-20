import { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function FetchAPi() {
  const { setPlanets } = useContext(StarWarsContext);

  useEffect(() => {
    fetch('https://swapi.dev/api/planets')
      .then((response) => response.json()
        .then((data) => {
          const newPlanets = data.results.map((planet) => {
            delete planet.residents;
            return planet;
          });
          setPlanets(newPlanets);
        }));
  }, [setPlanets]);
}

export default FetchAPi;
