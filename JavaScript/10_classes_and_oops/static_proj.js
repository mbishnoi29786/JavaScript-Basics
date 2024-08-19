// E-Commerce Platform:


class Product {
    static idCounter = 1; // Static property to keep track of IDs

    constructor(name, price) {
        this.id = Product.generateId(); // Unique ID for each product
        this.name = name;
        this.price = price;
    }

    static generateId() {
        return Product.idCounter++;
    }

    logDetails() {
        console.log(`Product ID: ${this.id}, Name: ${this.name}, Price: Rs.${this.price}`);
    }
}


class Cart {
    constructor() {
        this.items = [];
    }

    addItem(product, quantity) {
        this.items.push({ product, quantity });
    }

    static calculateTax(totalAmount, taxRate) {
        return totalAmount * taxRate;
    }

    calculateTotal() {
        const totalAmount = this.items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
        const tax = Cart.calculateTax(totalAmount, 0.07); // Assume 7% tax rate
        return totalAmount + tax;
    }
}


class Order {
    constructor(cart) {
        this.cart = cart;
        this.orderNumber = Order.generateOrderNumber();
    }

    static generateOrderNumber() {
        return `ORD${Math.floor(Math.random() * 1000000)}`;
    }

    static validateOrderQuantity(quantity) {
        return quantity > 0;
    }

    processOrder() {
        this.cart.items.forEach(item => {
            if (!Order.validateOrderQuantity(item.quantity)) {
                throw new Error(`Invalid quantity for product ${item.product.name}`);
            }
        });
        console.log(`Order Number: ${this.orderNumber}`);
        console.log(`Total Amount: Rs.${this.cart.calculateTotal().toFixed(2)}`);
    }
}


// Create products
const product1 = new Product('Laptop', 999.99);
const product2 = new Product('Smartphone', 499.99);

// Log product details
product1.logDetails();
product2.logDetails();

// Create a shopping cart and add products
const cart = new Cart();
cart.addItem(product1, 1);
cart.addItem(product2, 2);

// Calculate and display total amount including tax
console.log(`Total Amount (including tax): Rs.${cart.calculateTotal().toFixed(2)}`);

// Create and process an order
const order = new Order(cart);
order.processOrder();
