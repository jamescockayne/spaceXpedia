import React from 'react';
import '../../styles/NavBar.css';

const NavBar = ({ onMissionSearchClick, onCoresSearchClick, onPayloadsSearchClick, onUpcomingSearchClick, currentView }) => {
  return (
    <section id='nav-bar' className='scroll-child'>
      <div className='nav-bar-container'>
      <button id='missions' className={(currentView==='missions')?'active':'notActive'} onClick={onMissionSearchClick}>Missions</button>
        <button id='cores' className={(currentView==='cores')?'active':'notActive'} onClick={onCoresSearchClick}>Cores</button>
        <button id='payloads' className={(currentView==='payloads')?'active':'notActive'} onClick={onPayloadsSearchClick}>Landing Zones</button>
        <button id='upcoming' className={(currentView==='upcoming')?'active':'notActive'} onClick={onUpcomingSearchClick}>Upcoming</button>
      </div>
    </section>
  )
}

export default NavBar;
