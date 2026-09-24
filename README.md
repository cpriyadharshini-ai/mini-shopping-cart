# 🛒 Mini Shopping Cart

A simple **Mini Shopping Cart** web application built using **HTML, CSS, and JavaScript**.
This project demonstrates basic JavaScript concepts such as **arrays, objects, functions, map(), filter(), find(), and reduce()** through a real-world shopping cart example.

## 🌐 Live Demo
[View live demo](https://cpriyadharshini-ai.github.io/mini-shopping-cart/)


## ✨ Features

* ➕ Add products to the shopping cart
* 💰 Add product price and quantity
* 🛍️ Display all added products
* ❌ Remove individual products from the cart
* 🧮 Calculate the total bill
* 🔍 Search for a product by name
* 📱 Simple and user-friendly interface

## 🛠️ Technologies Used

* **HTML5** – Structure of the application
* **CSS3** – Styling and layout
* **JavaScript** – Application logic and DOM manipulation

## 🧠 JavaScript Concepts Practiced

This project helped me practice:

* Arrays
* Objects
* Functions
* `map()`
* `filter()`
* `find()`
* `reduce()`
* DOM Manipulation
* Event Listeners
* Template Literals
* User Input Handling
* Type Conversion using `Number()`

## 📌 How It Works

### 1. Add Product

The user enters:

* Product name
* Product price
* Product quantity

The product is stored as an object inside the `cart` array.

```javascript
cart.push({
    name: product.value,
    price: Number(price.value),
    quantity: Number(quantity.value)
});
```

### 2. Display Products

The `map()` method is used to display each product from the cart.

```javascript
cart.map((pro, index) => {
    // display product
});
```

### 3. Remove Product

The `filter()` method removes the selected product from the cart.

```javascript
cart = cart.filter((product, i) => i !== index);
```

### 4. Calculate Total

The total bill is calculated using `reduce()`.

```javascript
let total = cart.reduce((sum, product) => {
    let bill = product.price * product.quantity;
    return sum + bill;
}, 0);
```

### 5. Search Product

The `find()` method is used to search for a product by its name.

```javascript
let searchProduct = cart.find(
    product => search == product.name
);
```

## 📂 Project Structure

```text
Mini-Shopping-Cart/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## 🚀 How to Run

1. Clone this repository.

```bash
git clone YOUR_REPOSITORY_LINK
```

2. Open the project folder.

3. Open `index.html` in your browser.

That's it! 🎉

## 🎯 Learning Outcome

Through this project, I learned how JavaScript array methods can be applied to a practical application.

For example:

| JavaScript Method | Used For               |
| ----------------- | ---------------------- |
| `map()`           | Displaying products    |
| `filter()`        | Removing products      |
| `find()`          | Searching products     |
| `reduce()`        | Calculating total bill |

## 🔮 Future Improvements

Some features I plan to add in the future:

* Edit product details
* Increase/decrease quantity
* Product categories
* Better search functionality
* Local Storage support
* Responsive design
* Product images
* Checkout functionality

## 👩‍💻 Author

**Chandrapriyadharshini C**

Built as a JavaScript practice project to improve my understanding of **DOM manipulation and array methods**.
