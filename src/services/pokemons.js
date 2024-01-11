import { useState, useEffect } from 'react';

const MY_URL = 'https://pokeapi.co/api/v2/pokemon?';

export const FetchPokemons = (limit, offset) => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        const getPokemons = async () => {
            const response = await fetch(`${MY_URL}`);
            const data = await response.json();

            setPokemons(data);
        }

        getPokemons();
    }, [])

    return data;
}