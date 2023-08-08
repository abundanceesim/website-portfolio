import React from 'react'
import projects from '../components/allProjects'
import ProjectItem from '../components/ProjectItem';

export default function Projects() {

  return (
    <>
      {projects.length > 0 ? (
        <div className='container projects'>
          <div className="row">
            {projects.map((project) => (
              <div className="col mb-5" style={{maxWidth:"min-content"}}>
                <ProjectItem project={project} key={project}/>
              </div>
            ))}
          </div>
        </div>
      ): (
        <h3>No projects found.</h3>
      )}
    </>
    
  )
}
