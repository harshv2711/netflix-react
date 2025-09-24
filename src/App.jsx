import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TVShowsPage from "./pages/TVShowsPage"
import MoviesPage from "./pages/MoviesPage"

function App() {
  return (
    <main className='main-content relative'>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/TV-Shows" element={<TVShowsPage/>}/>
        <Route path="/movies" element={<MoviesPage/>}/>
      </Routes> 
    </main>
  )
}
export default App
