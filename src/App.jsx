import { RouterProvider, Outlet } from 'react-router-dom'
import { PokemonsProvider } from './store/contexts/Pokemons/PokemonsContext.jsx'


function App() {

  return (
    <PokemonsProvider>
      <Outlet />
    </PokemonsProvider>
  )
}

export default App
