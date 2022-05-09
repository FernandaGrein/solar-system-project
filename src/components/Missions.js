import React from 'react';
import Title from './Title';
import Missions from '../data/missions';
import MissionCard from './MissionCard';

class Mission extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {Missions.map((item) => (
          <MissionCard
            key={ item.name }
            name={ item.name }
            year={ item.year }
            country={ item.country }
            destination={ item.destination }
          />
        ))}
      </div>);
  }
}

export default Mission;
