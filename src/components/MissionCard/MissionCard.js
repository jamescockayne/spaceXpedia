import React from 'react';
import 'tachyons';
import '../../styles/Card.css';

const MissionCard = ({ photoLink, missionName, id, resourceClick}) => {
  return (
    <div key={id} id={id} onClick={() => resourceClick(id)} className = 'mission-card grow tc dib br4 pa3 ma2 bw2 shadow-5'>
      <div>
        <img className='card-image' src={photoLink} alt='missionName' />
      </div>
      <div className='card-title-container'>
        {missionName}
      </div>
    </div>
  )
}

export default MissionCard;
