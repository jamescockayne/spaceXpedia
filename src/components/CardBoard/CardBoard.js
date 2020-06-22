import React from 'react';

import MissionCard from '../MissionCard/MissionCard';

const CardBoard = (props) => {


  const whatDoIShow = () => {
  const database = props.database;

      switch (database.viewMode){
        case 'missions':
          let missions = []
          for (let m=0;m<database.names.length;m++){
            missions[m] = [database.names[m], database.patchUrls[m]];
          }
          return missions.map((e,i)=><MissionCard id={i} key={i} resourceClick={props.resourceClick} missionName={e[0]} photoLink={e[1]}/>);

        case 'cores':
          return <h1>No Data...</h1>

        default:
          return 'hello';
      }
  }

let display = whatDoIShow();

return (<div>{display}</div>)

}

export default CardBoard;
