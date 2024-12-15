import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import Navbar from './components/ui/Navbar/Navbar.jsx'
import {Provider} from "@/components/ui/provider"
import Footer from './components/Footer/Footer.jsx'
import ProductCard from './components/ProductsCard.jsx'
import { Slider } from '@chakra-ui/react'
import Sliders from './components/Slider.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Provider>
    <Navbar />
    
    <ProductCard />
    <Sliders/>
    <Footer />
  </Provider>
  </BrowserRouter>,
)
