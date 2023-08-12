import projects from "../components/allProjects";
import ProjectItem from "../components/ProjectItem";
import Artwork from "../components/Artwork";
import artworks from "../components/allArtworks";
import Projects from "./Projects";
import Artworks from "./Artworks";

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="intro">
        <div>Hi there, I'm Abundance</div>
        <div>Software developer by day, artist by night</div>
        <div className="github-btn">
          <a className="btn btn-outline-primary github-source-btn"
            href="/contact" >CONNECT</a>
        </div>
      </div>
      <div className="recent-projects">
        {/* <div className="container projects"> */}
          <div className="row">
            {projects.filter((item, idx) => idx < 2).map((project) => (
              <div className="col mb-5" style={{ maxWidth: "min-content" }}>
                <ProjectItem project={project} key={project} />
              </div>
            ))}
          </div>
        {/* </div> */}
      </div>
      <div className="recent-artworks">
        {/* <div className="art-page"> */}
        <div className="row mt-4">
          {artworks.filter((item, idx) => idx < 3).map((art) => (
            <div className="col mb-3">
              <Artwork artwork={art} key={art.id} />
            </div>
          ))}
        </div>
      {/* </div> */}
      </div>
      </div>
      
    </>
  );
}
