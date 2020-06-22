import React from 'react';

import '../../styles/DetailWindow.css';

const DetailWindow = (props) => {

  let database = props.database;
  let requestedResource = database.resourceRequested;
  let date = new Date(database.datesUNIX[requestedResource]*1000);
  console.log(database);

  return (

  <section id='detail-screen'>
    <div className='detail-window-container'>

      <img src={database.patchUrls[requestedResource]} alt='Mission Patch' /><br/>
      Mission: {database.names[requestedResource]} <br/>
      Launch Site: {database.launch_sites[requestedResource]}<br/>
      Date: {date.toGMTString()}<br/>
      Details: {database.details[requestedResource]} <br/>
      Link: <a href={database.videoUrls[requestedResource]} target="_blank" rel="noopener noreferrer">Video link</a> <br/>
      Orbit: {database.orbits[requestedResource]}<br/>

    </div>
  </section>

  )

}

export default DetailWindow;
