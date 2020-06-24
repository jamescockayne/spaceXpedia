import React from 'react';

const BackButton = (props) => {
  return (
    <div className='back-button-container'>
      <button onClick={props.back} className='back-button'>Go Back!</button>
    </div>
  )
}

export default BackButton;
