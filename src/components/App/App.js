import React, { Component } from 'react';
import './App.css';
import Countdown from '../Countdown/Countdown';
import LaunchInformation from '../LaunchInformation/LaunchInformation';
import NavBar from '../NavBar/NavBar';
import CardBoard from '../CardBoard/CardBoard';
import ViewWindow from '../ViewWindow/ViewWindow';
import SearchBar from '../SearchBar/SearchBar';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      viewMode: 'missions',
    }
  }

  componentDidMount(){
    console.log('App successfully mounted!');
  }

  onMissionSearchClick = (event) => {
    console.log(event);
    this.setState({viewMode: 'missions'});
  }

  onCoresSearchClick = (event) => {
    this.setState({viewMode: 'cores'});
  }

  onPayloadsSearchClick = (event) => {
    this.setState({viewMode: 'payloads'});
  }

  onUpcomingSearchClick = (event) => {
    this.setState({viewMode: 'upcoming'});
  }

  render(){
    return (
      <div className="App">
        <Countdown />
        <LaunchInformation />
        <NavBar onMissionSearchClick={this.onMissionSearchClick}
                   onCoresSearchClick={this.onCoresSearchClick}
                   onPayloadsSearchClick={this.onPayloadsSearchClick}
                   onUpcomingSearchClick={this.onUpcomingSearchClick}
                   currentView={this.state.viewMode}
        />
        <SearchBar />
        <ViewWindow>
          <CardBoard currentView={this.state.viewMode}/>
        </ViewWindow>
      </div>
    )
  }
}

export default App;
