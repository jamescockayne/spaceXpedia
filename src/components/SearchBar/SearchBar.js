import React from 'react';
import '../../styles/SearchBar.css';

const SearchBar = (props) => {
  return (  
        <div className='search-container'>
          <input className='search-input' type='text' onChange={props.search} placeholder='Search...'/>
        </div>
  )
}

export default SearchBar;
