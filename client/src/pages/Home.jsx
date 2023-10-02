import projects from "../components/allProjects";
import ProjectItem from "../components/ProjectItem";
import Artwork from "../components/Artwork";
import artworks from "../components/allArtworks";
import Projects from "./Projects";
import Artworks from "./Artworks";
// import me from '../assets/personal/abundance_transparent_bg.png'
import me from "../assets/personal/abundance-snow.png";
// import me from "../assets/personal/abundance-boba.png";
import {FaLinkedin, FaGithub} from 'react-icons/fa';


export default function Home() {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello, </span>
        <span className="introText">
          I'm <span className="introName">Abundance</span>. <br /> Software
          Developer
        </span>
        <p className="introPara">
          I am a skilled full-stack developer with experience creating visually
          appealing and user friendly web applications.
        </p>
        <div className="home-btns">
          <a
            className="mt-2 btn btn-outline-primary github-source-btn connect-btn"
            style={{ width: "fit-content" }}
            href="/contact"
          >
            SAY HI
          </a>
          <div className="d-flex gap-2 align-items-center">
            <a href="http://www.linkedin.com/in/abundance-esim">
              <FaLinkedin
                className="mt-3 home-icon"
                style={{ color: "white" }}
              />
            </a>
            <a href="https://github.com/abundanceesim">
              <FaGithub className="mt-3 home-icon" style={{ color: "white" }} />
            </a>
          </div>
        </div>

        <img className="bg" src={me} alt="abundance-esim" />
      </div>
      {/* <div className="container">
        <div className="intro">
          <div>Hi there, I'm Abundance</div>
          <div>Software developer by day, artist by night</div>
          <div className="github-btn">
            <a className="btn btn-outline-primary github-source-btn"
              href="/contact" >  CONNECT </a>
          </div>
        </div>
        <div className="recent-projects">
          Recent Projects
          <div className="row gap-4">
            {projects
              .filter((item, idx) => idx < 2)
              .map((project) => (
                <div className="col mb-4 project-card" style={{ maxWidth: "min-content" }}>
                  <ProjectItem project={project} key={project} />
                </div>
              ))}
          </div>
        </div>
        <div className="recent-artworks">
          <div className="row mt-4">
            {artworks
              .filter((item, idx) => idx < 3)
              .map((art) => (
                <div className="col mb-3">
                  <Artwork artwork={art} key={art.id} />
                </div>
              ))}
          </div>
        </div>
      </div> */}
    </section>
  );
}
