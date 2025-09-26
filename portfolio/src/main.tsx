import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import TagManager from 'react-gtm-module'

TagManager.initialize({ gtmId: import.meta.env.GOOGLE_TAG_MANAGER_ID })

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
