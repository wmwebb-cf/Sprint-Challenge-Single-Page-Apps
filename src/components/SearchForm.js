import React, { useState } from "react";



export default function SearchForm() {

  const [searchTerm, setSearchTerm] = useState('');
    const handleChange = event => {
      setSearchTerm(event.target.value);
  };
 
  return (
    <section className="search-form">
      <input type='text' placeholder='Search' value={searchTerm} onChange={handleChange} />
    </section>
  );
}
