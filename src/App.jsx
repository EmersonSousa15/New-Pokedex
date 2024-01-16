import { RouterProvider, Outlet } from 'react-router-dom'
import { PokemonsProvider } from './store/contexts/Pokemons/PokemonsContext.jsx'
import { ThemeProvider } from './store/contexts/Theme/ThemeContext.jsx'


function App() {

  return (
    <PokemonsProvider>
      <ThemeProvider>
        <Outlet />
      </ThemeProvider>
    </PokemonsProvider>
  )
}

export default App
