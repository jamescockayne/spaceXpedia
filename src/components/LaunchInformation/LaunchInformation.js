import React, { Component } from 'react';
import '../../styles/LaunchInformation.css';
import '../App/App.css';

class LaunchInformation extends Component {
  constructor(props){
    super(props)
    this.state = {
      patchUrl:  '',
      launchInformation: 'Loading...',
      flightNumber: 'Loading...',
      launchSite: 'Loading...',
      landingZone: 'Loading...',
      missionName: 'Loading...',
      redditLink: 'Loading...',
      boosterFlightNumber: 'Loading...',
    }
  }

  render(){
    return(
      <section id='launch-info' className='scroll-child'>
        <div className='launch-info-container'>

          <div className='info-display-container'>

            <div className='info-top'>
              <div>
                <img src={this.state.patchUrl} alt='Mission Patch' />
              </div>
              <div className='launch-facts'>
                <p>Mission: {this.state.missionName}
                  <br></br>
                  <br></br>
                  This is launch number {this.state.flightNumber} for SpaceX
                  <br></br>
                  <br></br>
                  Launch Site: {this.state.launchSite}
                  <br></br>
                  <br></br>
                  Landing Zone: {this.state.landingZone}
                  <br></br>
                  <br></br>
                  The first stage core has flown {this.state.boosterFlightNumber-1} times before. This will be flight number {this.state.boosterFlightNumber}.
                  <br></br>
                  <br></br>
                  Be a part of the launch campaign with us on <a href={this.state.redditLink}>Reddit</a>!
                </p>
              </div>
            </div>

            <div className='info-bottom'>
              <p className='scrollable'>{this.state.launchInformation}</p>
            </div>

          </div>

        </div>
      </section>
    )
  }

  componentDidMount(){
    // Say whether the component is mounted and request the data from API
    console.log(`Launch Information component mounted successfully!`);
    const data = this.fetchLaunchData();

    // When the data is recieved, update the state...
    data.then(result => {
    let landingRaw = result.rocket.first_stage.cores[0].landing_vehicle;
    let landingZone;
    if (landingRaw === 'JRTI') {landingZone = 'Just Read The Instructions'}
    else if (landingRaw === 'OCISLY') {landingZone = 'Of Course I Still Love You'}
    else {landingZone = landingRaw};

    this.setState({patchUrl: result.links.mission_patch,
                   launchInformation: result.details,
                   flightNumber: result.flight_number,
                   launchSite: result.launch_site.site_name_long,
                   landingZone: landingZone,
                   missionName: result.mission_name,
                   redditLink: result.links.reddit_campaign,
                   boosterFlightNumber: result.rocket.first_stage.cores[0].flight});
      }).catch(e=>console.log(e));

    //page refresh will be needed to update after a launch



  }



  fetchLaunchData = async () => {
    const response = await fetch('https://api.spacexdata.com/v3/launches/next');
    const data = await response.json();
    return data;
  }

}

export default LaunchInformation;
