import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import useTheme from "../../hooks/useTheme";

const Config = () => {
    const { theme, setTheme } = useTheme();

    const handleTheme = () => {
        if (theme === "light") {
            setTheme("dark");
            localStorage.theme = "dark";
        } else {
            setTheme("light");
            localStorage.theme = "light";
        }
    }

    return (
        <main className="bg-gainsboro dark:bg-darkslategray m-auto text-center w-screen h-screen">
            <section className="w-full py-10 flex flex-col justify-center items-center">
                <div className="flex w-2/3 justify-between p-3 rounded-md border-4 border-solid  items-center">
                    <h2 className="text-darkslategray dark:text-gainsboro">Dark Mode</h2>
                    <div className="flex items-center">
                        <input type="checkbox" id="toggle" className="hidden" onChange={() => handleTheme()} />
                        <label htmlFor="toggle" className="flex items-center cursor-pointer">
                            <div className="w-16 h-8 bg-gray-400 flex items-center rounded-full px-1">
                                <div id="toggle-circle" className="w-7 h-7 bg-white flex items-center justify-center rounded-full shadow-md transform duration-100 dark:translate-x-full translate-x-0">
                                    {
                                        theme === "dark" ? <MdDarkMode size={30} /> : <CiLight size={30} />
                                    }
                                </div>
                            </div>
                        </label>
                    </div>
                </div>
            </section>
        </main >
    )
};

export default Config;