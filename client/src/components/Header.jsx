import { BrowserRouter as Router, Route, Routes, NavLink, Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar">
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
      </div>
    </nav>
  );
}