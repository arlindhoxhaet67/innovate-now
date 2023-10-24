/*
 * Filename: sophisticated_app.js
 * Description: This code is a sophisticated and complex web application that
 *              simulates an online shopping platform with various features.
 * Author: Your Name
 */

// Global variables
let loggedInUser = null;
let products = [];
let cart = [];
let wishlist = [];

// Classes
class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.cart = [];
    this.wishlist = [];
  }

  login() {
    // Simulate login logic
    loggedInUser = this;
    console.log(`User ${this.name} logged in.`);
  }

  logout() {
    // Simulate logout logic
    loggedInUser = null;
    console.log(`User ${this.name} logged out.`);
  }

  addToCart(product) {
    this.cart.push(product);
    console.log(`${product.name} added to cart.`);
  }

  removeFromCart(product) {
    const index = this.cart.indexOf(product);
    if (index !== -1) {
      this.cart.splice(index, 1);
      console.log(`${product.name} removed from cart.`);
    } else {
      console.log(`${product.name} is not in the cart.`);
    }
  }

  addToWishlist(product) {
    this.wishlist.push(product);
    console.log(`${product.name} added to wishlist.`);
  }

  removeFromWishlist(product) {
    const index = this.wishlist.indexOf(product);
    if (index !== -1) {
      this.wishlist.splice(index, 1);
      console.log(`${product.name} removed from wishlist.`);
    } else {
      console.log(`${product.name} is not in the wishlist.`);
    }
  }

  checkout() {
    const total = this.cart.reduce((sum, product) => sum + product.price, 0);
    console.log(`Checkout completed. Total amount: $${total.toFixed(2)}`);
    this.cart = [];
  }
}

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

// Dummy data
products.push(new Product("Product 1", 19.99));
products.push(new Product("Product 2", 29.99));
products.push(new Product("Product 3", 9.99));
products.push(new Product("Product 4", 39.99));

// User interactions
const user1 = new User("John", "john@example.com", "password123");
user1.login();
user1.addToCart(products[0]);
user1.addToCart(products[1]);
user1.removeFromCart(products[0]);
user1.addToWishlist(products[2]);
user1.removeFromWishlist(products[0]);
user1.checkout();