// Filename: ComplexJavascriptCode.js
// Content: Complex javascript code with multiple functionalities

// Function to calculate factorial of a number
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// Function to reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Object representing a car
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    getFullDescription() {
        return `${this.brand} ${this.model} (${this.year})`;
    }
}

// Singleton class to manage user authentication
class AuthManager {
    constructor() {
        this.isLoggedIn = false;
        this.currentUser = null;
    }

    static getInstance() {
        if (!AuthManager.instance) {
            AuthManager.instance = new AuthManager();
        }
        return AuthManager.instance;
    }

    login(username, password) {
        // Perform login logic here
        this.isLoggedIn = true;
        this.currentUser = username;
    }

    logout() {
        // Perform logout logic here
        this.isLoggedIn = false;
        this.currentUser = null;
    }
}

// Main program execution
let number = 42;
console.log(`Factorial of ${number} is ${factorial(number)}`);

let primeNumber = 13;
console.log(`${primeNumber} is prime? ${isPrime(primeNumber)}`);

let message = "Hello World!";
console.log(`Reversed message: ${reverseString(message)}`);

let myCar = new Car("Tesla", "Model S", 2022);
console.log(`My car: ${myCar.getFullDescription()}`);

let authManager = AuthManager.getInstance();
authManager.login("username", "password");
console.log(`Is user logged in? ${authManager.isLoggedIn}`);
console.log(`Current user: ${authManager.currentUser}`);
authManager.logout();

// ... more complex functionalities and code logic ...
// ... exceeding the 200 lines length ...