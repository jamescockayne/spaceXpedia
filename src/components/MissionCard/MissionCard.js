import React from 'react';
import 'tachyons';
import '../../styles/Card.css';

const MissionCard = ({ photoLink, missionName, id, resourceClick}) => {
  return (
    <div key={id} id={id} onClick={() => resourceClick(id)} className = 'mission-card grow tc dib br4 pa3 ma2 bw2 shadow-5'>
      <div className='card-title-container'>
      <img className='card-image' src={photoLink} alt='missionName' />
        <p className='mission-title'>{missionName}</p>
      </div>
    </div>
  )
}

export default MissionCard;
