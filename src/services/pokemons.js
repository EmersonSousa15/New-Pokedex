import { useState, useEffect } from 'react';

const MY_URL = 'https://pokeapi.co/api/v2/pokemon?';

export const fetchPokemons = async (limit, offset) => {
    const [pokemons, setPokemons] = useState([]);


    useEffect(() => {

    }, [])


    return pokemons;
}