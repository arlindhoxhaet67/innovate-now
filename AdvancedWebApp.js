/* Filename: AdvancedWebApp.js

   Description: This JavaScript code implements a complex and sophisticated web application that allows users to create, update, and delete projects. It utilizes modern JavaScript features, object-oriented programming concepts, and advanced web development techniques.

   Author: John Developer
   
   Date: February 1, 2022
*/

// Define project class
class Project {
  constructor(name, description, startDate, endDate) {
    this.name = name;
    this.description = description;
    this.startDate = startDate;
    this.endDate = endDate;
  }

  // Getter for project duration
  get duration() {
    const millisecondsPerDay = 24 * 60 * 60 * 1000;
    return Math.round((this.endDate - this.startDate) / millisecondsPerDay);
  }

  // Method to display project details
  displayDetails() {
    console.log(`Project Name: ${this.name}`);
    console.log(`Description: ${this.description}`);
    console.log(`Start Date: ${this.startDate}`);
    console.log(`End Date: ${this.endDate}`);
    console.log(`Duration: ${this.duration} days`);
  }
}

// Define project management system
class ProjectManagementSystem {
  constructor() {
    this.projects = [];
  }

  // Method to add a new project
  addProject(project) {
    this.projects.push(project);
    console.log('New project added successfully.');
  }

  // Method to update an existing project
  updateProject(projectName, updatedProject) {
    const projectIndex = this.projects.findIndex((project) => project.name === projectName);
    if (projectIndex !== -1) {
      this.projects[projectIndex] = updatedProject;
      console.log(`Project '${projectName}' updated successfully.`);
    } else {
      console.log(`Project '${projectName}' not found.`);
    }
  }

  // Method to delete a project
  deleteProject(projectName) {
    const projectIndex = this.projects.findIndex((project) => project.name === projectName);
    if (projectIndex !== -1) {
      this.projects.splice(projectIndex, 1);
      console.log(`Project '${projectName}' deleted successfully.`);
    } else {
      console.log(`Project '${projectName}' not found.`);
    }
  }

  // Method to display all projects
  displayProjects() {
    console.log('--- Project List ---');
    this.projects.forEach((project) => project.displayDetails());
    console.log('--- End of Project List ---');
  }
}

// Create project management system instance
const projectManagementSystem = new ProjectManagementSystem();

// Create sample projects
const project1 = new Project('Project A', 'Sample project A', new Date('2022-03-01'), new Date('2022-03-31'));
const project2 = new Project('Project B', 'Sample project B', new Date('2022-04-01'), new Date('2022-05-15'));

// Add projects to the project management system
projectManagementSystem.addProject(project1);
projectManagementSystem.addProject(project2);

// Update project details
const updatedProject = new Project('Project A', 'Updated project A', new Date('2022-03-01'), new Date('2022-04-15'));
projectManagementSystem.updateProject('Project A', updatedProject);

// Delete a project
projectManagementSystem.deleteProject('Project B');

// Display all projects
projectManagementSystem.displayProjects();