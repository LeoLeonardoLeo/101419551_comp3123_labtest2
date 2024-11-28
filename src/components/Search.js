import React, { useState } from 'react'
import '../cssFolder/Search.css'

export default function Search() {

    const [searchResults, setSearchResults] = useState('');

    const handleInput = (search) =>{
        setSearchResults(search.target.value);
    }

  return (
    
    <input
        className='search'
        type="text"
        placeholder="Search here"
        onChange={handleInput}
        value={searchResults} />    
        
  )

}