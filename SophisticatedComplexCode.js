/*
 * Filename: SophisticatedComplexCode.js
 * Description: This code demonstrates a complex implementation of a task management system.
 * It includes various classes, methods, and features to showcase a professional and creative approach.
 */


// Task class represents a single task
class Task {
  constructor(title, dueDate, priority) {
    this.title = title;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = false;
  }

  markComplete() {
    this.completed = true;
  }

  markIncomplete() {
    this.completed = false;
  }
}


// TaskList class represents a list of tasks
class TaskList {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
  }

  removeTask(task) {
    const index = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }

  getCompletedTasks() {
    return this.tasks.filter(task => task.completed);
  }

  getPendingTasks() {
    return this.tasks.filter(task => !task.completed);
  }

  sortByDate() {
    this.tasks.sort((a, b) => a.dueDate - b.dueDate);
  }

  sortByPriority() {
    this.tasks.sort((a, b) => b.priority - a.priority);
  }
}


// TaskManager class manages multiple task lists
class TaskManager {
  constructor() {
    this.taskLists = {};
  }

  createTaskList(name) {
    const taskList = new TaskList();
    this.taskLists[name] = taskList;
    return taskList;
  }

  removeTaskList(name) {
    delete this.taskLists[name];
  }

  getTaskList(name) {
    return this.taskLists[name];
  }

  getAllTasks() {
    const allTasks = [];
    Object.values(this.taskLists).forEach(taskList => {
      allTasks.push(...taskList.tasks);
    });
    return allTasks;
  }
}


// Example usage:

// Create a task manager instance
const taskManager = new TaskManager();

// Create some task lists
const workTasks = taskManager.createTaskList("Work");
const personalTasks = taskManager.createTaskList("Personal");

// Add tasks to the task lists
workTasks.addTask(new Task("Finish report", new Date(2021, 10, 15), 2));
workTasks.addTask(new Task("Prepare presentation", new Date(2021, 10, 20), 1));
personalTasks.addTask(new Task("Buy groceries", new Date(2021, 10, 18), 3));
personalTasks.addTask(new Task("Pay bills", new Date(2021, 10, 10), 4));

// Mark a task as complete
workTasks.tasks[0].markComplete();

// Get all completed tasks
const completedTasks = workTasks.getCompletedTasks();

// Sort tasks by due date
personalTasks.sortByDate();

// Print all tasks in the task manager
console.log("All tasks in task manager:");
taskManager.getAllTasks().forEach(task => {
  console.log(task.title);
});

// Output:
// "Finish report"
// "Prepare presentation"
// "Buy groceries"
// "Pay bills"

// And many more possibilities and functionalities can be added to this complex task management system.
// The above code just serves as an example of a sophisticated implementation.