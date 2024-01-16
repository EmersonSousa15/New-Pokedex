import { IoSettingsOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import logoPokemon from "../../assets/images/logoPokemon.png"
import { Link } from "react-router-dom";
import { useTheme } from "../../store/contexts/Theme/ThemeContext";

const Navbar = () => {
    const { theme } = useTheme();

    return (
        <header className="w-screen border-b-4 py-2">
            <nav className="w-full flex items-center justify-center text-center m-auto">
                <div className="w-1/3 flex justify-center">
                    <Link to="/config">
                        <i>
                            <IoSettingsOutline size={30} color={`${theme.colorIcons}`} />
                        </i>
                    </Link>
                </div>
                <div className="w-2/3 flex justify-center">
                    <img src={logoPokemon} alt="Pokemon" className="w-44" />
                </div>
                <div className="w-1/3 flex justify-center">
                    <Link to="/user">
                        <i>
                            <FaRegUserCircle size={30} color={`${theme.colorIcons}`} />
                        </i>
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default Navbar