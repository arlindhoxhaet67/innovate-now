// complexCode.js

// This code is a simulated e-commerce website that allows users to browse and purchase items

// Global variables
let cart = [];
let inventory = [
  { id: 1, name: "Product 1", price: 9.99, quantity: 10 },
  { id: 2, name: "Product 2", price: 19.99, quantity: 5 },
  { id: 3, name: "Product 3", price: 29.99, quantity: 2 },
  // ... more products ...
];

// Helper function to display product details
function displayProduct(product) {
  console.log(`Product: ${product.name}`);
  console.log(`Price: $${product.price}`);
  console.log(`Available Quantity: ${product.quantity}`);
}

// Function to add product to the shopping cart
function addToCart(productId, quantity) {
  const product = inventory.find((item) => item.id === productId);

  if (product && product.quantity >= quantity) {
    cart.push({ ...product, quantity });
    product.quantity -= quantity;
    console.log(`Added ${quantity} ${product.name} to the cart.`);
  } else {
    console.log("Product or quantity is invalid.");
  }
}

// Function to remove product from the shopping cart
function removeFromCart(productId) {
  const index = cart.findIndex((item) => item.id === productId);

  if (index !== -1) {
    const removedProduct = cart.splice(index, 1)[0];
    const productInInventory = inventory.find(
      (item) => item.id === productId
    );
    productInInventory.quantity += removedProduct.quantity;
    console.log(`Removed ${removedProduct.name} from the cart.`);
  } else {
    console.log("Product not found in the cart.");
  }
}

// Function to display the shopping cart
function viewCart() {
  console.log("Shopping Cart:");
  cart.forEach((item) => {
    console.log(`- ${item.name} (qty: ${item.quantity} - $${item.price})`);
  });
}

// Function to calculate the total price of the shopping cart
function calculateTotal() {
  let total = 0;
  cart.forEach((item) => {
    total += item.price * item.quantity;
  });
  return total.toFixed(2);
}

// Function to checkout and process the payment
function checkout() {
  const total = calculateTotal();
  console.log(`Total: $${total}`);
  console.log("Processing payment...");
  // ... simulate payment processing ...
  console.log("Payment processed successfully.");
  console.log("Thank you for your purchase!");
  cart = [];
}

// Function to simulate user interactions and test the e-commerce system
function simulateUserInteractions() {
  console.log("Welcome to our e-commerce website!");

  console.log("\nAvailable Products:");
  inventory.forEach((product) => displayProduct(product));

  console.log("\nAdding products to the cart...");
  addToCart(1, 2);
  addToCart(2, 1);
  addToCart(3, 3);
  addToCart(4, 1); // Invalid product

  console.log("\nViewing shopping cart...");
  viewCart();

  console.log("\nRemoving products from the cart...");
  removeFromCart(2);
  removeFromCart(4); // Product not in cart

  console.log("\nViewing updated shopping cart...");
  viewCart();

  console.log("\nCalculating total...");
  const total = calculateTotal();
  console.log(`Total: $${total}`);

  console.log("\nChecking out...");
  checkout();

  console.log("\nViewing final shopping cart...");
  viewCart();
}

// Simulate user interactions
simulateUserInteractions();