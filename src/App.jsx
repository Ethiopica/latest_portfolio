import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import LightRays from './components/LightRays'
import Home from './pages/Home'
import SupabaseTest from './components/SupabaseTest'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="app">
          <LightRays 
            count={8}
            color="rgba(59, 130, 246, 0.12)"
            blur={45}
            speed={16}
            length="80vh"
          />
          <Navigation />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/test-supabase" element={<SupabaseTest />} />
            </Routes>
          </main>
          <Footer />
          <BackToTop />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
