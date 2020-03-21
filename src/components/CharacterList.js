import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom';



const Wrapper = styled.div`
  width: 80%;
  padding: 20px;
  margin: 0 auto 20px;
  border-radius: 10px;
  border: solid 3px #A9D3E9;
`

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  
  const [data, setData] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    axios.get('https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/').then(res => {
      setData(res.data.results);
    })
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list">
      <h2>TODO: `array.map()` over your state here!</h2>
      {data.map( item => {
        
        return(
          <Wrapper key={item.id}>
            <div>
              <Link to={`/CharacterList/${item.id}`}><h4>Name: {item.name}</h4></Link>
              <p>Species: {item.species}</p>
              <p>Status: {item.status}</p>
              <p>Origin: {item.origin.name}</p>
            </div>
          </Wrapper>
        )
        
      })}
    </section>
  );
}
