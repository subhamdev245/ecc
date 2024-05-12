import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../comp/NavBar'


function App() {
  return (
    <>
     <NavBar />
     <Outlet />
    </>
  )
}

export default App
