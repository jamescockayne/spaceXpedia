import React from 'react';
import 'tachyons';
import '../../styles/Card.css';

const MissionCard = ({ photoLink, missionName, id, resourceClick}) => {
  let buttonId = id;
  return (
    <div key={buttonId} id={buttonId} className = 'mission-card grow tc dib br4 pa3 ma2 bw2 shadow-5'>
      <div>
        <img src = {photoLink} alt = 'missionName' />
      </div>
      <div className='card-title-container'>
        <button id={buttonId} onClick={() => resourceClick(buttonId)}> {missionName} </button>
      </div>
    </div>
  )
}

export default MissionCard;
