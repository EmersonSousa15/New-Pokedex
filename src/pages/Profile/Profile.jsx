import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Profile = () => {
    return (
        <main className="bg-gainsboro dark:bg-darkslategray m-auto text-center w-screen h-[calc(100vh-5rem)] dark:text-gainsboro text-darkslategray">
            <h1 className="dark:text-gainsboro text-darkslategray pt-4">Profile</h1>
            <div className="flex items-center justify-center gap-4 py-4">
                <a href="https://github.com/EmersonSousa15/New-Pokedex">
                    <FaGithub size={40} />
                </a>
                <a href="https://www.linkedin.com/in/emerson-sousa-62387623b/">
                    <FaLinkedin size={40} />
                </a>
            </div>
            <div>
                <p>&copy; Emerson Sousa</p>
            </div>
        </main>
    )
};

export default Profile;