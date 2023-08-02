import React from 'react'
import ProjectItem from '../components/ProjectItem';
import goalTracker from '../assets/project-imgs/goal-tracker.png'
import projManagement from '../assets/project-imgs/project-management.png'

export default function Projects() {

  const projects = [
    {
      id: 1,
      title: "Goal Tracker",
      description: "MERN stack application to keep track of goals",
      link: "https://github.com/abundanceesim/goal-tracker",
      screenshot: goalTracker,
      technologies: [],
    },
    {
      id: 2,
      title: "Project Management App",
      description: "Project management app made with React, GraphQL and Apollo.",
      link: "https://github.com/abundanceesim/project-management-app",
      screenshot: projManagement,
      technologies: [],
    },
    {
      id: 3,
      title: "Potato Inventory App",
      description: "",
      link: "https://github.com/abundanceesim/potato-inventory-app",
      screenshot: "",
      technologies: [],
    },
    {
      id: 4,
      title: "Products Web App",
      description: "",
      link: "https://github.com/abundanceesim/products-web-app",
      screenshot: "",
      technologies: [],
    },
  ];

  return (
    <>
      {projects.length > 0 ? (
        <div className='container projects'>
          <div className="row">
            {projects.map((project) => (
              <div className="col-6 mb-4">
                <ProjectItem project={project}/>
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
