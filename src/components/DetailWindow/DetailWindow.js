import React from 'react';
import '../../styles/DetailWindow.css';

const DetailWindow = (props) => {

  let requestedRecord = props.state.database[props.state.resourceRequested];
  let date = new Date(requestedRecord.date*1000).toGMTString();

  return (

  <section id='detail-screen'>
    <div className='detail-window-container'>
      <div className='patch-and-back'>
        <div className='mission-image'>
          <img src={requestedRecord.patchUrl} onClick={props.back} alt='Mission Patch' />
        </div>
      </div>

      <div className='mission-title' style={{border: '0px solid transparent',fontSize: '25px'}}>
        {requestedRecord.name}<br/>
        <div className='subtitle'>
          (Click patch to return)
        </div>
      </div>

      <p style={{padding: '3vh 3vw', margin: '0px 0px'}}>Launched: {requestedRecord.launchSite}, {date}
        <br/>
        <br/>
        Orbit type: {requestedRecord.orbit}
        <br/>
        <br/>
        Launch Information: {requestedRecord.details}
        <br/>
        <br/>
        <iframe frameBorder='0' src={requestedRecord.videoUrl} allowFullScreen></iframe>
      </p>



    </div>
  </section>

  )

}

export default DetailWindow;
