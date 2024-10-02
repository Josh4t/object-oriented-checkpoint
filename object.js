// Class for Product
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

// Class for ShoppingCartItem
class ShoppingCartItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    // Method to calculate total price of the item
    calculateTotalPrice() {
        return this.product.price * this.quantity;
    }
}

// Class for ShoppingCart
class ShoppingCart {
    constructor() {
        this.items = [];
    }

    // Method to add item to the cart
    addItem(product, quantity) {
        const item = new ShoppingCartItem(product, quantity);
        this.items.push(item);
    }

    // Method to remove item from the cart
    removeItem(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
    }

    // Method to get total of items inside the cart
    getTotalItems() {
        return this.items.length;
    }

    // Method to display cart items
    displayCartItems() {
        this.items.forEach(item => {
            console.log(`Product: ${item.product.name}, Quantity: ${item.quantity}, Total Price: ${item.calculateTotalPrice()}`);
        });
    }

    // Method to get total price of all items in the cart
    getTotalPrice() {
        return this.items.reduce((total, item) => total + item.calculateTotalPrice(), 0);
    }
}

// Testing the functionality

// Create products
const product1 = new Product(1, 'Laptop', 1000);
const product2 = new Product(2, 'Phone', 500);

// Create a shopping cart
const cart = new ShoppingCart();

// Add items to the cart
cart.addItem(product1, 2);
cart.addItem(product2, 3);

// Display the cart
cart.displayCartItems();

// Remove an item from the cart
cart.removeItem(1);

// Display the cart again
cart.displayCartItems();

// Get total price of items in the cart
console.log(`Total Price: ${cart.getTotalPrice()}`);
