import { useNavigate } from "react-router-dom"
import { useTheme } from "../../store/contexts/Theme/ThemeContext";
import { useState, useEffect } from "react";
import LoadingSpinner from "../Loading";
import ErrorUI from "../ErrorUI";


const Card = ({ pokemonUrl }) => {
    const navigate = useNavigate();
    const { theme } = useTheme();
    const [currentPokemon, setCurrentPokemon] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleClick = (pokemonId) => {
        navigate(`/pokemon/${pokemonId}`);
    }

    useEffect(() => {

        const fetchPokemonData = async () => {

            try {
                setIsLoading(true);

                const response = await fetch(`${pokemonUrl}`);
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
        <div onClick={() => handleClick(currentPokemon?.id)} className={` text-center bg-bgCard w-66 h-28 m-5 my-6 rounded-2xl p-4`}>
            {isLoading && <LoadingSpinner />}
            {error && <ErrorUI />}
            {currentPokemon &&
                <>
                    <div className="flex justify-center">
                        <img className="w-44 h-36 -mt-20" src={currentPokemon?.sprites.front_default} alt="Pokemon-image" />
                    </div>
                    <div className="flex w-full justify-between items-center py-3 px-4 bg-slate-950 rounded-2xl text-white">
                        <span className="text-colorId text-sm/[1px] pr-3">#{currentPokemon?.id}</span>
                        <p className="text-sm/[1px] capitalize">{currentPokemon?.name}</p>
                    </div>
                </>
            }
        </div>
    )
}

export default Card