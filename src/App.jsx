import './App.css'
import { Card } from './components/Card/Card'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { NavBar } from './components/NavBar/NavBar'
import { Pokemon } from './components/Pokemon/Pokemon'
import { PokemonList } from './components/Pokemon/PokemonList'
import { Home } from './views/Home'

import { BrowserRouter, Route, Router } from 'react-router-dom' 

function App() {

  return (
    <>
      <div>
      <NavBar />
      <PokemonList />
      {/* <Pokemon/> */}
      {/* <ItemListContainer/> */}
      {/* <Home  */}  
      {/* <Card /> */}
      </div>
    </>
  )
}

export default App
