import React, { Component } from 'react';

import MissionCard from '../MissionCard/MissionCard';

class CardBoard extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentView: 'missions',
      missions: [],
      numberOfMissions: 0,
    };

  }

  componentDidMount(){
    console.log('CardBoard successfully mounted!');
    let fetched = this.getData();
    fetched.then(data=>{
      let missionNames = data.map(mission => mission.mission_name);
      let missionPatches = data.map(mission => mission.links.mission_patch_small);
      let missions = [];
      for (let i=0;i<missionNames.length;i++){missions[i] = [missionNames[i], missionPatches[i]];}
      this.setState({missions: missions, numberOfMissions: missions.length});
    })



  }

  getData = async () => {
    try {
      let response = await fetch('https://api.spacexdata.com/v3/launches/past');
      let result = await response.json();
      return result;
    }
    catch {
      throw Error;
    }
}

  whatDoIShow = () => {
    switch (this.props.currentView){
      case 'missions':
        return this.state.missions
                  .map((e,i)=><MissionCard id={i} missionName={e[0]} photoLink={e[1]}/>)
      case 'cores':
      return <h1>No Data...</h1>

      default:
        return null;
    }
}




  render(){

    let display = this.whatDoIShow();



  return (<div>
    {display}
  </div>)


    }
}

export default CardBoard;
