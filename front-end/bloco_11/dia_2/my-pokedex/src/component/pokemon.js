import React from 'react'
import '../pokemon.css'

class Pokemon extends React.Component {
  render() {
    const { pokemon: {name,type, averageWeight: {value,measurementUnit }, image } } = this.props;

   return (
    <div className='pokemonDiv' >
      <h3> { name } </h3>
      <p> { type } </p>
      <p> { value } { measurementUnit } </p>
      <img className='pokemonImage' src={image} alt={name} />
    </div>

   )
  }
}

export default Pokemon
