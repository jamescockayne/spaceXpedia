import React from 'react';
import '../../styles/NavBar.css';
import SearchBar from '../SearchBar/SearchBar';

const NavBar = ({ onMissionSearchClick, onUpcomingSearchClick, currentView, search}) => {
  return (
    <section id='nav-bar' className='scroll-child'>
      <div className='nav-bar-container'>
        <div className='search-bar'><SearchBar search={search}/></div>
        <button id='missions' className={(currentView==='missions')?'active mission-button':'notActive mission-button'} onClick={onMissionSearchClick}>Missions</button>
        <button id='upcoming' className={(currentView==='upcoming')?'active upcoming-button':'notActive upcoming-button'} onClick={onUpcomingSearchClick}>Upcoming</button>
          {/*<button id='cores' className={(currentView==='cores')?'active':'notActive'} onClick={onCoresSearchClick}>Cores</button>
            <button id='payloads' className={(currentView==='payloads')?'active':'notActive'} onClick={onPayloadsSearchClick}>Landing Zones</button>*/}
      </div>
    </section>
  )
}

export default NavBar;
