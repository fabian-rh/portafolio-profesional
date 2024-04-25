import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicio from './components/Inicio'
import Habilidades from './components/Habilidades'
import Contacto from './components/Contacto'
import AcercaDe from './components/AcercaDe'
import NavBar from './components/NavBar'
import './App.scss'

const App = () => {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Inicio />}></Route>
        {/* <Route path='/habilidades' element={<Habilidades />}></Route> */}
        <Route path='/contacto' element={<Contacto />}></Route>
        <Route path='/acercade' element={<AcercaDe />}></Route>
      </Routes>
    </>
  )
}

export default App
