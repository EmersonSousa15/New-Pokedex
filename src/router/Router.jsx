import React from "react";
import { createBrowserRouter } from "react-router-dom"

import Home from "../pages/Home";
import PokemonDetail from "../pages/PokemonDetail";
import Config from "../pages/Config";
import Profile from "../pages/Profile";
import App from "../App";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children:
            [
                {
                    path: "/",
                    element: <Home />,
                },
                {
                    path: "pokemon/:pokemonId",
                    element: <PokemonDetail />,
                },
                {
                    path: "/config",
                    element: <Config />,
                },
                {
                    path: "/profile",
                    element: <Profile />,
                },
            ]
    }

])