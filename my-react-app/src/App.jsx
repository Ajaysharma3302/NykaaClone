import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from "./components/Signin"
import './App.css'
import Navbar from './components/ui/Navbar/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar />
    <Routes>
      <Route path="/signin" element={<Signin />}/>
    </Routes>
    </Router>
  ) 
}

export default App
