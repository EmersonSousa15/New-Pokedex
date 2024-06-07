import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/uiComponents/Loading";
import ErrorUI from "../../components/uiComponents/ErrorUI";
import { usePokemon } from "../../hooks/usePokemon";

const PokemonDetail = () => {
    const { pokemonId } = useParams();
    const { currentPokemon, isLoading, error } = usePokemon(pokemonId);

    return (
        <main className="py-20 bg-gainsboro dark:bg-darkslategray">
            <section className="flex items-center flex-col">
                {isLoading && <Loading />}
                {error && <ErrorUI />}
                {currentPokemon &&
                    <>
                        <section className="w-full h-1/2 flex items-center flex-col">
                            <div className="w-72 bg-orangeRed rounded-2xl">
                                <div className="flex justify-center">
                                    <img className="w-52 h-44 -mt-20" src={currentPokemon?.sprites.front_default} alt="Pokemon-image" />
                                </div>
                                <div className="flex w-full justify-between items-center py-3 px-4 rounded-2xl">
                                    <span className="text-lightseagreen text-sm/[1px] pr-3">#{currentPokemon?.id}</span>
                                    <p className="text-gainsboro text-sm/[1px] capitalize">{currentPokemon?.name}</p>
                                </div>
                            </div>
                            <div className="w-72 py-3">
                                <div className="flex items-center justify-center gap-4 w-full">
                                    {currentPokemon?.types.map((type, i) => <p key={i} className="ml-5px text-sm/[1px] border-solid border-2 bg-transparent border-darkslategray text-darkslategray dark:border-mediumaquamarine dark:text-mediumaquamarine p-2 rounded-full w-32 capitalize text-center">{type.type.name}</p>)}
                                </div>
                            </div>
                        </section>
                        <footer className="flex w-screen h-1/2 absolute top-1/2 justify-center bg-darkslategray dark:bg-mediumaquamarine bg-cover rounded-t-2xl">
                            <div className=" flex justify-between w-72 py-8">
                                <div className="text-center">
                                    <p className="text-white dark:text-darkslategray">{currentPokemon?.height} m</p>
                                    <p className="text-lightseagreen dark:text-darkslategray">Altura</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-white dark:text-darkslategray">{currentPokemon?.weight} Kg.</p>
                                    <p className="text-lightseagreen dark:text-darkslategray">Peso</p>
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