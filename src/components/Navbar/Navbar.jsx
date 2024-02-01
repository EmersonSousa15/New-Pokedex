import { IoSettingsOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import logoPokemon from "../../assets/images/logoPokemon.png"
import { Link } from "react-router-dom";

const Navbar = ({ currentPage }) => {

    return (
        <header className="w-screen bg-gainsboro py-2 dark:bg-darkslategray">
            <nav className="w-full flex items-center justify-center text-center m-auto">
                <div className="w-1/3 flex justify-center">
                    <Link to="/config">
                        <i>
                            <IoSettingsOutline size={30} color="lightseagreen" />
                        </i>
                    </Link>
                </div>
                {currentPage == 'pokemonDetail' ? ' ' :
                    <div className="w-2/3 flex justify-center">
                        <Link to="/">
                            <img src={logoPokemon} alt="Pokemon" className="w-44" />
                        </Link>
                    </div>
                }
                <div className="w-1/3 flex justify-center">
                    <Link to="/user">
                        <i>
                            <FaRegUserCircle size={30} color="lightseagreen" />
                        </i>
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default Navbar