import './App.css'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { NavBar } from './components/NavBar/NavBar'
import { Home } from './views/Home'

import { BrowserRouter, Route, Router } from 'react-router-dom' 

function App() {

  return (
    <>
      <div>
      <NavBar />
      <ItemListContainer/>
      <Home />
      </div>
    </>
  )
}

export default App
