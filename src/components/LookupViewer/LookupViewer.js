import React, { Component } from 'react';
import CardBoard from '../CardBoard/CardBoard';
import ViewWindow from '../ViewWindow/ViewWindow';
import DetailWindow from '../DetailWindow/DetailWindow';

class LookupViewer extends Component {
  constructor(props){
    super(props);
  }

  render(){

  if (this.props.isInfoView === false){
    return (
      <ViewWindow>
        <CardBoard currentView={this.props.viewMode} resourceClick={this.props.resourceClick}/>
      </ViewWindow>
    )
  }
  else{
    return <DetailWindow />
  }
  }
}

export default LookupViewer;
