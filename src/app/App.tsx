import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from '../pages/Home'
import About from '../pages/About'
import Contacts from '../pages/Contacts'
import banana from '../assets/banana.png'

function App() {
  return (
    <Router>
      <div className="w-full h-full overflow-hidden">
        <nav className="fixed top-0 w-full h-24 items-center justify-start flex-wrap bg-gradient-to-r from-green-700 to-green-500 z-50 flex">
          <div className="flex w-12 h-12 mx-8 hover:rotate-12 transition-all duration-300">
            <img src={banana} className="w-12 h-12" alt="" />
          </div>
          <ul className="pr-12 pl-4 hidden md:flex">
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
          <div className="w-12 h-12 mx-8 hover:rotate-12 transition-all duration-300 flex md:hidden">
            <img src={banana} className="w-12 h-12" alt="" />
          </div>
        </nav>

        <div className="mt-24 w-full h-full overflow-hidden">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contacts />} />
            <Route path="/user/:userId" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
