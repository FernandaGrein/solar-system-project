import React from 'react';
import PlanetCard from './PlanetCard';
import Title from './Title';
import Planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {Planets.map((element) => (
          <PlanetCard
            key={ element.name }
            planetName={ element.name }
            planetImage={ element.image }
          />
        ))}
      </div>);
  }
}

export default SolarSystem;
