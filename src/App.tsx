import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Chat from './pages/Chat'
import Navbar from './components/Navbar'
import { ThemeProvider } from '@/components/theme-provider'

function App(){
  return (
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">

    <Router>
      <Navbar/>
      <Routes>
        <Route path="/chat" element={<Chat/>} />
      </Routes>
    </Router>
    </ThemeProvider>

      
  )
}

export default App
