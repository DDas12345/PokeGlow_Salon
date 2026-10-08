import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import HomePage from './pages/HomePage'
import BookingPage from './pages/BookingPage'
import AILabPage from './pages/AILabPage'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/ai-lab" element={<AILabPage />} />
        <Route path="*" element={<Link to="/">Return home</Link>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
