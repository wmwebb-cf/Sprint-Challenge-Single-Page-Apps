import React from "react";
import { Route } from 'react-router-dom';
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";
import CharacterCard from "./components/CharacterCard.js";
import WelcomePage from "./components/WelcomePage.js";
import SearchForm from "./components/SearchForm.js";


export default function App() {
  return (
    <main data-testid='app'>
      <SearchForm />
      <Header />
      <Route exact path='/' component={WelcomePage} />
      <Route path='/CharacterList' component={CharacterList} />
    </main>
  );
}
