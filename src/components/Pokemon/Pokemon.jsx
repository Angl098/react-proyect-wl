import React, { useEffect, useState } from 'react'

export const Pokemon = () => {

    const [pokemon, setPokemon] = useState();
    const [id, setId] = useState(1);

    const handleAnterior = () => {
        setId(id - 1);
    }
    const handleSiguiente = () => {
        setId(id + 1);
    }

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((resp) => resp.json())
            .then((data) => {
                setPokemon(data);
            })
    }, [id])




    return (
        
        <div>{pokemon && 
            <div>
                <h2>{pokemon.name}</h2>
                <h3>id:{pokemon.id} </h3>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                <br />
                <button onClick={handleAnterior}> Anterior</button>
                <button onClick={handleSiguiente}>Siguiente</button>
            </div>
            
        } 
        </div>

    )
}
