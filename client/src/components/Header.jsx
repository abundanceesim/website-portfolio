import { BrowserRouter as Router, Route, Routes, NavLink, Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <NavLink exact to="/"> AE </NavLink>
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <div className="nav-div-item">
              <NavLink exact to="/" activeClassName="active">
                Home
              </NavLink>
            </div>
          </li>
          <li className="nav-item">
            <NavLink to="/about" activeClassName="active">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/projects" activeClassName="active">
              Projects
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/artworks" activeClassName="active">
              Art
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" activeClassName="active">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}