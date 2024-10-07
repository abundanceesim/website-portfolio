import goalTracker from "../assets/project-imgs/goal-tracker.png";
import projManagement from "../assets/project-imgs/project-management.png";
import potatoInventory from "../assets/project-imgs/potato-inventory.png";
import productsApp from "../assets/project-imgs/products-app.png";
import todoApp from "../assets/project-imgs/todo-app.png";
import acmeRestApi from "../assets/project-imgs/rest-acmecollege.png";

const projects = [
  {
    id: 1,
    title: "Manage.it",
    description: "Project management app made with React, GraphQL and Apollo.",
    link: "https://github.com/abundanceesim/project-management-app",
    shortTitle: "project-management",
    screenshot: projManagement,
    demo: "",
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
    id: 2,
    title: "ACME College REST API",
    description:
      "Java-based REST API to simulate the backend of a college system. Built with J2EE, Hibernate, MySQL and JUnit.",
    link: "https://github.com/abundanceesim/acmecollege-rest-api",
    shortTitle: "acme-rest-api",
    screenshot: acmeRestApi,
    demo: "",
    technologies: ["java", "junit", "hibernate", "mysql", "postman"],
  },
  {
    id: 3,
    title: "Goal Tracker",
    description:
      "MERN stack application to help users keep track of their goals.",
    link: "https://github.com/abundanceesim/goal-tracker",
    shortTitle: "goal-tracker",
    screenshot: goalTracker,
    demo: "",
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
    id: 4,
    title: "Potato Inventory App",
    description:
      "Console-based inventory application for the manipulation of records from dataset published by Statistics Canada.",
    link: "https://github.com/abundanceesim/potato-inventory-app",
    shortTitle: "potato-inventory",
    demo: "",
    screenshot: potatoInventory,
    technologies: ["python", "pytest"],
  },
  {
    id: 5,
    title: "To Do App",
    description:
      "Basic todo app made for the purpose of learning the basics of React.js",
    link: "https://github.com/abundanceesim/todo-app",
    shortTitle: "todo-app",
    demo: "https://abundanceesim.github.io/todo-app/",
    screenshot: todoApp,
    technologies: ["react"],
  },
  {
    id: 6,
    title: "Products Web App",
    description:
      "Web application where users can retrieve and modify records of musical instruments of their choice from a MySQL database.",
    link: "https://github.com/abundanceesim/products-web-app",
    shortTitle: "products-app",
    demo: "",
    screenshot: productsApp,
    technologies: ["mysql", "php", "css", "sql"],
  },
];

export default projects
