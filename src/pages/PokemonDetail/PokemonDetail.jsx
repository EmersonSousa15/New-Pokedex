import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import ErrorUI from "../../components/ErrorUI";

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

                const response = await fetch(`${MY_URL}/${pokemonId}/`);
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
        <main className="py-20">
            <section className="flex items-center flex-col">
                {isLoading && <Loading />}
                {error && <ErrorUI />}
                {currentPokemon &&
                    <>
                        <section className="w-full h-1/2 flex items-center flex-col">
                            <div className="w-72 bg-bgCard rounded-2xl">
                                <div className="flex justify-center">
                                    <img className="w-52 h-44 -mt-20" src={currentPokemon?.sprites.front_default} alt="Pokemon-image" />
                                </div>
                                <div className="flex w-full justify-between items-center py-3 px-4 rounded-2xl text-white">
                                    <span className="text-colorId text-sm/[1px] pr-3">#{currentPokemon?.id}</span>
                                    <p className="text-sm/[1px] capitalize">{currentPokemon?.name}</p>
                                </div>
                            </div>
                            <div className="w-72 py-3">
                                <div className="flex items-center justify-center gap-4 w-full">
                                    {currentPokemon?.types.map((type) => <p className="ml-5px text-sm/[1px] border-solid border-2 border-black p-2 rounded-full w-32 capitalize text-center">{type.type.name}</p>)}
                                </div>
                            </div>
                        </section>
                        <footer className="flex w-screen h-1/2 absolute top-1/2 justify-center bg-black bg-cover rounded-t-2xl">
                            <div className=" flex justify-between w-72 py-8">
                                <div className="text-center">
                                    <p className="text-white">{currentPokemon?.height} m</p>
                                    <p className="text-colorId">Altura</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-white">{currentPokemon?.weight} Kg.</p>
                                    <p className="text-colorId">Peso</p>
                                </div>
                            </div>
                        </footer>
                    </>
                }
            </section>
        </main>
    )
};

export default PokemonDetail;