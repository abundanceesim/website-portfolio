import React from 'react'
import projects from '../components/allProjects'
import ProjectItem from '../components/ProjectItem';

export default function Projects() {

  return (
    <>
      {/* <div className="wrapper"> */}
        {projects.length > 0 ? (
          <div className="container projects">
            <div className="row gap-4 project-row">
              {projects.map((project) => (
                <div
                  className="col mb-4 project-card"
                  style={{ maxWidth: "min-content" }}
                >
                  <ProjectItem project={project} key={project} />
                  {/* {console.log(project.title)} */}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <h3>No projects found.</h3>
        )}
      {/* </div> */}
    </>
  );
}
