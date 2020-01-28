import React from 'react';
import useFetch from '../Hooks/useFetch';
import Counter from './Counter';

function Pokemon2(props) {
  const pokemon = useFetch(props.url);

  return (
    pokemon
    &&
    <div className='poke-card'>
      <div className='poke-header'>
        <h2>{pokemon.name}</h2>
        <img src={pokemon.sprites.front_default} alt='pokemon sprite' />
      </div>
      <Counter />
    </div>
  );
}

export default Pokemon2;