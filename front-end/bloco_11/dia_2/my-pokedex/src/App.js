import React from 'react'
import './App.css';
import pokemons from './data'
import Pokedex from './component/pokedex'

class App extends React.Component {
  render() {
  return (
    <div>
    < Pokedex pokemons={ pokemons } />
    </div>
  );
  }
}

export default App;