import './App.css'
import { Card } from './components/Card/Card'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { NavBar } from './components/NavBar/NavBar'
import { Pokemon } from './components/Pokemon/Pokemon'
import { Home } from './views/Home'

import { BrowserRouter, Route, Router } from 'react-router-dom' 

function App() {

  return (
    <>
      <div>
      <NavBar />
      <Pokemon/>
      {/* <ItemListContainer/> */}
      {/* <Home  */}  
      {/* <Card /> */}
      </div>
    </>
  )
}

export default App
