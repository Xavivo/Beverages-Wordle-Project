import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Classic from './classic.jsx'
import Description from './description.jsx' 
import CocktelMode from './cocktelMode.jsx'
import Siluette from './siluette.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/classic" element={<Classic />} />
        <Route path="/description" element={<Description />} />
        <Route path="/cocktail" element={<CocktelMode />} />
        <Route path="/siluette" element={<Siluette />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
