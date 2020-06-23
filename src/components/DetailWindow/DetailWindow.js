import React from 'react';

import '../../styles/DetailWindow.css';

const DetailWindow = (props) => {


  let requestedRecord = props.state.database[props.state.resourceRequested];
  let date = new Date(requestedRecord.date*1000).toGMTString();

  return (

  <section id='detail-screen'>
    <div className='detail-window-container'>

      <img src={requestedRecord.patchUrl} alt='Mission Patch' /><br/>
      Mission: {requestedRecord.name} <br/>
      Launch Site: {requestedRecord.launchSite}<br/>
      Date: {date}<br/>
      Details: {requestedRecord.details} <br/>
      Link: <a href={requestedRecord.videoUrl} target="_blank" rel="noopener noreferrer">Video link</a> <br/>
      Orbit: {requestedRecord.orbit}<br/>

    </div>
  </section>

  )

}

export default DetailWindow;
