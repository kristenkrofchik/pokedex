import React from 'react';

function Pokecard(props) {
    let imgURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`

    return (
        <div className='Pokecard'>
            <h3>{props.name}</h3>
            <img src={imgURL} />
            <h4>{props.type}</h4>
            <h4>{props.exp}</h4>
        </div>
    )
}

export default Pokecard;