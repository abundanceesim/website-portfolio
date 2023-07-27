import { BrowserRouter as Router, Route, Routes, NavLink,Link1 } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Artworks from "../pages/Artworks";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";


// export default function Header() {
//   return (
//     <>
//       <Router>
//         <div>
//           <Routes>
//             <Route path="/" element={<Home />}>home</Route>
//             <Route path="/projects" element={<Projects />}>projects</Route>
//             <Route path="/artworks" element={<Artworks />}>artworks</Route>
//             <Route path="/about" element={<About />}>about</Route>
//             <Route path="/contact" element={<Contact />}>contact</Route>
//             <Route path="*" element={<NotFound />} />
//           </Routes>
//         </div>
//       </Router>
//     </>
//   );
// }

export default function Header() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">Logo</div>
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
              Artworks
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