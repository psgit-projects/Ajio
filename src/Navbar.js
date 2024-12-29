
import { NavLink,Route,Routes } from 'react-router-dom'

import { ReactComponent as Brand } from './logo.svg'
import './navbar.css'
import Home from './Home'
import Jwellery from './Jwellery'
import Electronics from './Electronics'
import MenCloths from './MenCloths'
import WomanCloths from './Womancloths'
import Footer from './Footer'


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Brand />
        </div>
        <div className="nav-elements">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/jwellery">Jwellery</NavLink>
            </li>
            <li>
              <NavLink to="/electronics">Electronics</NavLink>
            </li>
            <li>
              <NavLink to="/mcloths">MenCloths</NavLink>
            </li>
            <li>
              <NavLink to="/wcloths">WomanCloths</NavLink>
            </li>
          </ul>
        </div>
        <Routes>
    <Route path='/' element={<Home></Home>}></Route>
    <Route path='/jwellery' element={<Jwellery></Jwellery>}></Route>
    <Route path='/electronics' element={<Electronics></Electronics>}></Route>
    <Route path='/mcloths' element={<MenCloths></MenCloths>}></Route>
    <Route path='/wcloths' element={<WomanCloths></WomanCloths>}></Route>

       </Routes>
       <Footer></Footer>
      </div>
    </nav>
  )
}

export default Navbar