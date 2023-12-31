import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import About from './pages/About';
import Artworks from './pages/Artworks';
import Projects from './pages/Projects';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";

function App() {
  return (
    <>
      <BrowserRouter basename="/website-portfolio">
        <div id="page-container">
          <div id="content-wrap">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/artworks" element={<Artworks />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
    
}

export default App;
