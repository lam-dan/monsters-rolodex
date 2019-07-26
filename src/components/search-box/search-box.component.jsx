import React from 'react';
import "./search-box.styles.css";

//destructuring props 
export const SearchBox = ({placeholder, handleChange}) => (
  <input
    className='search'
    type='search'
    placeholder= {placeholder}
    onChange={handleChange}
  />
);
