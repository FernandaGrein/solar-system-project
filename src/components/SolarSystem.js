import React from 'react';
import PlanetCard from './PlanetCard';
import Title from './Title';
import Planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div className="planetContainer" data-testid="solar-system">
        <Title headline="Planetas" />
        <article>
          {Planets.map((element) => (
            <PlanetCard
              key={ element.name }
              planetName={ element.name }
              planetImage={ element.image }
            />
          ))}
        </article>
      </div>);
  }
}

export default SolarSystem;
