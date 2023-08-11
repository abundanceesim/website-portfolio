import projects from "../components/allProjects";
import ProjectItem from "../components/ProjectItem";
import Artwork from "../components/Artwork";
import artworks from "../components/allArtworks";
import Projects from "./Projects";
import Artworks from "./Artworks";

export default function Home() {
  return (
    <>
      <div className="intro">
        <div>Hi there, I'm Abundance</div>
        <div>Software developer by day, artist by night</div>
        <div className="github-btn">
          <a
            className="btn btn-outline-primary github-source-btn"
            href="/contact"
          >
            SAY HI
          </a>
        </div>
      </div>
      <div className="recent-projects">
        <Projects />
      </div>
      <div className="recent-artworks">
        <Artworks/>
      </div>
    </>
  );
}
