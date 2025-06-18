import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from "./Compontents/Pages/Home"
import Product from "./Compontents/Pages/Product"
import Rootlayout from "./Compontents/Layout/Rootlayout"


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Rootlayout/>}>
        <Route index element={<Home/>} />
        <Route  path='Product' element={<Product/>}/>
      </Route>

    )
    
  )
  return (

    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App