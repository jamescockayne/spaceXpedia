import React from 'react';
import '../../styles/ScrollDownArrow.css';

// Adapted from a CodePen by https://codepen.io/xonic
const ScrollDownArrow = () => {
  return(
    <div className='scroll-master'>
      <div class="scroll-container">
      <div class="chevron"></div>
      <div class="chevron"></div>
      <div class="chevron"></div>
      </div>
    </div>
  )
}

export default ScrollDownArrow;
