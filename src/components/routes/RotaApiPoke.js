import React from 'react'
import {Routes, BrowserRouter, Route} from 'react-router-dom'
import Pokemon from '../api-pokemon/Pokemon'
import PokenDetails from '../pages/PokenDetails'
import Header from '../header/Header'
export const RotaApiPoke = () => {
  return (
    <div>
        <BrowserRouter>
        <Header />
        <Routes>
            <Route exact path='/' element={<Pokemon/>}/>
            <Route exact path='/:id' element={<PokenDetails/>} />
        </Routes>
        </BrowserRouter>
    </div>
  )
}
