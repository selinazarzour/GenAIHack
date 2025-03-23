import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

// Removed the check for the publishable key

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <App />    
  </StrictMode>,
)
