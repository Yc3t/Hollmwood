import './App.css'
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom'
import Chat from './pages/Chat'

function App(){
  return (
    <Router>
      <nav className='flex justify-center space-x-4 mt-0 bg-slate-300'>
        <Link to="/" className='text-blue-500'>Home</Link>
        <Link to="/chat" className='text-blue-500'>chat</Link>
      </nav>
      <Routes>
        <Route path="/chat" element={<Chat/>} />
      </Routes>
    </Router>

      
  )
}

export default App
