import React from 'react'
import {Routes, BrowserRouter, Route} from 'react-router-dom'
import Pokemon from '../api-pokemon/Pokemon'
import PokenDetails from '../pages/PokenDetails'
export const RotaApiPoke = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Pokemon/>}/>
            <Route exact path='/:id' element={<PokenDetails/>} />
        </Routes>
        </BrowserRouter>
    </div>
  )
}
