import React from 'react';

function Pokecard(props) {
    let imgURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`;

    return (
        <div className='Pokecard'>
            <h3 className='Pokecard-name'>{props.name}</h3>
            <img className='Pokecard-image' src={imgURL} />
            <h4 className='Pokecard-type'>{props.type}</h4>
            <h4 className='Pokecard-base_experience'>{props.base_experience}</h4>
        </div>
    );
}

export default Pokecard;