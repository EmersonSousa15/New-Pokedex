import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { usePokemons, usePokemonsDispatch } from "../../store/contexts/Pokemons/PokemonsContext";

const Home = () => {
    const contextPokemons = usePokemons();
    const dispatchPokemons = usePokemonsDispatch();


    return (
        <>
            <h1 className="text-3xl font-bold underline">Home</h1>
            <div style={{ height: '500px' }}>
                {
                    (contextPokemons?.requestInfo.isLoading ? (
                        <p>carregando...</p>
                    ) : contextPokemons?.requestInfo.error.status ? (
                        <p>Erro ao carregar pokemons: {contextPokemons?.requestInfo.error.message}</p>
                    ) : (
                        contextPokemons?.pokeApi.pokemons.map((pokemon, index) => (
                            <div key={index++}>
                                <Link to={`pokemon/${pokemon.name}`}>
                                    {pokemon.name}
                                </Link>
                            </div>
                        ))
                    ))
                }
            </div>

            <button type="button" onClick={() => dispatchPokemons({ type: 'INCREMENT', offset: pokemons.offset })}>Prox</button>
            <button type="button" onClick={() => dispatchPokemons({ type: 'DECREMENT', offset: pokemons.offset })}>Ante</button>

        </>
    )
};

export default Home;