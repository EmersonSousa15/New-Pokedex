import { useNavigate } from "react-router-dom"
import LoadingSpinner from "../uiComponents/Loading";
import ErrorUI from "../uiComponents/ErrorUI";
import { usePokemon } from "../../hooks/usePokemon";


const Card = ({ pokemonId }) => {
    const navigate = useNavigate();

    const handleClick = (pokemonId) => {
        navigate(`/pokemon/${pokemonId}`);
    }

    const { currentPokemon, isLoading, error } = usePokemon(pokemonId);

    return (
        <>
            {isLoading && <LoadingSpinner />}
            {error && <ErrorUI />}
            {currentPokemon &&
                <div className="bg-orangeRed text-center bg-bgCard w-64 h-28 m-5 my-6 rounded-2xl p-4 cursor-pointer" onClick={() => handleClick(currentPokemon?.id)} >
                    <div className="flex justify-center">
                        <img className="w-44 h-36 -mt-20" src={currentPokemon?.sprites.front_default} alt="Pokemon-image" />
                    </div>
                    <div className="flex w-full justify-between items-center py-3 px-4 bg-slate-950 rounded-2xl text-white">
                        <span className="text-lightseagreen text-sm/[1px] pr-3">#{currentPokemon?.id}</span>
                        <p className="text-sm/[1px] capitalize">{currentPokemon?.name}</p>
                    </div>
                </div>
            }
        </>
    )
}

export default Card