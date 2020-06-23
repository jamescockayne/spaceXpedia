import React from 'react';
import '../../styles/SearchBar.css';

const SearchBar = (props) => {
  return (
    <section id='search-bar'>
      <div className='search-bar-container'>
        <div className='search-container'>
          <input type='text' onChange={props.search} placeholder='Search...'/>
        </div>
        <div className='back-button-container'>
          <button onClick={props.back} className='back-button'>Go Back!</button>
        </div>
      </div>
    </section>
  )
}

export default SearchBar;
