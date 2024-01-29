import { RouterProvider, Outlet } from 'react-router-dom'
import { ThemeProvider } from './store/contexts/Theme/ThemeContext.jsx'
import Navbar from './components/Navbar/Navbar.jsx'


function App() {

  return (
    <ThemeProvider>
      <Navbar />
      <Outlet />
    </ThemeProvider>
  )
}

export default App
