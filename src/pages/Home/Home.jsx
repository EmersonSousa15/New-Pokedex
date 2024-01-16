import { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom'
import { usePokemons, usePokemonsDispatch } from "../../store/contexts/Pokemons/PokemonsContext";
import Navbar from "../../components/Navbar";
import Card from "../../components/Card";

const Home = () => {
    const contextPokemons = usePokemons();
    const dispatchPokemons = usePokemonsDispatch();

    const start = useRef();
    const end = useRef();

    return (
        <>
            <Navbar />
            <main className="w-full flex justify-center items-center flex-col">

                <div ref={end} className="w-full h-4  bg-red-500"></div>
                <section className="flex gap-3 max-w-screen-md flex-wrap items-center justify-center py-10">
                    {
                        (contextPokemons?.requestInfo.isLoading ? (
                            <p>carregando...</p>
                        ) : contextPokemons?.requestInfo.error.status ? (
                            <p>Erro ao carregar pokemons: {contextPokemons?.requestInfo.error.message}</p>
                        ) : (
                            contextPokemons?.pokeApi.pokemons.map((pokemon, index) => (
                                < Card key={index} pokemonUrl={pokemon.url} />
                            ))
                        ))
                    }
                </section>
                <div ref={end} className="w-full h-4 bg-red-500"></div>


                {//<button type="button" onClick={() => dispatchPokemons({ type: 'INCREMENT', offset: pokemons.offset })}>Prox</button>
                    //<button type="button" onClick={() => dispatchPokemons({ type: 'DECREMENT', offset: pokemons.offset })}>Ante</button>
                }
            </main>


        </>
    )
};

export default Home;