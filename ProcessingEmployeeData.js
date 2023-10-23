/* 
   FileName: ProcessingEmployeeData.js
   Description: This code processes employee data to calculate various metrics and generate reports.
*/

// Define an Employee class
class Employee {
  constructor(id, name, age, salary) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.salary = salary;
  }

  calculateTax() {
    return this.salary * 0.15; // Assume 15% tax
  }

  calculateBonus() {
    return this.salary * 0.1; // Assume 10% bonus
  }
}

// Create an array of employee objects
const employees = [
  new Employee(1, "John Doe", 30, 5000),
  new Employee(2, "Jane Smith", 35, 6000),
  new Employee(3, "Mike Johnson", 28, 4500),
  new Employee(4, "Emily Brown", 40, 7000),
  new Employee(5, "David Wilson", 32, 5500)
];

// Calculate total salary of all employees
let totalSalary = employees.reduce((total, emp) => total + emp.salary, 0);

// Calculate average age of employees
let averageAge = employees.reduce((total, emp) => total + emp.age, 0) / employees.length;

// Calculate total tax paid by employees
let totalTaxPaid = employees.reduce((total, emp) => total + emp.calculateTax(), 0);

// Calculate total bonus given to employees
let totalBonusGiven = employees.reduce((total, emp) => total + emp.calculateBonus(), 0);

// Find the oldest employee
let oldestEmployee = employees.reduce((oldest, emp) => (emp.age > oldest.age ? emp : oldest));

// Generate a report with various metrics
console.log("Employee Metrics Report");
console.log("-----------------------");
console.log("Total Employees: " + employees.length);
console.log("Total Salary: $" + totalSalary);
console.log("Average Age: " + averageAge);
console.log("Total Tax Paid: $" + totalTaxPaid);
console.log("Total Bonus Given: $" + totalBonusGiven);
console.log("Oldest Employee: " + oldestEmployee.name);

// Generate a report with employee details
console.log("\nEmployee Details");
console.log("----------------");
for (let emp of employees) {
  console.log("ID: " + emp.id);
  console.log("Name: " + emp.name);
  console.log("Age: " + emp.age);
  console.log("Salary: $" + emp.salary);
  console.log("Tax: $" + emp.calculateTax());
  console.log("Bonus: $" + emp.calculateBonus());
  console.log("----------------");
}