import React from 'react';
import '../../styles/ScrollDownArrow.css';

// Adapted from a CodePen by https://codepen.io/xonic
const ScrollDownArrow = () => {
  return(
    <div className='scroll-master'>
      <div className="scroll-container">
      <div className="chevron"></div>
      <div className="chevron"></div>
      <div className="chevron"></div>
      </div>
    </div>
  )
}

export default ScrollDownArrow;
