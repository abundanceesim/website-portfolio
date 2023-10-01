import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, NavLink, Link } from "react-router-dom";
import menu from '../assets/misc/menu.png'

export default function Header() {

  const [showMenu, setShowMenu] = useState(false)

  return (
    <nav className="navbar" style={{overflow:'none !important'}}>
      <div className="nav-container">
        <div className="nav-logo">
          <NavLink exact to="/">
            {" "}
            AE.{" "}
          </NavLink>
        </div>
        
          <ul className="nav-menu">
            <NavLink exact to="/" activeClassName="active">
              <li className="nav-item">Home</li>
            </NavLink>
            <NavLink exact to="/about" activeClassName="active">
              <li className="nav-item">About</li>
            </NavLink>
            <NavLink exact to="/projects" activeClassName="active">
              <li className="nav-item">Projects</li>
            </NavLink>
            <NavLink exact to="/artworks" activeClassName="active">
              <li className="nav-item">Art</li>
            </NavLink>
            <NavLink exact to="/contact" activeClassName="active">
              <li className="nav-item">Contact</li>
            </NavLink>
          </ul>
          <div className="mobile-menu">
            <img src={menu} alt="" className='mobMenu' onClick={()=>setShowMenu(!showMenu)} style={{display: 'none'}}/>
            <ul className="nav-menu" style={{display:showMenu ? 'flex': 'none'}}>
              <NavLink exact to="/" activeClassName="active"  onClick={()=>setShowMenu(false)}>
                <li className="mob-nav-item">Home</li>
              </NavLink>
              <NavLink exact to="/about" activeClassName="active" onClick={()=>setShowMenu(false)}>
                <li className="mob-nav-item">About</li>
              </NavLink>
              <NavLink exact to="/projects" activeClassName="active" onClick={()=>setShowMenu(false)}>
                <li className="mob-nav-item">Projects</li>
              </NavLink>
              <NavLink exact to="/artworks" activeClassName="active" onClick={()=>setShowMenu(false)}>
                <li className="mob-nav-item">Art</li>
              </NavLink>
              <NavLink exact to="/contact" activeClassName="active" onClick={()=>setShowMenu(false)}>
                <li className="mob-nav-item">Contact</li>
              </NavLink>
            </ul>
          </div>
        
      </div>
    </nav>
  );
}