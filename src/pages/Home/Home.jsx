import { useState, useEffect, useRef } from "react";
import Card from "../../components/Card";
import useTheme from "../../hooks/useTheme";

const MY_URL = 'https://pokeapi.co/api/v2/pokemon?';

const Home = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [offset, setOffset] = useState(-1);

    const abortControllerRef = useRef(null);

    const [pokemons, setPokemons] = useState([]);
    const end = useRef();

    const { setTheme } = useTheme();

    useEffect(() => {

        const fetchPokemons = async () => {
            abortControllerRef.current?.abort();
            abortControllerRef.current = new AbortController();


            try {
                setIsLoading(true);

                const response = await fetch(`${MY_URL}/limit=100&offset=${offset * 5}`, {
                    signal: abortControllerRef.current?.signal,
                });
                const data = await response.json();

                setPokemons((prev) => [...prev, ...data.results]);

            } catch (e) {
                if (e.name == "AbortError") {
                    return;
                }

                setError(true);
            } finally {
                setIsLoading(false);
            }
        }

        fetchPokemons();


    }, [offset])


    useEffect(() => {
        const intersectionObserverEnd = new IntersectionObserver((entries) => {
            if (entries.some((entry) => entry.isIntersecting)) {
                setOffset((prev) => prev += 1);
            }
        });

        intersectionObserverEnd.observe(end.current);

        if(localStorage.getItem("theme")){
            setTheme(localStorage.getItem("theme"))
        }


        return () => {
            intersectionObserverEnd.disconnect();
        };

    }, [])

    return (
        <>
            <main className="w-full bg-gainsboro dark:bg-darkslategray w-min-screen flex justify-center items-center flex-col">
                <section className="flex gap-3 max-w-screen flex-wrap items-center justify-center py-10 overflow-hidden">
                    {isLoading && <p>carregando...</p>}
                    {error && <p>Erro ao carregar pokemons</p>}
                    {pokemons?.map((pokemon, index) => <Card key={index} pokemonId={index++} />)}
                </section>
                <div ref={end} className="w-full h-4 bottom-full mt-8"></div>
            </main>


        </>
    )
};

export default Home;