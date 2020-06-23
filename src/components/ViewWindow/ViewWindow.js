import React, { Component } from 'react';
import '../../styles/ViewWindow.css';

class ViewWindow extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render(){
    return (
      <section id='view'>
        <div className='view-window-container bottom-scroll'>
          <div className='view-display'>
            {this.props.children}
          </div>
        </div>
      </section>
    )
  }
}

export default ViewWindow;
