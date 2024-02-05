import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppRouter } from '@/pages/Router'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
)
