import React from 'react';

import MissionCard from '../MissionCard/MissionCard';

const CardBoard = (props) => {


  const whatDoIShow = () => {
      switch (props.state.viewMode){
        case 'missions':
          return props.state.filteredDatabase.map((e,i)=><MissionCard id={e.id} key={e.id} resourceClick={props.resourceClick} missionName={e.name} photoLink={e.patchUrl}/>);

        default:
          return 'Coming Soon!';
      }
  }

let display = whatDoIShow();

return (<div>{display}</div>)

}

export default CardBoard;
