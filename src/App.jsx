import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../comp/NavBar'
import store from "../utils/store"
import { Provider } from 'react-redux'

function App() {
  return (
    <>
     <Provider  store={store}>
     <NavBar />
     <Outlet />
     </Provider>
    </>
  )
}

export default App
