import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MY_URL = 'https://pokeapi.co/api/v2/pokemon';

const PokemonDetail = () => {
    const { pokemonId } = useParams();
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

        fetchPokemonData();
    }, [])

    return (
        <>
            <h1>PokemonDetail</h1>
            <p>
                {
                    isLoading ?
                        ('carregando...')
                        : error?.status ?
                            (`[ERRO] ${error.message}`)
                            :
                            (currentPokemon?.forms[0].name)
                }
            </p>
        </>
    )
};

export default PokemonDetail;