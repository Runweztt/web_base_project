import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from "./Compontents/Pages/Home"
import Product from "./Compontents/Pages/Product"
import Rootlayout from "./Compontents/Layout/Rootlayout"
import About from './Compontents/Pages/About'
import Contact from './Compontents/Pages/Contact'
import Errorpage from './Compontents/Errorpage'



function App() {

   const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Rootlayout />} errorElement={<Errorpage />}>
      <Route index element={<Home />} />
      <Route path='Product' element={<Product />} />
      <Route path='Contact' element={<Contact />} />
      <Route path='About' element={<About />} />
    </Route>
  ),
  {
    basename: '/web_base_project' // 
  }
)

    
  
  return (

    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App