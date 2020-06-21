import React, { Component } from 'react';
import '../../styles/LaunchInformation.css';

class LaunchInformation extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render(){
    return(
      <section id='launch-info'>
        <div className='launch-info-container'>

          <div className='info-display-container'>

            <div className='info-top'>
              <div>
                <p>This is the top image.</p>
              </div>
              <div>
                <p>This is the top information.</p>
              </div>
            </div>

            <div className='info-bottom'>
              <p>This is the bottom.</p>
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
    this.setState({});
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
