import { useState, useEffect } from 'react'

const MY_URL = 'https://pokeapi.co/api/v2/pokemon';

export const usePokemon = (pokemonId = null) => {
    const [currentPokemon, setCurrentPokemon] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {

        const fetchPokemonData = async () => {

            try {
                setIsLoading(true);

                const response = await fetch(`${MY_URL}/${pokemonId}`);
                const pokemonJson = await response.json();

                setCurrentPokemon(pokemonJson);

            } catch (e) {
                setError({
                    status: true,
                    message: e.message
                })
            } finally {
                setIsLoading(false);
            }

        }

        if (pokemonId) {
            fetchPokemonData();
        }

    }, [])

    return { currentPokemon, isLoading, error }
}