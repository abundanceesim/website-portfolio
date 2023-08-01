import React from 'react'

function ProjectItem({project}) {
  return (
    <>
      <div className="project-container">
        <div className="project-img" >
          <img src={project.screenshot} alt="" style={{borderRadius: "10px"}} />
        </div>
      </div>
      <div>
        <h5>{project.title}</h5>
        {project.description}
      </div>
      <div></div>
    </>
  );
}

export default ProjectItem