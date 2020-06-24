import React from 'react';
import CardBoard from '../CardBoard/CardBoard';
import ViewWindow from '../ViewWindow/ViewWindow';
import DetailWindow from '../DetailWindow/DetailWindow';
import BackButton from '../BackButton/BackButton';
import '../../styles/BackButton.css';

const LookupViewer = (props) => {

  if (props.allData.isInfoView === false){
    return (
      <ViewWindow>
        <CardBoard state={props.allData} resourceClick={props.resourceClick}/>
      </ViewWindow>
    )
  }
  else{
    return (
      <>
      <ViewWindow>
       <DetailWindow state={props.allData} back={props.back}/>
      </ViewWindow>

       </>
    )
  }
}

export default LookupViewer;
