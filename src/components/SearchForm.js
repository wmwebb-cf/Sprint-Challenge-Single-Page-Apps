import React, { useState, useEffect } from "react";
import axios from "axios";



export default function SearchForm() {

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [data, setData] = useState([]);
  const handleChange = event => {
      setSearchTerm(event.target.value);
  };
  useEffect(() => {
    axios.get('https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/').then(res => {
      setData(res.data.results);
    })

    const results = data.filter(item =>
      console.log(item)
      // item.includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);
 
  return (
    <section className="search-form">
      <input type='text' placeholder='Search' value={searchTerm} onChange={handleChange} />
    </section>
  );
}
