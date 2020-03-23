import React from "react";
import { Route } from 'react-router-dom';
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";
import CharacterCard from "./components/CharacterCard.js";
import WelcomePage from "./components/WelcomePage.js";



export default function App() {
  return (
    <main data-testid='app'>
      <Header />
      <Route exact path='/' component={WelcomePage} />
      <Route path='/CharacterList' component={CharacterList} />
    </main>
  );
}
