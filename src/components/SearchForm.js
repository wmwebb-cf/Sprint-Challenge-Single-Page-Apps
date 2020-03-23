import React, { useState, useEffect } from "react";
import axios from "axios";


export default function SearchForm(props) {

  const [searchText, setSearchText] = useState('this is the search text');

  const [name, setName] = useState([]); 

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    axios.get('https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/').then(res => {
      setName(res.data.results);
    })
  }, []);

  

  const searchSubmit = evt => {
    evt.preventDefault();
    // console.log(searchText);
    name.map( item => {
      if(item.name.includes(searchText)) {
        console.log(item);
      }
    })
    
  };

  const searchName = evt => {
    setSearchText(evt.target.value)
  };

  return (
    <section className="search-form">
      <form onSubmit={searchSubmit}>
        <input name='searchBox' type='text' placeholder='Search by name' onChange={searchName} />
        <input type='submit' />
      </form>
    </section>
    
  );
}
