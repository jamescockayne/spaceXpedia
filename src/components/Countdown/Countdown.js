import React, { Component } from 'react';
import ScrollIntoView from 'react-scroll-into-view';
import '../../styles/Countdown.css';
import ScrollDownArrow from '../ScrollDownArrow/ScrollDownArrow';
import 'tachyons';

class Countdown extends Component {
  constructor(props){
    super(props)
    this.state = {
      nameOfNextLaunch: 'Loading...',
      nextLaunchTimeUnix: 'Loading...',
      tMinusTime: 'Loading...',
      dateString: 'Loading...',
    }
  }

  render(){
    return(
      <section id='countdown' className='scroll-child'>
        <div className='countdown-container'>
          <div className='display-container'>
            <div className='launch-name c-element'>{this.state.nameOfNextLaunch}</div>
            <div className='t-minus c-element'>
              <span className='border'>
                {this.state.tMinusTime}
              </span>
            </div>
            <div className='launch-date c-element'>The launch is: {this.state.dateString}</div>
          </div>

          <div>
            <ScrollIntoView selector='#launch-info'>
              <ScrollDownArrow />
            </ScrollIntoView>
          </div>

        </div>

      </section>
    )
  }

  componentDidMount(){
    // Say whether the component is mounted and request the data from API
    console.log(`Countdown component mounted successfully!`);
    const data = this.fetchLaunchData();


    // When the data is recieved, update the state...
    data.then(result => {
    let date = new Date(result.launch_date_unix*1000);
    this.setState({nameOfNextLaunch: result.mission_name, nextLaunchTimeUnix: result.launch_date_unix, dateString: date.toString(),});
      }).catch(e=>console.log(e));

    // ...and then continuusly work out the 't-minus' time to launch, updating the state everytime it changes
    setInterval(() => this.updateTminusString(this.state.nextLaunchTimeUnix),100);



  }

  updateTminusString = (date) => {
    // Updates the state to reflect the time to the input, the 'date' variable
    let timeOfLaunch_unix = date;

    let currentTimeUnixRaw = Date.now()/1000;
    let currentTimeUnix = Math.floor(currentTimeUnixRaw);
    //.log(`The UNIX time of launch is ${timeOfLaunch_unix}`);
    //console.log(`The UNIX time now is ${currentTimeUnix}`);

    let secondsToLaunch = timeOfLaunch_unix - currentTimeUnix;
    //console.log(`There are ${secondsToLaunch} seconds until launch.`);

    let rawDays = secondsToLaunch/86400;
    let roundedDays = Math.floor(rawDays);
    //console.log(`There are ${roundedDays} whole days until launch.`);

    let rawHours = (secondsToLaunch%86400)/3600;
    let roundedHours = Math.floor(rawHours);
    //console.log(`There are ${roundedHours} whole hours until launch.`);

    let rawMinutes = ((secondsToLaunch%86400)%3600)/60;
    let roundedMinutes = Math.floor(rawMinutes);
    //console.log(`There are ${roundedMinutes} whole minutes until launch.`);

    let seconds = secondsToLaunch - (86400*roundedDays) - (3600*roundedHours) - (60*roundedMinutes);
    //console.log(`Finally, there are ${seconds} seconds left until launch.`);

    //let longFormTime = `There are ${roundedDays} days, ${roundedHours} hours, ${roundedMinutes} minutes and ${seconds} seconds until launch.`;
    let tMinusTime = `T- ${('00' + roundedDays).substr(-3)}:${('0' + roundedHours).substr(-2)}:${('0' + roundedMinutes).substr(-2)}:${('0' + seconds).substr(-2)}`
    this.setState({tMinusTime: tMinusTime});
  }

  fetchLaunchData = async () => {
    const response = await fetch('https://api.spacexdata.com/v3/launches/next');
    const data = await response.json();
    return data;
  }

}

export default Countdown;
