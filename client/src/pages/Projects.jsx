import React from 'react'
import ProjectItem from '../components/ProjectItem';
import goalTracker from '../assets/project-imgs/goal-tracker.png'
import projManagement from '../assets/project-imgs/project-management.png'
import potatoInventory from '../assets/project-imgs/potato-inventory.png'
import productsApp from '../assets/project-imgs/products-app.png'

export default function Projects() {

  const projects = [
    {
      id: 1,
      title: "Goal Tracker",
      description:
        "MERN stack application to help users keep track of their goals",
      link: "https://github.com/abundanceesim/goal-tracker",
      shortTitle: "goal-tracker",
      screenshot: goalTracker,
      technologies: [
        "react",
        "express",
        "node",
        "mongodb",
        "express",
        "redux toolkit",
        "javascript",
      ],
    },
    {
      id: 2,
      title: "Project Management App",
      description:
        "Project management app made with React, GraphQL and Apollo.",
      link: "https://github.com/abundanceesim/project-management-app",
      shortTitle: "project-management",
      screenshot: projManagement,
      technologies: [
        "react",
        "express",
        "node",
        "mongodb",
        "express",
        "graphql",
        "apollo",
        "javascript",
      ],
    },
    {
      id: 3,
      title: "Potato Inventory App",
      description:
        "Console-based inventory application for the manipulation of records from dataset about potatoes",
      link: "https://github.com/abundanceesim/potato-inventory-app",
      shortTitle: "potato-inventory",
      screenshot: potatoInventory,
      technologies: ["python", "pytest"],
    },
    {
      id: 4,
      title: "Products Web App",
      description:
        "Products web application where users can retrieve and modify product records of their choice from a MySQL database.",
      link: "https://github.com/abundanceesim/products-web-app",
      shortTitle: "products-app",
      screenshot: productsApp,
      technologies: ["mysql", "php", "css", "sql"],
    },
  ];

  const showTitle = (project)=> {
    console.log(`Project: ${project.title}`);
  }

  return (
    <>
      {projects.length > 0 ? (
        <div className='container projects'>
          <div className="row">
            {projects.map((project) => (
              <div className="col mb-5" onClick={(project) => showTitle(project)}>
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
