import React from 'react'
import ReactDOM from 'react-dom/client'
import EcommerceStarterWebsite from './EcommerceStarterWebsite'
import './style.css'

ReactDOM.createRoot(document.querySelector<HTMLDivElement>('#app')!).render(
  <React.StrictMode>
    <EcommerceStarterWebsite />
  </React.StrictMode>
)
