import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {  RouterProvider } from 'react-router'
import Router from './Router/Router.jsx'
import ParticlesBackground from './Components/ParticlesBackground.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <ParticlesBackground>
 <RouterProvider router={Router}></RouterProvider>
     </ParticlesBackground>
     
      
  </StrictMode>,
)
