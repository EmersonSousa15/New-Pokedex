import { createBrowserRouter } from "react-router-dom"

const router = createBrowserRouter([
    { 
        path: "/", 
        component: <Home />,
        loader: {},
        children: [
            {
                path: "pokemon/:id",
                component: <PokemonDetail />,
                loader: {}
            },
            {
                path: "/config",
                component: <Config />
            },
            {
                path: "profile",
                component: <Profile />
            }
        ]
    }
])

export default router;