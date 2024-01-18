import { useState, useEffect, useRef } from "react";
import { usePokemons, usePokemonsDispatch } from "../../store/contexts/Pokemons/PokemonsContext";
import Navbar from "../../components/Navbar";
import Card from "../../components/Card";

const Home = () => {
    const contextPokemons = usePokemons();
    const dispatchPokemons = usePokemonsDispatch();
    const [pokemons, setPokemons] = useState([]);

    const end = useRef();
    const initialRender = useRef(false);

    useEffect(() => {
        if (contextPokemons && dispatchPokemons) {

            const intersectionObserverEnd = new IntersectionObserver((entries) => {
                if (entries.some((entry) => entry.isIntersecting && !contextPokemons?.requestInfo.isLoading && initialRender.current)) {
                    console.log('end');
                    dispatchPokemons({ type: 'INCREMENT' })
                    setPokemons((prev) => [...prev, ...contextPokemons?.pokeApi.pokemons]);
                }
            });

            intersectionObserverEnd.observe(end.current);

            initialRender.current = true;

            return () => intersectionObserverEnd.disconnect();
        }
    }, [contextPokemons, dispatchPokemons])


    return (
        <>
            <Navbar />
            <main className="w-full flex justify-center items-center flex-col">
                <section className="flex gap-3 max-w-screen-md flex-wrap items-center justify-center py-10">
                    {

                        pokemons?.map((pokemon, index) => (
                            <Card key={index} pokemonUrl={pokemon?.url} />
                        ))

                    }
                    {
                        (contextPokemons?.requestInfo.isLoading ? (
                            <p>carregando...</p>
                        ) : contextPokemons?.requestInfo.error.status ? (
                            <p>Erro ao carregar pokemons: {contextPokemons?.requestInfo.error.message}</p>
                        ) : (
                            contextPokemons?.pokeApi.pokemons.map((pokemon, index) => (
                                <Card key={index} pokemonUrl={pokemon?.url} />
                            ))
                        ))
                    }
                </section>
                <div ref={end} className="w-full h-4 bottom-full mt-8"></div>
            </main>


        </>
    )
};

export default Home;