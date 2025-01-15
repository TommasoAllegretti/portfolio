import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from '../pages/Home'
import About from '../pages/About'
import Contacts from '../pages/Contacts'
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'

function App() {
  return (
    <Router>
      <NavigationMenu className="h-[7vh]">
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link className={navigationMenuTriggerStyle()} to="/">
              Home
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link className={navigationMenuTriggerStyle()} to="/about">
              About
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link className={navigationMenuTriggerStyle()} to="/open-source">
              Open Source
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link className={navigationMenuTriggerStyle()} to="/contacts">
              Contacts
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/open-source" element={<Contacts />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
