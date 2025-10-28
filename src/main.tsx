import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { ScoreProvider } from './pages/Quiz/ScoreContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ScoreProvider>
        <App/>
      </ScoreProvider>
    </BrowserRouter>
  </StrictMode>,
)
