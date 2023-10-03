import me from "../assets/personal/abundance-snow.png";
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
    </section>
  );
}
