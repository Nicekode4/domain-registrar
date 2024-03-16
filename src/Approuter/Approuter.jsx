import React from 'react'
import Frontpage from '../Pages/Frontpage/Frontpage'
import { Route, Routes } from 'react-router-dom'

function Approuter() {
  return (
    <Routes>
        <Route index element={<Frontpage />}/>
    </Routes>
  )
}

export default Approuter