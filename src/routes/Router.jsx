import { createBrowserRouter, Outlet, createRoutesFromElements, Route } from "react-router-dom"

import Home from "../pages/Home";
import PokemonDetail from "../pages/PokemonDetail";
import Config from "../pages/Config";
import Profile from "../pages/Profile";

export const router = createBrowserRouter([
    { 
        path: "/",
        element: <Home />,
    },
    {
        path: "pokemon/:id",
        element: <PokemonDetail />,
    },
    {
        path: "config",
        element: <Config />,
    }, 
    {
        path: "profile",
        element: <Profile />,
    },

])