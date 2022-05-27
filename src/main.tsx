import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { App } from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <header className="w-screen">
      <Navbar />
    </header>
    <div className="">
      <App />
    </div>
    <footer className="w-screen text-center">
      <Footer />
    </footer>
  </React.StrictMode>
)
