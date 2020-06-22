import React from 'react';
import CardBoard from '../CardBoard/CardBoard';
import ViewWindow from '../ViewWindow/ViewWindow';
import DetailWindow from '../DetailWindow/DetailWindow';

const LookupViewer = (props) => {

  if (props.database.isInfoView === false){
    return (
      <ViewWindow>
        <CardBoard database={props.database} resourceClick={props.resourceClick}/>
      </ViewWindow>
    )
  }
  else{
    return (
      <ViewWindow>
        <DetailWindow database={props.database}/>
      </ViewWindow>
    )
  }
}

export default LookupViewer;
