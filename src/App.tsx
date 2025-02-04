import Home from './pages/home'
import About from './pages/about'
import HowItWorks from './pages/how-it-works'
import Convert from './pages/convert'

import { BrowserRouter, Route, Routes } from 'react-router'
import './styles/global.scss'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/convert" element={<Convert />} />
      </Routes>
    </BrowserRouter>
  )
}