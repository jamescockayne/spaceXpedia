import React from 'react';
import BackButton from '../BackButton/BackButton';
import '../../styles/DetailWindow.css';

const DetailWindow = (props) => {
console.log(props);

  let requestedRecord = props.state.database[props.state.resourceRequested];
  let date = new Date(requestedRecord.date*1000).toGMTString();

  return (

  <section id='detail-screen'>
    <div className='detail-window-container'>
      <div className='patch-and-back'>
        <img src={requestedRecord.patchUrl} alt='Mission Patch' />

      </div>
      <div className='mission-title' style={{border: '0px solid transparent',fontSize: '25px'}}>{requestedRecord.name}</div><br/>
      <p style={{padding: '3vh 3vw', margin: '0px 0px'}}>Launched: {requestedRecord.launchSite}, {date}<br/>

      Launch Information: {requestedRecord.details} <br/>
      Link: <a href={requestedRecord.videoUrl} target="_blank" rel="noopener noreferrer">Video link</a> <br/>
      Orbit: {requestedRecord.orbit}<br/></p>
      <BackButton className='fixed' back={props.back}/>


    </div>
  </section>

  )

}

export default DetailWindow;
