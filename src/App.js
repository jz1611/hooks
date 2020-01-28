import React from 'react';
import './App.css';

import Counter from './Components/Counter';
import Pokemon from './Components/Pokemon';
import Pokemon2 from './Components/Pokemon2';

const pokeURL = 'https://pokeapi.co/api/v2/pokemon/';

function App() {
  return (
    <div className="App">
      <Counter />
      <Pokemon />
      <Pokemon2 url={`${pokeURL}1`} />
      <Pokemon2 url={`${pokeURL}4`} />
      <Pokemon2 url={`${pokeURL}7`} />
    </div>
  );
}

export default App;
