import React from 'react'

function ProjectItem({project}) {
  return (
    <>
      <div className="project-container">
        <div className="project-img">
          <img src={project.screenshot} alt={project.shortTitle + "-img"} />
        </div>
      </div>
      <div className="project-description">
        <h5>{project.title}</h5>
        {project.description}
      </div>
      <div className='github-btn'>
        <a className="btn btn-outline-primary github-source-btn" href={project.link}>
          GITHUB
        </a>
      </div>
    </>
  );
}

export default ProjectItem