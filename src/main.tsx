import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Squares from './components/reactBits/Squares.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Squares speed={0.3} direction='diagonal'/>
    <App />
  </StrictMode>,
)
