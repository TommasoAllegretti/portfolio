import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from '../pages/Home'
import About from '../pages/About'
import Contacts from '../pages/Contacts'
import banana from '../assets/banana.png'

function App() {
  return (
    <Router>
      <div>
        <nav className="fixed top-0 w-full h-24 flex items-center justify-start flex-wrap bg-gradient-to-r from-green-700/75 to-green-500/75">
          <div className="flex w-12 h-12 mx-8 hover:rotate-12 transition-all duration-300">
            <img src={banana} className="w-12 h-12" alt="" />
          </div>
          <ul className="flex pr-12 pl-4">
            <li className="inline-block mr-10">
              <Link to="/" className="text-white hover:text-yellow-300">
                Home
              </Link>
            </li>
            <li className="inline-block mr-10">
              <Link to="/about" className="text-white hover:text-yellow-300">
                About
              </Link>
            </li>
            <li className="inline-block">
              <Link to="/contact" className="text-white hover:text-yellow-300">
                Contacts
              </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/user/:userId" element={<Home />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
